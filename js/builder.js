/* ==========================================================
   Heart N Soul - Mix & Match dinner builder (Private Chef page)
   Uses the dishes and prices in js/menus.js. Each dish keeps
   its own menu's price for that course.

   Party of 4 or fewer: one choice per course.
   Party of 5 or more: they can split the entree and the
   appetizer between two dishes.
   ========================================================== */

(function () {
  var root = document.getElementById("builder");
  if (!root) return;

  var MIN = 399;
  var SPLIT_AT = 5; // guests needed to split entree / appetizer
  var COURSES = [
    { key: "en", name: "Entree", required: true, split: true },
    { key: "ap", name: "Appetizer", split: true },
    { key: "so", name: "Soup" },
    { key: "sa", name: "Salad" },
    { key: "de", name: "Desserts" }
  ];
  var KID_PRICE = 25.71;

  // Menus that are priced per course (prix fixe brunch is booked as a whole menu)
  var menuKeys = Object.keys(MENUS).filter(function (k) { return !MENUS[k].prixFixe; });

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function money(n) {
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function dish(id) {
    if (!id) return null;
    var p = id.split("|");
    var m = MENUS[p[0]];
    var it = m.courses[p[1]][+p[2]];
    return { id: id, menu: m.name, name: it[0], desc: it[1], price: m.prices[p[1]] };
  }
  function options(course, includeNone) {
    var html = includeNone ? '<option value="">No ' + course.name.toLowerCase() + "</option>" : '<option value="">Choose a dish…</option>';
    menuKeys.forEach(function (k) {
      var m = MENUS[k];
      var list = m.courses[course.key];
      if (!list || !m.prices[course.key]) return;
      html += '<optgroup label="' + esc(m.name) + " · " + money(m.prices[course.key]) + '">';
      list.forEach(function (it, i) {
        html += '<option value="' + k + "|" + course.key + "|" + i + '">' + esc(it[0]) + "</option>";
      });
      html += "</optgroup>";
    });
    return html;
  }

  // ---- Build the UI ----
  var picks = COURSES.map(function (c) {
    return (
      '<div class="pick" data-course="' + c.key + '">' +
        '<div class="pick-head"><h3>' + c.name + "</h3>" +
          (c.required ? '<span class="req">Required</span>' : '<span class="opt">Optional</span>') +
        "</div>" +
        '<select class="pick-a" aria-label="' + c.name + '">' + options(c, !c.required) + "</select>" +
        '<p class="pick-desc" data-for="a"></p>' +
        (c.split
          ? '<div class="split" hidden>' +
              '<label class="split-toggle"><input type="checkbox" class="split-on" /> Split between two ' + c.name.toLowerCase() + "s</label>" +
              '<div class="split-body" hidden>' +
                '<select class="pick-b" aria-label="Second ' + c.name.toLowerCase() + '">' + options(c, false) + "</select>" +
                '<p class="pick-desc" data-for="b"></p>' +
                '<div class="row"><span>Guests getting the 2nd ' + c.name.toLowerCase() + "</span>" +
                  '<div class="step"><button type="button" class="nb-minus" aria-label="Fewer">&minus;</button><output class="nb">1</output><button type="button" class="nb-plus" aria-label="More">+</button></div>' +
                "</div>" +
              "</div>" +
            "</div>"
          : "") +
      "</div>"
    );
  }).join("");

  root.innerHTML =
    '<div class="picks">' + picks +
      '<p class="split-note" id="split-note">Parties of ' + SPLIT_AT + " or more can split the entree and appetizer between two dishes.</p>" +
    "</div>" +
    '<aside aria-label="Your custom dinner">' +
      "<h3>Your dinner</h3>" +
      '<div class="row"><span id="lba">Adults</span><div class="step"><button type="button" data-k="a" data-d="-1" aria-label="Fewer adults">&minus;</button><output id="ba" aria-labelledby="lba">2</output><button type="button" data-k="a" data-d="1" aria-label="More adults">+</button></div></div>' +
      '<div class="row"><span id="lbk">Kids</span><div class="step"><button type="button" data-k="k" data-d="-1" aria-label="Fewer kids">&minus;</button><output id="bk" aria-labelledby="lbk">0</output><button type="button" data-k="k" data-d="1" aria-label="More kids">+</button></div></div>' +
      '<div class="lines" id="b-lines" aria-live="polite"></div>' +
      '<div class="total"><span>Total</span><span id="b-tot"></span></div>' +
      '<div class="note" id="b-note"></div>' +
      '<a class="btn btn-primary" id="b-book" href="contact.html" style="display:block;text-align:center;margin-top:18px">Request this dinner</a>' +
    "</aside>";

  var S = { a: 2, k: 0 };

  function get(course) {
    var el = root.querySelector('.pick[data-course="' + course.key + '"]');
    var a = dish(el.querySelector(".pick-a").value);
    var out = { el: el, a: a, b: null, nb: 0 };
    if (course.split) {
      var on = el.querySelector(".split-on").checked && !el.querySelector(".split").hidden;
      var b = on ? dish(el.querySelector(".pick-b").value) : null;
      if (b) out.b = b, out.nb = +el.querySelector(".nb").textContent;
    }
    return out;
  }

  function calc() {
    var adults = S.a, kids = S.k, guests = adults + kids;
    var canSplit = guests >= SPLIT_AT && adults >= 2;
    document.getElementById("split-note").hidden = canSplit;

    var rows = [], sub = 0, summary = [];
    COURSES.forEach(function (c) {
      var el = root.querySelector('.pick[data-course="' + c.key + '"]');
      if (c.split) {
        el.querySelector(".split").hidden = !canSplit;
        el.querySelector(".split-body").hidden = !el.querySelector(".split-on").checked;
        // keep the 2nd-dish count between 1 and adults-1
        var nbEl = el.querySelector(".nb");
        nbEl.textContent = Math.max(1, Math.min(adults - 1, +nbEl.textContent));
      }
      var g = get(c);
      ["a", "b"].forEach(function (w) {
        var d = g[w], p = el.querySelector('.pick-desc[data-for="' + w + '"]');
        if (p) p.innerHTML = d ? "<b>" + esc(d.menu) + "</b> · " + esc(d.desc) : "";
      });
      if (!g.a) return;
      var nA = g.b ? adults - g.nb : adults;
      [[g.a, nA], [g.b, g.nb]].forEach(function (x) {
        var d = x[0], n = x[1];
        if (!d || n <= 0) return;
        sub += d.price * n;
        rows.push("<div><span>" + esc(d.name) + " <small>" + n + " &times; " + money(d.price) + "</small></span><span>" + money(d.price * n) + "</span></div>");
        summary.push(c.name + ": " + d.name + " (" + d.menu + ") x" + n);
      });
    });
    if (kids) {
      sub += KID_PRICE * kids;
      rows.push("<div><span>Kids menu <small>" + kids + " &times; " + money(KID_PRICE) + "</small></span><span>" + money(KID_PRICE * kids) + "</span></div>");
      summary.push("Kids menu x" + kids);
    }

    document.getElementById("b-lines").innerHTML = rows.length ? rows.join("") : "<small>Choose an entree to get started.</small>";
    var hasEntree = !!get(COURSES[0]).a;
    var total = hasEntree ? Math.max(MIN, sub) : 0;
    document.getElementById("b-tot").textContent = money(total);
    var note = "";
    if (hasEntree && sub < MIN) note = "The " + money(MIN) + " minimum applies. Your selections come to " + money(sub) + ".";
    else if (hasEntree) note = money(total / guests) + " per guest.";
    document.getElementById("b-note").textContent = note;
    document.getElementById("ba").textContent = adults;
    document.getElementById("bk").textContent = kids;

    // Pass the selections to the booking form
    var msg = "Mix & match dinner for " + adults + " adult" + (adults > 1 ? "s" : "") + (kids ? " and " + kids + " kid" + (kids > 1 ? "s" : "") : "") + ":\n" +
      summary.join("\n") + (hasEntree ? "\nEstimated total: " + money(total) : "");
    var book = document.getElementById("b-book");
    book.href = "contact.html?service=" + encodeURIComponent("Custom event") + "&guests=" + guests + "&message=" + encodeURIComponent(msg);
    book.classList.toggle("disabled", !hasEntree);
  }

  root.addEventListener("change", calc);
  root.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.k) {
      var key = b.dataset.k;
      S[key] = Math.max(key === "a" ? 1 : 0, Math.min(60, S[key] + Number(b.dataset.d)));
    } else if (b.classList.contains("nb-minus") || b.classList.contains("nb-plus")) {
      var o = b.parentNode.querySelector(".nb");
      o.textContent = +o.textContent + (b.classList.contains("nb-plus") ? 1 : -1);
    }
    calc();
  });
  root.querySelector("#b-book").addEventListener("click", function (e) {
    if (this.classList.contains("disabled")) { e.preventDefault(); root.querySelector(".pick-a").focus(); }
  });

  calc();
})();

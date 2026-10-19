/* ==========================================================
   Heart N Soul - private chef menu page + price calculator
   Draws whichever menu the page names in data-menu, using the
   data in js/menus.js. You shouldn't need to edit this file.
   ========================================================== */

(function () {
  var root = document.querySelector("[data-menu]");
  if (!root) return;
  var m = MENUS[root.getAttribute("data-menu")];
  if (!m) { root.innerHTML = "<p>Menu not found.</p>"; return; }

  var COURSES = [
    ["en", "Entrees"], ["ap", "Appetizers"], ["so", "Soups"],
    ["sa", "Salads"], ["de", "Desserts"], ["kid", "Kids Menu"]
  ];
  var P = m.prices || {};
  var hasKids = !!(m.courses.kid && P.kid);
  var perDish = !!m.itemPrices && !m.prixFixe;
  var pickCourses = COURSES.filter(function (c) { return c[0] !== "kid" && m.courses[c[0]]; });
  var optional = COURSES.filter(function (c) {
    return !m.prixFixe && c[0] !== "en" && c[0] !== "kid" && m.courses[c[0]];
  });

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function money(n) {
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function badge(t, short) {
    var label = TAGS[t] || t;
    var cls = t === "kid" ? "badge" : "badge diet";
    var text = short ? t.toUpperCase() : label;
    return '<span class="' + cls + '" title="' + esc(label) + '">' + esc(text) + "</span>";
  }

  document.title = m.name + " - Private Chef Menu | Heart N Soul";

  // ---- Left column: intro + courses ----
  var itemTags = false;
  var courses = COURSES.filter(function (c) { return m.courses[c[0]]; }).map(function (c) {
    var each = m.itemPrices && m.itemPrices[c[0]];
    return "<h2>" + c[1] + "</h2>" +
      (c[0] === "kid" && P.kid ? '<p class="kids-note">' + money(P.kid) + " per child &middot; kids 5 &amp; under eat free</p>" : "") +
      m.courses[c[0]].map(function (it, i) {
      var tags = it[2] || [];
      if (tags.length) itemTags = true;
      return '<div class="menu-item"><b>' + esc(it[0]) + (each ? ' <em class="dish-price">' + money(each[i]) + "</em>" : "") + "</b><span>" + esc(it[1]) + "</span>" +
        (tags.length ? "<div>" + tags.map(function (t) { return badge(t, true); }).join("") + "</div>" : "") +
        "</div>";
    }).join("");
  }).join("");

  var legend = itemTags
    ? '<p class="legend">' + Object.keys(TAGS).filter(function (k) { return k !== "kid"; })
        .map(function (k) { return "<b>" + k.toUpperCase() + "</b> " + TAGS[k]; }).join(" &middot; ") + "</p>"
    : "";

  root.innerHTML =
    "<div>" +
      '<a class="back-link" href="private-chef.html">&larr; All private chef menus</a>' +
      '<div class="intro">' +
        (m.video
          ? '<video class="li-photo" src="' + esc(m.video) + '" poster="' + esc(m.photo) + '" autoplay muted loop playsinline aria-label="' + esc(m.photoAlt || m.name) + '"></video>'
          : '<img class="li-photo" src="' + esc(m.photo) + '" alt="' + esc(m.photoAlt || m.name) + '" />') +
        '<div class="hero-headline">' +
          '<div class="title-row"><h1>' + esc(m.name) + '</h1><span class="tag" aria-hidden="true"></span></div>' +
          "<p>" + esc(m.desc) + "</p>" +
          (m.prixFixe ? '<p style="margin-top:10px"><b>Prix fixe</b> &middot; ' + money(m.prixFixe) + " per adult, every course included</p>" : "") +
          '<div class="badges">' + (m.tags || []).map(function (t) { return badge(t); }).join("") + "</div>" +
        "</div>" +
      "</div>" +
      legend + courses +
    "</div>" +
    '<aside aria-label="Pricing calculator">' +
      "<h3>Your price</h3>" +
      stepper("a", "Adults") + (hasKids ? stepper("k", "Kids") + stepper("t", "Kids 5 & under", " <small>(free)</small>") : "") +
      (perDish
        ? '<div class="lines"><small>Choose a dish for each course</small>' +
            pickCourses.map(function (c) {
              return '<label class="dish-pick">' + c[1].replace(/s$/, "") +
                '<select data-pick="' + c[0] + '">' +
                  (c[0] === "en" ? "" : '<option value="">None</option>') +
                  m.courses[c[0]].map(function (it, i) {
                    return '<option value="' + i + '"' + (i === 0 ? " selected" : "") + ">" + esc(it[0]) + " · " + money(dishPrice(m, c[0], i)) + "</option>";
                  }).join("") +
                "</select></label>";
            }).join("") + "</div>"
        : optional.length
        ? '<div class="lines"><small>Add courses for adults (entrees always included)</small>' +
            optional.map(function (c) {
              return '<label><input type="checkbox" data-c="' + c[0] + '" checked /> ' + c[1] + "</label>";
            }).join("") + "</div>"
        : "") +
      '<div class="lines" id="lines" aria-live="polite"></div>' +
      '<div class="total"><span>Total</span><span id="tot"></span></div>' +
      '<div class="note" id="note"></div>' +
      '<a class="btn btn-primary" href="contact.html" style="display:block;text-align:center;margin-top:18px">Book this menu</a>' +
      '<p class="note" style="text-align:center;margin-top:12px"><a href="private-chef.html#build">Want to mix &amp; match dishes from other menus?</a></p>' +
    "</aside>";

  // Hide the photo box gracefully until a real photo is added
  var img = root.querySelector("img.li-photo");
  if (img) img.addEventListener("error", function () {
    var ph = document.createElement("div");
    ph.className = "li-photo placeholder";
    ph.textContent = "Photo coming soon";
    img.replaceWith(ph);
  });

  function stepper(k, label, extra) {
    return '<div class="row"><span id="l' + k + '">' + esc(label) + (extra || "") + "</span>" +
      '<div class="step">' +
        '<button data-k="' + k + '" data-d="-1" aria-label="Fewer ' + esc(label.toLowerCase()) + '">&minus;</button>' +
        '<output id="' + k + '" aria-labelledby="l' + k + '"></output>' +
        '<button data-k="' + k + '" data-d="1" aria-label="More ' + esc(label.toLowerCase()) + '">+</button>' +
      "</div></div>";
  }

  // ---- Calculator ----
  var S = { a: 2, k: 0, t: 0 };
  var on = {};
  optional.forEach(function (c) { on[c[0]] = true; });

  function $(id) { return document.getElementById(id); }

  function row(label, n, each) {
    return "<div><span>" + label + " <small>" + n + " &times; " + money(each) + "</small></span><span>" + money(n * each) + "</span></div>";
  }

  function calc() {
    var rows = [], sub = 0, a = S.a, k = S.k;

    if (m.prixFixe) {
      sub += m.prixFixe * a;
      rows.push(row("Prix fixe", a, m.prixFixe));
    } else if (perDish) {
      pickCourses.forEach(function (c) {
        var v = root.querySelector('select[data-pick="' + c[0] + '"]').value;
        if (v === "") return;
        var price = dishPrice(m, c[0], +v);
        sub += price * a;
        rows.push(row(esc(m.courses[c[0]][+v][0]), a, price));
      });
    } else {
      COURSES.forEach(function (c) {
        var code = c[0];
        if (code === "kid" || !m.courses[code] || !P[code]) return;
        if (code === "en" || on[code]) {
          sub += P[code] * a;
          rows.push(row(c[1], a, P[code]));
        }
      });
    }
    if (hasKids && k) {
      sub += P.kid * k;
      rows.push(row("Kids menu", k, P.kid));
    }
    if (hasKids && S.t) {
      rows.push("<div><span>Kids 5 &amp; under <small>" + S.t + " &times; free</small></span><span>$0.00</span></div>");
    }

    $("lines").innerHTML = rows.join("");
    var total = Math.max(m.min, sub);
    var guests = a + k;
    $("tot").textContent = money(total);
    if (sub < m.min) {
      $("note").textContent = "The " + money(m.min) + " minimum applies. Your selections come to " + money(sub) + ".";
    } else {
      $("note").textContent = money(total / guests) + (S.t ? " per paying guest." : " per guest.");
    }
    $("a").textContent = a;
    if (hasKids) { $("k").textContent = k; $("t").textContent = S.t; }
  }

  root.querySelectorAll(".step button").forEach(function (b) {
    b.addEventListener("click", function () {
      var key = b.dataset.k;
      var next = S[key] + Number(b.dataset.d);
      S[key] = Math.max(key === "a" ? 1 : 0, Math.min(60, next));
      calc();
    });
  });
  root.querySelectorAll("select[data-pick]").forEach(function (sel) {
    sel.addEventListener("change", calc);
  });
  root.querySelectorAll("input[data-c]").forEach(function (i) {
    i.addEventListener("change", function () { on[i.dataset.c] = i.checked; calc(); });
  });

  calc();
})();

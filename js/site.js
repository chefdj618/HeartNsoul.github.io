/* ==========================================================
   Heart N Soul - shared header and footer
   Edit the NAV list or the footer text here once and every
   page picks up the change.
   ========================================================== */

(function () {
  var NAV = [
    { href: "index.html", label: "Home" },
    { href: "burgers.html", label: "Burgers" },
    { href: "private-chef.html", label: "Private Chef" },
    { href: "about.html", label: "About" }
  ];
  var BOOK = { href: "contact.html", label: "Book Now" };

  var CONTACT = {
    phone: "(407) 205-3773",
    phoneLink: "+14072053773",
    burgersEmail: "Heartnsoulburgers@gmail.com",
    chefEmail: "Chefdsj@gmail.com"
  };

  // Logo files live in images/. Dark pages (burgers) use the light version.
  var dark = document.body.classList.contains("theme-burgers");
  var logoImg = '<img src="images/' + (dark ? "logo-horizontal-light.svg" : "logo-horizontal.svg") + '" alt="Heart N Soul" />';

  // Browser tab icon
  if (!document.querySelector('link[rel="icon"]')) {
    var icon = document.createElement("link");
    icon.rel = "icon"; icon.type = "image/svg+xml"; icon.href = "images/logo-heart.svg";
    document.head.appendChild(icon);
  }

  var page = location.pathname.split("/").pop() || "index.html";
  // Individual private chef menus highlight "Private Chef" in the nav
  if (document.querySelector("[data-menu]")) page = "private-chef.html";

  var links = NAV.map(function (item) {
    var current = item.href === page ? ' aria-current="page"' : "";
    return '<li><a href="' + item.href + '"' + current + ">" + item.label + "</a></li>";
  }).join("");

  var header =
    '<div class="container header-inner">' +
      '<a class="logo" href="index.html">' + logoImg + "</a>" +
      '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">' +
        "<span></span><span></span><span></span>" +
      "</button>" +
      '<nav class="site-nav" id="site-nav" aria-label="Main">' +
        "<ul>" + links +
          '<li><a class="btn btn-primary" href="' + BOOK.href + '">' + BOOK.label + "</a></li>" +
        "</ul>" +
      "</nav>" +
    "</div>";

  var footer =
    '<div class="container">' +
      '<div class="footer-grid">' +
        "<div>" +
          '<a class="logo" href="index.html">' + logoImg + "</a>" +
          '<p class="footer-tagline">Made with heart, seasoned with soul.</p>' +
        "</div>" +
        "<div><h4>Explore</h4><ul>" +
          NAV.map(function (i) { return '<li><a href="' + i.href + '">' + i.label + "</a></li>"; }).join("") +
        "</ul></div>" +
        "<div><h4>Get in touch</h4><ul>" +
          '<li><a href="tel:' + CONTACT.phoneLink + '">' + CONTACT.phone + "</a></li>" +
          '<li>Burgers: <a href="mailto:' + CONTACT.burgersEmail + '">' + CONTACT.burgersEmail + "</a></li>" +
          '<li>Private chef: <a href="mailto:' + CONTACT.chefEmail + '">' + CONTACT.chefEmail + "</a></li>" +
          '<li><a href="' + BOOK.href + '">Book a private chef</a></li>' +
        "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom">&copy; ' + new Date().getFullYear() + " Heart N Soul. All rights reserved.</div>" +
    "</div>";

  var h = document.querySelector("header.site-header");
  var f = document.querySelector("footer.site-footer");
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  // Fill any element marked data-contact="phone" / "burgersEmail" / "chefEmail" with the details above
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    var key = el.getAttribute("data-contact");
    if (key === "phone") { el.textContent = CONTACT.phone; el.href = "tel:" + CONTACT.phoneLink; }
    if (key === "burgersEmail" || key === "chefEmail") { el.textContent = CONTACT[key]; el.href = "mailto:" + CONTACT[key]; }
  });
})();

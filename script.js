(function () {
  var C = null;
  if (typeof WAYPOINT_CONTENT !== "undefined") {
    C = WAYPOINT_CONTENT;
  } else if (typeof window !== "undefined" && window.WAYPOINT_CONTENT) {
    C = window.WAYPOINT_CONTENT;
  }

  if (typeof document === "undefined") return;

  var $ = function (id) { return document.getElementById(id); };

  function setText(id, text) {
    var el = $(id);
    if (el) el.textContent = text;
  }

  function setLink(id, label, href) {
    var el = $(id);
    if (!el) return;
    el.textContent = label;
    el.setAttribute("href", href);
  }

  var ICONS = {
    advocaat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v18M5 8h14M5 8l-2 6a3 3 0 0 0 6 0L7 8M19 8l-2 6a3 3 0 0 0 6 0l-2-6"/></svg>',
    verzekeraar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
    particulier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>'
  };
  var DEFAULT_ICON = ICONS.advocaat;

  function render() {
    if (!C) return;

    setText("brandName", C.header.name);
    setText("brandSub", C.header.subtitle);

    var nav = $("nav");
    if (nav) {
      nav.innerHTML = "";
      C.nav.links.forEach(function (link) {
        var a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.label;
        nav.appendChild(a);
      });
      var cta = document.createElement("a");
      cta.href = C.nav.contact.href;
      cta.textContent = C.nav.contact.label;
      cta.className = "nav-cta";
      nav.appendChild(cta);
    }

    setText("heroEyebrow", C.hero.eyebrow);
    setText("heroTitle", C.hero.title);
    setText("heroLead", C.hero.lead);
    setLink("heroCtaPrimary", C.hero.ctaPrimary.label, C.hero.ctaPrimary.href);
    setLink("heroCtaSecondary", C.hero.ctaSecondary.label, C.hero.ctaSecondary.href);

    var badges = $("heroBadges");
    if (badges) {
      badges.innerHTML = "";
      C.hero.badges.forEach(function (b) {
        var li = document.createElement("li");
        li.textContent = b;
        badges.appendChild(li);
      });
    }

    setText("introEyebrow", C.intro.eyebrow);
    setText("introTitle", C.intro.title);
    setText("introP1", C.intro.paragraph1);
    setText("introP2", C.intro.paragraph2);
    setText("introCardQuote", C.intro.cardQuote);
    setText("introCardSub", C.intro.cardSub);

    setText("dienstenEyebrow", C.diensten.eyebrow);
    setText("dienstenTitle", C.diensten.title);

    var cards = $("dienstenCards");
    if (cards) {
      cards.innerHTML = "";
      C.diensten.cards.forEach(function (card) {
        var article = document.createElement("article");
        article.className = "card";

        var icon = document.createElement("div");
        icon.className = "card-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.innerHTML = ICONS[card.icon] || DEFAULT_ICON;
        article.appendChild(icon);

        var h3 = document.createElement("h3");
        h3.textContent = card.title;
        article.appendChild(h3);

        var sub = document.createElement("p");
        sub.className = "card-sub";
        sub.textContent = card.sub;
        article.appendChild(sub);

        card.paragraphs.forEach(function (p) {
          var pEl = document.createElement("p");
          pEl.textContent = p;
          article.appendChild(pEl);
        });

        if (card.highlight) {
          var hi = document.createElement("p");
          hi.className = "card-highlight";
          hi.textContent = card.highlight;
          article.appendChild(hi);
        }

        cards.appendChild(article);
      });
    }

    setText("werkwijzeEyebrow", C.werkwijze.eyebrow);
    setText("werkwijzeTitle", C.werkwijze.title);

    var steps = $("werkwijzeSteps");
    if (steps) {
      steps.innerHTML = "";
      C.werkwijze.steps.forEach(function (step, i) {
        var li = document.createElement("li");
        li.className = "step";

        var num = document.createElement("span");
        num.className = "step-num";
        num.textContent = "0" + (i + 1);
        li.appendChild(num);

        var h3 = document.createElement("h3");
        h3.textContent = step.title;
        li.appendChild(h3);

        var p = document.createElement("p");
        p.textContent = step.text;
        li.appendChild(p);

        steps.appendChild(li);
      });
    }

    setText("waaromEyebrow", C.waarom.eyebrow);
    setText("waaromTitle", C.waarom.title);

    var features = $("waaromFeatures");
    if (features) {
      features.innerHTML = "";
      C.waarom.features.forEach(function (feature) {
        var div = document.createElement("div");
        div.className = "feature";

        var h3 = document.createElement("h3");
        h3.textContent = feature.title;
        div.appendChild(h3);

        var p = document.createElement("p");
        p.textContent = feature.text;
        div.appendChild(p);

        features.appendChild(div);
      });
    }

    setText("overEyebrow", C.over.eyebrow);
    setText("overTitle", C.over.title);
    setText("overP1", C.over.paragraph1);
    setText("overP2", C.over.paragraph2);
    setText("overCaption", C.over.imageCaption);

    setText("ctaTitle", C.contact.title);
    setText("ctaText", C.contact.text);
    setLink("ctaEmail", C.contact.emailLabel, "mailto:" + C.contact.email);

    setText("footerBrandName", C.footer.name);
    setText("footerCopy", C.footer.copy);

    var yearEl = $("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    var footerNav = $("footerNav");
    if (footerNav) {
      footerNav.innerHTML = "";
      C.nav.links.forEach(function (link) {
        var a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.label;
        footerNav.appendChild(a);
      });
      var c = document.createElement("a");
      c.href = C.nav.contact.href;
      c.textContent = C.nav.contact.label;
      footerNav.appendChild(c);
    }

    var title = document.querySelector("title");
    if (title) {
      title.textContent = C.hero.eyebrow + " | " + C.header.name + " " + C.header.subtitle;
    }
  }

  render();

  var header = $("header");
  var toggle = $("navToggle");

  if (header && typeof window !== "undefined") {
    function onScroll() {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function closeNav() {
    var nav = $("nav");
    nav.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var nav = $("nav");
      var isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("no-scroll", isOpen);
    });

    $("nav").querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  var revealTargets = document.querySelectorAll(
    ".card, .step, .feature, .intro-grid, .over-grid, .section-head, .cta-inner"
  );

  if ("IntersectionObserver" in window) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    revealTargets.forEach(function (el) { observer.observe(el); });
  }
})();
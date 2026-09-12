document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('[data-menu-toggle]');
  var panel = document.querySelector('[data-menu-panel]');
  if (!menuBtn || !panel) return;

  menuBtn.addEventListener('click', function () {
    var isOpen = !panel.hidden;
    panel.hidden = isOpen;
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      panel.hidden = true;
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var filterBar = document.querySelector('[data-work-filters]');
  if (!filterBar) return;

  var buttons = filterBar.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-work-card]');
  var empty = document.querySelector('[data-work-empty]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('stm-filter--active'); });
      btn.classList.add('stm-filter--active');

      var role = btn.getAttribute('data-filter');
      var visible = 0;
      cards.forEach(function (card) {
        var show = role === 'all' || card.getAttribute('data-role') === role;
        card.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.hidden = visible > 0;
    });
  });
});

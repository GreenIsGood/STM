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

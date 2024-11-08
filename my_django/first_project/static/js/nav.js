document.addEventListener("DOMContentLoaded", function () {
    const submenuToggle = document.querySelectorAll('.dropdown-submenu > a');

    submenuToggle.forEach(function (element) {
      element.addEventListener('click', function (e) {
        const nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('dropdown-menu')) {
          e.preventDefault();
          nextEl.classList.toggle('show');
        }
      });
    });
  });
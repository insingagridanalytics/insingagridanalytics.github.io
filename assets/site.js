// Insinga Grid Analytics: small page behaviours (menu, demo booking, contact form)
(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // "Book this demo" buttons pre-select the demo in the contact form
  var select = document.getElementById('f-need');
  document.querySelectorAll('[data-demo]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (select) select.value = btn.getAttribute('data-demo');
      var name = document.getElementById('f-name');
      if (name) setTimeout(function () { name.focus({ preventScroll: true }); }, 400);
    });
  });

  // Contact form: send to Formspree without leaving the page
  var form = document.getElementById('contact-form');
  var status = document.getElementById('f-status');
  var submit = document.getElementById('f-submit');
  if (!form) return;

  function show(msg, ok) {
    status.hidden = false;
    status.textContent = msg;
    status.style.color = ok ? '#0F6B3A' : '#B42318';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      show('The contact form is not connected yet. Please email enshuti01@gmail.com instead.', false);
      return;
    }
    submit.disabled = true;
    submit.textContent = 'Sending…';
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          show('Thank you. Your message has been sent and we will get back to you soon.', true);
        } else {
          show('Your message could not be sent. Please try again or email enshuti01@gmail.com.', false);
        }
      })
      .catch(function () {
        show('Your message could not be sent. Check your connection, or email enshuti01@gmail.com.', false);
      })
      .then(function () {
        submit.disabled = false;
        submit.textContent = 'Send message';
      });
  });
})();

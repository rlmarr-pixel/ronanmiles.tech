'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const mobileNav = window.matchMedia('(max-width: 760px)');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
function syncMenu() {
  if (mobileNav.matches) menu.hidden = false;
  else { menu.hidden = true; closeMenu(); }
}
syncMenu();
if (typeof mobileNav.addEventListener === 'function') mobileNav.addEventListener('change', syncMenu);
else mobileNav.addListener(syncMenu);
menu.addEventListener('click', () => {
  if (!mobileNav.matches) return;
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); }
});
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => { document.querySelector('#service').value = link.dataset.service; });
});
const form = document.querySelector('#enquiry-form');
form.addEventListener('submit', event => event.preventDefault());
const prepare = document.querySelector('#prepare-draft');
prepare.disabled = false;
prepare.addEventListener('click', () => {
  if (!form.reportValidity()) return;
  const service = document.querySelector('#service').value;
  const message = document.querySelector('#message').value.trim();
  const output = document.querySelector('#draft-output');
  if (!message) { output.textContent = 'Please describe what you need. Nothing has been sent.'; return; }
  output.textContent = `ENQUIRY DRAFT — NOT SENT\n\nSubject: ${service}\n\n${message}\n\nCopy this draft into your preferred email app once the business contact details have been verified. No booking has been made.`;
});

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
const CONTACT_EMAIL = 'ronanmiles.tech@gmail.com';
function mailSubject(service) { return `Ronan Miles Tech enquiry: ${service}`; }
function mailBody(message) {
  return `${message}\n\nOpened from ronanmiles.tech. This message is sent only if you press Send in your email app.`;
}
function encodeMailValue(value) {
  return encodeURIComponent(String(value).replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n/g, '\r\n'));
}
function buildMailto(service, message) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeMailValue(mailSubject(service))}&body=${encodeMailValue(mailBody(message))}`;
}
function openMailDraft(url) {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.tabIndex = -1;
  link.setAttribute('aria-hidden', 'true');
  link.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;overflow:hidden';
  document.body.appendChild(link);
  link.click();
  link.remove();
}
function renderFallback(service, message) {
  const output = document.querySelector('#draft-output');
  const subject = mailSubject(service);
  const body = mailBody(message);
  const copyText = `To: ${CONTACT_EMAIL}\nSubject: ${subject}\n\n${body}`;
  output.replaceChildren();
  const status = document.createElement('p');
  status.textContent = 'EMAIL DRAFT — NOT SENT';
  const guidance = document.createElement('p');
  guidance.textContent = `Your email app should open a draft to ${CONTACT_EMAIL}. The message is sent only if you press Send there. If no email app opened, copy the address and message below. This page did not send anything.`;
  const copyBlock = document.createElement('textarea');
  copyBlock.readOnly = true;
  copyBlock.rows = 8;
  copyBlock.setAttribute('aria-label', 'Email draft to copy');
  copyBlock.value = copyText;
  const copyButton = document.createElement('button');
  copyButton.type = 'button';
  copyButton.className = 'button';
  copyButton.id = 'copy-draft';
  copyButton.textContent = 'Copy address and message';
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyBlock.value);
      copyButton.textContent = 'Copied';
    } catch {
      copyBlock.focus();
      copyBlock.select();
      copyButton.textContent = 'Select the text and copy it';
    }
  });
  output.append(status, guidance, copyBlock, copyButton);
}
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
  renderFallback(service, message);
  openMailDraft(buildMailto(service, message));
});

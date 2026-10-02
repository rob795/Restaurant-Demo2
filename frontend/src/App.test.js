import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let container;
let root;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

function renderAt(path) {
  window.history.replaceState({}, '', path);
  act(() => root.render(<App />));
}

test.each(['/', '/menu', '/contact'])('labels %s as a fictional, disconnected demo', (path) => {
  renderAt(path);
  const notice = container.querySelector('aside');
  expect(notice.textContent).toContain('Illustrative design demo');
  expect(notice.textContent).toContain('Forms are not connected');
  expect(notice.textContent).toContain('separate $500 offer covers one page');
  expect(notice.textContent).toContain('plus one revision');
  expect(notice.textContent).toContain('Domain, hosting and maintenance cost extra');
  expect(container.querySelectorAll('a[href^="tel:"], a[href^="mailto:"], a[href="#"], a[href*="google.com/maps"]')).toHaveLength(0);
});

test('reservation preview cannot accept or submit guest information', () => {
  renderAt('/contact');
  const fieldset = container.querySelector('fieldset');
  const controls = fieldset.querySelectorAll('input, select, textarea, button');
  expect(fieldset.disabled).toBe(true);
  expect(controls).toHaveLength(8);
  controls.forEach((control) => expect(control.matches(':disabled')).toBe(true));
  expect(container.querySelector('form')).toBeNull();
  expect(container.querySelector('[type="submit"]')).toBeNull();

  const log = jest.spyOn(console, 'log');
  const button = fieldset.querySelector('button');
  act(() => {
    button.click();
    button.click();
  });
  expect(log).not.toHaveBeenCalled();
  expect(container.textContent).not.toContain('Reservation Request Sent');
  expect(container.textContent).not.toContain("We'll confirm");
  log.mockRestore();
});

test('menu filters still work repeatedly with sample pricing', () => {
  renderAt('/menu');
  const buttonNamed = (text) => [...container.querySelectorAll('button')].find((button) => button.textContent === text);
  expect(container.querySelector('main').textContent).toContain('Illustrative dishes and prices in USD');
  act(() => buttonNamed('Desserts').click());
  expect(container.querySelector('main').textContent).toContain('Crème Brûlée');
  expect(container.querySelector('main').textContent).not.toContain('Garden Burrata');
  act(() => buttonNamed('All Dishes').click());
  expect(container.querySelector('main').textContent).toContain('Garden Burrata');
  act(() => buttonNamed('Desserts').click());
  expect(container.querySelector('main').textContent).not.toContain('Garden Burrata');
});

test('mobile menu closes, reopens and closes on navigation', () => {
  renderAt('/');
  const toggle = container.querySelector('[aria-label="Toggle menu"]');
  act(() => toggle.click());
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  act(() => toggle.click());
  expect(container.querySelector('#mobile-navigation')).toBeNull();
  act(() => toggle.click());
  act(() => container.querySelector('#mobile-navigation a[href="/contact"]').click());
  expect(window.location.pathname).toBe('/contact');
  expect(container.querySelector('#mobile-navigation')).toBeNull();
  expect(container.querySelector('h1').textContent).toBe('Contact Demo');
});

test('fictional credibility and menu content is clearly labeled', () => {
  renderAt('/');
  expect(container.textContent).toContain('not a real award');
  expect(container.textContent).not.toContain('15+');
  expect(container.textContent).not.toContain('Since 2010');
  expect(container.textContent.match(/Fictional testimonial/g)).toHaveLength(3);
  expect(container.textContent).toContain('Sample dishes and illustrative prices in USD');
});

// Renderer for ZinoJS
export function render(component, selector) {
  const target = document.querySelector(selector);
  if (target) {
    target.innerHTML = component();
  }
}
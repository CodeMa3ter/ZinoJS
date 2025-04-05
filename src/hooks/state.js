// Reactive state system
export function createState(initialState) {
  let state = { ...initialState };
  const listeners = [];

  function setState(newState) {
    state = { ...state, ...newState };
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function useState(key) {
    return [() => state[key], (val) => setState({ [key]: val })];
  }

  return { useState, subscribe };
}
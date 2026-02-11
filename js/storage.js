// Central Storage Utility

export function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getNumber(key) {
  return JSON.parse(localStorage.getItem(key)) || 0;
}

export function saveNumber(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
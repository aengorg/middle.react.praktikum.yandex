export function formatTime(date: number): string {
  return new Date(date).toLocaleTimeString('ru');
}

export function formatDateRU(date: number): string {
  return new Date(date).toLocaleDateString('ru').replace(/\./g, '/');
}

export function formatDateTextRU(date: number): string {
  const options = { weekday: 'short', month: 'short', year: 'numeric', day: 'numeric' };
  return new Date(date).toLocaleDateString('ru', options).replace(/ г./g, '');
}

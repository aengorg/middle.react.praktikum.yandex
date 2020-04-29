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

/**
 * Доброе время суток Евгений (Евгений Гиль), не совсем согласен с вашим комментарием
 *
 * Дублирование кода всегда не очень здорово,
 * тут вижу в 3-х функциях присутствует new Date(date).toLocaleTimeString('ru'),
 * можно это зарефачить, как минимум вызывать одну функцию через другую
 *
 * Дублирование кода в 3х функциях только `new Date(date)`
 * Дублирование кода в 2х функциях на дату `new Date(date).toLocaleDateString`
 * Я попытался отрефакторить, не уверен что получилось лучше чем было.
 */

/*
function toDate(date: number, options?: Intl.DateTimeFormatOptions): string {
  return new Date(date).toLocaleDateString('ru', options);
}

export function formatTime(date: number): string {
  return new Date(date).toLocaleTimeString('ru');
}

export function formatDateRU(date: number): string {
  return toDate(date).replace(/\./g, '/');
}

export function formatDateTextRU(date: number): string {
  const options = { weekday: 'short', month: 'short', year: 'numeric', day: 'numeric' };
  return toDate(date, options).replace(/ г./g, '');
}
*/

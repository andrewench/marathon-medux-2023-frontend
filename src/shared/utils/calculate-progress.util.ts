export const calculateProgress = (maxWidth: number, percent: number) =>
  Math.floor((maxWidth * percent) / 100)

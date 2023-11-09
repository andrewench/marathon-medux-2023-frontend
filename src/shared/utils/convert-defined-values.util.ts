export const convertToDefinedValues = (
  values: (string | undefined)[],
): string => {
  const stringifiedValue = values.join(' ')

  return !values.includes(undefined) &&
    stringifiedValue.search(/undefined/i) === -1 &&
    stringifiedValue !== ' '
    ? stringifiedValue
    : ''
}

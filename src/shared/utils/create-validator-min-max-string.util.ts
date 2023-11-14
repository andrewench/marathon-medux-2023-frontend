export const createValidatorMinMaxString = (
  type: 'min' | 'max',
  value: number,
) => {
  const message = {
    min: 'The field must be at least $ characters',
    max: 'The field must be no more than $ characters',
  }

  return message[type].replace('$', value.toString())
}

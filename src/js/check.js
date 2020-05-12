export default function check(inputValue) {
  const inputParse = parseInt(inputValue, 10);

  try {
    if (Number.isNaN(inputParse) || inputParse < 0 || inputValue.toString()[1] === 'x') {
      throw new Error('Введите целое число');
    }
    if (typeof (inputValue) === 'number' && inputValue !== inputParse) {
      throw new Error('Введите целое число');
    }
  } catch (e) {
    console.log(e);
  }
  return inputParse;
}

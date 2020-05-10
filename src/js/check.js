export default function CheckInputNumber(inputValue) {
  const inputParse = parseInt(inputValue, 10);
  try {
    if (Number.isNaN(inputParse) || inputParse < 0) {
      throw new Error('Введите целое число');
    }
  } catch (e) {
    console.log(e);
  }

  return inputParse;
}

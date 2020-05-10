import CheckInputNumber from '../check';

test('вернет число', () => {
  const received = CheckInputNumber(77);
  expect(received).toBe(77);
});

test('вернет число', () => {
  const received = CheckInputNumber('77');
  expect(received).toBe(77);
});

test('вернет ошибку, так как ввели строку', () => {
  const received = CheckInputNumber('text');
  expect(received).toBe(NaN);
});

test('вернет ошибку, так ввели отрицательное число', () => {
  const received = CheckInputNumber(-25);
  expect(received).toBe(-25);
});

/* test.each([
  [77, 77, 77],
  ['77', '77', 77],
  ['text', 'text', NaN],
])(
  ('должен возвращать число'),
  (level, amount, expected) => {
    const result = CheckInputNumber(amount);
    expect(result).toBe(expected);
  },
); */

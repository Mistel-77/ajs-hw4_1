import check from '../check';

test('вернет число', () => {
  const received = check(77);
  expect(received).toBe(77);
});

test('вернет число', () => {
  const received = check('77');
  expect(received).toBe(77);
});

test('вернет ошибку, так как ввели строку', () => {
  const received = check('text');
  expect(received).toBe(NaN);
});

test('вернет ошибку, так ввели отрицательное число', () => {
  const received = check(-25);
  expect(received).toBe(-25);
});

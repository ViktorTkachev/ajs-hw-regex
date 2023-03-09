import Validator from '../app';

const validator = new Validator();

test('should return true for a valid username', () => {
  const result = validator.validateUsername('Viktor123_username');
  expect(result).toBe(true);
});

test('should throw an error for a username containing non-Latin characters', () => {
  expect(() => validator.validateUsername('Виктор123_имя')).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('should throw an error for a username containing more than three consecutive digits', () => {
  expect(() => validator.validateUsername('Viktor_1234_name')).toThrow('Имя не должно содержать подряд более трёх цифр');
});

test('should throw an error for a username starting or ending with a digit, underscore, or hyphen', () => {
  expect(() => validator.validateUsername('123_Viktor')).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  expect(() => validator.validateUsername('Viktor_123')).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  expect(() => validator.validateUsername('Viktor_name_')).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
  expect(() => validator.validateUsername('_Viktor_name')).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

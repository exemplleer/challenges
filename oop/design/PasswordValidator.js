/*
Реализуйте и экспортируйте по умолчанию класс PasswordValidator.
Этот валидатор поддерживает следующие опции:
- minLength (по умолчанию 8) - минимальная длина пароля
- containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
Опции передаются одним объектом в конструктор валидатора.
Объект ошибок в ключах содержит название опции, а в значениях текст,
указывающий на ошибку.

Примеры:
const validator = new PasswordValidator({ containNumbers: false });
validator.validate('qwertyui'); // {}
validator.validate('qwerty'); // { minLength: 'too small' }
*/

const hasNumber = (string) => string.search(/\d/) !== -1;

export default class PasswordValidator {
  constructor(inputSettings) {
    const defaultSettings = {
      minLength: 8,
      containNumbers: true,
    };

    this.settings = { ...defaultSettings, ...inputSettings };
  }

  validate(password) {
    const output = {};
    const { settings } = this;

    if (password.length < settings.minLength) {
      output.minLength = 'too small';
    }

    if (!hasNumber(password) && settings.containNumbers === true) {
      output.containNumbers = 'should contain at least one number';
    }

    return output;
  }
}

class Validator {
  validateUsername(name) {
    this.name = name;

    if (!/^[A-Za-z0-9_-]+$/.test(name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/\d{4}/.test(name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    if (/^[0-9_-]|[_-]$|[0-9_-]$/.test(name)) {
      throw new Error('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    }
    return true;
  }
}

export default Validator;

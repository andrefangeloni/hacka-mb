export const onlyLetters = (text) => text.replace(/^[\s]|[^a-zA-Z\s]/g, '');

export const onlyDigits = (text) => text.replace(/\D/g, '');

export const alphanumericWithAccents = (text) => {
  return text.replace(/^[\s]|[^a-zA-Z0-9\sàáâãÀÁÂÃçÇéêÉÊíÍóôõÓÔÕúÚ]/g, '');
};

export const customLetters = (text) => {
  return text.replace(
    /^[\s]|[^a-zA-Z0-9\sàáâãÀÁÂÃçÇéêÉÊíÍóôõÓÔÕúÚ!@#$%&*()=+-/.;:,?_]/g,
    '',
  );
};

export const onlyEmail = (text) => text.replace(/[^a-z0-9@+._-]/g, '');

export const replaceDiacritics = (str) => {
  const diacritics = [
    { char: 'A', base: /[\300-\306]/g },
    { char: 'a', base: /[\340-\346]/g },
    { char: 'E', base: /[\310-\313]/g },
    { char: 'e', base: /[\350-\353]/g },
    { char: 'I', base: /[\314-\317]/g },
    { char: 'i', base: /[\354-\357]/g },
    { char: 'O', base: /[\322-\330]/g },
    { char: 'o', base: /[\362-\370]/g },
    { char: 'U', base: /[\331-\334]/g },
    { char: 'u', base: /[\371-\374]/g },
    { char: 'N', base: /[\321]/g },
    { char: 'n', base: /[\361]/g },
    { char: 'C', base: /[\307]/g },
    { char: 'c', base: /[\347]/g },
  ];

  diacritics.forEach((letter) => {
    str = str.replace(letter.base, letter.char);
  });

  return str;
};

export const zipCodeMask = (zipCode) => {
  return zipCode.toString().replace(/^([\d]{5})([\d]{3})$/, '$1-$2');
};

export const cardNumberMask = (number) => {
  return number.replace(/^([\d]{4})([\d]{4})([\d]{4})([\d]{4})/, '$1 $2 $3 $4');
};

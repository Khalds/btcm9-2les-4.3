function generatePassword(length, hrd, amount) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';

  let passArr = [];

  for (let j = 0; j < (!amount ? 1 : amount); j++) {

    let newPassword = '';

    for (let i = 0; i < length; i++) {
      if (hrd == 'easy') {
        const randomSymbol = alphabet[Math.floor(Math.random() * alphabet.length)]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
        newPassword += randomSymbol;
      } else if (hrd == 'medium') {
        const mediumPas = alphabet + digits;
        const randomSymbol = mediumPas[Math.floor(Math.random() * mediumPas.length)]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
        newPassword += randomSymbol;
      } else if (hrd == 'hard') {
        const hardPas = alphabet + digits + symbols;
        const randomSymbol = hardPas[Math.floor(Math.random() * hardPas.length)]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
        newPassword += randomSymbol;
      } else {
        newPassword = 'Выберите сложность: easy, medium, hard!'
      }
    }
    passArr.push(newPassword);
    newPassword = ''
  }

  if (!amount) {
    return passArr.join(' ')
  }
  return passArr
}

console.log(generatePassword(10, 'hard', 3));
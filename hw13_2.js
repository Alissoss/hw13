/*Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково.
 Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. Але.
  Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке натуральне число і складемо його зі зворотним 
  числом, тобто записаним тими самими цифрами, але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла,
   і будемо повторювати її доти, доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525),
    але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... 
    Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps
     — це число викликів до знаходження паліндрома. Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel 
     number — число яке немає поліндрому
*/
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
  }
  
  function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }
  
  function findPalindrome(num) {
    let steps = 0;
    let currentNumber = num;
    
    while (!isPalindrome(currentNumber)) {
      const reversedNumber = reverseNumber(currentNumber);
      currentNumber += reversedNumber;
      steps++;
      
      if (steps > 1000) {
        return { result: null, steps: 'Перевищено 1000 кроків, можливо це Lychrel number' };
      }
    }
    
    return { result: currentNumber, steps: steps };
  }
  
  const num = 196;
  const result = findPalindrome(num);
  console.log(result);
  
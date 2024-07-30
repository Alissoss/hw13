/*Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву.
 Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив [1, 2, 3],
  функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
*/
function permute(arr) {
    const result = [];
  
    function generatePermutation(current, remaining) {
      if (remaining.length === 0) {
        result.push(current);
      } else {
        for (let i = 0; i < remaining.length; i++) {
          const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
          generatePermutation(current.concat(remaining[i]), newRemaining);
        }
      }
    }
  
    generatePermutation([], arr);
    return result;
  }
  
  const input = [1, 2, 3];
  const permutations = permute(input);
  console.log(permutations);
  
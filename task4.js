// Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает
// то, является ли число простым (не имеет делителей кроме 1 и самого себя).

function easy_num_check(num){
    is_easy = true;
    
    if (num < 1)
    {
       is_easy = false;
    } else if (num > 3){
      for (let i = 2; i< num; i++){
        if (num % i == 0){
            is_easy = false;
            break;
        }
      }
    }
    
    if (is_easy){
        is_easy = ' - простое число';
    } else {
        is_easy = ' - не является простым числом';
    }
    
    console.log(String(num) + is_easy);
}

for (let i = -2; i <= 100; i++){
    easy_num_check(i);
}
// Написать метод/функцию, который/которая на вход принимает число (float), 
// а на выходе получает число, округленное до пятерок.
// Пример:
// 27 => 25, 27.8 => 30, 41.7 => 40.


function round_five(num){
    let a = num - num % 5;
    if(Math.abs(num % 5) > 2.5){
      if(num>0){
        a += 5;
      } else {
        a -= 5;
      }
    }
    return a;
  }

  example = [27, 27.8 , 41.7];

  for (let i = 0; i < example.length; i++){
    console.log( round_five(example[i]) );
  }
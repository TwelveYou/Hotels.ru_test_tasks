// Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, 
// до которого выводит таблицу умножения. В консоли должна появиться таблица. Например, если на 
// вход пришло число 5, то получим:

// Важно: 
// В последней строке между числами ровно по одному пробелу должно выводиться. 
// В каждом столбце числа должны быть выровнены по правому краю.


function print_multyply_table(size){
    spaces = 2;
    
    for (let i = 0; i <= size; i++){
      s = '';
      for (let j = 0; j <= size; j++){
        if(i==0 && j==0) {
          s+=' '
        } else if(i==0){
          if(j==1){
            s+=' '+String(i+j);
          } else{
            s+=' '.repeat(spaces-String(i+j).length+1)+String(i+j);
          }
        } else if (j==0){
          s+=String(i+j);
        } else if(j==1){
          s+=' '+String(i*j);
        } else {
          s+=' '.repeat(spaces-String(i*j).length+1)+String(i*j);
        }
      }
      console.log(s);
    }
  }
  
  print_multyply_table(5);
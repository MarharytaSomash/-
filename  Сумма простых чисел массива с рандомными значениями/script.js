
do{
   lengthOfArray = +prompt(`Enter length of array`); 
 }
while (!lengthOfArray || isNaN(lengthOfArray) || lengthOfArray<=2||lengthOfArray>10);
      lengthOfArray = Math.round(Math.abs(lengthOfArray));
 
              console.log(`Lenght of array: ${lengthOfArray}`);


do {
   MinOfArray = +prompt(`Enter MIN value  of element in array`);
}
while (MinOfArray === 0 || MinOfArray === ""||isNaN(MinOfArray)|| MinOfArray<-10||MinOfArray>10 ) ;
      MinOfArray = Math.round(MinOfArray);
 
             console.log(`MIN value  of element in array: ${MinOfArray}`);


do{
   MaxOfArray = +prompt(`Enter Max value  of element in array`); 
 }
while (MaxOfArray===0|| isNaN(MaxOfArray) || MaxOfArray <= MinOfArray|| MaxOfArray > 50 ) ;
      MaxOfArray = Math.round(MaxOfArray);
 
             console.log(`Max value  of element in array: ${MaxOfArray}`);


toStart: for (i = 0, arr = [], arrOfPrimeNumbers = [], sumOfPures = 0; i < lengthOfArray; i++) {
   arr[i] = Math.floor(Math.random() * (MaxOfArray - MinOfArray + 1) + MinOfArray);
                   
   if (arr[i] <= 1) continue toStart;

   
   for (j = 2; j < arr[i]; j++) {
 
      ostatok = arr[i] % j;
      
      if (ostatok === 0) 
         continue toStart;
      }
    
            
      arrOfPrimeNumbers = arr[i];
         
      sumOfPures += arr[i];
            
   }

   
   console.log(arr);
   console.log(` Array of prime numbers: ${arrOfPrimeNumbers}`);
   console.log(` Summ of prime numbers: ${sumOfPures}`);

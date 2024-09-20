//for loop = repeat some code LIMITED amount of times



for(let i=1; i <=20; i++){

    if(i == 13){
        continue;
    }
    else{
        console.log(i);
    }


}

let greetings = "happy newyear!"

for(let z=2; z <=10; z++){
    console.log(greetings);
    }



    let prutas = ["pinya","mangga","saging","lanzones","ubas","santol","duryan","pakwan","papaya","pinya","mais"]

      prutas.reverse()
    for(let fruit of prutas){
        console.log(fruit )
    }


    const number1 = [ 1, 2 ,3 ,4 ,5]
    const number2= [];

    for(let nums1 of number1){
      number2.push(nums1 * 2);
    }
    console.log(number2)



    let double = (numbers) =>{
        const number21= [];

        for(let number of numbers){
          number21.push(number * 2);
        }
       
      return number21
    }
    console.log(double([1,2,3,4]));


    let letterCounter = () => {

 const letters = 'this is the example'

//in = index
let result = 0; 
 for(let letter in letters){
  console.log(Number(letter)+1)
  result = Number(letter)+1;

 }

return { result }
    }
    letterCounter();


    const sumArray = (numbers) => {
         let result = 0;
         // for loop
         for (const number of numbers) {
          console.log(number)
           result += number
         }
         return { result }
       }
      
       const nums = [1, 2, 3, 4, 5]
       console.log(sumArray(nums))


       let max =  (numbers) => {

       let result = numbers[0]


       for(let number of numbers){
        if(number > result){
         result = number
        }
       }
      return result
       }

       console.log(max([1,2,3,4,5]))



       const letterFrequency = (phrase) => {
       
         
         
          let frequency = {}
        for (const letter of phrase) {
       //h a h a
             if (letter in frequency) {
              
               frequency[letter] += 1
            
             } else {
               frequency[letter] = 1
             }
           }
           return frequency
         }
        
         console.log(letterFrequency('haha!'))



         const wordfrequency = (phrase) =>{
        let frequency = {}

        let array = phrase.split(" ");
        
         for( words of array){
          if(words in frequency){
            frequency[words] += 1
          }
          else{
            frequency[words] =1
          }
         }
        
         return frequency;
       
         }
         console.log(wordfrequency("it is what it is"))








  

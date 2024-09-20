let day = "1";


switch(day){

     case 1:
       console.log("it is monday");
       break;

      case 2:
        console.log("it is tuesday");
        break;

      case 3:
            console.log("it is wednesday");
            break;


       case 4:
                console.log("it is thursday");
                break;

       case 5:
                    console.log("it is friday");
                    break;

        case 6: 
                      console.log("it is saturday");
                      break;
                    
            default:
                console.log(`${day} is not a day`)
        
        
}



let testScore = 92;
let letterGrade;

switch(true){
    case testScore >=90:
    letterGrade = "A";
    break;


    case testScore <90:
    letterGrade = "B";
    break

}

console.log(letterGrade)
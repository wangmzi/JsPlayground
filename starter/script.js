//first code challenge
var MarkMass = 47;
var heightMark = 1.59;

var JMass=80; 
var JH = 1.90;
var MarkBMI = MarkMass/(heightMark*heightMark);
var JBMI = JMass/(JH*JH);


console.log(MarkBMI,JBMI);


var HiegherBMI = MarkBMI > JBMI;
console.log('Is Mark\'s BMI heigher than John\'s? '+ HiegherBMI);



//example for swicth statement
var h = 'teacher';

switch(h){
    /*two for one case*/
    
    case 'instructor':
    case 'lover':
          console.log('lalaba');
          break;
    case 'driver':
          console.log('hhh');
          break;
    case 'designer':
          console.log('yoyo');
          break;
    default://when none of the case work 
          console.log('yeahyeah');
}





/*
example for if-else to switch
*/
//if-else-then
var firstName = 'John';
var age = 20;
    if (age < 12){
        console.log('child');
    }
    else if(age >= 12 && age < 20){
        console.log('teenager');
    }
    else if(age >= 20 && age < 30){
        console.log('adult');
    }
    else{
        console.log('olderly');
    }

//converting to switch statement 
switch(true){
    case age <12:
    console.log('1');
    break;
        
    case age >= 12 && age <20:
    console.log('2');
    break;
        
    case age >= 20 && age <30:
    console.log('3');
    break;
        
    default:
    console.log('4');
}


//how to test if something is defined or not 

var height;

//without height = 23, height is undefined, that is false;
//with height = 23, height is defined, that is true;
//with zero = 

height = 0; 

if(height || height === 0){
    console.log('defined');
}
else{
    console.log('undefined');   
}


//function






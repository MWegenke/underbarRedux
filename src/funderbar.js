(function() {
  'use strict';

  window._ = {};

  var FILL_ME_IN = 'Fill this value in';
/* SCAFFOLDING
  _.func = function(){
 
  }
*/
//_.define is wanting you to declare a variable, set your variable to the input from the function
// and then return the variable you just created. This function is nearly completed for you, 
// to help guide you toward success in your work on the following exercises.
  _.define = function(input){
    // Declare a variable below that is assigned the value of input;
    var result = FILL_ME_IN;
    // return the above variable
    return FILL_ME_IN;
  }

//_.dataType is wanting you to determine the data type of what is being passed to it.
// Return the datatype of input: ie. String or integer or boolean etc. 
_.dataType = function(input){
  //Code Goes Below
  return typeof(input);
}

//_.sum takes two numbers as parameters and returns their sum
_.sum = function(a,b){
    //Code Goes Below
  return a+b;
}

//_.subtract takes two numbers as parameters and returns their difference
_.subtract = function(a,b){
  //Code Goes Below
  return a-b;
}

//_.multiply takes two numbers as parameters and returns their product
_.multiply = function(a,b){
  //Code Goes Below
  return a*b;
}

//_.divide takes two numbers as parameters and returns their quotent
_.divide = function(a,b){
  //Code Goes Below
  return a/b;
}

//_.modulus takes two numbers as parameters and returns their remainder of a divided by b
_.modulus = function(a,b){
  //Code Goes Below
  return a%b;
}

//_.increment takes a number as a parameter and increces it by 1
// Ensure you use the proper increment operator(not a + 1)
_.increment = function(a){
  //Code Goes Below
  var res = a++;
  return res;
}

//_.decrement takes a number as a parameter and reduces it by 1
// Ensure you use the proper decrement operator (not a - 1)
_.decrement = function(a){
  //Code Goes Below
  
}

//This function is complete and working. All you will need to do is 
//replace FILL_ME_IN in the variables.js test file.
_.whatOrder = function(test){
  return test;
}

//PART II

//-------------------------------------------------------------------------
/*
  Now you will start using logic to pass your tests. You will be using comparators to pass the tests.
*/
//-------------------------------------------------------------------------

//_.same takes two parameters and returns whether they are the equal or not
_.same = function(a,b){
  //Code Goes Below
  return a === b;
}

//_.greater takes two numbers as parameters and checks if a is greater than b
_.greater = function(a,b){
  //Code Goes Below
  return a > b;
}

//_.greater takes two numbers as parameters and checks if a is less than b
_.lessThan = function(a,b){
  //Code Goes Below
  return a < b;
}

//_.falsyOrTruthy takes a parameter and determines whether it is TRUTHY or FALSY
_.falsyOrTruthy = function(a){
   //Code Goes Below
  return a ? true : false
}

  //In the next tests you will be given four parameters to compare, sort of.
  //You will be given a, b, c, and d. Within your function you will compare 
  //a to b as well as comparing c to d. You will then compare their outcomes with
  //eachother using the && or || logic to return true or false. 
  //EXAMPLE 3 > 2 && 5 === 6
  //The above example will evaluate to False because 3 > 2 === True and 5 === 6 False.
  // And as you learned in the Learn content True && False evaluates to False.
  //For the _.andand function as well as the _.oror function you will just be using the === comparator

  //_.andand will be using the && comparator
  _.andand = function(a,b,c,d) {
  //Code Goes Below
    return a === b && c === d;
  }

    //_.oror will be using the || comparator
    _.oror = function(a,b,c,d) {
      //Code Goes Below
      return a === b || c === d;
      }

  //Control Flow
  //Create a basic if statement to pass the tests. 
  _.ifLogic = function(a, b){
    //Code Goes Below

  }

    //Create a basic if else statement to pass the tests. 
    _.ifElseLogic = function(a, b){
      //Code Goes Below

    }

    //Using a for loop, iterate through the array passed. 
    //Return the array as a single string.
    _.forLoop = function(a){
      //Code Goes Below

    }

    //While looping through the array passed determine the data type of the element. If the element is a number add it to the a variable. At the end return that variable. 
    _.forIfElseNum = function(a){
      //Code Goes Below
      let tot = 0;

      for(let i =0; i < a.length; i++){
        if (typeof(a[i]) === 'number'){
          tot += a[i];
        } 
      }

      return tot;
    }

    //This function is similar to the above function. Only this time you will be building a sentence rather than a total number. Loop through the array and concatinate the strings in it to make a sentence.
    _.forIfElseStr = function(a){
      //Code Goes Below
      let sentence = '';

      for(let i =0; i < a.length; i++){
        if (typeof(a[i]) === 'string'){
          sentence += a[i];
        } 
      }

      return sentence;
    }

    //In this function you will loop though the passed in array. Prior to that you need to check the second parameter to determine what you will be returning. If the second parameter is 'string' return a sentence created using the strings in the array. If the second parameter is 'number' you will return the total of the number in the array. 
    _.ifElseFor = function(a,b){
      //Code Goes Below

      if(b === 'number'){
        return _.forIfElseNum(a);
      }else if(b === 'string'){
        return _.forIfElseStr(a);
      }

    
    }

}());

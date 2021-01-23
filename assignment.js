
// Here are the starting point of problem-1: kilometerToMeter.

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    if(meter>=0){
        return meter;
    }
    else{
        return('Distance cannot be negative');
    }
    
}

/** var result = kilometerToMeter(55);
 console.log(result); */

// End of the first problem.
//-------------<<<<<<<>>>>>>>>>-------------//



// Here are the starting point of problem-2: budgetCalculator.

function budgetCalculator(watch, phone, laptop){
    var watch = watch*50;
    var phone = phone*100;
    var laptop = laptop*500;
    var result = watch+ phone+ laptop;
    
    if(watch <0 || phone <0 || laptop <0){
        return('Items Number Connot be negative');
    }
    else{
        return result;
    }

}

/**var sum = budgetCalculator(3, 5, 1);
console.log(sum); */

// End of the second problem.
//-------------<<<<<<<>>>>>>>>>-------------//


// Here are the starting point of problem-3: hotelCost.

function hotelCost(days){
    var cost = 0;
    if(days<0){
        return('Days cannot be negative');
    }
    else if(days<=10){
        cost = days*100;
        return cost;
    }
    else if(days<=20){
        var firstTenDays = 10*100;
        var remainingDays =days-10;
        var secondTenDays =remainingDays*80;
        cost = firstTenDays + secondTenDays;
        return cost;
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remainingDays =days-20;
        var othersDays =remainingDays*50;
        cost = firstTenDays + secondTenDays + othersDays;
        return cost;
    }
    
}

/**var totalCost =hotelCost(22);
console.log(totalCost); */

// End of the third problem.
//-------------<<<<<<<>>>>>>>>>-------------//



// Here are the starting point of problem-4: megaFriend.

function megaFriend(array) {
    var word = "";
    for (var i = 0; i < array.length; i++) {
      if (word.length < array[i].length) {
        word = array[i];
      }
    } 
    return word;
  }
  
  /**var longestWord =megaFriend(['Rafsan','Rahat','Shawmik','Abir','Abdullah'])
  console.log(longestWord);*/

// End of the fourth problem.
// -------------<<<<<<<>>>>>>>>>-------------//

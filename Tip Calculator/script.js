/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later)
// bill input, tip input, number of people div, and per person total div

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
     const bill = Number(billInput.value)
     const tipPercentage = Number(tipInput.value)/100;
     const tipAmount = bill * tipPercentage

     const total = tipAmount + bill;
     const perPersonTotal = total/numberOfPeople
     
     perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    numberOfPeople += 1;

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {

    if(numberOfPeople<=1){
        return
    }
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
  }
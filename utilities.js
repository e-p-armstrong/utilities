function formatNumber(num){ //Adds commas to a number and returns it as a string
    const resultArray = [];
    const splitAtPeriod = num.toString().split('.');
    const workingNumber = splitAtPeriod[0];
    const endDigits = workingNumber.length % 3;
    const workingNumberArray = workingNumber.split('');
    if (endDigits !== 0){
        resultArray.push((workingNumberArray.splice(0,endDigits)).join(''));
    }
    const timesToIterate = Math.floor(workingNumber.length / 3);
    for (let n=0; n < timesToIterate; n += 1){
        resultArray.push((workingNumberArray.splice(0,3)).join(''));
    }
    let resultString = resultArray.join();
    return splitAtPeriod[1] ? resultString + '.' + splitAtPeriod[1] : resultString;
}

function take(arr,count) { //takes a certain number of elements from the front of a list and returns the elements.
    if (count >= 0){
        return arr.slice(0,count);
    }
    else{
        throw "take given a negative count";
    }
}

function endTake(arr,count){ //Takes a certain number of elements from the back of a list and returns the elements
    if (count >= 0){
        return arr.slice(-count)
    }
    else{
        throw "endTake given a negative count"
    }
}

function numberBetween(n1,n2){ //Returns a number in-between the two parameters, inclusive. Don't give it floats.
    let lesser = NaN
    let greater = NaN
    if (n2 > n1){
        greater = n2;
        lesser = n1
    }
    else if (n2 == n1){
        return n2
    }
    else {
        greater = n1
        lesser = n2
    }
    return lesser + Math.round(Math.random() * (greater-lesser))
}

//Beginning of Caesar Cipher Code
export const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function wrapAround (number){
  if (number < 0){
      console.log(`90+number = ${90+number}`)
    return (91+number)
  }
  else{
    return number +65
  }
}

    // Cipher Class Below
class Caesar{
  
    constructor (shift){
    this.shift = shift
  }

  encrypt(str){
    if(this.shift < 0){
        throw "Positive shifts only plz"
    }
    
    let strArr = str.split('').map(char => char.toUpperCase())
    console.log(strArr) //Creates a variable that is equal to the input string (split into an array of uppercased characters)
    
    const unicodeArr = strArr.map((char) =>{ //Makes a variable that is equal to the an array of the unicode equivalents of each character in the uppercased string.
      let newChar = char
      if (alphabet.includes(char)){
        newChar = wrapAround((char.charCodeAt(0) - 65 + this.shift) % 26)
      }
      return newChar })
    const resultArray = []
    unicodeArr.map(uni =>{
        if (typeof uni === "number"){
            resultArray.push(String.fromCharCode(uni))
        }
        else{
            resultArray.push(uni)
        }
       })
  return resultArray.join('')
  }


  decrypt(str){
    let strArr = str.split('').map(char => char.toUpperCase())
    console.log(strArr) //Creates a variable that is equal to the input string (split into an array of uppercased characters)
    
    const unicodeArr = strArr.map((char) =>{ //Makes a variable that is equal to the an array of the unicode equivalents of each character in the uppercased string.
      let newChar = char
      if (alphabet.includes(char)){
        newChar = wrapAround((char.charCodeAt(0) - 65) - this.shift % 26)
      }
      return newChar })
    const resultArray = []
    unicodeArr.map(uni =>{
        if (typeof uni === "number"){
            resultArray.push(String.fromCharCode(uni))
        }
        else{
            resultArray.push(uni)
        }
       })
  return resultArray.join('').toLowerCase()
  }
}

//End of Cipher Code

export {numberBetween, endTake, take, formatNumber}


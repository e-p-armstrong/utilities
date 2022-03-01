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

export {numberBetween, endTake, take, formatNumber}
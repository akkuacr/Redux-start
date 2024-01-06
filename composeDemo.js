
//isme humne yeh dekha agr hume multiple functions ka composition function bnana ho tb qa krenge


import { compose } from 'redux';
function removeSpaces(string){
    return string.split(" ").join("");
}

function repeatString(string)
{
    return string.repeat(2); //can also use string+string
}

function convertToUpper(string){
    return string.toUpperCase();

}


//agr tumhe 3no function apply krne h toh tum 3no m composition lga skte ho otherwise you can react 

//console.log(repeatString("abcd"));
const input ="abc def ghi"

const composedFunction = compose(removeSpaces,repeatString,convertToUpper);
console.log(composedFunction(input));

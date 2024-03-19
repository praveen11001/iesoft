
code = "joev4ksqa7";
const str = "aabbcde";
 
let tempValue = [];
let readyString = "";

for(var x in str){
    tempValue[x] = str[x];
}
console.log(tempValue);

check = (word, n) => {
    let count = 0;
    for(var x = n; x<str.length; x++){
        if(word == tempValue[x] && word != "*"){
            ++count;
            tempValue[x] = '*';
        }
        else
            break;
    }
    
    return (count + word);
}

for(var x in tempValue){
    if(tempValue[x] != "*")
        readyString += check(tempValue[x], x);
}
console.log(tempValue);
console.log(readyString);

readyString = readyString.concat(code);
console.log(readyString);

let testValue = "";
let pt = 1;
for(var x in readyString){
    if(pt%4 == 0 && x!=1){
        testValue += "_";
    }
    else{
        testValue += readyString[x];
    }
    pt++;
}

console.log(testValue);
// fun&&!! time
// 97 - 122
// 65 -90

const code = "joev4ksqa7";
const sen = "puppy bsdsssdsdits lionsss$ y@#$kiteahs";

let value = [], prevSize = 0, count = 0, start = -1, flag = true, final = 0;

check = (n) => {
    if(count > prevSize){
        value = sen.slice(start, final+1);
        prevSize = count;
        // start = 0
    }
    count = 0;
    flag = true;
}


for(var x = 0; x<sen.length; x++){
    
    if( ((sen[x].charCodeAt() > 64 && sen[x].charCodeAt() < 91) || (sen[x].charCodeAt() > 96 && sen[x].charCodeAt() < 123)) ){
        console.log('letter : ' + sen[x] + ' value : ' + sen[x].charCodeAt());
        count++;
        if(flag){
            start = x;
            flag = false;
        }
        final = x;
    }


    else{
        check(final+1);
    }

}


check(final + 1);

console.log(value);

value = value.concat(code);
console.log(value);

let tempValue = "";
let pt = 1;
for(var x in value){
    if(pt%4 == 0 && x!=1){
        tempValue += "_";
    }
    else{
        tempValue += value[x];
    }
    pt++;
}

console.log(tempValue);
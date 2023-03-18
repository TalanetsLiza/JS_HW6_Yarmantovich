"use strict";

{
    // TASK 1

    const str = "aaa@bbb@ccc";
    const newStr = str.replace(/@/g, "!");
    console.log(newStr); 

}

{
    // TASK 2
    console.log("\n");

    const date = "2025-12-31";
    const regex = /(\d\d\d\d)-(\d\d)-(\d\d)/; // /d - это любая цифра
    const newDate = date.replace(regex, "$3/$2/$1");
	console.log(newDate); 

}

{
    // TASK 3
    console.log("\n");

    const str = "Я учу javascript!";

    const substr1 = str.substr(2,3);
    const substring1 = str.substring(2,5);
    const slice1 = str.slice(2,5);

    const substr2 = str.substr(6,10);
    const substring2 = str.substring(6,16);
    const slice2 = str.slice(6,16);

    console.log(substr1, substring1, slice1);
    console.log(substr2, substring2, slice2);

}

{
    // TASK 4
    console.log("\n");

    const arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    console.log(Math.sqrt(sum));
    
}
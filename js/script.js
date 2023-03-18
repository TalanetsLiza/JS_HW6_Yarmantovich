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
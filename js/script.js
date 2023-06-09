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

{
    // TASK 5
    console.log("\n");

    const a = 3;
    const b = 5;
    const c = Math.abs(a - b);

    console.log(c);

}

{
    // TASK 6
    console.log("\n");

    const dateNow = new Date();
    const hour = dateNow.getHours().toString().padStart(2, "0");
    const minute = dateNow.getMinutes().toString().padStart(2, "0");
    const second = dateNow.getSeconds().toString().padStart(2, "0");
    const day = dateNow.getDate().toString().padStart(2, "0");
    const month = dateNow.getMonth().toString().padStart(2, "0");
    const year = dateNow.getFullYear().toString().padStart(2, "0");

    console.log(`${hour}:${minute}:${second} ${day}.${month}.${year}`)

}

{
    // TASK 7
    console.log("\n");

    const str = "aa aba abba abbba abca abea";
    const regex = str.match(/ab+a/gi);
    console.log(regex);

}
 
{
    // TASK 8
    console.log("\n");

    const tel = "+333(27)3987419";
    const regex = /^\+\d{1,3}\(\d{2,3}\)\d{7}$/;

    console.log(regex.test(tel));
}

{
    // TASK 9
    console.log("\n");

    const email = "adsdfsd@mail.ru";
    const regex = /^[a-zA-Z]{1}[a-zA-Z0-9]+@[\w\.\-]+\.[a-z]{2,11}$/;

    console.log(regex.test(email));
}

{
    // TASK 10
    console.log("\n");

    // Вариант 1 

    const str = "https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3";

    function getUrlParts(str) {
        const url = new URL(str); 
        const urlParts = [
            url.origin,
            url.pathname,
            url.search.substring(1),
            url.hash.substring(1),
        ];
        return urlParts;
    }

    // Вариант 2

    function getUrlPartsByRegex(str) {
        const matches = str.match(/(^https?:\/\/[\w\.]+)(\/[\w\.\-\/]+\/?)\??([\w\.\-\_\&\=]+)#?(.*)/);
        return [
            matches[1],
            matches[2],
            matches[3],
            matches[4],
        ];
    }

    const urlParts = getUrlParts(str);
    console.log(urlParts);
    const urlParts2 = getUrlPartsByRegex(str);
    console.log(urlParts2);
}
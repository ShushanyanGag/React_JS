"use strict";

// տարբերակ 1

var a = prompt("Ներմուծել թիվը");

var sum = 0;

for(let i = 1; i <= a; i++){
    sum += i;
}

alert(`1-ից մինչև ${a} թվերի գումարը հավասար է ${sum}-ի`);



// տարբերակ 2

// let  a = prompt("Ներմուծել թիվը");

// let sum = 0;

// let i = 0;

// while(i < a) {
//     i++;
//     sum += i;
// }

// alert(`1-ից մինչև ${a} թվերի գումարը հավասար է ${sum}-ի`);



// տարբերակ 3

// const a = prompt("Ներմուծել թիվը");

// let sum = 0;

// let i = 0;

// do {
//     i++;
//     sum += i;
// } while (i < a);

// alert(`1-ից մինչև ${a} թվերի գումարը հավասար է ${sum}-ի`);
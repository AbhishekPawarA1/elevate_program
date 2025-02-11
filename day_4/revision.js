// question 1

// Input:
// [1, 2, 3, 4]

// Output:
// { sum: 10, product: 24 }

// let arr = [1, 2, 3, 4]
// let dec = {}




// // approach 1



// let sum = 0
// let product=arr[0]
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     product *= arr[i]
    
// }
// dec["sum"] = sum;
// dec["product"] = product;
// console.log(dec);





// // approach 2


// let result = arr.reduce((acc, ele) => {
//     acc.sum += ele
//     acc.product *= ele
//     return acc
// },{ sum: 0, product: 1 })

// console.log(result);




// question 2

// Input: ["HeLLo", "world", "PYTHON", "JaVaScRiPt"];

// Output: ["hello", "WORLD", "python", "JaVaScRiPt"];


// let Input= ["HeLLo", "world", "PYTHON", "JaVaScRiPt"];
// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lower = "abcdefghijklmnopqrstuvwxyz"
// let result=[]
// for (let i = 0; i < Input.length; i++) {
//     let res = Input[i]
//     let capital = 0
//     let smaller=0
//     for (let j = 0; j < res.length; j++) {
//         if (upper.includes(res[j])) {
//             capital+=1
//         }
//         else {
//             smaller+=1
//         }
//     }
//     if (capital > smaller) {
//         res = res.toLowerCase()
//         result.push(res)
//     }
//     if (smaller > capital) {
//         res = res.toUpperCase()
//         result.push(res);
//     }
//     if (smaller == capital) {
//         result.push(res);
//     }
// }
// console.log(result);



// question 3



// testcase 1

// Input: ["apple", "banana", "apple", "orange", "banana", "banana"];

// Output: ["banana"];

// function HighestFrequecyElement(input) {
//   let dec = {};
//   for (let i = 0; i < input.length; i++) {
//       if (input[i] in dec) {
//           dec[input[i]]+=1
//       }
//       else {
//           dec[input[i]] = 1;
//       }
//   }
//   console.log(dec);
//   let max =0
//   let res=[]
//   for (let key in dec) {
//       if (dec[key] > max) {
//           max = dec[key]
//       }
//   }
//   for (let key in dec) {
//       if (dec[key] == max) {
//           res.push(key)
//       }
//   }

//   return res
// }
// let input = ["apple", "banana", "apple", "orange", "banana", "banana"];
// console.log(HighestFrequecyElement(input));
 


// test case 2

// function HighestFrequecyElement(input) {
  
//   let dec = {};
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] in dec) {
//       dec[input[i]] += 1;
//     } else {
//       dec[input[i]] = 1;
//     }
//   }
//   console.log(dec);
//   let max = 0;
//   let res = [];
//   for (let key in dec) {
//     if (dec[key] > max) {
//       max = dec[key];
//     }
//   }
  
    
//   for (let key in dec) {
//     if (dec[key] == max) {
//       res.push(key);
//     }
//   }
//   return res
// }

// let input = [1, 2, 2, 3, 3];
// console.log(HighestFrequecyElement(input));



// question 4


// Input:
// cart = [
//   { "price": 10, "quantity": 2 },
//   { "price": 5, "quantity": 4 },
//   { "price": 20, "quantity": 1 }
// ]
// discount = 10%  (applies to each item's price)
// minPriceThreshold = 3

// Output:
// Total = 54


// let cart=[
//   { "price": 10, "quantity": 2 },
//   { "price": 5, "quantity": 4 },
//   { "price": 20, "quantity": 1 }
// ];
// let minPriceThreshold = 3
// let discount = 10;
// let sum = 0;

// let ans = 0;
// for (let i = 0; i < cart.length; i++) {
  
//     // console.log(cart[i].price);
//     // console.log(cart[i].price);
//     if ((cart[i].price) > minPriceThreshold) {
//         let value = (cart[i].price * cart[i].quantity) / discount;
//        // console.log(value);
//         sum = (cart[i].price * cart[i].quantity) - value;
//         if (sum < minPriceThreshold) {
//             sum=minPriceThreshold * cart[i].quantity
//         }
//         ans+=sum
//     }
//     else {
//         ans+=cart[i].price* cart[i].quantity
//     }
// }
// console.log(ans);



// question 5

// Input:
// [
//   { "name": "Banana", "category": "Fruit", "subCategory": "Tropical" },
//   { "name": "Apple", "category": "Fruit", "subCategory": "Temperate" },
//   { "name": "Mango", "category": "Fruit", "subCategory": "Tropical" }
// ]

// Output:
// {
//   "Fruit": {
//     "Tropical": [
//       { "name": "Banana", "category": "Fruit", "subCategory": "Tropical" },
//       { "name": "Mango", "category": "Fruit", "subCategory": "Tropical" }
//     ],
//     "Temperate": [
//       { "name": "Apple", "category": "Fruit", "subCategory": "Temperate" }
//     ]
//   }
// }

// function Operations(data) {
//   let dec = {}
//   for (let i = 0; i < data.length; i++) {
//       if (data[i].category in dec) {
//           dec[data[i].category].push(data[i]);
//       } else {
//           dec[data[i].category] = [data[i]];
//       }
//   }
//   for (let cat in dec) {
//       let obj = {}
//       for (let item of dec[cat]) {
//           if (obj[item.subCategory] == undefined) {
//               obj[item.subCategory] = [item]
//           } else {
//               obj[item.subCategory].push(item);
//           }
//       }
//       dec[cat] = obj
//     }
//     console.log(dec);
// }
// let data = [
//   { name: "Banana", category: "Fruit", subCategory: "Tropical" },
//   { name: "Apple", category: "Fruit", subCategory: "Temperate" },
//   { name: "Mango", category: "Fruit", subCategory: "Tropical" },
//   { name: "Potato", category: "Vegetable", subCategory: "Tropical" },
// ];

// Operations(data)

// question 6


// 1.
// function solution(num1, num2) {
//     var answer = 0;
//     if (num1<=50000 && num1>=-50000) {
//         if (num2<=50000 && num2>=-50000) {
//             answer = num1 - num2
//         }
//     }
//     return answer;
// }

// 2.
// function solution(num1, num2) {
//     var answer = 0;
//         if (num1<=100 && num1>=0) {
//         if (num2<=100 && num2>=0) {
//             answer = num1 * num2
//         }
//     }
//     return answer;
// }

// 3.
// function solution(num1, num2) {
//     var answer = 0;
//         if (num1<=100 && num1>=0) {
//         if (num2<=100 && num2>=0) {
//             answer = num1 / num2
//         }
//     }
//     answer = Math.floor(answer)
//     return answer;
// }

// 4.
// function solution(age) {
//     var answer = 0;
//         var year = 2022;
//     if(age>0 && age<=120) {
//             answer = year - age + 1;
//     }
//     return answer;
// }

// 5.
// function solution(num1, num2) {
//     var answer = 0;
//         if(num1>=0 && num1 <=10000){
//         if(num2>=0 && num2 <=10000){
//             answer = num1 === num2 ? 1 : -1
//         }
//     }
//     return answer;
// }

// 6.
// function solution(num1, num2) {
//     var answer = -1;
//     if (num1<=50000 && num1>=-50000) {
//         if (num2<=50000 && num2>=-50000) {
//             answer = answer + 1;
//             answer = num1 + num2
//         }
//     }
//     return answer;
// }

// 7.
// function solution(num1, num2) {
//     var answer = 0;
//     answer = Math.floor((num1/num2) * 1000);
//     return answer;
// }

// 8.
// function solution(angle) {
//     var answer = 0;
//     angle = Math.floor(angle);
//     var i = angle
//     if (i>0 && i<=180) {
//         if (i>0 && i<90) {
//             answer=1;
//         } else if (i === 90)
//         {
//             answer=2;
//         }else if (i>90 && i<180)
//         {
//             answer=3;
//         }else if(i === 180)
//         {
//             answer=4;
//         }
//     }
//     return answer;
// }

// 9.
// function solution(n) {
//     var answer = 0;
//         if (n>0 && n<=1000) {
//         for (let i = 0; i<=n; i++) {
//             if(i%2 === 0) {
//                 answer +=i
//             }
//         }
//     }
//     return answer;
// }

// 10.
// function solution(numbers) {
//     var answer = 0;
//     for (var i = 0; i<numbers.length; i++) {
//         var a = answer += numbers[i]
//     }
//     answer =  a / numbers.length;
//     return answer;
// }

// 11.
// function solution(num) {
//     var answer = '';
//     if(num % 2 === 0 ){
//         answer = "Even"
//     }else {
//         answer = "Odd"
//     }
//     return answer;
// }

// 12.
// function solution(arr) {
//     var answer = 0;
//     for(let i =0; i<arr.length; i++) {
//         answer+=arr[i]
//     }
//     return answer / arr.length;
// }

// 13.
// function solution(N)
// {
//     var answer = 0;
//     var a = String(N)
//     for(let i = 0; i<a.length; i++) {
//         answer+=Number(a[i])
//     }
//     return answer;
// }

// 14.
// function solution(n) {
//     var answer = 0;
//     for(let i = 0; i<=n; i++) {
//         if(n % i ===0) {
//             answer += i
//         }
//     }
//     return answer;
// }

// 15.
// function solution(n) {
//     var answer = 0;
//     answer = [];
//     for (let x = 0; x < n; x++) {
//         if(n % x === 1) {
//             answer.push(x);
//         }
//     }
//     answer = Math.min(...answer);
//     return answer;
// }

// 16.
// function solution(x, n) {
//     var answer = [];
//     for(let i = 1; i<=n; i++) {
//         answer.push(x * i)
//     }
//     return answer;
// }

// 17.
// function solution(n) {
//     var answer = [];
//     var a = String(n).split('').reverse()
//     for(let i= 0; i<a.length; i++){
//         answer.push(Number(a[i]));
//     }
//     return answer;
// }

// 18.
// function solution(s) {
//     var answer = 0;
//     answer= s
//     return Number(answer);
// }

// 19.
// function solution(n) {
//     var answer = 0;
//     var a = Math.floor(Math.sqrt(n))
//     answer = n/a === a ? (a+1)**2 : -1
//     return answer;
// }

// 20.
// function solution(n) {
//     var answer = 0;
//     answer= String(n).split('').sort((x, y) => y - x).join('')
//     return Number(answer);
// }
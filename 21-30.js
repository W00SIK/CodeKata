// 21.
// function solution(x) {
//     var answer = true;
//     var b = 0;
//     var a = String(x).split('').map(Number)
//     for(let i = 0; i<a.length; i++) {
//         b += a[i]
//     }
//     answer = x%b === 0 
//     return answer;
// }

// 22. !!!
// function solution(a, b){
//     var result = 0
//     return (a+b) * (Math.abs(a-b)+1) / 2;
// }

// 23.
// function solution(num) {
//     var answer = 0;
//     while(num !== 1) {
//         answer++
//         if (answer === 500) {
//             answer = -1
//             break;
//         } else if(num % 2 === 0) {
//             num /= 2
//         } else {
//             num = 3 * num + 1
//         }
//     }
//     return answer;
// }

// 24.
// function solution(seoul) {
//     var index = seoul.indexOf("Kim")
//     return `김서방은 ${index}에 있다`;
// }

// 25.
// function solution(arr, divisor) {
//     const a = arr.filter(element => element % divisor === 0).sort((a, b) => a-b)
//     const answer = a.length !== 0 ? a : [-1]
//     return answer;
// }

// 26.
// function solution(absolutes, signs) {
//     var answer = 0;
//     for(let i = 0; i<absolutes.length; i++) {
//         signs[i] === true ? answer+=absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }

// 27.
// function solution(phone_number) {
//     var answer = '';
//     answer = phone_number.split('').reverse()
//     for (let i = 4; i<phone_number.length; i++) {
//         answer[i] = "*"
//     }
//     answer = answer.reverse().join('')
//     return answer;
// }

// 28.
// function solution(numbers) {
//     var answer = 0;
// for (let i = 0; i<=9; i++ ) {
//     if(numbers.includes(i) === false) {
//         answer += i
//     }
// }
//     return answer;
// }

// 29. 
// function solution(arr) {
//     var answer = arr;
//     arr.sort((a, b) => b-a).pop()
    
//     if (arr.length === 0) {
//         answer = [-1]
//     }
//     return answer;
// }

30.

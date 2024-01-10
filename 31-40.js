// 31
function solution(n) {
    var answer = '';
    // 홀수일 때 answer = 수, 짝수일 때  answer = 박을 추가함
    for (let i = 1; i <= n; i++) {
        i % 2 !== 0 ? answer += "수" : answer += "박" 
    }
    return answer;
}

// 32
function solution(a, b) {
    var answer =0;
    // 내적
    // a, b에서 같은 인덱스 값 곱하고 answer에다 다 더해주기
    for(let i = 0; i<a.length; i++) {
        answer += a[i] * b[i]
    }
    return answer;
}

// 33
// function solution(left, right) {
//     var answer =0;
//     for(let i = left; i<=right; i++) {
//         Math.floor(Math.sqrt(i))**2 === i ? answer-=i : answer+=i
//     }
//     return answer;
// }

// 34
// function solution(s) {
//     var answer = "";
//         answer = s.split("").sort((b, a) => {
//             if(a < b) return 1;
//             if(a > b) return -1;
//             if(a === b) return 0;
//         }).join("")
//     return answer;
// }

// 35
// function solution(price, money, count) {
//     var a = 0;
//     var c = []
//     for(let i = 1; i<=count; i++) {
//         c.push(a += price);
//     }
//     return c.reduce((a, b) => a + b) > money ? c.reduce((a, b) => a + b) - money : 0
// }

// 36





// 37
// function solution(arr1, arr2) {
//     var answer = arr1.map((rows,rowIdx) => rows.map((col, colIdx) => col+arr2[rowIdx][colIdx]))
//     return answer;
// }


// 38




// 39
// function solution(n, m) {
//     var answer = [];
//     for(let i = 1; i <= Math.min(n, m); i++) {
//         if(n % i === 0 && m % i === 0 ){
//             var max = i
//         }
//     }
//     answer = [max, n * m / max]
//     return answer;
// }

// 40
// function solution(n) {
//     var answer = 0;
//     answer = parseInt(n.toString(3).split('').reverse().join(""), 3);
//     return answer;
// }
// 31
// function solution(n) {
//     var answer = '';
//     // 홀수일 때 answer = 수, 짝수일 때  answer = 박을 추가함
//     for (let i = 1; i <= n; i++) {
//         i % 2 !== 0 ? answer += "수" : answer += "박" 
//     }
//     return answer;
// }

// 32
// function solution(a, b) {
//     var answer =0;
//     // 내적
//     // a, b에서 같은 인덱스 값 곱하고 answer에다 다 더해주기
//     for(let i = 0; i<a.length; i++) {
//         answer += a[i] * b[i]
//     }
//     return answer;
// }

// 33
// 1. 예시를 봤을 때 약수의 개수가 홀수인 경우 가운데 숫자가 제곱근입니다.
// 2. left ~ right 까지의 수 i를 만들고
// 3. Math.floor를 사용해 정수 i제곱근을 제곱한 값이 i와 같으면 홀수, 아니면 짝수
// 4. 초기값이 0인 answer에 더하고 빼줬습니다.
// function solution(left, right) {
//     var answer =0;
//     for(let i = left; i<=right; i++) {
//         Math.floor(Math.sqrt(i))**2 === i ? answer-=i : answer+=i
//     }
//     return answer;
// }

// 34
// 1. sort로 정렬을 시켜주면 답이 나올 것 같다.
// 2. sort를 쓰기 위해 split으로 각 문자별 배열로 나눠준다.
// 3. 결과를 join을 통해 문자로 만들어준다.  
// function solution(s) {
//     var answer = "";
//         answer = s.split("").sort((a, b) => {
//             if(a < b) return 1;
//             if(a > b) return -1;
//             if(a === b) return 0;
//         }).join("")
//     return answer;
// }

// 35
// 1. price의 count만큼 누적 값들을 구해서 money에서 빼면 나머지 값이 나올 듯 하다.
// 2. price의 count만큼 누적 값을 가지는 배열 c를 만들어준다.
// 3. 배열 c를 reduce를 사용해 누적값들의 합을 구한다.
// 4. 총 값이 가지고 있는 돈보다 크면 나머지 값을 구하고 적으면 0을 return한다.
// function solution(price, money, count) {
//     var a = 0;
//     var c = []
//     for(let i = 1; i<=count; i++) {
//         c.push(a += price);
//     }
//     return c.reduce((a, b) => a + b) > money ? c.reduce((a, b) => a + b) - money : 0
// }

// solution(3, 20, 4)

// 36

// 처음에는 a와 같은 식이 없이 isNaN만 써서 return 안의 식만 썼으나 오류케이스에 하나 걸렸습니다.
// 문서에 isNaN은 오류가 많아 Number.isNaN을 쓰는 것을 추천하였습니다.
// a => s값을 숫자로 만든 후 연산을 해서 숫자가 아니라면 NaN이 뜨게 만들어 Number.isNaN에 걸리게 하였습니다.
// 다시 문자열의 길이가 4 or 6 이면서 a가 NaN이 아니면 true NaN이면 false를 return하게 하여 통과하였습니다.
// 나중에는 삼항연산자의 &&가 조건이기 때문에 return에 true, false 반환을 생략해도 될 것 같아 없애주고 한번 더 통과하였습니다.
// function solution(s) {
//     let a = s.split("").map(Number).reduce((a, b) => a + b)
//     return (s.length === 4 || s.length === 6) && !Number.isNaN(a)
// }

// 37

// 2차원 배열이라 처음에는 for문을 중첩해서 사용해 요소에 접근 했었다.
// 코드를 깔끔하게 쓰기 위해서 map의 value와 index를 중첩으로 사용해서 새로 만들었다.
// arr1의 rows안에서 col을 한번 더 접근하여 value에 접근하고 
// arr2는 인덱스인 rowIdx안에 colIdx으로 value 접근하여 각 행렬을 더해줍니다.
// function solution(arr1, arr2) {
//     var answer = arr1.map((rows,rowIdx) => rows.map((col, colIdx) => col+arr2[rowIdx][colIdx]))
//     return answer;
// }


// 38




// 39
// n, m의 최대 공약수는 두 수를 공통적으로 나누는 가장 큰 수 이므로
// 1부터 두 수중 작은 수까지 i를 만들고 동시에 나눠지는 마지막 i가 최대 공약수이다.
// 최소 공배수는 두 수를 곱한 후 최대 공약수로 나눠서 구한다.
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
// 먼저 toString을 통해 3진법으로 변환 후 split으로 숫자별 배열로 만들어준다.
// reverse로 앞뒤를 뒤집은 후 join으로 다시 묶어준다.
// parseInt를 통해 최종 값을 10진법으로 나타낸다.
function solution(n) {
    var answer = 0;
    answer = parseInt(n.toString(3).split('').reverse().join(""), 3);
    console.log(answer)
    return answer;
}
solution(125)
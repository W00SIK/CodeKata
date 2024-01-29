// 41
// 각 단어별 홀수 짝수 값에 접근해야한다.
// s를 공백을 기준으로 나눠 단어별 배열로 만든다.
// 단어별 배열을 글자별 배열로 나눠 changeUpperLow => 짝수면 대문자 홀수면 소문자로 만든다.
// 글자별 배열을 다시 글자별로 합쳐주고 단어별 배열을 다시 단어별로 합쳐준다.

// function solution(s) {
//     let changeUpperLow = (twoValue, index ) => {
//         return index % 2 === 0 ? twoValue.toUpperCase() : twoValue.toLowerCase()
//     }
//     let answer = s.split(" ").map((oneValue)=>oneValue.split("").map((twoValue, index) => changeUpperLow(twoValue, index)).join("")).join(" ")
//     console.log(s.split(" "))
//     return answer
// }
// solution("try hello world")

// 42
// 자신이 겹치지 않는 모든 번호 쌍의 덧셈을 하면 될 것 같다.
// 앞의 수의 +1 부터 number.length 까지의 a, b, c를 만든다.
// 모든 경우의 수인 a, b, c를 더했을 때 0이 되면 answer의 카운트를 1씩 증가 시킨다.
function solution(number) {
    var answer = 0;
    for(let a = 0; a<number.length; a++) {
        for(let b = a+1; b<number.length; b++){
            for(let c = b+1; c<number.length; c++) {
                if(number[a] + number[b] + number[c]===0){
                    answer++
                }
            }
        }
    }
    return answer;
}
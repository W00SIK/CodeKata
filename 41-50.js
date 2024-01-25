// 41
// 각 단어별 홀수 짝수 값에 접근해야한다.
// s를 공백을 기준으로 나눠 단어별 배열로 만든다.
// 단어별 배열을 글자별 배열로 나눠 changeUpperLow => 짝수면 대문자 홀수면 소문자로 만든다.
// 글자별 배열을 다시 글자별로 합쳐주고 단어별 배열을 다시 단어별로 합쳐준다.

function solution(s) {
    let changeUpperLow = (twoValue, index ) => {
        return index % 2 === 0 ? twoValue.toUpperCase() : twoValue.toLowerCase()
    }
    let answer = s.split(" ").map((oneValue)=>oneValue.split("").map((twoValue, index) => changeUpperLow(twoValue, index)).join("")).join(" ")
    console.log(s.split(" "))
    return answer
}
solution("try hello world")
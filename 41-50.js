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
// function solution(number) {
//     var answer = 0;
//     for(let a = 0; a<number.length; a++) {
//         for(let b = a+1; b<number.length; b++){
//             for(let c = b+1; c<number.length; c++) {
//                 if(number[a] + number[b] + number[c]===0){
//                     answer++
//                 }
//             }
//         }
//     }
//     return answer;
// }

// 43
// 0부터 t.length만큼 반복시켜 모든 경우의 수를 뽑아내며 아래와 같은 조건을 준다.
// substr를 이용해 t에서 p의 길이와 같은 문자열이며
// 그 값들이 p보다 작을 때 answer의 카운트를 늘린다.

// function solution(t, p) {
//     var answer = 0;
//     for (let i = 0; i<t.length; i++) {
//         if(t.substr(i, p.length).length === p.length && t.substr(i, p.length) <= p){
//             answer++
//         }
//     }
//     return answer;
// }


// 44
// 예시를 보니 큰 값들 중에 최대값과 작은 값들 중에 최대 값을 곱하면 최소 지갑의 넓이가 나올 듯 하다.
// 2차원 배열 sizes를 sort를 통해 내림 차순으로 만들어 push 각각 0번째 배열 = a, 1번째 배열 = b를 만든다.
// 각 a, b의 최대값을 구하기 위해 2차원 배열을 전개연산자를 사용 후 Math.max를 사용
// 두 값을 곱해 넓이를 구한다.

function solution(sizes) {
    
    var a = []
    var b = []
    
    sizes.forEach((v)=>{
        v.sort((x, y) => y - x)
        a.push(v[0])
        b.push(v[1])
    })

    answer = Math.max(...a) * Math.max(...b);
    return answer;
}
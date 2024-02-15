// 최대 수익 과일을 먼저 넣기위해 sort로 내림차순을 만들어준다.
// slice를 통해 m만큼 증가하는 i를 i+m 까지 length를 가지는 상자 value를 만든다.
// 내림차순으로 끝에 값이 최소값이다.
// 과일 개수와 상자의 끝의 값 m-1을 곱한 후 전부 더해준다.
function solution(k, m, score) {
    var answer = 0;
    for(let i = 0; i<score.length; i+=m){
        let value = score.sort((a, b) => b-a).slice(i, i+m)
        if(value.length === m){
            answer += m * value[m-1]
        }
    }
    return answer;
}
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])
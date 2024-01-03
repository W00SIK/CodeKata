function solution(k, score) {
    var answer = [];
    let m = []
    for (let i = 0; i<score.length; i++) {
            m.push(score[i])
            m.sort((a, b) => b - a)
        }
    // console.log(answer)
    return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200])

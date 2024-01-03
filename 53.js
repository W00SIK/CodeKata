function solution(k, score) {
    var answer = [];
    let m = []
    let n = []
    for (let i = 0; i < score.length; i++) {
        m.push(score[i])
        if (m.length < k) {
            m.sort((a, b) => a - b)
            answer.push(m[0])
        } else if (m.length >= k) {
            m.sort((a, b) => b - a)
            answer.push(m[k-1])
        }
    }
    return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200])

function solution(a, b, n) {
    var answer = 0;
    while( a <= n) {
        answer += Math.trunc(n / a)*b
        n = Math.trunc(n / a)*b + (n % a)
    }
    console.log(answer)
    return answer;
}
solution(2, 1, 20)
solution(3, 1, 20)

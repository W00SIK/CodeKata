function solution(a, b) {
    var answer = '';
    // 1월 1일 기준 1일 금요일 배열은 0 부터 시작 전 날 "THU"
    const dayWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    // 2016년 월의 일 수
    const dayMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,]
    
    let month = 0
    for (let i = 0; i < a-1; i++) {
        month += dayMonth[i];
    }
    month += b;
    answer = dayWeek[month%7]
    return answer;
}

solution(5, 24)
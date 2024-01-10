function solution(cards1, cards2, goal) {
    // 1. 카드를 앞에서 부터 사용하면 사용할 때마다 다음 카드가 index = 0을 가짐
    // 2. goal의 현재 요소와 cards1[0], cards2[0]을 비교 후 
    // 3. 값이 동일하면 [0] 카드를 써줌
    // 4. 순차적으로 잘 빠져서 전부 비교하면 Yes를 리턴
    // 5. 조건에 안 들어가면 No
    for (let i =0; i<goal.length; i++) {
        if(cards1[0] == goal[i]) {
            cards1.shift();
        } else if (cards2[0] ==  goal[i]) {
            cards2.shift()
        } else {
            return "No"
        }
    }
    return 'Yes';
}

solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])
solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])
solution(["i", "drink", "water"], ["to", "want"], ["i", "want", "to", "drink", "water"])


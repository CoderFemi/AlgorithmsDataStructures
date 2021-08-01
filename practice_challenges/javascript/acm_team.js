const acmTeam = (topics) => {
    let maxTopics = 0
    let maxTeams = 0
    let start = 0
    let next = 0
    while (true) {
        if (start === topics.length - 1) break
        next++
        let tempTopics = 0
        const memberOne = topics[start]
        const memberTwo = topics[next]
        for (let i = 0; i < memberOne.length; i++) {
            let known = false
            if (memberOne[i] === '1' || memberTwo[i] === '1') {
                known = true
            }
            if (known) {
                tempTopics++
            }
        }
        if (tempTopics > maxTopics) {
            maxTopics = tempTopics
            maxTeams = 1
        } else if (tempTopics === maxTopics) {
            maxTeams++
        }
         
        if (next === topics.length - 1) {
            start++
            next = start
        }
    }
    return [maxTopics, maxTeams]
}

const result = acmTeam(['10101', '11100', '11010', '00101'])
console.log(result)
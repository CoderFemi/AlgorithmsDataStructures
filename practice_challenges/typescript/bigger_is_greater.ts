const biggerIsGreater = (word: string): string => {
    let answer = 'no answer'

    for (let index = word.length - 1; index > 0; index--) {
        const prevIndex = index - 1
        const char = word[index]
        const prevChar = word[prevIndex]

        if (char > prevChar) {
            const strArray = word.split('')
            let subArr = strArray.slice(prevIndex)
            subArr = subArr.sort()
            const prevCharIndex = subArr.lastIndexOf(prevChar)
            const swapIndex = prevCharIndex + 1
            const swapChar = subArr[swapIndex]
            subArr.splice(swapIndex, 1)
            answer = [...strArray.slice(0, prevIndex), swapChar, ...subArr].join('')
            break
        }
    }

    return answer
}



// console.log(biggerIsGreater('ab'))
// console.log(biggerIsGreater('bb'))
// console.log(biggerIsGreater('hefg'))
// console.log(biggerIsGreater('dhck'))
// console.log(biggerIsGreater('dkhc'))
// console.log(biggerIsGreater('lmno'))
// console.log(biggerIsGreater('dcba'))
// console.log(biggerIsGreater('dcbb'))
// console.log(biggerIsGreater('abdc'))
// console.log(biggerIsGreater('abcd'))
// console.log(biggerIsGreater('fedcbabcd'))

// console.log(biggerIsGreater('wvokkqbmgbnwrbdlzwqfanzxtwiqasxgqnwvrlhwnhlhbkxx'))

const test_case_strings = ['mqyvczrlabtesyeiteblqklfhkchcryggkewpsfxsumvsjerssbltntydzwrjvf', 'pzxgfnsapnchz', 'erwidqokyjfpctpfxuojyloafghxgifdvhcmzjogoqoikjhjngbhfetvtraaojkfqvyujbhdizrkvqmfpzbidysbkhvuebtr', 'xywhpljspfeiznzisvukwcaizeqwgavokqwxkrotsgchxdupsumgcynfrpcjsylnrzgxdfkctcrkcnvkxgtmiabghcorgnxak', 'ywghcadvjurpjgwgfyis', 'pqommldkafmnwzidydgjghxcbnwyjdxpvmkztdfmcxlkargafjzeye', 'victjarfqkynoavgmhtpzbpcrblzyrzyxjrjlwjxmxdslsubyqdcqcdoenufzxqlty', 'tlxqigvjmfuxku', 'cryrpwccrnspwnruubekqkjmrkvwoohzvkctejwvkqfarqgbjzbggyxmecpshgccclykjd', 'jhrmxpdfhjjubrycaurjjwvkasfyxjkf', 'acs', 'aeukmuqpwyrrdkoptlawlpxknjhdnzlzrgfzliojgopwvwafzxyiwevsxwmwlxycppmjlpxafdnpioezfdkyafryx', 'zvtronmlkkihc', 'zzzyyyyxxxxwwwwwvvuuuuuuuttttsssrrrqqqqpppooooonnnnmmmllkjjjjiiiiihhhgggfeeeddcccbbbaa', 'zzyyxxxwwwwvvvvuuuutrrqqqqppoooonnmmllkkkjjjiihhhggfffeeebbbbbbbbb', 'dinodxkbrsipxfznzevrpbgtrrfbbfdaksagnus', 'sykgwoyzypukuditxxltlunmbznk', 'zzyyyxxxxxwwwwvuuuuttttssrrrrpppponnnmmmmlllllkkkkjjjiiiiiiggfffffeeeddccbbba', 'spceooivwyzjfbejljaizdvrdkeipvetcxvzmkmwuuqdndwuhxdmrmitzsgjcipanobhxphdactouymkyo', 'iekgvftshvqkkbbxrhhgypngmekykkshhmphfjhcflfknwcxqrearjzsfpryvtahsjawpdufwuqroyckgnph', 'jwzgvwcljudksghspryqrbjaylokhccptiligqndzswxqtafrunwflkgfrhgkadp', 'jvbodrobnjihwpnvlyxlixtmska', 'mllfsvfzllbloukxtonftmlmioqdsdxstdzmyamnut', 'mexyunrrcglszqwzatguscgvukuyenogubuwwiavudhvzbpgwjwxazvdzfgumudbgtaubmxyqrzbeagjrthedvvmrngxlilczov', 'shsdzboibebzlfluhgkypbppkxvtgfm', 'wvokkqbmgbnwrbdlzwqfanzxtwiqasxgqnwvrlhwnhlhbkxx', 'nennccrmeeflwmpqfvgtiapirdbjjqozvtbrmixnonbhddgxtxp', 'wffbownokzqkxgobgxclscwbsgeaxbozfcftxiugiahpufilwuhdmugsotdzatvdvuhqum', 'zzzzyyyxxxxwvvvuuuuuttssssssrrrqqqqqppppppponmmmmmlllkkjjihhggfeeeeeddddccbaaaaa', 'zzzzzzzyyxxwwwvvuuuuuuttttsssssrrrrqqqqpooonnnmmmmmmmmllllkkjjiihhhgggfffffeeeeedddddccccbbbbaa', 'zyyyyxxxxwwwwwvvuuttttssrrqqpponnmkjjjihhggggfffeddddcccccbbbba']

const testCaseResult = ['mqyvczrlabtesyeiteblqklfhkchcryggkewpsfxsumvsjerssbltntydzwrvfj', 'pzxgfnsapnczh', 'erwidqokyjfpctpfxuojyloafghxgifdvhcmzjogoqoikjhjngbhfetvtraaojkfqvyujbhdizrkvqmfpzbidysbkhvuerbt', 'xywhpljspfeiznzisvukwcaizeqwgavokqwxkrotsgchxdupsumgcynfrpcjsylnrzgxdfkctcrkcnvkxgtmiabghcorgnxka', 'ywghcadvjurpjgwgfysi', 'pqommldkafmnwzidydgjghxcbnwyjdxpvmkztdfmcxlkargafjzyee', 'victjarfqkynoavgmhtpzbpcrblzyrzyxjrjlwjxmxdslsubyqdcqcdoenufzxqlyt', 'tlxqigvjmfuxuk', 'cryrpwccrnspwnruubekqkjmrkvwoohzvkctejwvkqfarqgbjzbggyxmecpshgcccydjkl', 'jhrmxpdfhjjubrycaurjjwvkasfyxkfj', 'asc', 'aeukmuqpwyrrdkoptlawlpxknjhdnzlzrgfzliojgopwvwafzxyiwevsxwmwlxycppmjlpxafdnpioezfdkyafxry', 'no answer', 'no answer', 'no answer', 'dinodxkbrsipxfznzevrpbgtrrfbbfdaksagsnu', 'sykgwoyzypukuditxxltlunmkbnz', 'no answer', 'spceooivwyzjfbejljaizdvrdkeipvetcxvzmkmwuuqdndwuhxdmrmitzsgjcipanobhxphdactouymoky', 'iekgvftshvqkkbbxrhhgypngmekykkshhmphfjhcflfknwcxqrearjzsfpryvtahsjawpdufwuqroyckgphn', 'jwzgvwcljudksghspryqrbjaylokhccptiligqndzswxqtafrunwflkgfrhgkapd', 'jvbodrobnjihwpnvlyxlixtsakm', 'mllfsvfzllbloukxtonftmlmioqdsdxstdzmyamtnu', 'mexyunrrcglszqwzatguscgvukuyenogubuwwiavudhvzbpgwjwxazvdzfgumudbgtaubmxyqrzbeagjrthedvvmrngxlilczvo', 'shsdzboibebzlfluhgkypbppkxvtgmf', 'wvokkqbmgbnwrbdlzwqfanzxtwiqasxgqnwvrlhwnhlhbxkx', 'nennccrmeeflwmpqfvgtiapirdbjjqozvtbrmixnonbhddgxxpt', 'wffbownokzqkxgobgxclscwbsgeaxbozfcftxiugiahpufilwuhdmugsotdzatvdvuhumq', 'no answer', 'no answer', 'no answer']
const stringsResult = test_case_strings.map((str) => biggerIsGreater(str))

testCaseResult.forEach((str, index) => {
    if (str !== stringsResult[index]) {
        console.log(str, stringsResult[index])
    }
})
console.log('FINISH')
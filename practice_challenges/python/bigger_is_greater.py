def biggerIsGreater(word):
    temp = ''
    for index in range(len(word) - 1, -1, -1):
        current = index

        if index > 0:
            prev = index - 1
        else:
            prev = index

        if index < len(word) - 1:
            next = index + 1
        else:
            next = index

        swap_char = temp or word[current]
        swap = False

        if word[current] > word[prev] and word[current] <= word[next]:
            swap = True

        if swap:
            greater_word = ''
            if not temp:
                greater_word = f'{word[:prev]}{swap_char}{word[prev]}'
            else:
                popped = word.replace(swap_char, '')
                greater_word = f'{popped[:current]}{swap_char}{popped[current:]}'
            return greater_word
        else:
            if index == len(word) - 1:
                temp = word[index]
                continue
            if temp > word[current]:
                temp = word[current]

    return 'no answer'


print(biggerIsGreater('ab'))
print(biggerIsGreater('bb'))
print(biggerIsGreater('hefg'))
print(biggerIsGreater('dhck'))
print(biggerIsGreater('dkhc'))

print(biggerIsGreater('lmno'))
print(biggerIsGreater('dcba'))
print(biggerIsGreater('dcbb'))
print(biggerIsGreater('abdc'))
print(biggerIsGreater('abcd'))
print(biggerIsGreater('fedcbabcd'))

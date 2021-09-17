def gameOfThrones(str_word) -> str:
    """Determine if string can generate a palindrome"""
    answer = "NO"
    is_even_len = len(str_word) % 2 == 0
    counter = {}
    for char in str_word:
        try:
            counter[char] += 1
        except KeyError:
            counter[char] = 1

    odd_count = 0
    for char in counter:
        count = counter[char]
        is_odd_count = count % 2 == 1
        if is_even_len:
            if is_odd_count:
                return answer
        else:
            if is_odd_count:
                if odd_count > 1:
                    return answer
                odd_count += 1

    answer = "YES"
    return answer


print(gameOfThrones("aabbccdd"))
print(gameOfThrones("aaabbbb"))
print(gameOfThrones("cdefghmnopqrstuvw"))
print(gameOfThrones("cdcdcdcdeeeef"))

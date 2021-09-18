def twoStrings(str_one, str_two) -> str:
    """Determine if two strings have common substrings"""
    answer = "NO"
    counter = {}
    has_occurred = False
    for char in str_one:
        try:
            has_occurred = counter[char]
            if has_occurred:
                continue
        except KeyError:
            counter[char] = True
            if char in str_two:
                answer = "YES"
                break

    return answer


print(twoStrings("hello", "world"))
print(twoStrings("hi", "world"))

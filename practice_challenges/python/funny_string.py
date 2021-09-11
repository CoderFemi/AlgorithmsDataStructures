def funnyString(string_letters) -> str:
    """Determine if string is funny"""

    index = 0
    next_index = 0
    last = len(string_letters) - 1
    prev = 0
    funny = True

    while index < len(string_letters) - 1:
        next_index = index + 1
        char_value = ord(string_letters[index])
        next_char_value = ord(string_letters[next_index])
        difference = abs(char_value - next_char_value)

        prev = last - 1
        last_char_value = ord(string_letters[last])
        prev_char_value = ord(string_letters[prev])
        reversed_difference = abs(last_char_value - prev_char_value)

        if difference != reversed_difference:
            funny = False
            break

        index += 1
        last -= 1

    if funny:
        return "Funny"
    else:
        return "Not Funny"


print(funnyString("acxz"))
print(funnyString("bcxz"))

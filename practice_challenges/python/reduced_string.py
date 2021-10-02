def superReducedString(str) -> str:
    """Form a string of non-adjacent letters"""

    def reduce(str_word):
        reduced_string = ""
        prev_char = str_word[0]
        is_adjacent = False
        count = 1
        for index in range(1, len(str_word)):
            char = str_word[index]
            is_odd = count % 2 == 1
            if char != prev_char:
                if is_odd:
                    reduced_string += prev_char
                prev_char = char
                count = 1
                if index == len(str_word) - 1:
                    reduced_string += char
            else:
                is_adjacent = True
                count += 1
                is_odd = count % 2 == 1
                if index == len(str_word) - 1 and is_odd:
                    reduced_string += char

        if len(reduced_string) > 0 and is_adjacent:
            return reduce(reduced_string)
        elif len(reduced_string) > 0 and not is_adjacent:
            return reduced_string
        else:
            return "Empty String"

    return reduce(str)


# def superReducedString(str_word):
#     reduced_string = ""
#     str_set = list({char: None for char in str_word})
#     for char in str_set:
#         count = str_word.count(char)
#         if count % 2 == 1:
#             reduced_string += char

#     if len(reduced_string) > 0:
#         return reduced_string
#     else:
#         return "Empty String"


print(superReducedString("aa"))
print(superReducedString("baab"))
print(superReducedString("aaabbbccddd"))
print(
    superReducedString(
        "zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh"
    )
)

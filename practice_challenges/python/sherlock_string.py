from test_case_data import test_case_sherlock


def isValid(str_word) -> str:
    """Determine if string input is a valid string"""

    is_valid = "NO"

    counter = {}
    for char in str_word:
        try:
            counter[char] += 1
        except KeyError:
            counter[char] = 1

    char_frequencies = {}
    for frequency in counter.values():
        try:
            char_frequencies[frequency] += 1
        except KeyError:
            char_frequencies[frequency] = 1

    if len(char_frequencies) > 2:
        return is_valid

    if len(char_frequencies) == 1:
        is_valid = "YES"

    for frequency in char_frequencies:
        if frequency == char_frequencies[frequency] == 1:
            is_valid = "YES"

    return is_valid


# def isValid(str_word) -> str:
#     """Determine if string input is a valid string"""
#     is_valid = "NO"
#     if len(str_word) == 1:
#         is_valid = 'YES'
#         return is_valid

#     counter = {}
#     for char in str_word:
#         try:
#             counter[char] += 1
#         except KeyError:
#             counter[char] = 1

#     char_frequencies = {}
#     for frequency in counter.values():
#         try:
#             char_frequencies[frequency] += 1
#         except KeyError:
#             char_frequencies[frequency] = 1

#     if len(char_frequencies) > 2:
#         return is_valid

#     frequencies_list = char_frequencies.values()
#     higher_freq = max(frequencies_list)
#     lower_freq = min(frequencies_list)

#     if higher_freq > lower_freq:
#         if lower_freq != 1:
#             return is_valid
#     else:
#         if lower_freq != higher_freq + 1:
#             return is_valid

#     is_valid = "YES"
#     return is_valid


# print(isValid("aabbcd"))
# print(isValid('aabbccddeefghi'))
# print(isValid("abcdefghhgfedecba"))
# print(isValid("aaaabbcc"))
# print(isValid("aabbccddeefghi"))
print(isValid("abcdefghhgfedecba"))
# print(isValid(test_case_sherlock))

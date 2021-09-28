def buildPalindrome(str_one, str_two) -> str:
    """Construct palindrome from two strings"""
    str_palindrome = ""
    substr_start = 0
    end_index = len(str_one)
    substr_end = end_index
    str_permutations = []

    while True:
        if substr_end == substr_start:
            substr_start += 1
            substr_end = end_index

        if substr_start == end_index:
            break

        substr = str_one[substr_start:substr_end]
        str_permutations.append(substr)

        substr_end -= 1

    str_permutations.sort(reverse=True)
    substr_start = 0
    end_index = len(str_two)
    substr_end = end_index

    while True:
        if substr_end == substr_start:
            substr_start += 1
            substr_end = end_index

        if substr_start == end_index:
            break

        substr = str_two[substr_start:substr_end]

        for perm in str_permutations:
            str_concat = perm + substr
            reversed_str = str_concat[::-1]

            if reversed_str == str_concat:

                if len(str_palindrome) < len(str_concat):
                    str_palindrome = str_concat
                elif len(str_palindrome) == len(str_concat):
                    if str_palindrome > str_concat:
                        str_palindrome = str_concat
                # break

        substr_end -= 1

    if len(str_palindrome) > 0:
        return str_palindrome
    else:
        return "-1"


# def buildPalindrome(str_one, str_two) -> str:
#     """Construct palindrome from two strings"""
#     str_palindrome = ""
#     substr_start = 0
#     end_index = len(str_one)
#     substr_end = end_index
#     str_permutations_one = []
#     str_permutations_two = []
#     print(len(str_one), len(str_two))

#     while True:
#         if substr_end == substr_start:
#             substr_start += 1
#             substr_end = end_index

#         if substr_start == end_index:
#             break

#         substr = str_one[substr_start:substr_end]
#         str_permutations_one.append(substr)
#         substr_end -= 1

#     substr_start = 0
#     end_index = len(str_two)
#     substr_end = end_index

#     while True:
#         if substr_end == substr_start:
#             substr_start += 1
#             substr_end = end_index

#         if substr_start == end_index:
#             break

#         substr = str_two[substr_start:substr_end]
#         str_permutations_two.append(substr)
#         substr_end -= 1

#     str_permutations_one.sort(reverse=True)
#     str_permutations_two.sort(reverse=True)

#     for perm_one in str_permutations_one:
#         for perm_two in str_permutations_two:
#             str_concat = perm_one + perm_two
#             reversed_str = str_concat[::-1]

#             if reversed_str == str_concat:
#                 # if len(str_concat) == 7:
#                 #     print(str_concat)
#                 if len(str_palindrome) < len(str_concat):
#                     str_palindrome = str_concat
#                 elif len(str_palindrome) == len(str_concat):
#                     if str_palindrome > str_concat:
#                         str_palindrome = str_concat

#     if len(str_palindrome) > 0:
#         return str_palindrome
#     else:
#         return "-1"


# print(buildPalindrome("bac", "bac"))
# print(buildPalindrome("abc", "def"))
# print(buildPalindrome("jdfh", "fds"))
print(
    buildPalindrome(
        "ddqpcjxzftwrlgptrkbkrlwgsnlcaudzdujbb",
        "qlfzikgxohvhtuvcjmmwvhkxcg",
    )
)

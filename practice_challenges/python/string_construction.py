def stringConstruction(str_word) -> int:
    """Find the cost of copying string to a new one"""
    unique_chars = list(set(str_word))
    cost = len(unique_chars)

    return cost


# def stringConstruction(str_word) -> int:
#     """Find the cost of copying string to a new one"""
#     new_string = ""
#     cost = 0
#     start = 0

#     while start < len(str_word):
#         substr = ""
#         is_substr = False
#         stop = start + len(new_string)
#         while stop > start:
#             substr = str_word[start:stop]
#             if substr in new_string:
#                 is_substr = True
#                 break
#             stop -= 1

#         if is_substr:
#             start = stop
#         else:
#             substr = str_word[start]
#             cost += 1
#             start += 1

#         new_string += substr

#     return cost


print(stringConstruction("abcabc"))
print(stringConstruction("abcd"))
print(stringConstruction("abab"))

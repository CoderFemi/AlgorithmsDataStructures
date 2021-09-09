import string


def weightedUniformStrings(str, queries):
    """Determine weights of uniform substrings"""
    alphabet = string.ascii_lowercase
    alphabet_weights = {}

    for index in range(len(alphabet)):
        char = alphabet[index]
        alphabet_weights[char] = index + 1

    str_split = []
    prev_char = ""
    start_slice = 0

    for char_index in range(len(str)):
        char = str[char_index]
        if char != prev_char:
            slice = str[start_slice:char_index]
            if slice:
                str_split.append(slice)
            start_slice = char_index
            prev_char = char

        if char_index == len(str) - 1:
            try:
                slice = str[start_slice:]
                str_split.append(slice)
            except IndexError:
                pass

    for query_index in range(len(queries)):
        query = queries[query_index]
        is_match = False
        for substr in str_split:
            weight = alphabet_weights[substr[0]]
            is_multiple = query % weight == 0
            if is_multiple:
                frequency = len(substr)
                check_frequency = query / weight
                if check_frequency <= frequency:
                    is_match = True
                    break

        if is_match:
            queries[query_index] = "Yes"
        else:
            queries[query_index] = "No"

    return queries


# def weightedUniformStrings(str, queries):
#     """Determine weights of uniform substrings"""
#     alphabet = string.ascii_lowercase
#     alphabet_weights = {}

#     for index in range(len(alphabet)):
#         char = alphabet[index]
#         alphabet_weights[char] = index + 1

#     str_set = sorted(list(set(str)))

#     for query_index in range(len(queries)):
#         query = queries[query_index]
#         is_match = False
#         for char in str_set:
#             weight = alphabet_weights[char]
#             is_multiple = query % weight == 0
#             if is_multiple:
#                 frequency = str.count(char)
#                 check_frequency = int(query / weight)

#                 if check_frequency <= frequency:
#                     is_match = True
#                     break

#         if is_match:
#             queries[query_index] = "Yes"
#         else:
#             queries[query_index] = "No"

#     return queries

# def weightedUniformStrings(str, queries):
#     """Determine weights of uniform substrings"""
#     alphabet = string.ascii_lowercase
#     alphabet_weights = {}

#     for index in range(len(alphabet)):
#         char = alphabet[index]
#         alphabet_weights[char] = index + 1

#     count = 0
#     prev_char = ""
#     for char in str:
#         if char == prev_char:
#             count += 1
#         else:
#             count = 1

#         weight = alphabet_weights[char]
#         total_weight = weight * count
#         try:
#             query_index = queries.index(total_weight)
#             queries[query_index] = "Yes"
#         except ValueError:
#             pass
#         # print(char, count, weight)
#         # print(queries)
#         prev_char = char

#     queries = [char if char == "Yes" else "No" for char in queries]

#     return queries


print(weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10]))
print(weightedUniformStrings("aaabbbbcccddd", [9, 7, 8, 12, 5]))

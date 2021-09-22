# def commonChild(str_one, str_two) -> int:
#     '''Find the length of common substring of two strings'''
#     count = 0
#     unique_chars = list(set(str_one))
#     for char in unique_chars:
#         if char not in str_two:
#             count += 1
#             str_one = str_one.replace(char, '')

#     unique_chars = list(set(str_two))
#     for char in unique_chars:
#         if char not in str_one:
#             count += 1
#             str_two = str_two.replace(char, '')
    
#     print(str_one)
#     print(str_two)

#     return count


def commonChild(str_one, str_two) -> int:
    '''Find the length of common substring of two strings'''
    index_counter = {}
    count = 0
    prev_index = -1
    reset = False
    reset_count = 0
    reset_index = -1

    for char_index in range(len(str_one)):
        char = str_one[char_index]
        try:
            search_index = index_counter[char]
        except KeyError:
            search_index = 0
            index_counter[char] = search_index

        index_match = str_two.find(char, search_index)

        if index_match != -1:
            index_counter[char] = index_match + 1
            if index_match > prev_index:
                count += 1
                prev_index = index_match
            else:
                reset = True
                if index_match > reset_index:
                    reset_count += 1
                else:
                    if reset_count > count:
                        count = reset_count
                    reset_count = 0
                reset_index = index_match

            # print(search_index, index_match)
            # print(char, prev_index, count, reset_index, reset_count)

            if reset and reset_index == prev_index:
                count = reset_count
                reset_count = 0
                reset = False
            
    return count


# print(commonChild('ABCD', 'ABDC'))
# print(commonChild('HARRY', 'SALLY'))
# print(commonChild('AA', 'BB'))
# print(commonChild('SHINCHAN', 'NOHARAAA'))
# print(commonChild('ABCDEF', 'FBDAMN'))
# print(commonChild('OUDFRMYMAW', 'AWHYFCCMQX'))
print(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'))
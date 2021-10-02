def bigSorting(unsorted) -> list:
    """Sort big numbers"""
    list_str = unsorted
    list_str.sort(key=int)
    return list_str


# def bigSorting(unsorted) -> list:
#     '''Sort big numbers'''
#     list_str = unsorted
#     index = 1

#     while index < len(list_str):
#         current_index = index
#         current_val = list_str[current_index]
#         prev_index = index - 1

#         while prev_index >= 0:
#             prev_val = list_str[prev_index]

#             if int(current_val) < int(prev_val):
#                 list_str[current_index] = prev_val
#                 list_str[prev_index] = current_val

#             prev_index -= 1
#             current_index -= 1

#         index += 1

#     return list_str


print(bigSorting(["31415926535897932384626433832795", "1", "3", "10", "3", "5", "44"]))
# fmt:off
print(bigSorting(['1','2','100','12303479849857341718340192371','3084193741082937','3084193741082938','111','200']))
# fmt:on

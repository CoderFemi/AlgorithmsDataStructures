def nonDivisibleSubset(k, list_num) -> int:
    """Determine the longest permutation of non-multiples of k"""

    longest_permutation = 0
    counter = {}

    for num in list_num:
        remainder = num % k
        try:
            counter[remainder] = counter[remainder] + 1
        except KeyError:
            counter[remainder] = 1

    mid_num = int(k / 2)
    previous_num = mid_num - 1
    next_num = mid_num + 1

    if k % 2 == 1:
        previous_num = mid_num
    else:
        frequency = counter.get(mid_num)
        if frequency:
            longest_permutation += 1

    frequency = counter.get(0)
    if frequency:
        longest_permutation += 1

    while True:
        if previous_num == 0 or next_num == k:
            break

        frequency_prev = counter.get(previous_num)
        frequency_next = counter.get(next_num)

        if frequency_prev and frequency_next:
            if frequency_prev > frequency_next:
                longest_permutation += frequency_prev
            else:
                longest_permutation += frequency_next
        elif frequency_prev:
            longest_permutation += frequency_prev
        elif frequency_next:
            longest_permutation += frequency_next

        previous_num -= 1
        next_num += 1

    return longest_permutation


# def nonDivisibleSubset(k, set) -> int:
#     """Determine the longest permutation of non-multiples of k"""

#     longest_permutation = 0
#     start_index = 0
#     lengths = []
#     while start_index < len(set) - 1:
#         start = set[start_index]
#         next_index = start_index + 1
#         temp_permutations = [[start]]

#         for index in range(next_index, len(set)):
#             next = set[index]
#             is_nondivisible_start = (start + next) % k != 0
#             if is_nondivisible_start:
#                 belongs_permutations = False
#                 for temp_index in range(len(temp_permutations)):
#                     temp_list = temp_permutations[temp_index]
#                     belongs_temp_list = True
#                     for num in temp_list:
#                         is_nondivisible_every = (num + next) % k != 0
#                         belongs_temp_list = belongs_temp_list and is_nondivisible_every
#                     if belongs_temp_list:
#                         print("BELONGS")
#                         belongs_permutations = belongs_temp_list
#                         temp_permutations[temp_index] = temp_list + [next]

#                     len_list = len(temp_permutations[temp_index])
#                     lengths.append(len_list)
#                     if len_list > longest_permutation:
#                         longest_permutation = len_list

#                 if not belongs_permutations:
#                     print("NONDIVISIBLE START")
#                     temp_permutations.append([start, next])
#                 print(start, next)
#                 print(temp_permutations)

#         start_index += 1

#     print(lengths)
#     return longest_permutation

# fmt:off
print(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]))
print(nonDivisibleSubset(3, [1, 7, 4]))
print(
    nonDivisibleSubset(11, [582740017, 954896345, 590538156, 298333230, 859747706, 155195851, 331503493, 799588305, 164222042, 563356693, 80522822, 432354938, 652248359] )
)
print(
    nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436] )
)
# fmt:on

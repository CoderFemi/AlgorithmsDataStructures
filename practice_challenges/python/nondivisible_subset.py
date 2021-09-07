def nonDivisibleSubset(k, set) -> int:
    """Determine the longest permutation of non-multiples of k"""

    longest_permutation = 0
    start_index = 0
    lengths = []
    while start_index < len(set) - 1:
        start = set[start_index]
        next_index = start_index + 1
        temp_permutations = [[start]]

        for index in range(next_index, len(set)):
            next = set[index]
            is_nondivisible_start = (start + next) % k != 0
            if is_nondivisible_start:
                belongs_permutations = False
                for temp_index in range(len(temp_permutations)):
                    temp_list = temp_permutations[temp_index]
                    belongs_temp_list = True
                    for num in temp_list:
                        is_nondivisible_every = (num + next) % k != 0
                        belongs_temp_list = belongs_temp_list and is_nondivisible_every
                    if belongs_temp_list:
                        print("BELONGS")
                        belongs_permutations = belongs_temp_list
                        temp_permutations[temp_index] = temp_list + [next]

                    len_list = len(temp_permutations[temp_index])
                    lengths.append(len_list)
                    if len_list > longest_permutation:
                        longest_permutation = len_list

                if not belongs_permutations:
                    print("NONDIVISIBLE START")
                    temp_permutations.append([start, next])
                print(start, next)
                print(temp_permutations)

        start_index += 1

    print(lengths)
    return longest_permutation


# print(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]))
# print(nonDivisibleSubset(3, [1, 7, 4]))
print(
    nonDivisibleSubset(
        11,
        [
            582740017,
            954896345,
            590538156,
            298333230,
            859747706,
            155195851,
            331503493,
            799588305,
            164222042,
            563356693,
            80522822,
            432354938,
            652248359,
        ],
    )
)

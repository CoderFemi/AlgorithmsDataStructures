from test_case_data import beautiful_pairs_data


def beautifulPairs(list_one, list_two) -> int:
    """Calculate number of beautiful pairs"""

    count = 0
    char_counter = {}
    first_index_available = False
    second_index_available = False

    for num in list_one:
        count_num = 0
        try:
            count_num = char_counter[num]
        except KeyError:
            count_num_one = list_one.count(num)
            count_num_two = list_two.count(num)
            char_counter[num] = count_num_two
            count_num = count_num_two

            if count_num_two == 0:
                first_index_available = True

            if count_num_one < count_num_two:
                second_index_available = True

        if count_num > 0:
            count += 1
            char_counter[num] = count_num - 1

    if first_index_available:
        if second_index_available:
            count += 1
        else:
            for num in list_two:
                if num not in list_one:
                    second_index_available = True
            if second_index_available:
                count += 1

    if not first_index_available and not second_index_available:
        count -= 1

    return count


print(beautifulPairs([10, 11, 12, 5, 14], [8, 9, 11, 11, 5]))
print(beautifulPairs([1, 2, 3, 4], [1, 2, 3, 3]))
print(beautifulPairs([3, 5, 7, 11, 5, 8], [5, 7, 11, 10, 5, 8]))
print(beautifulPairs(beautiful_pairs_data[1][0], beautiful_pairs_data[1][1]))
print(beautifulPairs(beautiful_pairs_data[2][0], beautiful_pairs_data[2][1]))

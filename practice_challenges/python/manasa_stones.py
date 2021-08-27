def stones(num_stones, diff_one, diff_two):
    possible_values = []
    if diff_one == diff_two:
        possible_values.append(diff_one * (num_stones - 1))
        return possible_values

    for num in range(num_stones):
        diff_two_freq = num
        diff_one_freq = num_stones - (diff_two_freq + 1)
        possible_value = diff_one * diff_one_freq + diff_two * diff_two_freq
        possible_values.append(possible_value)

    if diff_one > diff_two:
        possible_values.reverse()

    return possible_values


# print(stones(3, 1, 2))
# print(stones(4, 10, 100))
print(stones(58, 69, 24))

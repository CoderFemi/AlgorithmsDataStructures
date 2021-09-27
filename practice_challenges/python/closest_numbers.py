def closestNumbers(arr) -> list:
    """Find number pairs with the same absolute value"""
    arr.sort()
    diff_list = []

    index = 0
    min_diff = float("inf")
    while index < len(arr) - 1:
        val_one = arr[index]
        val_two = arr[index + 1]
        current_diff = abs(val_one - val_two)

        if current_diff <= min_diff:
            if current_diff < min_diff:
                diff_list = []
                min_diff = current_diff
            diff_list.append(val_one)
            diff_list.append(val_two)

        index += 1

    return diff_list


print(
    closestNumbers(
        [
            -20,
            -3916237,
            -357920,
            -3620601,
            7374819,
            -7330761,
            30,
            6246457,
            -6461594,
            266854,
            -520,
            -470,
        ]
    )
)
print(closestNumbers([5, 4, 3, 2]))

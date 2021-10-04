def minimumAbsoluteDifference(arr) -> int:
    """Find the minimum absolute differences of permutation pairs"""
    sorted_arr = sorted(arr)
    min_diff = float("inf")
    index = 0

    while index < len(sorted_arr) - 1:
        val_one = sorted_arr[index]
        val_two = sorted_arr[index + 1]
        diff = abs(val_one - val_two)

        if diff < min_diff:
            min_diff = diff

        index += 1

    return int(min_diff)


print(minimumAbsoluteDifference([-2, 2, 4]))
print(minimumAbsoluteDifference([3, -7, 0]))
print(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))
print(minimumAbsoluteDifference([1, -3, 71, 68, 17]))

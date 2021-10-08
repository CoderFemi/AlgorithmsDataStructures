def largestPermutation(max_swaps, arr) -> list:
    """Determine largest number formed with maximum swaps"""
    sorted_arr = sorted(arr, reverse=True)
    if max_swaps >= len(arr) or sorted_arr == arr:
        return sorted_arr

    index_store = {arr[index]: index for index in range(len(arr))}

    index = 0
    while index < len(arr):
        if max_swaps == 0:
            break

        current_val = arr[index]
        max_val = sorted_arr[index]
        if current_val < max_val:
            swap_index = index_store[max_val]
            arr[index] = max_val
            arr[swap_index] = current_val
            index_store[current_val] = swap_index
            max_swaps -= 1

        index += 1

    return arr


print(largestPermutation(1, [4, 2, 3, 5, 1]))
print(largestPermutation(1, [2, 1, 3]))
print(largestPermutation(1, [2, 1]))

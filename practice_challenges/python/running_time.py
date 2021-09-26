def runningTime(arr) -> int:
    """Calculate number of shifts required to sort an array"""
    index = 1
    num_shifts = 0

    while index < len(arr):
        current_index = index
        current_val = arr[current_index]
        prev_index = index - 1

        while prev_index >= 0:
            prev_val = arr[prev_index]

            if current_val < prev_val:
                num_shifts += 1
                arr[current_index] = prev_val
                arr[prev_index] = current_val

            prev_index -= 1
            current_index -= 1

        index += 1

    return num_shifts


print(runningTime([2, 1, 3, 1, 2]))

def insertionSort2(n, arr) -> None:
    """Completely sort an array"""
    index = 1

    while index < n:
        current_index = index
        current_val = arr[current_index]
        prev_index = index - 1

        while prev_index >= 0:
            prev_val = arr[prev_index]

            if current_val < prev_val:
                arr[current_index] = prev_val
                arr[prev_index] = current_val

            prev_index -= 1
            current_index -= 1

        print(*arr, sep=" ")
        index += 1


print(insertionSort2(6, [1, 4, 3, 5, 6, 2]))

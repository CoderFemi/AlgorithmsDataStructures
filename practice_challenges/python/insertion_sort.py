def insertionSort1(n, arr) -> None:
    """Complete a partially sorted array"""
    index = n - 1
    last_val = arr[index]

    while index >= 0:
        prev_index = index - 1
        prev_val = arr[prev_index]
        if last_val >= prev_val or index == 0:
            arr[index] = last_val
            print(*arr, sep=" ")
            break

        arr[index] = prev_val
        print(*arr, sep=" ")
        index -= 1


# print(insertionSort1(5, [2, 4, 6, 8, 3]))
print(insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))

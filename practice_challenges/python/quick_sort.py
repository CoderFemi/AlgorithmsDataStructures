def quickSort(arr) -> list:
    """Implement quicksort"""
    pivot = arr[0]
    left = []
    equal = [pivot]
    right = []
    for index in range(1, len(arr)):
        num = arr[index]
        if num < pivot:
            left.append(num)
        elif num == pivot:
            equal.append(num)
        else:
            right.append(num)

    sort_list = left + equal + right
    return sort_list


print(quickSort([4, 5, 3, 7, 2]))

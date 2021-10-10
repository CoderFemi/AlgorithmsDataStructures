def twoArrays(comparator, list_one, list_two) -> str:
    """Determine if relationship exists between comparator and list items"""
    answer = "YES"
    list_one.sort()
    list_two.sort(reverse=True)

    for index in range(len(list_one)):
        num_one = list_one[index]
        num_two = list_two[index]
        is_lesser = (num_one + num_two) < comparator

        if is_lesser:
            answer = "NO"

    return answer


print(twoArrays(10, [2, 1, 3], [7, 8, 9]))
print(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]))

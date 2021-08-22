def minimumDistances(a):
    pair_list = []
    for index in range(len(a)):
        for pointer in range(index + 1, len(a)):
            pair_distance = 0
            if a[index] == a[pointer]:
                pair_distance = pointer - index
                pair_list.append(pair_distance)
                break

    if len(pair_list) > 0:
        return min(pair_list)
    else:
        return -1


# print(minimumDistances([7, 1, 3, 4, 1, 7]))
print(minimumDistances([1, 2, 3, 4, 10]))

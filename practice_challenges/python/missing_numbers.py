def missingNumbers(list_one, list_two):
    missing_list = []
    set_list = list(set(list_two))

    for num in set_list:
        count_one = list_one.count(num)
        count_two = list_two.count(num)

        if count_one < count_two:
            missing_list.append(num)

    missing_list.sort()
    return missing_list


# fmt:off
print(missingNumbers([7,2,5,3,5,3], [7,2,5,4,6,3,5,3]))
print(missingNumbers([203,204,205,206,207,208,203,204,205,206], [203,204,204,205,206,207,205,208,203,206,205,206,204]))
# fmt:on

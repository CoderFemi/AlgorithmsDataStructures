def lonelyinteger(list_num) -> int:
    """Determine unique integer in a list"""
    list_set = list(set(list_num))
    unique_num = 0
    for num in list_set:
        count = list_num.count(num)
        if count == 1:
            unique_num = num
            break

    return unique_num


print(lonelyinteger([0, 0, 1, 2, 1]))

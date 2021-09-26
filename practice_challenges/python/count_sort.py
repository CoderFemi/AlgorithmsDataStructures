def countSort(arr) -> str:
    """Sort strings using counting sort"""
    len_arr = len(arr)
    max_num = 0
    mid_index = int(len_arr / 2)
    for index in range(len_arr):
        sub_arr = arr[index]
        num = int(sub_arr[0])
        if num > max_num:
            max_num = num

    sorted_arr = [[] for num in range(max_num + 1)]
    # sorted_arr = [[]] * (max_num + 1) # This creates multiple lists referencing one single list. Any modification to one list changes all.

    for index in range(len_arr):
        sub_arr = arr[index]
        num = int(sub_arr[0])
        if index < mid_index:
            sorted_arr[num] += ["-"]
        else:
            sorted_arr[num] += [sub_arr[1]]

    if len(sorted_arr[0]) == 0:
        sorted_arr.pop(0)

    str_arr = [" ".join(substr) for substr in sorted_arr]
    str_arr = " ".join(str_arr)
    return str_arr


print(
    countSort(
        [
            ["0", "ab"],
            ["6", "cd"],
            ["0", "ef"],
            ["6", "gh"],
            ["4", "ij"],
            ["0", "ab"],
            ["6", "cd"],
            ["0", "ef"],
            ["6", "gh"],
            ["0", "ij"],
            ["4", "that"],
            ["3", "be"],
            ["0", "to"],
            ["1", "be"],
            ["5", "question"],
            ["1", "or"],
            ["2", "not"],
            ["4", "is"],
            ["2", "to"],
            ["4", "the"],
        ]
    )
)

print(
    countSort(
        [
            ["1", "e"],
            ["2", "a"],
            ["1", "b"],
            ["3", "a"],
            ["4", "f"],
            ["1", "f"],
            ["2", "a"],
            ["1", "e"],
            ["1", "b"],
            ["1", "c"],
        ]
    )
)

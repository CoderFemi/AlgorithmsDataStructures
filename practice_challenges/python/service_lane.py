def serviceLane(width, cases):
    min_widths_list = []
    for case in cases:
        entry = case[0]
        exit = case[1]
        route = width[entry : exit + 1]
        min_width = min(route)
        min_widths_list.append(min_width)

    return min_widths_list


print(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]))

from test_case_data import grid_search_data


def gridSearch(grid, pattern):
    is_matching = False
    first_match_occurred = False
    grid_index = 0
    pattern_index = 0
    prev_matches = []

    while grid_index < len(grid):
        grid_row = grid[grid_index]
        pattern_row = pattern[pattern_index]
        temp_matches = []

        current_matches = [
            index
            for index in range(len(grid_row))
            if grid_row.startswith(pattern_row, index)
        ]

        if not first_match_occurred and len(current_matches) > 0:
            first_match_occurred = True
            prev_matches = current_matches

        for index in current_matches:
            if index in prev_matches:
                temp_matches.append(index)

        prev_matches = temp_matches

        if len(temp_matches) > 0:
            pattern_index += 1
            is_matching = True
        else:
            current_matches = [
                index
                for index in range(len(grid_row))
                if grid_row.startswith(pattern[0], index)
            ]
            if len(current_matches) > 0:
                prev_matches = current_matches
            else:
                pattern_index = 0
                is_matching = False
                first_match_occurred = False

        if pattern_index == len(pattern):
            break

        grid_index += 1

    if is_matching:
        return "YES"
    else:
        return "NO"


# def gridSearch(grid, pattern):
#     is_matching = False
#     is_first_match = True
#     match_index = len(grid[0])
#     grid_index = 0
#     pattern_index = 0

#     while True:
#         grid_row = grid[grid_index]
#         pattern_row = pattern[pattern_index]
#         temp_match_index = grid_row.find(pattern_row)

#         if is_first_match and temp_match_index != -1 and not is_matching:
#             match_index = temp_match_index
#             is_matching = True
#             is_first_match = False
#             grid_index += 1
#             pattern_index += 1
#         elif not is_first_match and temp_match_index == match_index and is_matching:
#             match_index = temp_match_index
#             grid_index += 1
#             pattern_index += 1

#             if pattern_index == len(pattern):
#                 break

#         else:
#             is_matching = False
#             is_first_match = True
#             match_index = len(grid[0])
#             grid_index += 1
#             pattern_index = 0

#         if grid_index == len(grid):
#             break

#     if is_matching:
#         return 'YES'
#     else:
#         return 'NO'


print(gridSearch(grid_search_data[1]["grid"], grid_search_data[1]["pattern"]))
print(gridSearch(grid_search_data[2]["grid"], grid_search_data[2]["pattern"]))
print(gridSearch(grid_search_data[3]["grid"], grid_search_data[3]["pattern"]))
print(gridSearch(grid_search_data[4]["grid"], grid_search_data[4]["pattern"]))

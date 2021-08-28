from test_case_data import grid_search_data


def gridSearch(grid, pattern):
    is_matching = False
    is_first_match = True
    match_index = len(grid[0])
    grid_index = 0
    pattern_index = 0

    while True:
        grid_row = grid[grid_index]
        pattern_row = pattern[pattern_index]
        temp_match_index = grid_row.find(pattern_row)

        if is_first_match and temp_match_index != -1 and not is_matching:
            match_index = temp_match_index
            is_matching = True
            is_first_match = False
            grid_index += 1
            pattern_index += 1
        elif not is_first_match and temp_match_index == match_index and is_matching:
            match_index = temp_match_index
            grid_index += 1
            pattern_index += 1

            if pattern_index == len(pattern):
                break

        else:
            is_matching = False
            is_first_match = True
            match_index = len(grid[0])
            grid_index += 1
            pattern_index = 0

        if grid_index == len(grid):
            break

    if is_matching:
        return 'YES'
    else:
        return 'NO'


print(gridSearch(grid_search_data[1]['grid'], grid_search_data[1]['pattern']))
print(gridSearch(grid_search_data[2]['grid'], grid_search_data[2]['pattern']))
print(gridSearch(grid_search_data[3]['grid'], grid_search_data[3]['pattern']))

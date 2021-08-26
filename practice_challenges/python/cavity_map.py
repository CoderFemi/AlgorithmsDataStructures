from test_case_data import test_grid, test_grid_cut


def cavityMap(grid):
    if len(grid) < 3:
        return grid

    for row_index in range(1, len(grid) - 1):
        row = grid[row_index]
        for cell_index in range(1, len(row) - 1):
            current_cell = row[cell_index]
            cell_above = grid[row_index - 1][cell_index]
            cell_below = grid[row_index + 1][cell_index]
            cell_left = row[cell_index - 1]
            cell_right = row[cell_index + 1]

            if cell_above == 'X' or cell_left == 'X':
                continue

            max_adj = max([cell_above, cell_below, cell_left, cell_right])
            if current_cell > max_adj:
                row = row[:cell_index] + 'X' + row[cell_index + 1:]

        grid[row_index] = row

    return grid


# print(cavityMap(['989', '191', '111']))
# print(cavityMap(['1112', '1912', '1892', '1234']))
print(cavityMap(test_grid_cut))

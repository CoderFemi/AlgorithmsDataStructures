def surfaceArea(board):
    NUM_ROWS = len(board)
    NUM_COLUMNS = len(board[0])
    LENGTH = 1
    WIDTH = 1
    height = 0
    total_surface_area = 0

    for row_index in range(NUM_ROWS):
        row = board[row_index]
        for cell_index in range(NUM_COLUMNS):
            cell = row[cell_index]
            height = cell
            next_right_cell = 0
            next_bottom_cell = 0

            if cell_index < NUM_COLUMNS - 1:
                next_right_cell = row[cell_index + 1]

            if row_index < NUM_ROWS - 1:
                next_bottom_cell = board[row_index + 1][cell_index]

            cuboid_area = 2 * \
                ((LENGTH * WIDTH) + (LENGTH * height) + (WIDTH * height))

            if cell <= next_right_cell:
                right_covered_area = cell * 2
            else:
                right_covered_area = next_right_cell * 2

            if cell <= next_bottom_cell:
                bottom_covered_area = cell * 2
            else:
                bottom_covered_area = next_bottom_cell * 2

            covered_area = right_covered_area + bottom_covered_area
            total_surface_area += (cuboid_area - covered_area)

    return total_surface_area


print(surfaceArea([[1, 3, 4], [2, 2, 3], [1, 2, 4]]))

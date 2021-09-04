import time


def bomberMan(n, grid):

    NUM_ROWS = len(grid)
    grid_all_bombs = [row.replace('.', 'O') for row in grid]

    def mark_for_detonation(grid):
        for row_index in range(NUM_ROWS):
            current_row = list(grid[row_index])
            if 'O' not in current_row:
                continue
            prev_row = []
            next_row = []

            for cell_index in range(len(current_row)):
                current_cell = current_row[cell_index]

                if current_cell == 'O':
                    # current cell
                    current_row[cell_index] = 'Y'
                    # top cell
                    if row_index > 0:
                        prev_row = list(grid[row_index - 1])
                        if prev_row[cell_index] != 'Y':
                            prev_row[cell_index] = 'X'
                    # bottom cell
                    if row_index < NUM_ROWS - 1:
                        next_row = list(grid[row_index + 1])
                        if next_row[cell_index] != 'O':
                            next_row[cell_index] = 'X'
                    # previous cell
                    if cell_index > 0:
                        if current_row[cell_index - 1] != 'Y':
                            current_row[cell_index - 1] = 'X'
                    # next cell
                    if cell_index < len(current_row) - 1:
                        if current_row[cell_index + 1] != 'O':
                            current_row[cell_index + 1] = 'X'

                    grid[row_index] = ''.join(current_row)
                    if len(prev_row) > 0:
                        grid[row_index - 1] = ''.join(prev_row)
                    if len(next_row) > 0:
                        grid[row_index + 1] = ''.join(next_row)

        return grid

    def detonate(grid):
        for row_index in range(len(grid)):
            row = grid[row_index].replace('.', 'O')
            row = row.replace('X', '.')
            row = row.replace('Y', '.')
            grid[row_index] = row

        return grid

    # print(*grid, sep='\n')
    # print('===================')
    # grid = mark_for_detonation(grid)
    # print(*grid, sep='\n')
    # print('===================')
    # grid = detonate(grid)
    # print(*grid, sep='\n')

    start = int(time.time())
    timeout = start + n
    time.sleep(1)

    while True:
        time.sleep(1)
        marked_grid = mark_for_detonation(grid)
        grid = grid_all_bombs

        if int(time.time()) == timeout:
            break

        time.sleep(1)
        grid = detonate(marked_grid)

        if int(time.time()) == timeout:
            break

    return grid


input_grid = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']

input_grid2 = ['.......', '..O.O..', '.......']
output_grid = ['OOO.OOO', 'OO...OO',
               'OOO...O', '..OO.OO', '...OOOO', '...OOOO']

result = bomberMan(3, input_grid)
print(result)

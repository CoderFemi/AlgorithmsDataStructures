from test_case_data import test_case_chessboard, test_chessboard_result


def chessboardGame(x, y) -> str:
    """Determine winner given board coordinates"""
    winner = "First"
    losing_coord_numbers = []

    num = 1
    while num <= 15:
        num_pair = [num, num + 1]
        losing_coord_numbers += num_pair
        num += 4

    is_losing_position = all(coord in losing_coord_numbers for coord in [x, y])

    if is_losing_position:
        winner = "Second"

    return winner


# print(chessboardGame(5, 2))
# print(chessboardGame(5, 3))
# print(chessboardGame(8, 8))
# print(chessboardGame(7, 1))
count = 0
for index in range(len(test_case_chessboard)):
    coords = test_case_chessboard[index]
    correct_result = test_chessboard_result[index]
    result = chessboardGame(*coords)
    if result != correct_result:
        print(coords, correct_result)
        count += 1
print(count)

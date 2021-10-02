def happyLadybugs(board):
    board_list = list(board)
    colour_set = list(set(board))
    empty = "_"

    if empty not in colour_set:
        return "NO"
    colour_set.remove(empty)

    for colour in colour_set:
        count = board.count(colour)
        if count < 2:
            return "NO"

        index = 0

        while True:
            prev_index = index - 1
            next_index = index + 1
            current_item = board_list[index]
            try:
                prev_item = board_list[prev_index]
            except IndexError:
                prev_item = empty

            try:
                next_item = board_list[next_index]
            except IndexError:
                next_item = empty

            if current_item != empty and prev_item != empty and next_item != empty:
                if current_item != prev_item and current_item != next_item:
                    return "NO"

            if current_item == empty and (prev_item != empty or next_item != empty):
                companion_index = 0
                if prev_item == empty:
                    companion_index = board_list.index(next_item, next_index + 1)
                elif next_item == empty:
                    companion_index = board_list.index(prev_item, prev_index + 1)
                else:
                    companion_index = board_list.index(prev_item, prev_index + 1)
                    if companion_index == -1:
                        companion_index = board_list.index(next_item, next_index + 1)

            index += 1


# def happyLadybugs(board):
#     is_happy = ''
#     empties_count = board.count('_')

#     if empties_count == len(board):
#         return 'YES'

#     if empties_count == 0:
#         is_happy = 'YES'
#         index = 0
#         while is_happy != 'NO':
#             cell_count = board.count(board[index])
#             if cell_count <= 1:
#                 is_happy = 'NO'
#             begin_range = board.find(board[index])
#             end_range = board.rfind(board[index])
#             cell_range = abs(begin_range - end_range) + 1
#             if cell_count != cell_range:
#                 is_happy = 'NO'
#             else:
#                 index = end_range + 1
#                 if index >= len(board):
#                     break
#         return is_happy

#     if empties_count > 0:
#         empty_index = board.find('_')
#         while True:

#             left_index = empty_index - 1
#             right_index = empty_index + 1
#             if left_index >= 0:
#                 left_cell = board[left_index]
#             else:
#                 left_cell = None
#             if right_index < len(board):
#                 right_cell = board[right_index]
#             else:
#                 right_cell = None
#             cell_count = 0
#             cluster_range = 0
#             companion_index = -1

#             if left_cell and left_cell != '_':
#                 cell_count = board.count(left_cell)
#                 begin_cluster = board.find(left_cell)
#                 end_cluster = board.rfind(left_cell)
#                 cluster_range = abs(begin_cluster - end_cluster) + 1
#                 if cell_count != cluster_range:
#                     if end_cluster != left_index:
#                         companion_index = end_cluster
#                     else:
#                         companion_index = begin_cluster

#             if companion_index == -1:
#                 if right_cell and right_cell != '_':
#                     cell_count = board.count(right_cell)
#                     begin_cluster = board.find(right_cell)
#                     end_cluster = board.rfind(right_cell)
#                     cluster_range = abs(begin_cluster - end_cluster) + 1
#                     if cell_count != cluster_range:
#                         if begin_cluster != right_index:
#                             companion_index = begin_cluster
#                         else:
#                             companion_index = end_cluster

#             if companion_index != -1:
#                 board_list = list(board)
#                 swap = board_list[companion_index]
#                 board_list[companion_index] = board_list[empty_index]
#                 board_list[empty_index] = swap
#                 board = ''.join(board_list)
#                 if right_cell and left_cell:
#                     begin_cluster = board.find(right_cell)
#                     end_cluster = board.rfind(right_cell)
#                     cluster_range = abs(begin_cluster - end_cluster) + 1
#             if cell_count == cluster_range:
#                 if cell_count > 1:
#                     is_happy = 'YES'
#                 elif cell_count == 1:
#                     is_happy = 'NO'
#                 empty_index += 1
#                 if empty_index >= len(board):
#                     break
#                 empty_index = board.find('_', empty_index)
#                 if empty_index == -1:
#                     break
#             else:
#                 is_happy = 'NO'
#                 empty_index = companion_index
#         return is_happy


print(happyLadybugs("RBY_YBR"))
# print(happyLadybugs('X_Y__X'))
# print(happyLadybugs('__'))
# print(happyLadybugs('B_RRBR'))
# print('========================')
# print(happyLadybugs('AABBC'))
# print(happyLadybugs('AABBC_C'))
# print(happyLadybugs('_'))
# print(happyLadybugs('DD__FQ_QQF'))
# print(happyLadybugs('AABCBC'))

# print(happyLadybugs('G'))
# print(happyLadybugs('GR'))
# print(happyLadybugs('_GR_'))
# print(happyLadybugs('_R_G_'))
# print(happyLadybugs('R_R_R'))
# print(happyLadybugs('RRGGBBXX'))
# print(happyLadybugs('RRGGBBXY'))

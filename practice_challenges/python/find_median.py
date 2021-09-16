def findMedian(num_list) -> int:
    """Find the median in a list of numbers"""
    len_list = len(num_list)
    sorted_list = sorted(num_list)
    mid_index = int(len_list / 2)
    median = sorted_list[mid_index]

    return median


print(findMedian([0, 1, 2, 4, 6, 5, 3]))

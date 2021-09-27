def insertionSort(list_num):
    """Calculate number of shifts required to sort an array - Inversion Count - Merge Sort"""

    def merge(list_one, list_two):
        results = []
        index_one = 0
        index_two = 0
        while index_one < len(list_one) and index_two < len(list_two):
            num_one = list_one[index_one]
            num_two = list_two[index_two]
            if num_two > num_one:
                results.append(num_one)
                index_one += 1
            else:
                results.append(num_two)
                index_two += 1

        while index_one < len(list_one):
            results.append(list_one[index_one])
            index_one += 1

        while index_two < len(list_two):
            results.append(list_two[index_two])
            index_two += 1

        return results

    def mergeSort(arr):
        if len(arr) <= 1:
            return arr
        mid_index = int(len(arr) / 2)
        left = mergeSort(arr[:mid_index])
        right = mergeSort(arr[mid_index:])
        return merge(left, right)

    sorted_list = mergeSort(list_num)
    return sorted_list


# def insertionSort(arr) -> int:
#     """Calculate number of shifts required to sort an array - Inversion Count"""

#     index = 0
#     num_shifts = 0
#     while index < len(arr) - 1:
#         current_val = arr[index]
#         next_index = index + 1

#         while next_index < len(arr):
#             next_val = arr[next_index]
#             # print(current_val, next_val)
#             if current_val > next_val:
#                 num_shifts += 1

#             next_index += 1

#         index += 1

#     return num_shifts


# print(insertionSort([1, 1, 1, 2, 2]))
# print(insertionSort([2, 1, 3, 1, 2]))
print(insertionSort([12, 15, 1, 5, 6, 14, 11]))

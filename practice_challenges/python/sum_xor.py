def sumXor(num) -> int:
    """Find numbers whose sum equals XOR of given digits"""
    if num == 0:
        return 1

    bin_num = str(bin(num))
    num_zeros = bin_num.count("0", 1)
    count = 2 ** num_zeros
    return count


# def sumXor(num) -> int:
#     """Find numbers whose sum equals XOR of given digits"""
#     count = 0

#     for next_num in range(num + 1):

#         sum_val = num + next_num
#         xor_val = num ^ next_num
#         # print(num, next_num, xor_val)
#         if sum_val == xor_val:
#             count += 1

#     return count


# print(sumXor(4))
# print(sumXor(5))
print(sumXor(20))
# print(sumXor(1000000000000000))
# print(sumXor(10000000))

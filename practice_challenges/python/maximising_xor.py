def maximizingXor(left, right) -> int:
    """Find XOR of given digits"""
    max_xor = 0
    for num in range(left, right + 1):
        for num_two in range(num, right + 1):
            xor_val = num ^ num_two
            if max_xor < xor_val:
                max_xor = xor_val

    return max_xor


print(maximizingXor(11, 12))
print(maximizingXor(10, 15))
print(maximizingXor(11, 100))

def absolutePermutation(n, k):
    permutation = [None] * n

    for num in range(1, n + 1):
        permutation_index = None
        permutation_index = num - k - 1

        if permutation_index < 0 or permutation[permutation_index] != None:
            permutation_index = num + k - 1

        if permutation_index >= n:
            return [-1]

        permutation[permutation_index] = num

    return permutation


# print(absolutePermutation(4, 2))
# print(absolutePermutation(2, 1))
# print(absolutePermutation(3, 0))
# print(absolutePermutation(3, 2))

print(absolutePermutation(10, 0))
print(absolutePermutation(10, 1))
print(absolutePermutation(7, 0))
print(absolutePermutation(10, 9))
print(absolutePermutation(9, 0))
print(absolutePermutation(10, 3))
print(absolutePermutation(8, 2))
print(absolutePermutation(8, 0))
print(absolutePermutation(7, 0))

def balancedSums(arr) -> str:
    """Find midpoint of two sum-equal subarrays"""
    answer = "NO"
    total = sum(arr)
    left_sum = 0
    right_sum = total

    for num in arr:
        right_sum -= num
        if right_sum == left_sum:
            answer = "YES"
            break
        left_sum += num

    return answer


print(balancedSums([5, 6, 8, 11]))
print(balancedSums([1, 2, 3]))
print(balancedSums([1, 2, 3, 3]))
print(balancedSums([1, 1, 4, 1, 1]))
print(balancedSums([2, 0, 0, 0]))
print(balancedSums([0, 0, 2, 0]))

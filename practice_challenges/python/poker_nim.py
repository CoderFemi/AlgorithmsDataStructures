def pokerNim(num_adds, piles) -> str:
    """Determine winner of nim game"""
    nim_sum = 0
    for num in piles:
        nim_sum ^= num

    if nim_sum == 0:
        return "Second"
    else:
        return "First"


print(pokerNim(5, [1, 2]))
print(pokerNim(5, [2, 1, 3]))

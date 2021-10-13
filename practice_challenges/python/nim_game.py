def nimGame(pile) -> str:
    """Determine winner of nim game"""
    nim_sum = 0
    for num in pile:
        nim_sum ^= num

    if nim_sum == 0:
        return "Second"
    else:
        return "First"


# fmt:off
# print(nimGame([1, 1]))
# print(nimGame([2, 1, 4]))
# print(nimGame([3, 5]))
# print(nimGame([1, 3, 5, 7]))
print(nimGame([1,1, 2,2, 4,4,]))
# fmt:on

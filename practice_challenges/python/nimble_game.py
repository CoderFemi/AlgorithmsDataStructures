def nimbleGame(squares):
    """Determine winner of nim game"""
    nim_sum = 0
    for index, num in enumerate(squares):
        if index == 0:
            continue
        if num % 2 == 1:
            nim_sum ^= index

    return "Second" if nim_sum == 0 else "First"


print(nimbleGame([0, 2, 3, 0, 6]))
print(nimbleGame([0, 0, 0, 0]))

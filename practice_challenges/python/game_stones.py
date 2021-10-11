def gameOfStones(num_stones) -> str:
    """Determine winner of game given number of items"""
    winner = "First"
    multiplier = 0
    losing_position = 0

    while losing_position <= num_stones:
        losing_position = 6 * multiplier + multiplier
        losing_position_next = losing_position + 1
        if num_stones == losing_position or num_stones == losing_position_next:
            winner = "Second"

        multiplier += 1

    return winner


print(gameOfStones(1))
print(gameOfStones(2))
print(gameOfStones(3))
print(gameOfStones(4))
print(gameOfStones(5))
print(gameOfStones(6))
print(gameOfStones(7))
print(gameOfStones(10))

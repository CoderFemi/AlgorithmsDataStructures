def towerBreakers(n, m) -> int:
    """Determine winner of tower game"""
    if m == 1:
        return 2

    if n % 2 == 1:
        return 1
    else:
        return 2


print(towerBreakers(2, 2))
print(towerBreakers(1, 4))

def misereNim(pile) -> str:
    """Determine winner of nim game"""
    winner = "Second"
    is_even = len(pile) % 2 == 0
    max_num = max(pile)

    if max_num == 1:
        if is_even:
            winner = "First"
            return winner
        else:
            return winner

    nim_sum = 0
    for num in pile:
        nim_sum ^= num

    for num in pile:
        target_size = num ^ nim_sum
        if target_size < num:
            winner = "First"
            break

    return winner


print(misereNim([1, 1]))
print(misereNim([2, 1, 3]))
print(misereNim([9, 8, 4, 4, 4, 7]))

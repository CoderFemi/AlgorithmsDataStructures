def luckBalance(max_losses, contests) -> int:
    """Calculate balance based on how many contests lost"""
    importance_list = []
    balance = 0
    for contest in contests:
        if contest[1] == 1:
            importance_list.append(contest[0])
        balance += contest[0]

    importance_list.sort()
    # print(balance, importance_list)
    num_wins = len(importance_list) - max_losses
    if num_wins > 0:
        win_val = sum(importance_list[:num_wins])
        # print(num_wins, win_val)
        balance -= win_val * 2

    return balance


print(luckBalance(1, [[5, 1], [1, 1], [4, 0]]))
print(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))

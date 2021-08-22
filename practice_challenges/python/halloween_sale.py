def howManyGames(price, discount, min_price, start_budget):
    if price > start_budget:
        return 0

    money_left = start_budget
    current_cost = price
    num_games = 0

    while True:
        num_games += 1
        money_left -= current_cost

        if current_cost - discount > min_price:
            current_cost -= discount
        else:
            current_cost = min_price

        if money_left < current_cost or money_left < min_price:
            break

    return num_games


# print(howManyGames(20, 3, 6, 85))
print(howManyGames(20, 3, 6, 80))

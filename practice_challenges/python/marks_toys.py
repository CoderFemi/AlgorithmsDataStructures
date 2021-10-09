def maximumToys(prices, budget) -> int:
    """Calculate number of toys budget can buy"""
    prices.sort()
    num_toys = 0
    cum_price = 0

    for price in prices:
        if cum_price + price > budget:
            break
        cum_price += price
        num_toys += 1

    return num_toys


print(maximumToys([1, 2, 3, 4], 7))
print(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))

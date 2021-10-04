def icecreamParlor(cost, flavours) -> list:
    """Calculate total cost of purchase"""
    purchase = []
    index = 0
    while index < len(flavours) - 1:
        current_val = flavours[index]
        should_break = False
        for next_index in range(index + 1, len(flavours)):
            next_val = flavours[next_index]
            # print(current_val, next_val)
            total = current_val + next_val
            if total == cost:
                purchase = [index + 1, next_index + 1]
                should_break = True
                break

        if should_break:
            break

        index += 1

    purchase.sort()
    return purchase


print(icecreamParlor(6, [1, 3, 4, 5, 6]))
# print(icecreamParlor(4, [1, 4, 5, 3, 2]))
# print(icecreamParlor(4, [2, 2, 4, 3]))

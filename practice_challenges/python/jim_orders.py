def jimOrders(orders) -> list:
    """Determine delivery times for orders"""
    delivery_times = {}
    for index in range(len(orders)):
        order = orders[index]
        serve_time = sum(order)
        delivery_times[index + 1] = serve_time

    delivery_order = sorted(delivery_times.items(), key=lambda t: t[::-1])

    return [time[0] for time in delivery_order]


print(jimOrders([[1, 3], [2, 3], [3, 3]]))
print(jimOrders([[8, 1], [4, 2], [5, 6], [3, 1], [4, 3]]))

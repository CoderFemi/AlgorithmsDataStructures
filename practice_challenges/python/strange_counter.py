def strangeCounter(time):
    cycle = 0
    start_strange_cycle = 0

    while True:
        start_strange_cycle = (2 ** cycle) * 3
        next_cycle = (2 ** (cycle + 1)) * 3
        if next_cycle > time + 2:
            break
        cycle += 1

    start_normal_cycle = start_strange_cycle - 2
    difference = (time - start_strange_cycle) + (time - start_normal_cycle)
    time = time - difference
    return time


print(strangeCounter(23))
# print(strangeCounter(18))
print(strangeCounter(36))

def strangeCounter(time):
    cycle = 0
    start_strange_cycle = 0

    while True:
        start_strange_cycle = (2 ** cycle) * 3
        next_cycle = (2 ** (cycle + 1)) * 3
        # print(start_strange_cycle, next_cycle)
        # if start_strange_cycle > time and :
        #     break
        if next_cycle > time + 2:
            break
        cycle += 1

    # print(start_strange_cycle)
    start_normal_cycle = start_strange_cycle - 2
    # if start_normal_cycle == time:
    #     return start_normal_cycle
    # print(start_normal_cycle, start_strange_cycle)
    difference = (time - start_strange_cycle) + (time - start_normal_cycle)
    time = time - difference
    return time


print(strangeCounter(23))
# print(strangeCounter(18))
print(strangeCounter(36))

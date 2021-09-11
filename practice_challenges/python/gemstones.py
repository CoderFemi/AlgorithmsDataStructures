from test_case_data import string_data


def gemstones(list_stones) -> int:
    """Count the number of chars present in every string"""
    unique_gems = sorted(list(set("".join(list_stones))))

    count = 0
    every = True
    for gem in unique_gems:
        for stone in list_stones:
            if gem not in stone:
                every = False
                break
        if every:
            print(gem, every)
            count += 1
    # print(unique_gems)
    return count


# print(gemstones(["abcdde", "baccd", "eeabg"]))
print(gemstones(["basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd"]))
# print(gemstones(string_data))

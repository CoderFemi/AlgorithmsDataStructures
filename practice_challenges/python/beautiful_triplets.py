
def beautifulTriplets(d, list):
    triplet_count = 0
    for index in range(len(list) - 2):
        is_beautiful_count = 1
        temp = list[index]

        i = index + 1
        while True:
            is_beautiful = list[i] - temp == d

            if is_beautiful:
                is_beautiful_count += 1
                temp = list[i]

            # Defining below conditions in the while expression does not work. Why?
            if i == len(list) - 1 or is_beautiful_count == 3:
                break
            i += 1

        if is_beautiful_count == 3:
            triplet_count += 1
    return triplet_count


print(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))
# print(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]))

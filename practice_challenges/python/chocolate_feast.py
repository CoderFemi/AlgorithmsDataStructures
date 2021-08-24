import math


def chocolateFeast(money, cost, wrappers_needed):

    chocolates_eaten = math.floor(money / cost)
    wrappers = chocolates_eaten

    while wrappers >= wrappers_needed:
        wrappers_left = wrappers % wrappers_needed
        new_chocolates = wrappers // wrappers_needed
        wrappers = new_chocolates + wrappers_left
        chocolates_eaten += new_chocolates

    return chocolates_eaten


# print(chocolateFeast(10, 2, 5))
# print(chocolateFeast(12, 4, 4))
# print(chocolateFeast(6, 2, 2))
print(chocolateFeast(15, 3, 2))

def marcsCakewalk(calories) -> int:
    """Calculate minimum calories to be expended"""
    calories.sort(reverse=True)
    min_total = 0
    for index in range(len(calories)):
        calorie = calories[index]
        min_total = min_total + (calorie * 2 ** index)

    return min_total


print(marcsCakewalk([5, 10, 7]))
print(marcsCakewalk([1, 3, 2]))
print(marcsCakewalk([7, 4, 9, 6]))

def gridChallenge(grid) -> str:
    """Determine if grid is sorted"""
    answer = "YES"
    sorted_grid = [sorted(list(row)) for row in grid]
    for index in range(len(sorted_grid[0])):
        prev_char = ""
        for row_index in range(len(sorted_grid)):
            row = sorted_grid[row_index]
            char = row[index]
            if prev_char > char:
                return "NO"
            prev_char = char

    return answer


print(gridChallenge(["abc", "ade", "efg"]))
print(gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]))

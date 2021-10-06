def maximumPerimeterTriangle(sticks) -> list:
    """Determine longest perimeter of possible triangles"""
    sticks.sort()
    valid_triangles = []
    start_index = len(sticks) - 1
    max_width = sticks[-1]

    while start_index > 1:

        num_one = sticks[start_index - 2]
        num_two = sticks[start_index - 1]
        num_three = sticks[start_index]

        is_not_valid = (
            num_one >= num_two + num_three
            or num_two >= num_one + num_three
            or num_three >= num_one + num_two
        )

        if not is_not_valid:
            valid_triangles.append([num_one, num_two, num_three])

        # print(max_width)
        # print(valid_triangles)
        if max_width > num_three and len(valid_triangles) > 0:
            break

        start_index -= 1

    valid_triangle = []
    if len(valid_triangles) > 1:
        for index in range(len(valid_triangles) - 1):
            current_triangle = valid_triangles[index]
            next_triangle = valid_triangles[index + 1]
            if (
                current_triangle[2] == next_triangle[2]
                and index < len(valid_triangles) - 2
            ):
                continue
            if current_triangle[2] > next_triangle[2]:
                valid_triangle = current_triangle
            else:
                valid_triangle = next_triangle

    elif len(valid_triangles) == 1:
        valid_triangle = valid_triangles[0]
    else:
        valid_triangle = [-1]

    return valid_triangle


print(maximumPerimeterTriangle([1, 2, 3, 4, 5, 10]))
print(maximumPerimeterTriangle([1, 1, 1, 3, 3]))
print(maximumPerimeterTriangle([1, 2, 3]))
print(maximumPerimeterTriangle([1, 1, 1, 2, 3, 5]))

def workbook(num_chapters, max_problems, list_problems):
    page = 1
    special_problems = 0
    for problems in list_problems:
        for index in range(1, problems + 1):
            if index == page:
                special_problems += 1

            if (index % max_problems == 0 and index != problems) or index == problems:
                page += 1

    return special_problems


print(workbook(2, 3, [4, 2]))
print(workbook(5, 3, [4, 2, 6, 1, 10]))

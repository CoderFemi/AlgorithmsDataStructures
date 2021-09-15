# def activityNotifications(expenditure, days) -> int:
#     """Calculate number of notifications to be sent to client"""
#     start = 0
#     end = days
#     num_notifications = 0

#     while end < len(expenditure):
#         current_expenditure = expenditure[end]
#         prev_expenditure = sorted(expenditure[start:end])
#         median_index = int(days / 2)
#         median_expenditure = prev_expenditure[median_index]

#         is_even = days % 2 == 0
#         if is_even:
#             median_expenditure_two = prev_expenditure[median_index - 1]
#             median_expenditure = (median_expenditure + median_expenditure_two) / 2

#         if current_expenditure >= median_expenditure * 2:
#             num_notifications += 1

#         start += 1
#         end = start + days

#     return num_notifications


def activityNotifications(expenditure, days) -> int:
    """Calculate number of notifications to be sent to client"""
    start = 0
    end = days
    num_notifications = 0
    prev_expenditure = expenditure[start:end]
    prev_expenditure.sort()

    while end < len(expenditure):
        print(prev_expenditure)
        current_expenditure = expenditure[end]
        median_index = int(days / 2)
        median_expenditure = prev_expenditure[median_index]

        is_even = days % 2 == 0
        if is_even:
            median_expenditure_two = prev_expenditure[median_index - 1]
            median_expenditure = (median_expenditure + median_expenditure_two) / 2

        if current_expenditure >= median_expenditure * 2:
            num_notifications += 1

        first_expense = expenditure[start]
        last_expense = expenditure[end]
        prev_expenditure.remove(first_expense)

        for index in range(len(prev_expenditure)):
            expense = prev_expenditure[index]
            if last_expense <= expense:
                prev_expenditure.insert(index, last_expense)
                break

            if index == len(prev_expenditure) - 1:
                prev_expenditure.append(last_expense)

        start += 1
        end = start + days

    return num_notifications


# def activityNotifications(expenditure, days) -> int:
#     """Calculate number of notifications to be sent to client"""
#     start = 0
#     end = days
#     num_notifications = 0
#     prev_expenditure = expenditure[start:end]
#     prev_expenditure.sort()

#     median_index = int(days / 2)
#     median_expenditure = prev_expenditure[median_index]
#     is_even = days % 2 == 0
#     if is_even:
#         median_expenditure_two = prev_expenditure[median_index - 1]
#         median_expenditure = (median_expenditure + median_expenditure_two) / 2

#     while end < len(expenditure):
#         current_expenditure = expenditure[end]


#         if current_expenditure >= median_expenditure * 2:
#             num_notifications += 1

#         first_expense = expenditure[start]
#         last_expense = expenditure[end]
#         prev_expenditure.remove(first_expense)

#         for index in range(len(prev_expenditure)):
#             expense = prev_expenditure[index]
#             if last_expense <= expense:
#                 prev_expenditure.insert(index, last_expense)

#             if index == len(prev_expenditure) - 1:
#                 prev_expenditure.append(last_expense)

#         start += 1
#         end = start + days

#     return num_notifications


print(activityNotifications([10, 20, 30, 40, 50], 3))
# print(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
# print(activityNotifications([1, 2, 3, 4, 4], 4))

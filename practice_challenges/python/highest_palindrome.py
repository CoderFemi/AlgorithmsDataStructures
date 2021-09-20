from test_case_data import test_case_palindrome, palindrome_result_correct

# from test_case_result import test_palindrome_result


def highestValuePalindrome(str_digits, str_length, num_changes) -> str:
    """Create highest value palindrome"""

    list_str = list(str_digits)
    mid_index = int(str_length / 2)
    start = 0
    end = str_length - 1
    stop_one = mid_index - 1
    stop_two = 0
    is_odd_str = str_length % 2 == 1
    is_odd_changes = num_changes % 2 == 1

    if is_odd_str:
        stop_two = mid_index + 1
        count = list_str.count("9")
        is_even_count = count % 2 == 0
        if is_odd_changes:
            if is_even_count:
                list_str[mid_index] = "9"
                num_changes -= 1
        else:
            if not is_even_count:
                list_str[mid_index] = "9"
                num_changes -= 1
    else:
        stop_two = mid_index

    while num_changes > 0:
        # print(num_changes)
        # print(start, end)
        digit_one = int(list_str[start])
        digit_two = int(list_str[end])

        if num_changes > 1:
            if digit_one != 9:
                list_str[start] = "9"
                num_changes -= 1
            if digit_two != 9:
                list_str[end] = "9"
                num_changes -= 1
        else:
            if digit_one < digit_two:
                list_str[start] = str(digit_two)
                num_changes -= 1
            elif digit_one > digit_two:
                list_str[end] = str(digit_one)
                num_changes -= 1
        # print(list_str)
        if start == stop_one or end == stop_two:
            break

        start += 1
        end -= 1

    # reversed_list = list(reversed(list_str))
    # is_equal = reversed_list == list_str
    # print(is_equal)
    # palindrome = "".join(reversed_list)
    # test_count = 0
    # for index in range(len(palindrome)):
    #     char_result_correct = palindrome_result_correct[index]
    #     char_result_test = palindrome[index]
    #     if char_result_correct != char_result_test:
    #         # print(mid_index)
    #         # print(index)
    #         # print(char_result_correct, char_result_test)
    #         break
    #         test_count += 1
    # # begin = 26078
    # begin = mid_index
    # print(len(test_case_palindrome))
    # print(len(palindrome_result_correct))
    # print(palindrome_result_correct[begin : begin + 100])
    # print(test_case_palindrome[begin : begin + 100])
    # print("-----------------------------------")
    # print(palindrome_result_correct[begin - 100 : begin + 1])
    # print(test_case_palindrome[begin - 100 : begin + 1])
    # return "testing"

    reversed_list = list(reversed(list_str))
    # print("reversed:", reversed_list)
    if reversed_list == list_str:
        palindrome = "".join(list_str)
        # print(palindrome)
        return palindrome

    else:
        return "-1"


# print(highestValuePalindrome("1231", 4, 3))
# print(highestValuePalindrome("12321", 5, 1))
# print(highestValuePalindrome("3943", 4, 1))
# print(highestValuePalindrome("092282", 6, 3))
# print(highestValuePalindrome("0011", 4, 1))
# print(highestValuePalindrome("932239", 6, 2))
# print(highestValuePalindrome(test_case_palindrome, 77543, 58343))

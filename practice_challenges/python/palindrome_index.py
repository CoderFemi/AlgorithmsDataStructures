def palindromeIndex(string_query) -> int:
    """Determine index of string removed from palindrome"""
    str_len = len(string_query)
    reversed_str = string_query[::-1]
    if string_query == reversed_str or str_len == 1:
        return -1

    mid_index = int(str_len / 2)
    # prev_index = mid_index - 1
    # next_index = mid_index + 1
    # mid_char = string_query[mid_index]
    # prev_char = string_query[prev_index]
    # next_char = string_query[next_index]

    # is_even = str_len % 2 == 0
    # if is_even:
    #     if prev_char == mid_char:
    list_str = list(string_query)

    start_index = 0
    end_index = str_len - 1
    while True:
        if start_index == mid_index or end_index == mid_index:
            break

        list_str.pop(end_index)
        reversed_str = list_str[::-1]
        print(list_str, reversed_str)
        if list_str == reversed_str:
            return end_index
        else:
            list_str.pop(start_index)
            reversed_str = list_str[::-1]
            if list_str == reversed_str:
                return start_index

        start_index += 1
        end_index -= 1

    return -1


print(palindromeIndex("aaab"))
print(palindromeIndex("baa"))
print(palindromeIndex("aaa"))

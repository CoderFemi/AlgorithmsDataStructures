def beautifulBinaryString(binary_string) -> int:
    """Count number of replacements needed for a beautiful string"""
    sub_str = "010"
    count = 0
    start_index = 0

    while start_index <= len(binary_string):
        end_index = start_index + 3
        slice = binary_string[start_index:end_index]

        if sub_str == slice:
            count += 1
            start_index = end_index
        else:
            start_index += 1

    return count


print(beautifulBinaryString("0101010"))
print(beautifulBinaryString("01100"))
print(beautifulBinaryString("0100101010"))

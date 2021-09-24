from test_case_data import test_morgan_one, test_morgan_two, test_morgan_result


def morganAndString(str_one, str_two) -> str:
    """Form a lexicographical string from two stacks"""

    len_one = len(str_one)
    len_two = len(str_two)
    lexi_str = ""

    index_one = 0
    index_two = 0

    while True:
        char_one = str_one[index_one]
        char_two = str_two[index_two]

        if char_one < char_two:
            lexi_str += char_one
            index_one += 1

        elif char_one == char_two:
            substr_one = str_one[index_one:] + "Z"
            substr_two = str_two[index_two:] + "Z"
            if substr_one < substr_two:
                lexi_str += char_one
                index_one += 1
            else:
                lexi_str += char_two
                index_two += 1

        else:
            lexi_str += char_two
            index_two += 1

        if index_one == len_one and index_two < len_two:
            lexi_str += str_two[index_two:]
            break

        if index_two == len_two and index_one < len_one:
            lexi_str += str_one[index_one:]
            break

        if len(lexi_str) == len_one + len_two:
            break

    return lexi_str


print(morganAndString("ACA", "BCF"))
print(morganAndString("JACK", "DANIEL"))
print(morganAndString("ABACABA", "ABACABA"))
# print(morganAndString(test_morgan_one, test_morgan_two))

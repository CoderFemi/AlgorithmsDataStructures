def decentNumber(num_digits) -> int:
    """Form a decent number from input digits"""

    def check_decent(num_threes):
        remainder = num_digits - num_threes
        if remainder % 3 == 0 and remainder > -1:
            decent_num = int(("5" * remainder) + ("3" * num_threes))
            return decent_num

    decent_num = -1
    is_multiple_three = num_digits % 3 == 0

    if is_multiple_three:
        decent_num = int("5" * num_digits)
    else:
        result = check_decent(5)
        if result:
            decent_num = result
        else:
            result = check_decent(10)
            if result:
                decent_num = result

    return decent_num


print(decentNumber(1))
print(decentNumber(3))
print(decentNumber(5))
print(decentNumber(11))
print(decentNumber(15))
print(decentNumber(13))
print("=================")
print(decentNumber(1))
print(decentNumber(2))
print(decentNumber(3))
print(decentNumber(4))
print(decentNumber(5))
print(decentNumber(6))
print(decentNumber(7))
print(decentNumber(8))
print(decentNumber(9))
print(decentNumber(10))

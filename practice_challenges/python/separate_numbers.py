import math


def separateNumbers(string_digits) -> None:
    "Determine if string is beautiful"

    if len(string_digits) == 1:
        print("NO")
        return

    answer = None
    first_answer = True
    first_ninths = None
    first_digit = None
    max_digit_size = math.ceil(len(string_digits) / 2)
    digit_size = 1
    prev_digit = int(string_digits[:digit_size]) - 1
    start_slice = 0
    end_slice = 0

    while end_slice <= len(string_digits):
        end_slice = start_slice + digit_size
        char = string_digits[start_slice:end_slice]
        if len(char) > max_digit_size or char[0] == 0:
            break

        digit = int(char)
        possible_ninths = [10 ** n - 1 for n in range(max_digit_size + 1)]

        if start_slice == 0:
            first_digit = int(string_digits[:digit_size])

        if digit in possible_ninths:
            if end_slice < len(string_digits) - 1:
                next_digit = int(string_digits[end_slice : end_slice + 1])
                if next_digit == 9:
                    digit_size += 1
                    prev_digit = int(string_digits[:digit_size]) - 1
                    start_slice = 0
                    first_digit = None
                    continue
                elif next_digit < 9 and next_digit != 1:
                    digit_size += 1
                    prev_digit = int(string_digits[:digit_size]) - 1
                    start_slice = 0
                    first_digit = None
                    continue

            digit_size += 1
            if not first_digit:
                first_ninths = digit

        if digit - prev_digit == 1:
            prev_digit = digit
            start_slice = end_slice

            if end_slice >= len(string_digits):
                if first_ninths:
                    first_digit = first_ninths

                if first_answer:
                    answer = f"YES {first_digit}"
                    first_answer = False

                digit_size += 1
                prev_digit = int(string_digits[:digit_size]) - 1
                start_slice = 0

        else:
            digit_size += 1
            prev_digit = int(string_digits[:digit_size]) - 1
            start_slice = 0

    if answer:
        print(answer)
    else:
        print("NO")


# print(separateNumbers("1234"))
# print(separateNumbers("91011"))
# print(separateNumbers("99100"))
# print(separateNumbers("101103"))
# print(separateNumbers("010203"))
# print(separateNumbers("13"))
# print(separateNumbers("1"))
# print("=====================")
# print(separateNumbers("99910001001"))
# print(separateNumbers("7891011"))
# print(separateNumbers("9899100"))
# print(separateNumbers("9991000100001"))
# print("=====================")
# print(separateNumbers("1"))
# print(separateNumbers("2"))
# print(separateNumbers("33"))
# print(separateNumbers("4445"))
# print(separateNumbers("8889"))
# print(separateNumbers("8910"))
# print("=====================")
print(separateNumbers("858687888990919293949596979899"))
print(separateNumbers("858687888990919293949596979898"))
print(separateNumbers("65666768697071727374757677787980"))
print(separateNumbers("65666768697071727374757677787970"))
print(separateNumbers("24252627282930313233343536373839"))
print(separateNumbers("24252627282930313233343536373739"))
print(separateNumbers("78798081828384858687888990919293"))
print(separateNumbers("78798081828384858687888990918293"))
print(separateNumbers("78798081828384858687888990918293"))
print(separateNumbers("9596979899100101102103104105106"))
print(separateNumbers("9596979899100101102103104195106"))

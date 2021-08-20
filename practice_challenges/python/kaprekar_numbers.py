import math


def kaprekarNumbers(p, q):
    def check_num(num):
        square = num * num
        is_even = square % 2 == 0
        str_square = str(square)
        mid = 0

        if is_even:
            mid = int(len(str_square) / 2)
        else:
            mid = int(math.floor(len(str_square) / 2))
        left = str_square[:mid]
        right = str_square[mid:]

        converted_num = int(left) + int(right)
        converted_square = converted_num * converted_num
        match = converted_square == square

        if match:
            return num

    num_range = range(p, q + 1)
    arr = []
    for num in num_range:
        if num == 1:
            arr.append(num)
        if num > 3:
            kaprekar = check_num(num)
            if kaprekar:
                arr.append(kaprekar)
    if len(arr) == 0:
        print('INVALID RANGE')
    else:
        for num in arr:
            print(num, end=" ")


kaprekarNumbers(1, 1000)

def theLoveLetterMystery(letter) -> int:
    """Count number of operations needed to make a palindrome"""
    count_operations = 0
    reversed_letter = letter[::-1]
    letter_length = len(letter)
    if reversed_letter == letter or letter_length < 2:
        return count_operations

    # letter_list = list(letter)
    middle = int(letter_length / 2)
    next_index = middle + 1
    prev_index = middle - 1
    is_even = letter_length % 2 == 0

    if is_even:
        first_middle = letter[middle]
        second_middle = letter[prev_index]
        diff = abs(ord(first_middle) - ord(second_middle))
        count_operations += diff
        # letter_list[prev_index] = first_middle
        if letter_length == 2:
            return count_operations

        prev_index = middle - 2

    while next_index < letter_length:
        next_char = letter[next_index]
        prev_char = letter[prev_index]
        diff = abs(ord(next_char) - ord(prev_char))
        count_operations += diff
        # letter_list[next_index] = prev_char
        next_index += 1
        prev_index -= 1

    return count_operations


print(theLoveLetterMystery("abc"))
print(theLoveLetterMystery("abcba"))
print(theLoveLetterMystery("abcd"))
print(theLoveLetterMystery("cba"))

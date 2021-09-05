import string

def minimumNumber(n, password) -> int:
    '''Return the minimum number of characters to make the password strong'''
    total_left = 0

    upper_letters = string.ascii_uppercase
    lower_letters = string.ascii_lowercase
    numbers = string.digits
    special_characters = string.punctuation

    length = 6
    num_digits = 1
    num_lowercase = 1
    num_uppercase = 1
    num_special = 1

    for char in password:
        if char in upper_letters:
            num_uppercase = 0
        elif char in lower_letters:
            num_lowercase = 0
        elif char in special_characters:
            num_special = 0
        elif char in numbers:
            num_digits = 0
    

    char_left = num_digits + num_lowercase + num_uppercase + num_special
    length_left = length - len(password)

    if length_left > 0 and char_left < length_left:
        total_left += length_left
    else:
        total_left += char_left

    return total_left

        

print(minimumNumber(5, '2bb#A'))
print(minimumNumber(3, 'Ab1'))
print(minimumNumber(3, '#HackerRank'))

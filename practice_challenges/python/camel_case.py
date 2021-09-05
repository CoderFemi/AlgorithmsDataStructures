def camelcase(str) -> int:
    '''Find the number of words in string'''
    count = 1
    for char in str:

        is_upper = char == char.upper()
        if is_upper:
            count += 1
    
    return count


print(camelcase('saveChangesInTheEditor'))
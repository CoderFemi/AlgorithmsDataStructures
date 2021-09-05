def alternate(str) -> int:
    '''Return the length of the longest string of alternating characters'''
 
    def filter_str(str_one, str_two):
        for char in str_two:
            if char not in str_one:
                str_two = str_two.replace(char, '')

        return str_two

    def check_alternate(str):
        prev_char = ''
        for char in str:
            if char == prev_char:
                return False
            prev_char = char

        return True


    str_set = list(set(str))

    if len(str_set) == 1:
        return 0
    
    if len(str_set) == 2:
        is_alternate = check_alternate(str)
        if is_alternate:
            return len(str)
        else:
            return 0

    start_index = 0
    longest_length = 0
    replaced_str = ''
    
    while start_index < len(str_set) - 1:
        current = str_set[start_index]
        next_index = start_index + 1
        for index in range(next_index, len(str_set)):
            next = str_set[index]
            combination = f'{current}{next}'
            replaced_str = filter_str(combination, str)
            result = check_alternate(replaced_str)
         
            if result and len(replaced_str) > longest_length:
                longest_length = len(replaced_str)

        start_index += 1
    
    return longest_length



# print(alternate('beabeefeab'))
# print(alternate('abaacdabd'))
# print(alternate('ab'))
print(alternate('cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc'))
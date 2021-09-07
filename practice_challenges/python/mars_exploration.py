def marsExploration(str) -> int:
    '''Calculate number of changed letters in string'''
    signal = 'SOS'
    difference = 0
    start = 0
    while start < len(str):
        char_one = str[start]
        char_two = str[start + 1]
        char_three = str[start + 2]
        
        if char_one != signal[0]:
            difference += 1
        if char_two != signal[1]:
            difference += 1
        if char_three != signal[2]:
            difference += 1
        
        start += 3
    
    return difference

print(marsExploration('SOSTOT'))
print(marsExploration('SOSSPSSQSSOR'))
print(marsExploration('SOSSOT'))
print(marsExploration('SOSSOSSOS'))
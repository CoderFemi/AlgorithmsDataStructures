def marsExploration(str) -> int:
    '''Calculate number of changed letters in string'''
    signal = 'SOS'
    difference = 0
    start = 0
    while start < len(str):
        received_one = str[start]
        received_two = str[start + 1]
        received_three = str[start + 2]
        
        if received_one != signal[0]:
            difference += 1
        if received_two != signal[1]:
            difference += 1
        if received_three != signal[2]:
            difference += 1
        
        start += 3
    
    return difference

print(marsExploration('SOSTOT'))
print(marsExploration('SOSSPSSQSSOR'))
print(marsExploration('SOSSOT'))
print(marsExploration('SOSSOSSOS'))
data = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty'
}


def timeInWords(hour, minutes):

    # Declare variables
    str_time = ''
    upper_minutes = 60 - minutes

    if minutes == 1 or upper_minutes == 1:
        str_plural = 'minute'
    else:
        str_plural = 'minutes'

    if hour == 12:
        next_hour = 1
    else:
        next_hour = hour + 1

    # Assign string based on value of minutes
    if minutes == 0:
        str_time = f"{data[hour]} o' clock"
    elif minutes <= 30:
        if minutes == 15:
            str_time = f'quarter past {data[hour]}'
        elif minutes > 20 and minutes < 30:
            str_min = str(minutes)
            int_unit = int(str_min[-1])
            str_time = f'{data[20]} {data[int_unit]} minutes past {data[hour]}'
        elif minutes == 30:
            str_time = f'half past {data[hour]}'
        else:
            str_time = f'{data[minutes]} {str_plural} past {data[hour]}'
    else:
        if upper_minutes == 15:
            str_time = f'quarter to {data[next_hour]}'
        elif upper_minutes > 20 and upper_minutes < 30:
            str_min = str(upper_minutes)
            int_unit = int(str_min[-1])
            str_time = f'{data[20]} {data[int_unit]} minutes to {data[next_hour]}'
        else:
            str_time = f'{data[upper_minutes]} {str_plural} to {data[next_hour]}'

    # return string
    return str_time


print(timeInWords(1, 1))
print(timeInWords(1, 23))
print(timeInWords(3, 35))
print(timeInWords(5, 47))
print(timeInWords(6, 00))
print(timeInWords(2, 15))
print(timeInWords(7, 30))
print(timeInWords(9, 45))
print(timeInWords(11, 13))
print(timeInWords(12, 50))
print(timeInWords(12, 45))
print(timeInWords(12, 59))

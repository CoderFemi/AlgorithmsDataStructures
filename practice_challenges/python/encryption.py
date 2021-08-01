import math

sentence = 'if man was meant to stay on the ground God would have given us roots'
sentence2 = 'have a nice day'

def encryption(str: str):
    #Remove spaces in string
    new_string = ''.join(str.split())

    # Find the square root of the length
    sqr_of_len = math.sqrt(len(new_string))

    # Assign the floor to "rows" and ceil to "columns"
    num_rows = math.floor(sqr_of_len)
    num_columns = math.ceil(sqr_of_len)

    # Create array to contain strings of "num_columns" length each
    encrypted_list = []
    i = 0 
    j = 0
    k = num_columns

    # Slice string and map encoded values
    while i <= len(new_string) // num_columns:
        temp_string = new_string[j:k]
        if i == 0:
            encrypted_list = [str for str in temp_string]
        else:
            for index in range(len(temp_string)):
                encrypted_list[index] = encrypted_list[index] + temp_string[index]
        j += num_columns
        k += num_columns
        i += 1

    return ' '.join(encrypted_list)

print(encryption(sentence2))

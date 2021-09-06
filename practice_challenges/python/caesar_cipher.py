import string
def caesarCipher(str, k) -> str:
    '''Encrypt a string and return the encrypted value'''
    alphabet = string.ascii_lowercase
    cipher = ''
    for char in str:
        char_lower = char.lower()
        if char_lower not in alphabet:
            cipher += char
            continue

        index = alphabet.find(char_lower)
        rotated_index = (index + k) % 26
        rotated_char = alphabet[rotated_index]

        if char.isupper():
            rotated_char = rotated_char.upper()

        cipher += rotated_char
    
    return cipher


print(caesarCipher(string.ascii_lowercase, 3))
print(caesarCipher('middle-Outz', 2))
print(caesarCipher("There's-a-starman-waiting-in-the-sky", 3))

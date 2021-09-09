import string


def pangrams(word) -> str:
    """Determine if string contains all letters of the alphabet"""
    alphabet = string.ascii_lowercase
    word = word.lower()
    for char in alphabet:
        word_index = word.find(char)
        if word_index == -1:
            return "not pangram"

    return "pangram"


print(pangrams("The quick brown fox jumps over the lazy dog"))
print(pangrams("We promptly judged antique ivory buckles for the prize"))

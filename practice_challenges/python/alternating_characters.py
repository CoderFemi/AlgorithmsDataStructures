def alternatingCharacters(string_letters) -> int:
    """Calculate minimum number of characters to be removed"""

    prev_char = ""
    count = 0

    for char in string_letters:
        if char == prev_char:
            count += 1
        prev_char = char

    return count


print(alternatingCharacters("AAAA"))
print(alternatingCharacters("BBBBB"))
print(alternatingCharacters("ABABABAB"))
print(alternatingCharacters("BABABA"))
print(alternatingCharacters("AAABBB"))

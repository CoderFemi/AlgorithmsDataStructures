def anagram(word_string) -> int:
    """Determine number of changes required to create anagram"""
    len_str = len(word_string)
    if len_str % 2 == 1:
        return -1

    string_list = list(word_string)
    num_changes = 0

    mid_index = int(len_str / 2)
    right = string_list[:mid_index]
    right.sort()
    left = string_list[mid_index:]
    prev_char = ""

    for char in right:
        if char == prev_char:
            continue

        right_char_count = right.count(char)
        left_char_count = left.count(char)
        diff = right_char_count - left_char_count

        if diff > 0:
            num_changes += diff

        prev_char = char

    return num_changes


print(anagram("aaabbb"))
print(anagram("ab"))
print(anagram("abc"))
print(anagram("mnop"))
print(anagram("xyyx"))
print(anagram("xaxbbbxx"))
print("==============")
print(anagram("hhpddlnnsjfoyxpciioigvjqzfbpllssuj"))
print(anagram("xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj"))
print(anagram("dnqaurlplofnrtmh"))

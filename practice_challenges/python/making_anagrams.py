def makingAnagrams(str_one, str_two) -> int:
    """Determine number of deletions required to create anagrams"""
    counter = {}
    num_deletions = 0

    for char in str_one:
        try:
            has_occurred = counter[char]
            if has_occurred:
                continue
        except KeyError:
            str_one_count = str_one.count(char)
            str_two_count = str_two.count(char)
            diff = abs(str_one_count - str_two_count)
            if diff != 0:
                num_deletions += diff
            counter[char] = True

    for char in str_two:
        try:
            has_occurred = counter[char]
            if has_occurred:
                continue
        except KeyError:
            char_count = str_two.count(char)
            num_deletions += char_count
            counter[char] = True

    return num_deletions


print(makingAnagrams("abc", "amnop"))
print(makingAnagrams("cde", "abc"))
# print(anagram("ab"))
# print(anagram("abc"))
# print(anagram("mnop"))
# print(anagram("xyyx"))
# print(anagram("xaxbbbxx"))
# print("==============")
# print(anagram("hhpddlnnsjfoyxpciioigvjqzfbpllssuj"))
# print(anagram("xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj"))
# print(anagram("dnqaurlplofnrtmh"))

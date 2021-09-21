def sherlockAndAnagrams(str_word) -> int:
    '''Determine number of anagrams in substrings'''
    len_str = len(str_word)
    len_substr = 1
    substr_start = 0
    substr_end = substr_start + len_substr
    count = 0
    str_permutations = []
    
    while True:
        if substr_start > len_str - 1:
            substr_start = 0
            len_substr += 1
            substr_end = substr_start + len_substr
            str_permutations = []

        if len_substr == len_str:
            break

        substr = str_word[substr_start:substr_end]
        if len(substr) == len_substr:
            sorted_substr = ''.join(sorted(substr))
            if len(str_permutations) > 0:
                for perm in str_permutations:
                    if sorted_substr == perm:
                        count += 1
            
            str_permutations.append(sorted_substr)
            
        substr_start += 1
        substr_end = substr_start + len_substr

    return count


print(sherlockAndAnagrams('mom'))
print(sherlockAndAnagrams('abba'))
print(sherlockAndAnagrams('abcd'))
print(sherlockAndAnagrams('ifailuhkqq'))
print(sherlockAndAnagrams('kkkk'))
print(sherlockAndAnagrams('cdcd'))
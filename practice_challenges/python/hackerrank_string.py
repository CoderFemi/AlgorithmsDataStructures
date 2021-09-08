def hackerrankInString(str) -> str:
    """Determine if subsequence exists in input string"""
    subsequence = "hackerrank"
    index_sub = 0
    index_str = 0

    while True:
        if index_sub == len(subsequence):
            return "YES"
        if index_sub < len(subsequence) and index_str == len(str):
            return "NO"

        char = subsequence[index_sub]
        letter = str[index_str]
        if char == letter:
            index_sub += 1

        index_str += 1


print(hackerrankInString("hereiamstackerrank"))
print(hackerrankInString("hackerworld"))
print(hackerrankInString("hhaacckkekraraannk"))
print(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"))

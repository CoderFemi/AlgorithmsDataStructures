def palindromeIndex(string_query) -> int:
    """Determine index of string removed from palindrome"""
    str_len = len(string_query)
    reversed_str = string_query[::-1]
    removed_index = -1

    if string_query == reversed_str or str_len == 1:
        return removed_index

    mid_index = int(str_len / 2)
    next_index = mid_index + 1
    prev_index = mid_index - 1
    is_even = str_len % 2 == 0

    if is_even:
        if string_query[prev_index] != string_query[next_index]:
            next_index = mid_index
            prev_index -= 1
    else:
        prev_index = mid_index
        if string_query[next_index] != string_query[prev_index]:
            prev_index = mid_index - 1
            next_index = mid_index

    while True:
        if prev_index < 0:
            removed_index = next_index
            break

        if next_index == str_len:
            removed_index = prev_index
            break

        prev_char = string_query[prev_index]
        next_char = string_query[next_index]

        if prev_char != next_char:
            try:
                check_prev = string_query[prev_index - 1]
            except IndexError:
                removed_index = next_index
                break

            try:
                check_next = string_query[next_index + 1]
            except IndexError:
                removed_index = prev_index
                break

            if check_prev == next_char:
                removed_index = prev_index
                break
            elif check_next == prev_char:
                removed_index = next_index
                break

        next_index += 1
        prev_index -= 1

    return removed_index


print(palindromeIndex("bcbc"))
print(palindromeIndex("aaab"))
print(palindromeIndex("baa"))
print(palindromeIndex("aaa"))
print("=================")
# fmt:off
print(palindromeIndex("quyjjdcgsvvsgcdjjyq"))
print(palindromeIndex("hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh"))
print(palindromeIndex("fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf"))
print(palindromeIndex("bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb"))
print(palindromeIndex("fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf"))
print(palindromeIndex("mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm"))
print(palindromeIndex("tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt"))
print(palindromeIndex("lhrxvssvxrhl"))
print(palindromeIndex("prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp"))
print(palindromeIndex("kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk"))
print("=================")
print(palindromeIndex("wykkttfghdvbyxbxefnltpnbdkkdbnptlnfexbxybvdhgfttkkyw"))
print(palindromeIndex("iynilxchelphhsjiftgmbtaxlnbrbhsrptfxfddmhoerxaaaaxreohmddfxftprshbrbnlxatbmgtfishhplehcxlinyi"))
print(palindromeIndex("xfsxrgylhgebvagwhmctvsbnqbqwwcpuhisbrtmbawsdyulxccxluydsabmtrbsihupcwwqbqnbsvtcmhwgavbeghlygrxsfx"))
print(palindromeIndex("uaklbdlxfbvypmqselghnbmmwyywmmbnhglesqmpvbfxldblkau"))
print(palindromeIndex("xthxhvykhasivjiwmbbmwivisahkyvhxhtx"))
print(palindromeIndex("oladkyolbdmqwlkejjeklwmdbloykdalo"))
print(palindromeIndex("kbkseyyvccgpqtqterkrrkretqtqpgccvyyskbk"))
print(palindromeIndex("crwlgqeubhhvigsliydbuvvvvubdyilsgivhhbueqglwrc"))
print(palindromeIndex("slwaebreoxussybaujipwtqdwlayumpeicdiifaafiidciepmuylwdqtwpijuabyssuxoerbeawls"))
print(palindromeIndex("nujquecofwcbnfyaayfnbcwfceuqjun"))
# fmt:on

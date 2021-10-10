def flippingBits(num) -> int:
    """Convert number to a converse binary"""
    bin_str = "{:032b}".format(num)
    flipped_list = ["0" if num == "1" else "1" for num in list(bin_str)]
    flipped_str = "".join(flipped_list)
    # print(bin_str, flipped_str)
    converted_num = int(flipped_str, base=2)
    return converted_num


print(flippingBits(2147483647))
print(flippingBits(1))
print(flippingBits(0))

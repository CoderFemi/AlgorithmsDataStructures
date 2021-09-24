from test_case_data import test_case_gene_one, test_case_gene_two

# def steadyGene(gene) -> int:
#     """Calculate minimum length of substring for creating steady gene"""
#     gene_chars = "ACTG"
#     gene_len = len(gene)
#     min_substr_len = gene_len

#     substr_len_list = []

#     num_genes = int(gene_len / 4)
#     excess_char_count = 0
#     excess_chars = []

#     for char in gene_chars:
#         char_count = gene.count(char)
#         if char_count > num_genes:
#             excess_char_count += char_count - num_genes
#             excess_chars.append(char)

#     if excess_char_count == 0:
#         return 0

#     index = 0
#     begin_index = 0
#     begin = False
#     end_index = 0
#     temp_count = excess_char_count

#     while index < gene_len:
#         current_char = gene[index]
#         for char in excess_chars:
#             if current_char == char:
#                 temp_count -= 1
#                 if not begin:
#                     begin_index = index
#                     begin = True

#         if temp_count == 0:
#             end_index = index + 1
#             substr_len = end_index - begin_index
#             substr_len_list.append(substr_len)
#             if substr_len < min_substr_len:
#                 min_substr_len = substr_len

#             begin_index = 0
#             begin = False
#             end_index = 0
#             temp_count = excess_char_count

#         index += 1

#     index = gene_len - 1
#     begin_index = 0
#     end_index = 0
#     end = False
#     temp_count = excess_char_count

#     while index >= 0:
#         current_char = gene[index]
#         if current_char in excess_chars:
#             # for char in excess_chars:
#             #     if current_char == char:
#             temp_count -= 1
#             if not end:
#                 end_index = index
#                 end = True

#         if temp_count == 0:
#             begin_index = index - 1
#             print(begin_index, end_index)
#             substr_len = end_index - begin_index
#             substr_len_list.append(substr_len)
#             if substr_len < min_substr_len:
#                 min_substr_len = substr_len

#             begin_index = 0
#             end = False
#             end_index = 0
#             temp_count = excess_char_count

#         index -= 1

#     index_two = int(gene_len / 2)
#     index_one = index_two - 1
#     begin_index = 0
#     end_index = 0
#     temp_count = excess_char_count

#     while temp_count > 0:
#         if index_one < 0 or index_two == gene_len:
#             break

#         prev_char = gene[index_one]
#         next_char = gene[index_two]
#         if prev_char in excess_chars:
#             temp_count -= 1

#         if temp_count == 0:
#             begin_index = index_one
#             end_index = index_two + 1
#             substr_len = end_index - begin_index
#             substr_len_list.append(substr_len)
#             if substr_len < min_substr_len:
#                 min_substr_len = substr_len

#         if next_char in excess_chars:
#             temp_count -= 1

#         if temp_count == 0:
#             begin_index = index_one
#             end_index = index_two + 1
#             substr_len = end_index - begin_index
#             substr_len_list.append(substr_len)
#             if substr_len < min_substr_len:
#                 min_substr_len = substr_len

#         index_one -= 1
#         index_two += 1

#     print(gene_len, num_genes)
#     print(excess_char_count, excess_chars)
#     print(substr_len_list)

#     return min_substr_len


# def steadyGene(gene) -> int:
#     """Calculate minimum length of substring for creating steady gene"""
#     gene_chars = "ACTG"
#     gene_len = len(gene)
#     min_substr_len = gene_len

#     substr_len_list = []

#     num_genes = int(gene_len / 4)
#     excess_char_count = 0
#     excess_chars = []

#     for char in gene_chars:
#         char_count = gene.count(char)
#         if char_count > num_genes:
#             excess_char_count += char_count - num_genes
#             excess_chars.append(char)

#     if excess_char_count == 0:
#         return 0

#     index = 0
#     begin_index = 0
#     begin = False
#     end_index = 0
#     temp_count = excess_char_count

#     while index < gene_len:
#         current_char = gene[index]
#         for char in excess_chars:
#             if current_char == char:
#                 temp_count -= 1
#                 if not begin:
#                     begin_index = index
#                     begin = True

#         if temp_count == 0:
#             end_index = index + 1
#             substr_len = end_index - begin_index
#             substr_len_list.append(substr_len)
#             if substr_len < min_substr_len:
#                 min_substr_len = substr_len

#             begin_index = 0
#             begin = False
#             end_index = 0
#             temp_count = excess_char_count

#         index += 1

#     print(gene_len, num_genes)
#     print(excess_char_count, excess_chars)
#     print(substr_len_list)

#     return min_substr_len


# def steadyGene(gene) -> int:
#     """Calculate minimum length of substring for creating steady gene"""
#     gene_chars = "ACTG"
#     gene_len = len(gene)
#     min_substr_len = gene_len

#     # substr_len_list = []

#     num_genes = int(gene_len / 4)
#     excess_char_count = 0
#     excess_chars = []

#     for char in gene_chars:
#         char_count = gene.count(char)
#         if char_count > num_genes:
#             excess_char_count += char_count - num_genes
#             excess_chars.append(char)

#     if excess_char_count == 0:
#         return 0

#     index = 0
#     begin_index = 0
#     begin = False
#     end_index = 0
#     temp_count = excess_char_count

#     while index < gene_len:
#         current_char = gene[index]
#         if current_char in excess_chars:
#             temp_count -= 1
#             if not begin:
#                 begin_index = index
#                 begin = True

#         if temp_count == 0:
#             end_index = index + 1
#             substr_len = end_index - begin_index
#             # substr_len_list.append(substr_len)
#             if substr_len < min_substr_len:
#                 min_substr_len = substr_len

#             index = begin_index

#             begin_index = 0
#             begin = False
#             end_index = 0
#             temp_count = excess_char_count

#         if end_index > gene_len:
#             break

#         index += 1

#     print(gene_len, num_genes)
#     print(excess_char_count, excess_chars)
#     # print(substr_len_list)

#     return min_substr_len


def steadyGene(gene) -> int:
    """Calculate minimum length of substring for creating steady gene"""
    gene_chars = "ACTG"
    gene_len = len(gene)
    min_substr_len = gene_len

    # substr_len_list = []

    num_genes = int(gene_len / 4)
    excess_char_count = 0
    excess_chars = []

    for char in gene_chars:
        char_count = gene.count(char)
        if char_count > num_genes:
            excess_char_count += char_count - num_genes
            excess_chars.append(char)

    if excess_char_count == 0:
        return 0

    index = 0
    begin_index = 0
    begin = False
    end_index = 0
    temp_count = excess_char_count

    while index < gene_len:
        current_char = gene[index]
        if current_char in excess_chars:
            temp_count -= 1
            if not begin:
                begin_index = index
                begin = True

        if temp_count == 0:
            end_index = index + 1
            substr_len = end_index - begin_index
            # substr_len_list.append(substr_len)
            if substr_len < min_substr_len:
                min_substr_len = substr_len

            index = begin_index

            begin_index = 0
            begin = False
            end_index = 0
            temp_count = excess_char_count

        if end_index > gene_len:
            break
        index += 1

    print(gene_len, num_genes)
    print(excess_char_count, excess_chars)
    # print(substr_len_list)

    return min_substr_len


# print(steadyGene("GAAATAAA"))
# print(steadyGene("TGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGC"))
# print(steadyGene("TGATGCCGT/CCCCT/CAACTTGAGT/G/CTCCT/AA/TGCGTTGC"))
# print(steadyGene(test_case_gene_one))
print(steadyGene(test_case_gene_two))

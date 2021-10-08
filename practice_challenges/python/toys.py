def toys(weights) -> int:
    """Calculate number of containers required to ship items"""
    weights.sort()
    num_containers = 1
    min_weight = weights[0]
    for weight in weights:
        if weight > 4 + min_weight:
            num_containers += 1
            min_weight = weight

    return num_containers


print(toys([1, 2, 3, 4, 5, 10, 11, 12, 13]))
print(toys([1, 2, 3, 21, 7, 12, 14, 21]))

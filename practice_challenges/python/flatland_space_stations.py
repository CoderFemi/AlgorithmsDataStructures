import math


def flatlandSpaceStations(num_cities, list_stations):
    if len(list_stations) == num_cities:
        return 0

    list_stations.sort()
    start_distance = abs(0 - list_stations[0])
    end_distance = abs((num_cities - 1) - list_stations[-1])
    max_distance = max(start_distance, end_distance)

    if len(list_stations) == 1:
        return max_distance

    inner_distances = [abs(list_stations[index] - list_stations[index + 1])
                       for index in range(len(list_stations) - 1)]
    max_inner_distances = math.floor(max(inner_distances) / 2)

    if max_inner_distances > max_distance:
        max_distance = max_inner_distances

    return max_distance


# def flatlandSpaceStations(num_cities, list_stations):
#     if len(list_stations) == num_cities:
#         return 0

#     max_distance = 0
#     for city_index in range(num_cities):
#         min_distance = num_cities
#         for station_index in list_stations:
#             if city_index == station_index:
#                 min_distance = 0
#                 break

#             distance = abs(city_index - station_index)
#             if distance < min_distance:
#                 min_distance = distance

#         if min_distance > max_distance:
#             max_distance = min_distance

#     return max_distance


print(flatlandSpaceStations(3, [1]))
print(flatlandSpaceStations(5, [0, 4]))
print(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]))
print(flatlandSpaceStations(7, [4, 0, 2, 3, 5, 1]))

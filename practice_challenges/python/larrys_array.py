def larrysArray(arr) -> str:
    '''Sorts a list sequentially'''

    smallest = 1
    while True:
        if smallest == len(arr):
            return 'YES'

        if smallest != arr[smallest - 1]:
            num_index = arr.index(smallest)
            before_prev_index = num_index - 2
            prev_index = num_index - 1
            next_index = num_index + 1
            before_prev = None

            try:
                if arr[num_index - 2] != smallest - 1 and before_prev_index >= 0:
                    before_prev = arr[before_prev_index]
                else:
                    if num_index == len(arr) - 1:
                        return 'NO'
            except IndexError:
                pass

            if before_prev:
                # SWAPPING INDEXES IS MORE EFFICIENT
                arr[num_index], arr[before_prev_index] = arr[before_prev_index], arr[num_index]
                arr[num_index], arr[prev_index] = arr[prev_index], arr[num_index]

                # SLICING IS INEFFICIENT
                # arr = arr[:before_prev_index] + [smallest, before_prev, prev] + arr[num_index + 1:]
                
            else:
                arr[num_index], arr[prev_index] = arr[prev_index], arr[num_index]
                arr[num_index], arr[next_index] = arr[next_index], arr[num_index]
        
        else:
            smallest += 1


print(larrysArray([1,6,5,2,4,3]))
print(larrysArray([3,1,2]))
print(larrysArray([1,3,4,2]))
print(larrysArray([1,2,3,5,4]))
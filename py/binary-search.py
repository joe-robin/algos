from math import floor


def test_binary_search(binary_search_func):
    # Test cases: (sorted_list, target, expected_index)
    test_cases = [
        ([1, 3, 5, 7, 9], 5, 2),
        ([1, 3, 5, 7, 9], 1, 0),
        ([1, 3, 5, 7, 9], 9, 4),
        ([1, 3, 5, 7, 9], 4, -1),
        ([1, 3, 5, 7, 9], 10, -1),
        ([], 5, -1),
        ([1], 1, 0),
        ([1], 2, -1),
        ([1, 1, 2, 3, 3, 3, 4, 5, 5], 3, 3)  # Testing with duplicates
    ]

    for i, (arr, target, expected) in enumerate(test_cases):
        result = binary_search_func(arr, target)
        if result == expected:
            print(f"Test case {i + 1} passed!")
        else:
            print(f"Test case {
                  i + 1} failed. Expected {expected}, but got {result}")
            print(f"Array: {arr}, Target: {target}")


def binary_search(arr, target):

    start = 0
    end = len(arr) - 1
    # print("start,end", start, end)

    while start <= end:
        middle_idx = int(start + (end - start) / 2)
        # print(middle_idx, "middle_idx")
        # print(arr)
        # print(target, "\n")
        middle = arr[middle_idx]

        if middle == target:
            return middle_idx
        elif middle < target:
            start = middle_idx + 1
        elif middle > target:
            end = middle_idx - 1
    return -1


test_binary_search(binary_search)
# binary_search([1, 3, 5, 7, 9], 9)

# val = 5 / 2
# print(val)
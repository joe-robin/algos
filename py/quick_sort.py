def short_naive_quick_sort(arr):

    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quicksort(left) + middle + quicksort(right)


def naive_quick_sort(arr):

    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]

    left = []
    for i in arr:
        if i < pivot:
            left.append(i)

    middle = []
    for i in arr:
        if i == pivot:
            middle.append(i)

    right = []
    for i in arr:
        if i > pivot:
            right.append(i)

    return quick_sort(left) + middle + quick_sort(right)


def quick_sort(arr, low, high):
    def swap(arr, i, j):
        arr[i], arr[j] = arr[j], arr[i]

    def partition(arr, low, high):
        p = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] <= p:
                i += 1
                swap(arr, i, j)

        swap(arr, i + 1, high)
        return i + 1

    pi = partition(arr, low, high)

    # left
    partition(arr, low, pi - 1)

    # right
    partition(arr, pi + 1, high)

    return arr


def run_tests():
    """Runs test cases to verify quicksort implementation"""

    test_cases = [
        {
            "input": [64, 34, 25, 12, 22, 11, 90],
            "expected": [11, 12, 22, 25, 34, 64, 90],
            "description": "Regular array",
        },
        {
            "input": [5, 2, 8, 5, 1, 9, 2, 8],
            "expected": [1, 2, 2, 5, 5, 8, 8, 9],
            "description": "Array with duplicates",
        },
        {
            "input": [1, 2, 3, 4, 5],
            "expected": [1, 2, 3, 4, 5],
            "description": "Already sorted array",
        },
        {
            "input": [5, 4, 3, 2, 1],
            "expected": [1, 2, 3, 4, 5],
            "description": "Reverse sorted array",
        },
        {
            "input": [-3, 4, 0, -7, 2, -1],
            "expected": [-7, -3, -1, 0, 2, 4],
            "description": "Array with negative numbers",
        },
        {"input": [], "expected": [], "description": "Empty array"},
        {"input": [42], "expected": [42], "description": "Single element array"},
    ]

    for i, test in enumerate(test_cases, 1):
        result = quick_sort(
            test["input"].copy(), 0, len(test["input"]) - 1
        )  # Use copy to preserve original input
        try:
            assert result == test["expected"]
            print(f"Test {i} passed: {test['description']}")
        except AssertionError:
            print(f"Test {i} failed: {test['description']}")
            print(f"Expected: {test['expected']}")
            print(f"Got: {result}")
            return False

    print("\nAll test cases passed!")
    return True


if __name__ == "__main__":
    run_tests()

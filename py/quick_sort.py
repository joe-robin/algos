#def quicksort(arr):
#    """
#    Sorts an array using the quicksort algorithm.
#    
#    Args:
#        arr: List of comparable elements
#    Returns:
#        Sorted list
#    """
#    if len(arr) <= 1:
#        return arr
#    
#    pivot = arr[len(arr) // 2]
#    left = [x for x in arr if x < pivot]
#    middle = [x for x in arr if x == pivot]
#    right = [x for x in arr if x > pivot]
#    
#    return quicksort(left) + middle + quicksort(right)

def quick_sort(arr):
    
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]

    left = []

    for i in arr

def run_tests():
    """Runs test cases to verify quicksort implementation"""
    
    test_cases = [
        {
            'input': [64, 34, 25, 12, 22, 11, 90],
            'expected': [11, 12, 22, 25, 34, 64, 90],
            'description': 'Regular array'
        },
        {
            'input': [5, 2, 8, 5, 1, 9, 2, 8],
            'expected': [1, 2, 2, 5, 5, 8, 8, 9],
            'description': 'Array with duplicates'
        },
        {
            'input': [1, 2, 3, 4, 5],
            'expected': [1, 2, 3, 4, 5],
            'description': 'Already sorted array'
        },
        {
            'input': [5, 4, 3, 2, 1],
            'expected': [1, 2, 3, 4, 5],
            'description': 'Reverse sorted array'
        },
        {
            'input': [-3, 4, 0, -7, 2, -1],
            'expected': [-7, -3, -1, 0, 2, 4],
            'description': 'Array with negative numbers'
        },
        {
            'input': [],
            'expected': [],
            'description': 'Empty array'
        },
        {
            'input': [42],
            'expected': [42],
            'description': 'Single element array'
        }
    ]
    
    for i, test in enumerate(test_cases, 1):
        result = quicksort(test['input'].copy())  # Use copy to preserve original input
        try:
            assert result == test['expected']
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

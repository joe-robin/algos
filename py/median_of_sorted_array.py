# 28-08-2025

def median_sorted_array(a:list[int],b:list[int]):
    total = len(a) + len(b)
    half = total // 2

    if len(a) > len(b): # keep the small one at a
        a, b = b, a

    l, r = 0, len(a) - 1

    while True:
        i = (l + r) // 2
        j = half - i - 2

        aLeft = a[i] if a[i] >= 0 else float("-inf")
        aRight = a[i+1] if a[i] < len(a) else float("inf")
        bLeft = b[j] if b[j] >= 0  else float("-inf")
        bRight = b[j+1] if b[j+1] < len(b) else float("inf")

        if aLeft <= bRight and bLeft <= aRight:
            if total % 2:
                return min(aRight, bRight)
            else: 
                return max(aLeft, bLeft) + min(aRight,bRight) / 2
        elif aLeft > bRight:
            l = i - 1
        else:
            r = i + 1


# 10-09-2025

from typing import List

def medianOfSortedArrays(a: List[int], b: List[int]) -> float:
    totalLen = len(a) + len(b)
    halfLen = totalLen // 2

    if len(a)  > len(b):
        a, b = b, a

    l = 0
    r = len(a)

    while True:
        i = (l + r) // 2
        j = halfLen - i

        aLeft = a[i -1] if i-1 >= 0 else float("-inf")
        aRight = a[i] if i < len(a) else float('inf')
        bLeft = b[j-1] if j-1 >= 0 else float("-inf")
        bRight = b[j] if j < len(b) else float('inf')

        if aLeft <= bRight and bLeft <= aRight:
            if totalLen % 2:
                return min(aRight,bRight)
            else:
                return (max(aLeft,bLeft) + min(aRight,bRight)) / 2
        elif aLeft > bRight:
            r = i - 1
        else:
            l = i+1

    
    

def test_median_algorithm():
    """Driver code to test the median algorithm with 10 comprehensive test cases"""
    
    test_cases = [
        # Case 1: Basic example from leetcode
        {
            'a': [1, 3],
            'b': [2],
            'expected': 2.0,
            'description': 'Basic case - odd total length'
        },
        
        # Case 2: Even total length
        {
            'a': [1, 2],
            'b': [3, 4], 
            'expected': 2.5,
            'description': 'Even total length - average of middle elements'
        },
        
        # Case 3: One empty array
        {
            'a': [],
            'b': [1, 2, 3, 4],
            'expected': 2.5,
            'description': 'Empty first array'
        },
        
        # Case 4: Other empty array
        {
            'a': [5, 6, 7],
            'b': [],
            'expected': 6.0,
            'description': 'Empty second array'
        },
        
        # Case 5: Single elements
        {
            'a': [2],
            'b': [1],
            'expected': 1.5,
            'description': 'Both arrays have single element'
        },
        
        # Case 6: No overlap - first array all smaller
        {
            'a': [1, 2, 3],
            'b': [4, 5, 6],
            'expected': 3.5,
            'description': 'No overlap - first array smaller'
        },
        
        # Case 7: No overlap - second array all smaller  
        {
            'a': [7, 8, 9],
            'b': [1, 2, 3],
            'expected': 4.5,
            'description': 'No overlap - second array smaller'
        },
        
        # Case 8: Interleaved arrays
        {
            'a': [1, 3, 5, 7],
            'b': [2, 4, 6, 8],
            'expected': 4.5,
            'description': 'Perfectly interleaved arrays'
        },
        
        # Case 9: Very uneven sizes
        {
            'a': [1],
            'b': [2, 3, 4, 5, 6, 7, 8],
            'expected': 4.5,
            'description': 'Very uneven array sizes'
        },
        
        # Case 10: Duplicate elements
        {
            'a': [1, 1, 3, 3],
            'b': [1, 1, 3, 3],
            'expected': 2.0,
            'description': 'Arrays with duplicate elements'
        }
    ]
    
    print("=" * 80)
    print("MEDIAN OF SORTED ARRAYS - TEST SUITE")
    print("=" * 80)
    
    passed = 0
    failed = 0
    
    for i, test in enumerate(test_cases, 1):
        a = test['a']
        b = test['b']
        expected = test['expected']
        description = test['description']
        
        print(f"\nTest Case {i}: {description}")
        print(f"Array A: {a}")
        print(f"Array B: {b}")
        print(f"Expected: {expected}")
        
        # Show what the combined sorted array would look like for reference
        combined = sorted(a + b)
        print(f"Combined: {combined}")
        
        try:
            result = medianOfSortedArrays(a, b)
            print(f"Your Result: {result}")
            
            # Check if result is correct (allowing for small floating point differences)
            if abs(result - expected) < 1e-9:
                print("✅ PASSED")
                passed += 1
            else:
                print("❌ FAILED")
                failed += 1
                
        except Exception as e:
            print(f"💥 ERROR: {e}")
            failed += 1
            
        print("-" * 50)
    
    print(f"\n{'=' * 80}")
    print(f"RESULTS: {passed} passed, {failed} failed out of {len(test_cases)} tests")
    if failed == 0:
        print("🎉 All tests passed! Great job!")
    else:
        print(f"🔧 {failed} test(s) need fixing. Keep debugging!")
    print("=" * 80)

def trace_algorithm_steps(a: List[int], b: List[int]):
    """
    Helper function to trace through your algorithm step by step
    Uncomment and modify this to debug specific test cases
    """
    print(f"\n🔍 TRACING: medianOfSortedArrays({a}, {b})")
    print(f"Total elements: {len(a) + len(b)}")
    print(f"Combined would be: {sorted(a + b)}")
    
    # Add your step-by-step trace code here
    # Example:
    # total = len(a) + len(b)
    # half = total // 2
    # print(f"Half: {half}")
    # ... rest of your algorithm with print statements

if __name__ == "__main__":
    # Run the test suite
    test_median_algorithm()
    
    # Uncomment below to trace a specific test case:
    # print("\n" + "="*50)
    # trace_algorithm_steps([1, 3], [2])

# DEBUGGING TIPS:
# 1. Start with the simplest cases (empty arrays, single elements)
# 2. Add print statements to see your i, j, cuts, and boundary values
# 3. Verify your partition has exactly (total+1)//2 elements on the left
# 4. Check boundary conditions carefully (what happens when cut is 0 or at end?)
# 5. Make sure you're using the right arrays (a vs b) in all comparisons

# EXPECTED OUTPUT WHEN ALL TESTS PASS:
"""
================================================================================
MEDIAN OF SORTED ARRAYS - TEST SUITE
================================================================================

Test Case 1: Basic case - odd total length
Array A: [1, 3]
Array B: [2]
Expected: 2.0
Combined: [1, 2, 3]
Your Result: 2.0
✅ PASSED
--------------------------------------------------
[... similar output for all 10 test cases ...]

================================================================================
RESULTS: 10 passed, 0 failed out of 10 tests
🎉 All tests passed! Great job!
================================================================================
"""







    
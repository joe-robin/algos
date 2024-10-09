#include <stdio.h>
#include <stdlib.h>

#define MAX_ARRAY_SIZE 100

typedef struct
{
    int input[MAX_ARRAY_SIZE];
    int input_size;
    int target;
    int expected;
} TestCase;

TestCase testCases[] = {
    // Empty Array
    {{}, 0, 5, -1},

    // Single Element Array
    {{10}, 1, 10, 0},

    // Target at Midpoint
    {{1, 3, 5, 7, 9}, 5, 5, 2},

    // Target at Start
    {{5, 7, 9, 12, 15}, 5, 5, 0},

    // Target at End
    {{2, 4, 6, 8, 10}, 5, 10, 4},

    // Target Not Present
    {{3, 6, 9, 14, 18}, 5, 11, -1},

    // Negative Target
    {{-5, -2, 0, 3, 7}, 5, -8, -1},

    // Duplicate Values (First Occurrence)
    {{2, 3, 4, 5, 7}, 5, 2, 0},

    // Duplicate Values (Last Occurrence)
    {{3, 5, 5, 8, 10}, 5, 5, 2},

    // Odd Array Length
    {{1, 4, 7, 10, 13, 16}, 6, 10, 3},

    // Test Cases with Random Values
    {{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 10, 7, 6},
    {{10, 20, 30, 40, 50, 60, 70, 80, 90, 100}, 10, 40, 3},
    {{-10, -5, 0, 5, 10}, 5, 0, 2},
    {{100, 200, 300, 400, 500}, 5, 200, 1},
    {{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 10, 11, -1},
    {{10, 20, 30, 40, 50, 60, 70, 80, 90, 100}, 10, 95, -1},
    {{-10, -5, 0, 5, 10}, 5, -15, -1},
    {{100, 200, 300, 400, 500}, 5, 600, -1},
    {{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 10, -5, -1},
    {{10, 20, 30, 40, 50, 60, 70, 80, 90, 100}, 10, -15, -1},

    // Edge Cases
    {{0}, 1, 0, 0},
    {{0}, 1, -1, -1},
    {{0}, 1, 1, -1},
    {{-1, 1}, 2, 0, -1},
    {{-1, 1}, 2, -1, 0},
    {{-1, 1}, 2, 1, 1},
    {{1, 3, 5, 7, 9}, 5, 8, -1},
    {{1, 3, 5, 7, 9}, 5, -1, -1},
    {{-9, -7, -5, -3, -1}, 5, -2, -1},
    {{-9, -7, -5, -3, -1}, 5, -10, -1},
    {{1, 3, 5, 7, 9}, 5, 3, 1},
    {{1, 3, 5, 7, 9}, 5, 1, 0},
    {{1, 3, 5, 7, 9}, 5, 9, 4},
    {{1, 3, 5, 7, 9}, 5, 10, -1},
    {{1, 3, 5, 7, 9}, 5, 0, -1},
    {{-9, -7, -5, -3, -1}, 5, -3, 3},
    {{-9, -7, -5, -3, -1}, 5, -9, 0},
    {{-9, -7, -5, -3, -1}, 5, -1, 4},
    {{-9, -7, -5, -3, -1}, 5, -11, -1},
    {{-9, -7, -5, -3, -1}, 5, -4, -1},
};

int numTestCases = sizeof(testCases) / sizeof(testCases[0]);

int binarySearch(int inputs[], int s, int e, int t)
{
    int m = s + (e - s) / 2;
    printf("s:%d", s);
    while (s <= e)
    {
        int val = inputs[m];
        if (t == val)
            return m;
        else if (val < t)
        {
            e = m + 1;
            m = s + (e - s) / 2;
        }
        else
        {
            s = m - 1;
            m = s + (e - s) / 2;
        }
    }
    return -1;
}

void main()
{
    printf("hello");
    int i = 0;
    for (; i < numTestCases; i++)
    {
        TestCase current = testCases[i];
        int result = binarySearch(current.input, 0, current.input_size - 1, testCases[0].target);

        if (current.expected == result)
        {
            printf("success");
        }
        else
        {
            printf("Failed");
        }
    }
}
#include <stdio.h>
 
int main() {
    int myNumbers[] = {25, 50, 75, 100};

    printf("Array Size: %lu\n",sizeof(myNumbers) / sizeof(myNumbers[0]));
    printf("Hello, world! \n");
    return 0;
}
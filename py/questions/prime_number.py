
# this is simplifed because both the n < 2 and n % 2 conditions are checked without any increase in complexity
def is_prime(n):
    for i in range(2,n):
        if n % i == 0:
            return False
    return True


# First Attempt
def _is_prime(n):
    if n < 2 or n % 2 == 0:
        return False

    for i in range(n-1, 2, -2):
        if n % i == 0:
            print(i)
            return False
    
    return True



print(is_prime(37))

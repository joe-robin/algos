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







    
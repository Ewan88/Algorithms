import time

# binary search using predefined array
a = []
for i in range (1, 100):
    a.append(i+i)

print(a)
# get number to search for
# n = 0
# while (n < 1) or (n > 100):
n = input('select a number from 1-100: ')

start = time.time()
def binary_search(a, n):
    low = 0
    high = len(a)-1
    while low <= high:
        mid = (low+high)//2
        if a[mid] > n: high = mid-1
        elif a[mid] < n: low = mid+1
        else: return mid
    return -1

print("%d is at the %dth index" %(n, binary_search(a, n),))
print("this took %s ms to run" %(round(time.time() - start, 5) * 1000))

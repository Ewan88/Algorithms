import time

start = time.time()
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
b = []
c = []

def move(n, source, target, auxiliary):
    if n > 0:
        move(n-1, source, auxiliary, target)
        target.append(source.pop())
        move(n-1, auxiliary, target, source)
        
    print(a, b, c)

move(len(a), a, c, b)

print("%f ms"%(round(time.time() - start, 5)  * 1000))

a = [-31, 7, 0, 312, 7000, 32]
min = 0
max = 0
for item in a:
    if item < min:
        min = item
    if item > max:
        max = item
print(min)
print(max)

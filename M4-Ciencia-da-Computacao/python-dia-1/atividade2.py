# condição com while
n = 50
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
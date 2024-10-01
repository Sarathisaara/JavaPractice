def hanoi(n, f, to, via):
    print(n)
    print(f,to,via)
    if n == 1:
        print("Move disk 1 from",f,"to",to+ " using via"+via);
    else:
        hanoi(n-1, f, via, to)
        print("Move disk",n,"from",f,"to",to+"using "+via);
        hanoi(n-1, via, to, f)
n = 3
f = 'A'
to = 'B'
via = 'C'
hanoi(n, f, via, to)
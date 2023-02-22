def printchart(s):
    dict = {}
    maxsymcount = 0
    for sym in s:
        if sym not in dict:
            dict[sym]=0
        dict[sym]+=1
        maxsymcount=max(maxsymcount, dict[sym])
    sortseduniqsyms=sort(dict.keys())
    for row in range(maxsymcount, 0, -1):
        for sym in sortseduniqsyms:
            if dict[sym] >= row:
                print('#', end='')
            else:
                print(' ', end='')
        print()
    print(''.join(sortseduniqsyms))

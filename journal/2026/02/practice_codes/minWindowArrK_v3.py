def minWindowArrK(intArr, k):
    results = []

    for i in range(len(intArr) - k + 1):
        results.append(min(intArr[i : k + i]))

    return results

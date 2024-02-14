---
emoji: 💻👨🏻‍💻
title: FS page test
date: '2024-07-06 00:00:00'
author: 상화
tags: CSS 
categories: FE
---
### 문제

Test입니당~

### 입력

입력은 input()이죵~

### 출력

출력은 print()죠?

### 예제 입출력

| ㅎ | 출력 |
| - | - |
| 1 2 3 4 5 <br/> 5 6 7 8 9  | 21   |

---

### 내 코드

```python
n, m = list(map(int, input().split(' ')))
numbers = list(map(int,input().split(' ')))
length = len(numbers)
result = 0

for i in range(0, length) :
    for j in range(i+1, length) :
        for k in range(j+1, length) :
            sumValue = numbers[i]+numbers[j]+numbers[k]
            if sumValue <= m :
                result = max(result, sumValue)
print(result)
```
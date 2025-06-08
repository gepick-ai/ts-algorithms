2rows :两行的时候中间放置一个的次数是0次

A0       C2        E4        G6        I8        K10

B1       D3       F5         H7        J9        L11



3rows：三行的时候中间放置一个的次数是1次

A0                  E4                      I8

B1      D3       F5          H7       J9         L11

C2                 G6                      K10



4rows：四行的时候中间放置一个的次数是2次

A0                                G6                   

B1                  F5          H7                  L11

C2       E4                      I8      K10

D3                                J9



5rows：五行的时候中间放置一个的次数是3次

A0                                           I8

B1                               H7       J9

C2                 G6                    K10

D3     F5                                L11

E4



6rows：六行的时候中间放置一个的次数是4次

A0                                                 K10

B1                                         J9      L11

C2                               I8      

D3                H7

E4     G6

F5





从上往下每次放1个字母，连续放i-1次

从左往右在(rows-1, rows-1),(rows-2,rows-2)。。。(1,1)放一个，也就是行列相等的坐标位置放1个字母，连续放i-1次



有i行，那么中间放置一个字母的次数是i-2次

想法a: 按照规律排布，相当于有i行，先垂直尝试放i个，然后横着i-2放置1个。重复这个过程，直到整个字符串放完为止。

想法b：或者按照规律排布，相当于有i行，可以垂直尝试放i-1个，然后从左往右斜着每次放1个字母放i-1次。重复这个过程直到字母放完。

```
let start = 0;

while(start < s.length) {
  vertical(i-1, start);
  angle(i-1, start)
}

// 设计一个matrix先全部放空串，matrix的长度是s.length*rows
let matrix = new Array(s.length).fill(new Array(rows).fill(''))
let cols = matrix[0].length;
let curCol = 0;
let curRow = 0;
let p = 0;
	
	// 从第位0列开始从上往下填充行元素
   while(curRow < rows) {
      if(p <= rows-1) {
        matrix[curCol][curRow] = s[p]
        p++;
        curRow++;
      }
   }
   
   let start = rows-1;
   while(start > 0) {
     0 rows-1
     1 rows-2
     2 rows-3
     3 rows-4
     4 rows-5
      (rows-1, rows-i]
      // 从左往右，最多从0走到i-2
      cur < rows-1
      // 从上到下
      	
      // 斜着放
      let curCol = 0;
      while(curCol < rows-1) {
        matrix[curCol][rows-cur-1] = s[p]
        curCol++
      }
   }

}

       let p = 0;
       let curRow = 0;
       let curCol = 0;
   
      // 循环合理的范围应是p< s.length;
      // 即拿完字符串的字符为止
      while(p< s.length) {
          // 从上到下放
         while(curRow < rows) {
            if(p <= rows-1) {
              matrix[curCol][curRow] = s[p]
              p++;
              curRow++;
            }
         }

         // 从左往右斜着放
    let colEnd = curCol + rows - 1;
    while (curCol < colEnd) {
      //  当row = rows-1，col = 0;
      // 当row = rows-2，col = 1;
      // 当row = rows-3，col = 2;
      // 当row = rows-4，col = 3;
      matrix[curRow][curCol] = s[p];
      p++;
      curCol++;
      curRow--;
    }
  
      }
```


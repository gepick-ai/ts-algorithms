# 二分查找算法

## 循环不变量
 - 定义：在循环过程当中保持不变的性质。（循环前中后变量会变，但循环前中后有些性质无论变量如何变都是保持不变的。）
 - 作用：证明算法的正确性。

## 适合场景
 - 具有单调性质的数组

## 区间定义
区间搜索的时候，要明确区间的定义，它们会影响到二分查找时边界条件的处理。一般有下面两种区间定义方式：“左闭右闭”和“左闭右开”。

### 左闭右闭 `[left, right]`

区间包含left直到right，要保持left到right这段区间的数都能取到
  - 初始条件：`left = 0; right = nums.length - 1`
  - `while(left <= right)`
  - 更新左区间的右边界：`right = mid - 1`，因为mid已经判断过了。
  - 更新右区间的左边界：`left = mid + 1`，因为mid已经判断过了。

```ts
// 左闭右闭写法
function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
 // while时候使用left<=right,需要判断left和right的取值在自己定义的区间内是否合法
 // 如果区间时[left, right]，那么就是left<=right，因为需要取到right。
  while(left <= right) {
    const mid = Math.floor((left + right) / 2);

    if(nums[mid] === target) {
        return mid;
    }

    // 如果nums[mid] < target，说明target在mid的右边
    // 需要更新右区间的左边界
    // left----mid----target----right
    if(nums[mid] < target) {
        left = mid + 1;
    }

    // 如果nums[mid] > target，说明target在mid的左边
    //  需要更新左区间的右边界
    // left----target----mid----right
    // 在左闭右闭的区间里头，我们已经判断mid已经是比target大了，所以不需要再判断mid了
    // 那么由于循环不变取的条件是left<=right，所以right = mid - 1，不需要再判断mid了
    if(nums[mid] > target) {
        right = mid - 1;
    }
  }

  return target;
}
```

### 左闭右开: `[left, right)`

区间包含left直到right-1，要保持left到right-1这段区间的数都能取到。
  - 初始条件：`left = 0; right = nums.length`
  - `while(left < right)`
  - 更新左区间的右边界：`right = mid`，因为mid已经判断过了，同时区间是左闭右开，mid是取不到的，所以取mid作为新的右边界。
  - 更新右区间的左边界：`left = mid + 1 `，因为mid已经判断过了。

```ts
// 左闭右开写法
function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length;

  while(left < right) {
    const mid = Math.floor((left + right) / 2);

    if(nums[mid] === target) {
        return mid;
    }

    if(nums[mid] < target) {
        left = mid + 1;
    }

    if(nums[mid] > target) {
        right = mid;
    }
  }

  return target;
}  
```


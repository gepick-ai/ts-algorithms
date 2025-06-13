function sortColors(nums: number[]): void {
    // 荷兰国旗问题
    // 使用三个指针：left, right, i
    // left: 指向0的右边界
    // right: 指向2的左边界
    // i: 当前检查的位置
    
    let left = 0;
    let right = nums.length - 1;
    let i = 0;

    while (i <= right) {
        if (nums[i] === 0) {
            // 如果是0，和left交换，left和i都右移
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            // 如果是2，和right交换，right左移
            // 注意：i不移动，因为需要重新检查交换后的数字
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            // 如果是1，直接右移
            i++;
        }
    }
} 
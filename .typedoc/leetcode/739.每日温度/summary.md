#### 739.每日温度【单调栈】

本质上是在一个数组当中不断寻找右边第一个比当前数大的。通过维持一个从栈底到栈顶单调递减的栈，栈里放着所有没找到右边第一个比自己大的元素的元素。不断查看当前数和单调栈的栈顶元素，如果当前数大于栈顶元素，那么栈顶元素就是找到了右边第一个比自己大的元素，于是结算。
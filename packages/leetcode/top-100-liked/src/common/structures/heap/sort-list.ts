function sortList(head: ListNode | null): ListNode | null {
    const minHeap = new MinHeap();

    while (head) {
        const val = head.val
        minHeap.add(val);
        head = head.next
    }
    const dummy = new ListNode(-1);
    let tail = dummy;

    while (minHeap.hasNode()) {
        tail.next = new ListNode(minHeap.getMin());
        tail = tail.next;
    }

    return dummy.next;
};

class MinHeap {
    els: number[] = []

    getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index: number): number {
        return 2 * index + 1;
    }

    getRightIndex(index: number): number {
        return 2 * index + 2;
    }

    swap(i: number, j: number): void {
        const temp = this.els[i];
        this.els[i] = this.els[j]
        this.els[j] = temp;
    }

    swim(index: number): void {
        while (index > 0 && this.els[this.getParentIndex(index)] > this.els[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index)
        }
    }

    sink(index: number): void {
        while (true) {
            let leftIndex = this.getLeftIndex(index);

            if (leftIndex >= this.els.length) {
                break;
            }

            let minIndex = leftIndex;

            if (this.getRightIndex(index) < this.els.length && 
                this.els[this.getRightIndex(index)] < this.els[minIndex]) {
                minIndex = this.getRightIndex(index);
            }

            if (this.els[minIndex] > this.els[index]) {
                break;
            }

            this.swap(minIndex, index);
            index = minIndex;
        }
    }

    add(node: number) {
        this.els.push(node);
        this.swim(this.els.length - 1);
    }

    hasNode() {
        return this.els.length > 0
    }

    getMin(): number {
        const min = this.els[0];
        this.els[0] = this.els[this.els.length - 1];
        this.els.pop();
        this.sink(0);
        return min;
    }
} 
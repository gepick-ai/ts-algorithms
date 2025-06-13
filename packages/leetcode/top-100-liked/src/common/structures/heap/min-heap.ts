class MinHeap {
    els: number[] = []

    getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index: number): number {
        return 2 * index + 1
    }

    getRightIndex(index: number): number {
        return 2 * index + 2
    }

    swap(i: number, j: number): void {
        [this.els[i], this.els[j]] = [this.els[j], this.els[i]]
    }

    swim(index: number) {
        while (index > 0 && this.els[this.getParentIndex(index)] > this.els[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    sink(index: number) {
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

            this.swap(index, minIndex);
            index = minIndex;
        }
    }

    add(v: number) {
        this.els.push(v);
        this.swim(this.els.length - 1);
    }

    getMin() {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }
        return this.els[0]
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }
        
        const min = this.els[0]
        this.els[0] = this.els[this.els.length - 1];
        this.els.pop()
        this.sink(0)
        return min;
    }

    delete(num: number) {
        const index = this.els.indexOf(num);
        if (index === -1) return;

        this.els[index] = this.els[this.els.length - 1];
        this.els.pop();

        if (index < this.els.length) {
            if (index > 0 && this.els[this.getParentIndex(index)] > this.els[index]) {
                this.swim(index);
            } else {
                this.sink(index);
            }
        }
    }

    isEmpty() {
        return this.els.length === 0
    }
} 
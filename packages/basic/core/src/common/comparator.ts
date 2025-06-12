/**
 * 比较器接口，用于定义比较操作
 *
 * @interface IComparator
 * @template T 要比较的类型
 */
export interface IComparator<T> {
  /**
     * 判断两个值是否相等
     *
     * @param a 要比较的值
     * @param b 要比较的值
     * @returns 如果相等，返回 true，否则返回 false
     */
  equal(a: T, b: T): boolean;

  /**
     * 判断 a 是否小于 b
     *
     * @param a 要比较的值
     * @param b 要比较的值
     * @returns 如果 a 小于 b，返回 true，否则返回 false
     */
  lessThan(a: T, b: T): boolean;

  /**
     * 判断 a 是否大于 b
     *
     * @param a 要比较的值
     * @param b 要比较的值
     * @returns 如果 a 大于 b，返回 true，否则返回 false
     */
  greaterThan(a: T, b: T): boolean;

  /**
     * 判断 a 是否小于等于 b
     *
     * @param a 要比较的值
     * @param b 要比较的值
     * @returns 如果 a 小于等于 b，返回 true，否则返回 false
     */
  lessThanOrEqual(a: T, b: T): boolean;

  /**
     * 判断 a 是否大于等于 b
     *
     * @param a 要比较的值
     * @param b 要比较的值
     * @returns 如果 a 大于等于 b，返回 true，否则返回 false
     */
  greaterThanOrEqual(a: T, b: T): boolean;
}

export class Comparator<T> implements IComparator<T> {
  /**
       * 在编程中，比较函数（compare function）有一个标准的返回值约定：
       * - ”第一个参数-第二个参数“返回负数（< 0）：表示第一个参数小于第二个参数
       * - ”第一个参数-第二个参数“返回 0：表示两个参数相等
       * - ”第一个参数-第二个参数“返回正数（> 0）：表示第一个参数大于第二个参数
       *
       * 因此，在实现 compare 函数时，需要遵循这个约定。注意一点，比较逻辑的实现是以第一个参数为基准。
       * 在js当中，会直接将这个函数实现在类似于sort中，sort接受一个比较函数，这个比较函数其实就等同于这里的compare函数。
       * 排序中，传入compare函数，(a,b) => a - b，如果以第一个参数为基准进行相减返回了负数，表示第一个参数要排在第二个参数后面。
       *
   */
  constructor(protected readonly compare: (a: T, b: T) => number) {}

  equal(a: T, b: T): boolean {
    return this.compare(a, b) === 0;
  }

  lessThan(a: T, b: T): boolean {
    return this.compare(a, b) < 0;
  }

  greaterThan(a: T, b: T): boolean {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a: T, b: T): boolean {
    return this.compare(a, b) <= 0;
  }

  greaterThanOrEqual(a: T, b: T): boolean {
    return this.compare(a, b) >= 0;
  }
}

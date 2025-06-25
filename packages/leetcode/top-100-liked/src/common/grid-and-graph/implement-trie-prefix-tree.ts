/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let cur = this.root;

    for (let c of word) {
      const code = c.charCodeAt(0) - 'a'.charCodeAt(0);
      if (cur.son[code] === null) {
        cur.son[code] = new TrieNode();
      }
      cur = cur.son[code];
    }

    cur.end = true;
  }

  #find(word: string) {
    let cur = this.root;

    for (let c of word) {
      const code = c.charCodeAt(0) - 'a'.charCodeAt(0);
      // 只要有一个字符不在，直接返回0
      if (cur.son[code] === null) {
        return 0;
      }
      cur = cur.son[code];
    }

    // 到达单词结尾返回2，否则是prefix返回1
    return cur.end ? 2 : 1;
  }

  search(word: string): boolean {
    return this.#find(word) === 2;
  }

  startsWith(prefix: string): boolean {
    return this.#find(prefix) !== 0;
  }
}

class TrieNode {
  son: (TrieNode | null)[] = new Array(26).fill(null);
  end: boolean = false;
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

/**
 * @group 网格图
 * @category Trie树
 * @summary Trie树
 */
export const implement_trie_prefix_tree = Trie;

/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  // 矩阵搜索单词，从任意一个单词开始都可以往4个方向跑：上、下、左、右
  // 我们尝试从每个方向开始搜索
  let rows = board.length;
  let cols = board[0].length;
  let visisted: boolean[][] = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false));

  // searchStart代表从row行col列开始不断搜索word的对应wordLoc字母直到搜索完毕时最终能否搜索到整个单词word
  function searchStart(row: number, col: number, wordLoc: number): boolean {
    // 先判断单词是否搜索到单词边界了，到边界了不需要继续搜索，已经找到答案了
    if (wordLoc === word.length) {
      return true;
    }

    // 行越界停止搜索
    if (row < 0 || row >= rows) {
      return false;
    }

    // 列越界停止搜索
    if (col < 0 || col >= cols) {
      return false;
    }

    if (board[row][col] === word[wordLoc] && !visisted[row][col]) {
      visisted[row][col] = true;

      // 上下左右四个方向
      let directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
      let canFind = false;
      // NOTE：横向遍历：遍历4个方向
      for (let i = 0; i < directions.length; i++) {
        // 分别尝试从上、下、左、右搜索wordLoc+1位置的字母
        // 只要有一个方向出发搜索到了，不用继续了，直接停止
        // NOTE: 纵向遍历：遍历单词位置
        // 每个方向继续纵向遍历
        canFind = searchStart(row + directions[i][0], col + directions[i][1], wordLoc + 1);

        if (canFind) {
          break;
        }
      }

      // 恢复出发访问状态，因为下一次会从其他row、col出发尝试搜索，此时的row和col需要恢复才能重新被另一种方式的尝试访问
      visisted[row][col] = false;

      return canFind;
    }

    return false;
  };

  // 从网格的每一个格子开始尝试搜索
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (searchStart(i, j, 0)) {
        return true;
      };
    }
  }

  return false;
};

// @lc code=end

/**
 * 关键点1: 四个方向是回溯的横向遍历，单词位置是回溯的纵向遍历
 * 关键点2:回溯撤销时机应该是四个方向访问后，有了结果后回到第一层时，需要撤回出发点，以便让其他出发点开始搜索能够来到当前被撤回的点进行单词位置匹配。
 * 关键点3: 四个方向只要有一个为true，直接返回，不需要继续尝试其他方向了。
 *
 * @category 回溯算法
 */
export const word_search = exist;

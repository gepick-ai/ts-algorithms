/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 用邻接矩阵表示“图”
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }

  const colors = new Array(numCourses).fill(0); // 用colors表示节点的三个状态：未访问0、访问中1、已访问2

  // dfs(x)表示访问x的过程当中是否找到了环。
  function dfs(x: number): boolean {
    colors[x] = 1; // 表示正在访问中

    for (const y of graph[x]) {
      if ((colors[y] === 1) || (colors[y] === 0 && dfs(y))) {
        return true;
      }
    }

    colors[x] = 2;

    return false;
  }

  // 遍历所有课程
  for (let i = 0; i < numCourses; i++) {
    // 如果某个课程访问的过程中发现了环，表示课程无法完成
    if (colors[i] === 0 && dfs(i)) {
      return false;
    }
  }

  // 无环表示课程可以完成
  return true;
};
// @lc code=end

/**
 * @group 网格与图
 * @category 图-dfs
 * @summary 三色标记法 + dfs
 */
export const course_schedule = canFinish;

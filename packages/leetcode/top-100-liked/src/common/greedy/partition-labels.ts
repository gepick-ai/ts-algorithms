/*
 * @lc app=leetcode id=763 lang=typescript
 *
 * [763] Partition Labels
 */

// @lc code=start
function partitionLabels(s: string): number[] {
  const n = s.length;
  const last = new Array(26).fill(-1);
  // 记录每个字母最后出现的位置
  for (let i = 0; i < n; i++) {
    last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
  }

  let start = 0;
  let end = 0;
  const ans: number[] = [];

  for (let i = 0; i < n; i++) {
    // 更新end为当前字符能够到达的最远位置
    // 这里隐藏着一个信息：如果当前字母最远位置char_end被包含在当前end当中，end不会变。这样就将字母包含在片段当中了。
    // 比如这里“ababcbacadefegdehijhklij”，字母a最远位置char_end会成为新的end，其他后边遍历的字母b或者c这些最远位置都没有超过a的，所以char_end最终会不会大于a的end。我们以遍历到的最远的end作为一个区间的end端点。
    // 总结：end实时更新为s[i]的所到的最远位置，这个过程其实就是区间向右扩展的过程，依据是我们在划分区间的时候，
    // 比如a，认为start=0，end=8，那么在i走向a的end的过程当中，它会逐渐看到其他字母s[i]，又由于s[i]的开头位置和结尾位置必须在同一个片段内。
    // 那此时我们就不得不扩展区间的end，因为这个新字母出现在上一个字母的end之前，它可能最后出现位置在上一个字母的end之后。我们能够扩大区间范围。
    end = Math.max(end, last[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
    // 如果当前位置是end，说明当前片段已经可以结束了。也可以看成i追上了end，说明当前片段已经可以结束了。
    if (i === end) {
      // 当前片段已经可以结束了，记录长度
      ans.push(end - start + 1);
      // 更新start为下一个片段的起始位置
      start = i + 1;
    }
  }

  return ans;
};
// @lc code=end

/**
 * 算法的核心思想是：每个字符只能出现在一个片段中，所以片段必须包含该字符的所有出现位置。
 *
 * @group 贪心算法
 */
export const partition_labels = partitionLabels;

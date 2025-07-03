/* eslint-disable no-unused-expressions */
// 为 .tsd-tag-description 元素添加折叠功能
function initializeCollapsible() {
  const answerElements = document.querySelectorAll('.tsd-tag-description');

  answerElements.forEach((element) => {
    // 跳过已经处理过的元素
    if (element.classList.contains('collapsible-initialized')) {
      return;
    }

    // 标记为已处理
    element.classList.add('collapsible-initialized');

    // 创建内容容器
    const content = document.createElement('div');
    content.className = 'tsd-tag-description-content';

    // 将所有原始内容移动到新容器中
    const children = Array.from(element.children);
    children.forEach((child) => {
      content.appendChild(child);
    });

    // 将内容容器添加到原元素
    element.appendChild(content);

    // 添加点击事件监听器到整个元素
    element.addEventListener('click', function (e) {
      // 获取点击位置
      const rect = this.getBoundingClientRect();
      const clickY = e.clientY - rect.top;

      // 只有点击在前50px区域内（标题区域）才处理
      if (clickY > 50) {
        return;
      }

      // 检查是否点击在按钮或链接上
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A'
        || e.target.closest('button') || e.target.closest('a')) {
        return;
      }

      // 防止事件冒泡
      e.stopPropagation();
      e.preventDefault();

      // 切换展开状态
      const isExpanded = this.classList.contains('expanded');

      if (isExpanded) {
        // 收起动画
        this.classList.remove('expanded');

        // 添加收起动画效果
        content.style.maxHeight = content.scrollHeight + 'px';

        // 强制重绘
        content.offsetHeight;

        // 开始收起动画
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        content.style.padding = '0 16px';

        // 动画完成后隐藏内容
        setTimeout(() => {
          if (!this.classList.contains('expanded')) {
            const children = Array.from(content.children);
            children.forEach((child) => {
              child.style.display = 'none';
            });
          }
        }, 400);
      }
      else {
        // 展开动画
        this.classList.add('expanded');

        // 显示所有子元素
        const children = Array.from(content.children);
        children.forEach((child) => {
          child.style.display = 'block';
        });

        // 计算内容高度
        content.style.maxHeight = 'none';
        const height = content.scrollHeight;
        content.style.maxHeight = '0px';

        // 强制重绘
        content.offsetHeight;

        // 开始展开动画
        requestAnimationFrame(() => {
          content.style.maxHeight = height + 'px';
          content.style.opacity = '1';
          content.style.padding = '16px';
        });

        // 动画完成后设置为auto，允许内容自由伸缩
        setTimeout(() => {
          if (this.classList.contains('expanded')) {
            content.style.maxHeight = 'none';
          }
        }, 400);
      }
    });
  });
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCollapsible);
}
else {
  initializeCollapsible();
}

// 监听动态内容变化
const observer = new MutationObserver((mutations) => {
  let shouldReinitialize = false;

  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList && node.classList.contains('tsd-tag-description')) {
            shouldReinitialize = true;
          }
          else if (node.querySelector && node.querySelector('.tsd-tag-description')) {
            shouldReinitialize = true;
          }
        }
      });
    }
  });

  if (shouldReinitialize) {
    // 延迟重新初始化，确保DOM完全更新
    setTimeout(initializeCollapsible, 100);
  }
});

// 开始观察
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

# TypeDoc 主题样式文件

这个目录包含了 TypeDoc 文档的主题样式文件，已经按照主题进行了拆分。

## 文件结构

- `custom.css` - 通用样式和基础设置（已包含 light.css 和 dark.css 的引用）
- `light.css` - Light 主题专用样式
- `dark.css` - Dark 主题专用样式
- `collapsible.js` - 折叠功能的 JavaScript 代码

## 使用方法

### 推荐方式：使用 @import（已配置）

`custom.css` 文件已经通过 `@import` 引入了 `light.css` 和 `dark.css`，所以你只需要在 TypeDoc 配置中引用一个文件：

```json
{
  "theme": "default",
  "customCss": [
    "./.typedoc/assets/custom.css"
  ]
}
```

### 手动引用方式（可选）

如果你想要更精细的控制，也可以手动引用所有文件：

```json
{
  "theme": "default",
  "customCss": [
    "./.typedoc/assets/custom.css",
    "./.typedoc/assets/light.css",
    "./.typedoc/assets/dark.css"
  ]
}
```

### 按需加载（不推荐）

如果你只想使用特定的主题，可以只引用对应的文件：

**只使用 Light 主题：**
```json
{
  "customCss": [
    "./.typedoc/assets/custom.css",
    "./.typedoc/assets/light.css"
  ]
}
```

**只使用 Dark 主题：**
```json
{
  "customCss": [
    "./.typedoc/assets/custom.css",
    "./.typedoc/assets/dark.css"
  ]
}
```

## 样式说明

### custom.css
包含所有主题通用的样式：
- 基础布局样式
- 折叠功能的通用样式
- 动画效果
- OS 主题的基础设置
- **通过 @import 引入 light.css 和 dark.css**

### light.css
包含 Light 主题专用的样式：
- `[data-theme="light"]` 选择器的样式
- OS 主题在 Light 模式下的样式 (`@media (prefers-color-scheme: light)`)

### dark.css
包含 Dark 主题专用的样式：
- `[data-theme="dark"]` 选择器的样式
- OS 主题在 Dark 模式下的样式 (`@media (prefers-color-scheme: dark)`)

## 注意事项

1. **推荐使用 @import 方式**，只需要引用 `custom.css` 一个文件
2. 如果使用手动引用，`custom.css` 必须始终被引用，因为它包含基础样式
3. 如果使用 OS 主题，建议同时引用 `light.css` 和 `dark.css`（或使用 @import 方式）
4. 样式文件的引用顺序很重要，后面的文件会覆盖前面的样式
5. `@import` 语句必须在 CSS 文件的最顶部 
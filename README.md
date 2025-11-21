# Blog Miracle Frontend

一个使用 React 构建的博客前端项目，包含访客端浏览体验和简单的后台文章管理能力。页面路由通过 `HashRouter` 组织，公共头尾由 `App` 组件统一提供。

## 功能概览
- **首页轮播与最新文章**：`/` 与 `/blog/index` 展示头图轮播、最新发布文章列表、日常短句及热门文章推荐。
- **文章浏览**：`/blog/articles` 分页查看文章列表，`/blog/article/:id` 查看文章详情并支持评论组件（见 `src/page/Component`）。
- **站点信息**：友链页 `/blog/links`、关于页 `/blog/abouts`、时间线页 `/blog/timeline` 等静态信息入口。
- **后台文章编辑**：登录后访问 `/admin/editor` 使用富文本编辑器（基于 `wangeditor`）发布或置顶文章；无 token 会被重定向到登录页。

## 技术栈
- React 16 + React Router 5 (`HashRouter` + `Switch` 路由结构)
- Ant Design 组件库
- Axios 封装的 HTTP 工具（`src/utils/HttpUtil.js`），默认请求前缀为 `https://www.miracle1874.com/api`，请求头自动附带本地存储的 `token`
- 自定义样式与轮播、文章预览等组件位于 `src/page/Component`

## 开发与构建
1. 安装依赖：
   ```bash
   npm install
   ```
2. 本地开发：
   ```bash
   npm start
   ```
   运行自定义脚本 `scripts/start.js`，默认在 [http://localhost:3000](http://localhost:3000) 提供开发服务器。
3. 生产构建：
   ```bash
   npm run build
   ```
   输出编译后的静态资源到 `build/` 目录。

## 路由入口
`src/router/BlogRouter.jsx` 定义了所有路由与布局关系：
- `App` 包裹公共头部 (`Header`) 与底部 (`Footer`)
- 访客端：`/blog/index`、`/blog/links`、`/blog/abouts`、`/blog/timeline`、`/blog/articles`、`/blog/article/:id`
- 管理端：`/login`、`/admin/editor`（受 token 控制）

## API 与鉴权
- 请求封装位于 `src/utils/HttpUtil.js`，统一处理超时、请求头和基础地址。
- 管理端登录 (`/admin/login`) 成功后会将后端返回的 token 写入 `localStorage`，之后的接口请求会自动携带 `Authorization` 头。
- 验证码地址与接口域名在组件内写死，如需调整请同步修改 HTTP 工具前缀。

## 文件结构提示
- 页面与功能组件：`src/page/**/*`
- 样式与静态资源：`src/css/`、`src/fonts/`、`src/images/`
- 路由与应用入口：`src/router/BlogRouter.jsx`、`src/index.js`

欢迎根据需要扩展组件或调整 API 地址，提交前请确保构建与 lint 通过。

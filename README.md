# Image Compressor

一个基于Next.js构建的在线图片压缩工具。用户可以轻松压缩图像而不会显著降低质量。

## 功能

- 支持JPG、PNG、GIF和WebP格式图片
- 可调整压缩质量
- 设置最大输出尺寸
- 设置最大文件大小
- 实时预览和对比

## 开发环境

- Node.js 18.x 或更高版本
- npm 9.x 或更高版本

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/yourusername/image-compressor-clean.git
cd image-compressor-clean
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开 [http://localhost:3000](http://localhost:3000) 查看应用

## 构建项目

### 标准构建（适用于Vercel等平台）

```bash
npm run build
```

### GitHub Pages构建（包含正确的basePath）

```bash
npm run build:github
```

## 部署

### GitHub Pages部署

项目已配置为通过GitHub Actions自动部署到GitHub Pages：

1. 将代码推送到`main`分支
2. GitHub Actions会自动触发部署流程
3. 部署后可以在 `https://yourusername.github.io/image-compressor-clean/` 访问应用

如需手动部署：

```bash
npm run build:github
# 确保在out目录中有.nojekyll文件
touch out/.nojekyll
# 部署out目录到gh-pages分支
```

### Vercel部署

1. 在Vercel平台创建新项目
2. 连接到您的GitHub仓库
3. 部署设置保持默认即可，Vercel会自动识别Next.js项目
4. 部署完成后，您可以在Vercel提供的域名访问应用

## 环境变量

- `GITHUB_PAGES`: 设置为`true`时启用GitHub Pages的basePath配置（使用`npm run build:github`自动设置）

## 项目结构

- `app/`: Next.js App Router 应用代码
- `components/`: React组件
- `public/`: 静态资源
- `out/`: 构建输出目录
- `.github/workflows/`: GitHub Actions工作流配置

## 许可证

MIT
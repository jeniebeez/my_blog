# Jeniebeez's Notebook

以 [Astro](https://astro.build/) 建置的個人部落格，部署於 GitHub Pages。

## 專案結構

```text
├── public/                 # 靜態資源 (favicon 等)
├── src/
│   ├── content/
│   │   └── blog/           # Markdown 文章與圖片 (img/)
│   ├── layouts/            # 頁面與文章版面模板
│   ├── pages/              # 路由頁面與 RSS
│   ├── styles/             # 全域樣式 (支援深淺色主題)
│   ├── consts.ts           # 網站標題與描述設定
│   └── content.config.ts   # 文章 Frontmatter Schema
└── astro.config.mjs        # Astro 與 GitHub Pages 路徑設定
```

## 新增文章方式

在 `src/content/blog/` 資料夾下新增 `.md` 檔案，並在開頭加上 Frontmatter：

```markdown
---
title: "文章標題"
description: "文章摘要描述"
pubDate: 2026-11-18
tags: ["標籤1", "標籤2"]
---

文章內容...
若需插入圖片，可將圖片放入 `src/content/blog/img/` 並使用相對路徑 `./img/xxx.png`。
```

## 本地開發與建置

```bash
# 啟動本地開發伺服器 (http://localhost:4321/my_blog/)
npm run dev

# 建置靜態網頁至 dist/
npm run build

# 預覽建置結果
npm run preview
```

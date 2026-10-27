# 潘信宏 Vincent Pan — 個人介紹網站

一個為朝陽科技大學資訊管理系助理教授潘信宏老師打造的現代化個人介紹網站。
採用 React + TypeScript + Vite + Tailwind CSS，以深淺色交替的版面、襯線與無襯線字體混搭，搭配微互動與滾動動畫，呈現專業且優雅的個人品牌形象。

> 靈感來源與內容參考：[vincentpanblog.wordpress.com](https://vincentpanblog.wordpress.com/)

---

## ✨ 特色

- **現代設計語言**：深色與淺色區塊交替，建立清晰的視覺節奏與層次
- **響應式佈局**：從手機到桌面皆有最佳瀏覽體驗
- **微互動與動畫**：滾動淡入、卡片懸停、時間軸節點脈動等細節
- **毛玻璃導覽列**：捲動時轉為半透明背景，附手機版漢堡選單
- **中英雙語內容**：姓名、職稱、研究領域皆標示中英文
- **語意化結構**：Hero、關於、研究領域、學歷、經歷、聯絡六大區塊

## 🧩 區塊總覽

| 區塊 | 說明 |
| --- | --- |
| **Hero** | 以圖書館建築為背景，呈現中英文姓名、職稱與簡介，附行動按鈕 |
| **About 關於我** | 個人簡介與現職、英文名、聯絡電話、Email 快速資訊卡 |
| **Research 研究領域** | 六張卡片：網頁技術、機器學習、人工智慧、嵌入式系統／物聯網、智慧型運輸系統、隨意式無線網路 |
| **Education 學歷** | 時間軸呈現學士、碩士、博士三階段 |
| **Career 經歷** | 列卡呈現現職與過往經歷，現職標註綠色標籤 |
| **Contact 聯絡** | Email 與電話連結、學校地址與頁尾 |

## 🛠 技術棧

- **[React 18](https://react.dev/)** + **TypeScript** — UI 框架與型別安全
- **[Vite 7](https://vitejs.dev/)** — 開發伺服器與建置工具
- **[Tailwind CSS 3](https://tailwindcss.com/)** — 原子化樣式與自訂色彩系統
- **[Lucide React](https://lucide.dev/)** — 圖示庫
- **Google Fonts** — Cormorant Garamond（襯線）、Inter、Noto Sans/Serif TC

## 📁 專案結構

```
.
├── index.html                 # HTML 入口、字體載入、meta 資訊
├── tailwind.config.js         # Tailwind 設定（色彩系統、動畫 keyframes）
├── vite.config.ts             # Vite 設定（@ 路徑別名）
└── src/
    ├── App.tsx                # 根元件，組合各區塊並掛載滾動動畫
    ├── main.tsx               # React 入口
    ├── index.css              # 全域樣式與滾動動畫工具類別
    ├── data.ts                # 個人資料、學歷、經歷、研究領域資料
    ├── useReveal.ts           # IntersectionObserver 滾動淡入 hook
    └── components/
        ├── Nav.tsx            # 固定導覽列（毛玻璃 + 手機選單）
        ├── Hero.tsx           # 首頁主視覺
        ├── About.tsx          # 關於我
        ├── Research.tsx       # 研究領域卡片
        ├── Education.tsx      # 學歷時間軸
        ├── Career.tsx         # 經歷列卡
        └── Contact.tsx        # 聯絡資訊與頁尾
```

## 🚀 開始使用

需安裝 [Node.js](https://nodejs.org/) 18 以上版本。

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置正式版本
npm run build

# 本地預覽正式版本
npm run preview

# 型別檢查
npm run typecheck

# 程式碼風格檢查
npm run lint
```

開發伺服器啟動後，於瀏覽器開啟 Vite 顯示的本機網址即可。

## 🎨 自訂內容

所有個人資料集中於 `src/data.ts`，修改該檔即可更新：

- `profile` — 姓名、職稱、聯絡方式、簡介
- `education` — 學歷時間軸
- `career` — 經歷列表
- `researchAreas` — 研究領域卡片（含 Lucide 圖示名稱）

主題色彩定義於 `tailwind.config.js` 的 `ink`（中性灰）與 `accent`（藍）色階；全域樣式與動畫工具類別位於 `src/index.css`。

## 📷 圖片來源

首頁背景使用 [Pexels](https://www.pexels.com/) 提供的免版稅相片（Geisel Library），可直接內嵌使用。

## 📄 授權

本專案程式碼可自由使用。個人資料與照片所有權屬潘信宏老師所有。

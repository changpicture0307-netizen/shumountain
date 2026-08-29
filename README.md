# 溯溪紀錄網站

## 檔案結構
```
index.html          首頁（路線列表，護照印章樣式）
route.html           路線詳細頁模板（依網址參數 ?r=slug 顯示對應路線，?t=2 可指定第幾次造訪）
changelog.html        更新日誌（記錄網站每次更新了什麼）
css/style.css         樣式
fonts/                粒線體字型檔（proportional / monospaced）
js/routes-data.js     所有路線資料，之後補資訊都改這個檔案就好
js/changelog-data.js  更新日誌資料
images/<slug>/tripN/  每條路線「第 N 次造訪」的圖片放這裡
```

## 資料結構：路線 → 多次造訪（trips）
因為同一條路線你可能會去很多次，資料結構是「一條路線底下有好幾個 trip」：

```js
{
  slug: "huliao-tan",
  name: "虎寮潭",
  trips: [
    { date: "2025/03/23", members: [...], entries: [...] },   // 第 1 次
    { date: "2026/05/10", members: [...], entries: [...] }    // 第 2 次（之後再去，直接加進陣列）
  ]
}
```

- `trips` 陣列第一筆＝最早的一次，最後一筆＝最新的一次。
- 只要 `trips` 裡有 2 筆以上，路線頁最上方會自動出現「第 1 次 · 日期」「第 2 次 · 日期」的分頁按鈕，可以切換看不同次的紀錄。首頁的印章圖示也會顯示「去了 N 次」。
- **之後同一條路線再去一次，怎麼加：** 打開 `routes-data.js`，找到那條路線，複製一份現有的 trip 物件貼在 `trips` 陣列最後面，改成新的日期、人員、紀錄即可，不用動到舊的那次。

## 每個 trip 裡面的欄位

```js
{
  date: "2025/03/23",
  members: ["小明", "阿華"],
  support: ["留守的人"],
  groupPhoto: "group-photo.jpg",
  startPoint: "https://maps.app.goo.gl/xxxxxx",
  difficulty: "新手",
  mapImage: "route-map.jpg",
  gpx: "track.gpx",
  entries: [
    { type: "text", text: "08:00 集合出發" },
    { type: "photo", src: "1.jpg", caption: "（選填）這張照片的說明" },
    { type: "text", text: "09:00 抵達起溯點" }
  ]
}
```

- 沒有的欄位留空字串 `""` 或空陣列 `[]`，頁面會自動顯示「尚無紀錄」。
- `startPoint` 填 Google Maps（或其他地圖）連結，路線頁會顯示成一個可以點開的「起溯點」標籤。
- **`entries` 是紀錄文字和照片混在一起的地方**，依照陣列順序由上到下顯示，文字和照片可以任意穿插，就跟一篇圖文紀錄一樣。`caption` 是照片的說明文字，可省略。連續好幾張照片會自動排成一列一列（電腦板三張一排、手機兩張一排），不會一張一張往下拖得很長；只要中間插入一個 `text` 項目，就會自動分段。

## 怎麼放圖片
每次造訪的圖片，都放在 `images/<路線代稱>/trip<第幾次>/` 底下，例如虎寮潭第 1 次的東西都在 `images/huliao-tan/trip1/`：

1. **人員合照**（顯示在路線頁最上方）：檔名固定用 `group-photo.jpg`，放進 `images/huliao-tan/trip1/group-photo.jpg`，再把該 trip 的 `groupPhoto` 填成 `"group-photo.jpg"`
2. **溯行圖**：放進 `images/huliao-tan/trip1/route-map.jpg`，`mapImage` 填成 `"route-map.jpg"`
3. **紀錄裡的照片**：放進 `images/huliao-tan/trip1/photos/` 資料夾，檔名對應 `entries` 裡 `photo` 項目的 `src`
4. **GPX 軌跡**：放進 `images/huliao-tan/trip1/track.gpx`，`gpx` 填成 `"track.gpx"`

如果之後同一條路線去了第 2 次，就新增 `images/huliao-tan/trip2/` 資料夾，裡面一樣是 `group-photo.jpg`、`route-map.jpg`、`photos/`、`track.gpx`，跟 `routes-data.js` 裡新增的第 2 個 trip 物件對應。

## 字體
全站中文字體使用「粒線體」（`fonts/lihsianti-proportional.ttf` 標題與內文、`fonts/lihsianti-monospaced.ttf` 用在時間戳記等等距文字），解決常見中文網頁字體缺字的問題。字型檔第一次上傳後，之後更新內容都不需要重傳。

## 怎麼新增一條路線
複製 `routes-data.js` 裡任一個路線物件，貼上、改內容，`slug` 記得取一個新的英文代稱（不要跟別條路線重複），`trips` 至少要有一筆（可以先留空），首頁會自動出現新的印章卡片。

## 怎麼寫更新日誌
打開 `js/changelog-data.js`，在 `CHANGELOG` 陣列**最上面**（第一項）新增一筆：

```js
{
  date: "2026/09/01",
  title: "補上虎寮潭第二次紀錄",
  notes: ["填入日期與人員", "放入照片"]
}
```

`notes` 是細節列點，不需要的話可以留空陣列 `[]` 或整行刪掉。首頁最下面有連結可以點進「更新日誌」頁面看全部紀錄。

## 在本機預覽
用瀏覽器直接開 `index.html` 即可。要放到網路上的話，直接把整個資料夾上傳到 GitHub Pages / Cloudflare Pages 之類的靜態網站空間即可，不需要後端。

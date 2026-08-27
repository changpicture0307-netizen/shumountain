# 溯溪紀錄網站

## 檔案結構
```
index.html          首頁（路線列表，護照印章樣式）
route.html           路線詳細頁模板（依網址參數 ?r=slug 顯示對應路線）
changelog.html        更新日誌（記錄網站每次更新了什麼）
css/style.css         樣式
js/routes-data.js     所有路線資料，之後補資訊都改這個檔案就好
js/changelog-data.js  更新日誌資料
images/<slug>/        每條路線的圖片放這裡
```

## 怎麼補資料
打開 `js/routes-data.js`，找到對應路線的物件，直接填：

```js
{
  slug: "huliao-tan",
  name: "虎寮潭",
  date: "2024/07",
  members: ["小明", "阿華"],
  difficulty: "新手",
  startPoint: "https://maps.app.goo.gl/xxxxxx",
  log: "水量偏大，第二個深潭要注意流速。",
  mapImage: "route-map.jpg",
  gpx: "track.gpx",
  photos: ["1.jpg", "2.jpg", "3.jpg"]
}
```

- 沒有的欄位留空字串 `""` 或空陣列 `[]`，頁面會自動顯示「尚無紀錄」。
- `startPoint` 填 Google Maps（或其他地圖）連結，路線頁會顯示成一個可以點開的「起溯點」標籤。
- 首頁的圓形印章圖示，只有真的有資料的欄位才會標亮（人員／照片／紀錄／溯行圖／時間）。

## 怎麼放圖片
1. 在 `images/` 底下新增跟路線 slug 同名的資料夾，例如 `images/huliao-tan/`
2. **人員合照**（顯示在路線頁最上方）：檔名固定用 `group-photo.jpg`，放進 `images/huliao-tan/group-photo.jpg`，再到 `routes-data.js` 把該路線的 `groupPhoto` 填成 `"group-photo.jpg"`
3. 溯行圖放進去，例如 `images/huliao-tan/route-map.jpg`，再到 `routes-data.js` 把 `mapImage` 填成 `"route-map.jpg"`
4. 照片放進 `images/huliao-tan/photos/` 資料夾，檔名填進 `photos` 陣列即可，例如 `photos: ["1.jpg", "2.jpg"]`
5. GPX 軌跡檔放進 `images/huliao-tan/`，例如 `images/huliao-tan/track.gpx`，再把 `gpx` 欄位填成 `"track.gpx"`，路線頁的照片區塊下方就會出現下載按鈕

## 怎麼新增一條路線
複製 `routes-data.js` 裡任一個路線物件，貼上、改內容，`slug` 記得取一個新的英文代稱（不要跟別條路線重複），首頁會自動出現新的印章卡片。

## 怎麼寫更新日誌
打開 `js/changelog-data.js`，在 `CHANGELOG` 陣列**最上面**（第一項）新增一筆：

```js
{
  date: "2026/09/01",
  title: "補上虎寮潭資料",
  notes: ["填入日期與人員", "放入溯行圖"]
}
```

`notes` 是細節列點，不需要的話可以留空陣列 `[]` 或整行刪掉。首頁最下面有連結可以點進「更新日誌」頁面看全部紀錄。

## 在本機預覽
用瀏覽器直接開 `index.html` 即可（部分瀏覽器對 `fetch` 本機檔案有限制，但這個網站沒有用到 fetch，所以雙擊開檔就能看）。要放到網路上的話，直接把整個資料夾上傳到 GitHub Pages / Netlify / Vercel 之類的靜態網站空間即可，不需要後端。

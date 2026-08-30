// 溯溪路線資料
//
// 資料結構：每條路線（route）底下有一個 trips 陣列，
// 因為同一條路線可能會去很多次，每次都是一個獨立的 trip 紀錄。
// trips 陣列第一筆＝最早的一次，最後一筆＝最新的一次。
//
// 每個 trip 長這樣：
// {
//   date: "2025/03/23",              // 這次的日期
//   members: ["人員1", "人員2"],       // 這次的人員
//   support: ["留守1"],               // 這次的留守人員
//   groupPhoto: "group-photo.jpg",    // 這次的合照
//   startPoint: "https://...",        // 起溯點／停車點地圖連結
//   difficulty: "",
//   mapImage: "route-map.jpg",        // 溯行圖
//   gpx: "track.gpx",                 // GPX 軌跡
//   entries: [                        // 紀錄文字＋照片，依順序混排
//     { type: "text", text: "08:00 集合出發" },
//     { type: "photo", src: "1.jpg", caption: "選填說明文字" },
//     { type: "text", text: "09:00 抵達起溯點" }
//   ]
// }
//
// 每次的圖片（合照／溯行圖／照片／GPX）都放在
// images/<slug>/trip<第幾次，從1開始>/ 資料夾下，
// 這樣同一條路線去很多次也不會互相蓋掉檔案。
// 例如虎寮潭第一次的照片放在 images/huliao-tan/trip1/photos/1.jpg

const ROUTES = [
  {
    slug: "zhongkeng-yunsen",
    name: "中坑溪雲森瀑布",
    trips: [
      {
        date: "2024/12/22",
        members: ["劉承越", "張智勳", "黃元泓", "范文浩", "劉玟希", "林芷愉", "王馨儀", "黃莉容", "蔡采之", "徐永鴻", "蔡曉亞"],
        support: ["蔡允瑄"],
        groupPhoto: "group-photo.jpg",
        startPoint: "",
        difficulty: "",
        mapImage: "",
        gpx: "track.gpx",
        entries: [
          { type: "text", text: "08:00 世新大學集合\n10:01 停車場換裝\n10:53 拍大合照，再檢查一次裝備準備出發\n11:00 整裝完畢出發\n11:26 部隊下大斜坡結束準備進入溪谷到姐妹瀑布瀑頂\n12:24 黃教練肚子餓了，智勳跟黃教練往前找可以吃飯的地方\n12:30 找到還可以的地方，先煮水跟抹茶給大家\n12:37 達波抵達\n12:40 大部隊抵達\n13:45 出發繼續前行\n14:45 曉亞手受傷，停止前進先處理傷口\n14:41 抵達平瀬，右岸有沙洲營地，約2T*2\n14:49 抵達瀑布－雲森瀑布\n15:52 回程\n16:28 全員抵達停車場換裝\n17:14 換裝完成去吃飯，當地人推薦有木里觀光土雞城\n\n重要地標 (TWD97)：\n大斜坡結束點 296589/2748259\n午餐地 296909/2747877\n平瀬 297115/2747569\n瀑布 297107/2747507" },
          { type: "photo", src: "1.jpg" },
          { type: "photo", src: "2.jpg" },
          { type: "photo", src: "3.jpg" },
          { type: "photo", src: "4.jpg" },
          { type: "photo", src: "5.jpg" },
          { type: "photo", src: "6.jpg" }
        ]
      }
    ]
  },
  {
    slug: "fushi-creek",
    name: "富士溪",
    trips: [
      {
        date: "2024/09/08",
        members: ["張智勳", "劉承越", "蔡允宣", "黃元泓", "文集均", "張展華", "林辰潔", "黃莉容"],
        support: [],
        groupPhoto: "group-photo.jpg",
        startPoint: "",
        difficulty: "",
        mapImage: "",
        gpx: "track.gpx",
        entries: [
          { type: "photo", src: "1.jpg" },
          { type: "photo", src: "2.jpg" },
          { type: "photo", src: "3.jpg" },
          { type: "photo", src: "4.jpg" },
          { type: "photo", src: "5.jpg" },
          { type: "photo", src: "6.jpg" },
          { type: "photo", src: "7.jpg" },
          { type: "photo", src: "8.jpg" }
        ]
      }
    ]
  },
  {
    slug: "huliao-tan",
    name: "虎寮潭",
    trips: [
      {
        date: "2025/03/23",
        members: ["承越", "允瑄", "元泓", "莉容", "芳瑜", "Stacy", "馨儀", "芷愉", "詠鈞"],
        support: [],
        groupPhoto: "group-photo.jpg",
        startPoint: "https://maps.app.goo.gl/TDoTJ3M7Taqci86J8?g_st=ifm",
        difficulty: "",
        mapImage: "",
        gpx: "track.gpx",
        entries: [
          { type: "text", text: "撰寫人：林芷愉\n路線：虎寮潭溯源湖桶古道（餐食自理）\n交通：機車，07:30 景美出發" },
          { type: "text", text: "個人技術裝備：溯溪鞋、吊帶、岩盔、8字下降器、1M普魯士繩圈、自我確保鍊、有鎖鉤環*4\n公用技術裝備：15M短繩*1\n溯行衣物：內層/羊毛衣or排汗衫、動態保暖/powerstretch、雨衣、登山褲or束褲（加短褲）、可以帶進岩盔的鴨舌帽、小背包（食物、頭燈、備用電池、打火機、火種）、乾衣服（放車上）" },
          { type: "text", text: "08:21 中和集合出發\n09:45 起溯點整裝完畢，準備出發\n10:05 互助攀登" },
          { type: "photo", src: "1.jpg" },
          { type: "photo", src: "2.jpg" },
          { type: "text", text: "10:38 過地形，先鋒馨儀、元泓" },
          { type: "photo", src: "3.jpg" },
          { type: "photo", src: "4.jpg" },
          { type: "text", text: "左圖在下方等待的隊員，右圖在上方架繩的先鋒馨儀、元泓" },
          { type: "text", text: "左圖在上方進行人身確保的先鋒（馨儀），右圖主繩雙八字結連接吊帶" },
          { type: "photo", src: "5.jpg" },
          { type: "photo", src: "6.jpg" },
          { type: "text", text: "下方隊員陸續拉繩上攀" },
          { type: "photo", src: "7.jpg" },
          { type: "photo", src: "8.jpg" },
          { type: "text", text: "11:55 瀑布底休息吃中餐" },
          { type: "text", text: "12:45 過地形，先鋒攀登瀑布上方架設固定點（sling＋上鎖勾環），以進行上方確保（使用ATC）。左圖正在攀登的黃教練，帥慘了；右圖在上方架設固定點的黃教練，帥到不行" },
          { type: "photo", src: "9.jpg" },
          { type: "photo", src: "10.jpg" },
          { type: "photo", src: "11.jpg" },
          { type: "text", text: "在上方作業時，如果要站得比較外面的話，要把自我確保扣在固定點上，以確保自己的安危。\n\n自我確保後，便可以拋繩，將有繩結的一端拋給下方攀爬者，攀爬者在接到主繩後，用勾環連接主繩和自己的安全帶。隨後與上方確保者比手勢或哨音，確認無誤後方可進行攀爬。\n\n上方確保者在收繩時，要時刻觀察攀爬者的狀態，繩索需隨時保持繃緊的狀態，以免攀爬者墜落太長的距離。\n\n攀爬者到達上方時：一、在安全的地方解開主繩；二、如果安全的地方有一段距離，自我確保後斷開與主繩的連接，走到安全的地方，解開自我確保。\n\n其他隊員陸續攀爬至上方（繩端打雙稱人結/雙八字結，以勾環連接主繩以及攀爬者）" },
          { type: "text", text: "13:28 爬上斜坡再垂降下來。左圖斜坡；右圖爬上斜坡的人。" },
          { type: "photo", src: "12.jpg" },
          { type: "photo", src: "13.jpg" },
          { type: "photo", src: "14.jpg" },
          { type: "text", text: "正在爬上斜坡的人" },
          { type: "text", text: "斜坡上方的樹上架設垂降系統（忘了是固定點＋MMO還是八字結＋勾環）\n左圖準備垂降的Stacy；右圖正在垂降的橘子，兩位都超棒的。" },
          { type: "photo", src: "15.jpg" },
          { type: "photo", src: "16.jpg" },
          { type: "text", text: "左圖正在垂降的允瑄；右圖正在垂降的莉容，大家都超棒的" },
          { type: "photo", src: "17.jpg" },
          { type: "photo", src: "18.jpg" },
          { type: "text", text: "左圖正在垂降的馨儀；右圖正在垂降的我，我們也超棒的" },
          { type: "photo", src: "19.jpg" },
          { type: "photo", src: "20.jpg" },
          { type: "text", text: "背後拍照的芳瑜，確保大家安危的劉教練和黃教練也都超棒的。\n\n15:00 過地形：馨儀帶主繩先鋒攀登瀑布上方進行人身確保，達波隨後拉繩上去架設固定點。固定點架設完畢後，其他隊員使用普魯士上升（或上升器traxion或Jumar）。\n左圖在瀑布上方的馨儀以及正在攀爬的劉教練；右圖在瀑布上方的視角。" },
          { type: "photo", src: "21.jpg" },
          { type: "photo", src: "22.jpg" },
          { type: "text", text: "最佳攻擊手：馨儀" },
          { type: "photo", src: "23.jpg" },
          { type: "text", text: "16:25 出溪谷" },
          { type: "photo", src: "24.jpg" },
          { type: "text", text: "16:42 走古道\n18:13 換裝完畢，開車離開\n19:05 元泓車抵達臺大停車場" },
          { type: "photo", src: "25.jpg" },
          { type: "photo", src: "26.jpg" },
          { type: "photo", src: "27.jpg" },
          { type: "photo", src: "28.jpg" },
          { type: "photo", src: "29.jpg" },
          { type: "photo", src: "30.jpg" },
          { type: "photo", src: "31.jpg" }
        ]
      }
    ]
  },
  {
    slug: "toucian-creek",
    name: "頭前溪",
    trips: [
      {
        date: "2026/03/08",
        members: ["張智勳", "黃元泓", "劉承越"],
        support: [],
        groupPhoto: "group-photo.jpg",
        startPoint: "",
        difficulty: "",
        mapImage: "",
        gpx: "",
        entries: [
          { type: "text", text: "智勳生日隔天開開心心溯溪\n09:14 起溯" },
          { type: "photo", src: "1.jpg" },
          { type: "photo", src: "2.jpg" },
          { type: "photo", src: "3.jpg" },
          { type: "text", text: "10:13 智勳砍到腳撤退\n下山去了醫院、浩宇家農場、泡溫泉還有最好吃的小漁村\n下次有機會再來" },
          { type: "photo", src: "4.jpg" },
          { type: "photo", src: "5.jpg" }
        ]
      }
    ]
  },
  {
    slug: "jiajiuliao-creek",
    name: "加九寮溪左股溯源高腰山",
    trips: [
      {
        date: "2024/10/11",
        members: ["張智勳", "劉承越", "陳裕豪"],
        support: [],
        groupPhoto: "group-photo.jpg",
        startPoint: "",
        difficulty: "",
        mapImage: "route-map.jpg",
        gpx: "",
        entries: [
          { type: "text", text: "沒紀錄，有夠累，達波登山杖忘在路上大家可以去找，後面陡上沒穿冰爪會滑成智障" },
          { type: "photo", src: "1.jpg" },
          { type: "photo", src: "2.jpg" },
          { type: "photo", src: "3.jpg" },
          { type: "photo", src: "4.jpg" },
          { type: "photo", src: "5.jpg" },
          { type: "photo", src: "6.jpg" }
        ]
      }
    ]
  },
  {
    slug: "fengmei-creek",
    name: "風美溪",
    trips: [
      {
        date: "2026/07/25",
        members: ["黃元泓", "張智勳", "林育陞", "林芷瑜"],
        support: [],
        groupPhoto: "group-photo.jpg",
        startPoint: "",
        difficulty: "",
        mapImage: "",
        gpx: "track.gpx",
        entries: [
          { type: "photo", src: "1.jpg" },
          { type: "photo", src: "2.jpg" },
          { type: "photo", src: "3.jpg" },
          { type: "photo", src: "4.jpg" },
          { type: "photo", src: "5.jpg" },
          { type: "photo", src: "6.jpg" },
          { type: "photo", src: "7.jpg" },
          { type: "photo", src: "8.jpg" },
          { type: "photo", src: "9.jpg" },
          { type: "photo", src: "10.jpg" },
          { type: "photo", src: "11.jpg" },
          { type: "photo", src: "12.jpg" },
          { type: "photo", src: "13.jpg" }
        ]
      }
    ]
  },
  {
    slug: "gupoliao-creek",
    name: "姑婆寮溪左股",
    trips: [
      {
        date: "",
        members: [],
        support: [],
        groupPhoto: "",
        startPoint: "",
        difficulty: "",
        mapImage: "route-map.jpg",
        gpx: "",
        entries: [
          { type: "text", text: "說明：智勳在當兵沒去到\n只知道馨儀把達波的刀弄丟了" }
        ]
      }
    ]
  },
  {
    slug: "laomei-creek",
    name: "老梅溪",
    trips: [
      {
        date: "",
        members: [],
        support: [],
        groupPhoto: "group-photo.jpg",
        startPoint: "",
        difficulty: "",
        mapImage: "",
        gpx: "",
        entries: [
          { type: "photo", src: "1.jpg" },
          { type: "photo", src: "2.jpg" },
          { type: "photo", src: "3.jpg" },
          { type: "photo", src: "4.jpg" },
          { type: "photo", src: "5.jpg" },
          { type: "photo", src: "6.jpg" },
          { type: "photo", src: "7.jpg" }
        ]
      }
    ]
  }
];

// 首頁印章上顯示的資料完整度標籤
const FIELD_META = [
  { key: "date", label: "時間" },
  { key: "members", label: "人員" },
  { key: "photos", label: "照片" },
  { key: "log", label: "紀錄" },
  { key: "mapImage", label: "溯行圖" },
  { key: "gpx", label: "GPX" },
  { key: "groupPhoto", label: "合照" }
];

// 判斷「這條路線的所有 trip 裡，有沒有任何一次填了這個欄位」
function tripHasField(trip, key) {
  if (key === "log") {
    return !!(trip.entries && trip.entries.some(e => e.type === "text" && e.text && e.text.trim()));
  }
  if (key === "photos") {
    return !!(trip.entries && trip.entries.some(e => e.type === "photo" && e.src));
  }
  const v = trip[key];
  if (Array.isArray(v)) return v.length > 0;
  return !!v;
}

function hasField(route, key) {
  return route.trips.some(t => tripHasField(t, key));
}

function getRoute(slug) {
  return ROUTES.find(r => r.slug === slug);
}

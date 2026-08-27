// 溯溪路線資料
// 之後要新增/補齊資訊，直接在這裡編輯即可。
// 沒有的欄位留空或刪除該行即可，頁面會自動顯示「尚無紀錄」。
//
// photos: 陣列，填入檔名字串，對應 images/<slug>/photos/ 資料夾內的檔案
// mapImage: 溯行圖檔名，對應 images/<slug>/route-map.jpg（或 .png）
// gpx: GPX 軌跡檔名，對應 images/<slug>/track.gpx
// support: 留守人員，陣列
// groupPhoto: 人員合照檔名，會顯示在路線頁最上方，對應 images/<slug>/ 資料夾內的檔案
// startPoint: 起溯點／停車點的地圖連結（例如 Google Maps 網址）

const ROUTES = [
  {
    slug: "zhongkeng-yunsen",
    name: "中坑溪雲森瀑布",
    date: "2024/12/22",
    members: ["劉承越", "張智勳", "黃元泓", "范文浩", "劉玟希", "林芷愉", "王馨儀", "黃莉容", "蔡采之", "徐永鴻", "蔡曉亞"],
    support: ["蔡允瑄"],
    groupPhoto: "group-photo.jpg",
    startPoint: "",
    difficulty: "",
    log: "08:00 世新大學集合\n10:01 停車場換裝\n10:53 拍大合照，再檢查一次裝備準備出發\n11:00 整裝完畢出發\n11:26 部隊下大斜坡結束準備進入溪谷到姐妹瀑布瀑頂\n12:24 黃教練肚子餓了，智勳跟黃教練往前找可以吃飯的地方\n12:30 找到還可以的地方，先煮水跟抹茶給大家\n12:37 達波抵達\n12:40 大部隊抵達\n13:45 出發繼續前行\n14:45 曉亞手受傷，停止前進先處理傷口\n14:41 抵達平瀬，右岸有沙洲營地，約2T*2\n14:49 抵達瀑布－雲森瀑布\n15:52 回程\n16:28 全員抵達停車場換裝\n17:14 換裝完成去吃飯，當地人推薦有木里觀光土雞城\n\n重要地標 (TWD97)：\n大斜坡結束點 296589/2748259\n午餐地 296909/2747877\n平瀬 297115/2747569\n瀑布 297107/2747507",
    mapImage: "",
    gpx: "",
    photos: []
  },
  {
    slug: "fushi-creek",
    name: "富士溪",
    date: "",
    members: [],
    support: [],
    groupPhoto: "",
    startPoint: "",
    difficulty: "",
    log: "",
    mapImage: "",
    gpx: "",
    photos: []
  },
  {
    slug: "huliao-tan",
    name: "虎寮潭",
    date: "2025/03/23",
    members: ["承越", "允瑄", "元泓", "莉容", "芳瑜", "Stacy", "馨儀", "芷愉", "詠鈞"],
    support: [],
    groupPhoto: "",
    startPoint: "https://maps.app.goo.gl/TDoTJ3M7Taqci86J8?g_st=ifm",
    difficulty: "",
    log: "08:21 中和集合出發\n09:45 起溯點整裝完畢，準備出發\n10:38 過地形，先鋒馨儀、元泓\n11:55 瀑布底休息吃中餐\n12:45 過地形，先鋒攀登瀑布上方架設固定點（sling＋上鎖勾環），以進行上方確保（使用ATC）\n13:28 爬上斜坡再垂降下來\n15:00 過地形：馨儀帶主繩先鋒攀登瀑布上方進行人身確保，達波隨後拉繩上去架設固定點。固定點架設完畢後，其他隊員使用普魯士上升（或上升器traxion或Jumar）\n16:25 出溪谷\n16:42 走古道\n18:13 換裝完畢，開車離開\n19:05 元泓車抵達臺大停車場",
    mapImage: "",
    gpx: "",
    photos: []
  },
  {
    slug: "toucian-creek",
    name: "頭前溪",
    date: "",
    members: [],
    support: [],
    groupPhoto: "",
    startPoint: "",
    difficulty: "",
    log: "",
    mapImage: "",
    gpx: "",
    photos: []
  },
  {
    slug: "jiajiuliao-creek",
    name: "加九寮溪",
    date: "",
    members: [],
    support: [],
    groupPhoto: "",
    startPoint: "",
    difficulty: "",
    log: "",
    mapImage: "",
    gpx: "",
    photos: []
  },
  {
    slug: "fengmei-creek",
    name: "風美溪",
    date: "",
    members: [],
    support: [],
    groupPhoto: "",
    startPoint: "",
    difficulty: "",
    log: "",
    mapImage: "",
    gpx: "",
    photos: []
  },
  {
    slug: "gupoliao-creek",
    name: "姑婆寮溪",
    date: "",
    members: [],
    support: [],
    groupPhoto: "",
    startPoint: "",
    difficulty: "",
    log: "",
    mapImage: "",
    gpx: "",
    photos: []
  },
  {
    slug: "laomei-creek",
    name: "老梅溪",
    date: "",
    members: [],
    support: [],
    groupPhoto: "",
    startPoint: "",
    difficulty: "",
    log: "",
    mapImage: "",
    gpx: "",
    photos: []
  }
];

// 這五項是每條路線要追蹤的「資料完整度」欄位
const FIELD_META = [
  { key: "date", label: "時間" },
  { key: "members", label: "人員" },
  { key: "photos", label: "照片" },
  { key: "log", label: "紀錄" },
  { key: "mapImage", label: "溯行圖" },
  { key: "gpx", label: "GPX" },
  { key: "groupPhoto", label: "合照" }
];

function hasField(route, key) {
  const v = route[key];
  if (Array.isArray(v)) return v.length > 0;
  return !!v;
}

function getRoute(slug) {
  return ROUTES.find(r => r.slug === slug);
}

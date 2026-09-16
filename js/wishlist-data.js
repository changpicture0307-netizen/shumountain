// 願望清單
//
// 想去但還沒去過的路線，把名字寫在下面就好。
//
// ★ 自動移除機制：
// 只要 routes-data.js 裡出現「名字一樣」的路線，
// 這裡的項目就會自動從願望清單消失（不用手動刪）。
// 也就是說，等你哪天真的去了、把路線加進 routes-data.js，
// 願望清單就會自動幫你打勾結案。
//
// 比對時會忽略前後空白，所以名字只要寫得跟路線一樣就會對上。
// 例如願望清單寫「砲子崙瀑布」，routes-data.js 裡也有「砲子崙瀑布」，就會自動移除。
//
// note 是選填的備註，想寫為什麼想去、聽說哪裡好玩都可以。

const WISHLIST = [
  { name: "大尖山", note: "" },
  { name: "山羊峽谷", note: "" },
  { name: "舊寮瀑布", note: "" },
  { name: "中坑溪溯登卡保山", note: "" },
  { name: "鹿皮溪", note: "" },
  { name: "馬鋉溪溯登溪降富士溪", note: "" }
];

// 取得「還沒去過」的願望清單（已經出現在 ROUTES 裡的會自動濾掉）
function getPendingWishlist() {
  const doneNames = new Set(
    (typeof ROUTES !== "undefined" ? ROUTES : []).map(r => String(r.name).trim())
  );
  return WISHLIST.filter(w => !doneNames.has(String(w.name).trim()));
}

// 取得「已完成」的願望（名字已經出現在 ROUTES 裡的）
function getCompletedWishlist() {
  const routeByName = new Map(
    (typeof ROUTES !== "undefined" ? ROUTES : []).map(r => [String(r.name).trim(), r])
  );
  return WISHLIST
    .filter(w => routeByName.has(String(w.name).trim()))
    .map(w => ({ ...w, route: routeByName.get(String(w.name).trim()) }));
}

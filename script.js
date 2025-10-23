// 全頁共用搜尋跳轉功能
function handleSearch(event) {
  event.preventDefault();
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();

  const routes = {
    "入職": "index.html",
    "電郵": "index.html",
    "聊天": "chat.html",
    "通訊": "chat.html",
    "工作": "work.html",
    "論壇": "forum.html",
    "forum": "forum.html"
  };

  if (routes[keyword]) {
    window.location.href = routes[keyword];
  } else {
    alert("❌ 未找到相關頁面，請嘗試其他關鍵詞。");
  }
}

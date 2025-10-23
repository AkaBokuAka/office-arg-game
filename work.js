// ===== 文件審核頁面專用 JS =====

// 文件版本資料
const versions = {
  ver1: [
    "使用者：WangXiaoming",
    "登入日期：1998/12/25",
    "員工ID：90423",
    "部門代碼：A-02"
  ],
  ver2: [
    "姓名：王小明",
    "出生日期：1998/12/25",
    "員工編號：90423",
    "部門：文件核對部"
  ],
  ver3: [
    "姓名：WANG X.M.",
    "生日：1998/12/25",
    "員工代碼：90423",
    "分組：審核課"
  ]
};

// 切換顯示文件 B 的內容
function switchDoc(version) {
  const container = document.getElementById("docB");
  if (!container) return;
  container.innerHTML = "";
  versions[version].forEach(line => {
    const p = document.createElement("p");
    p.className = "doc-line";
    p.textContent = line;
    p.onclick = () => toggleMark(p);
    container.appendChild(p);
  });
  const select = document.getElementById("fileSelect");
  if (select) select.value = version;
}

// 切換標記樣式
function toggleMark(el) {
  el.classList.toggle("marked");
}

// 提交審核
function submitWork() {
  alert("✅ 文件提交成功！\n今日工作表現良好。\n請記下明日密碼：DAY2BEGIN");
  window.location.href = "forum.html";
}

// 初始載入
document.addEventListener("DOMContentLoaded", () => {
  // 初始化文件B（版本1）
  if (document.getElementById("docB")) switchDoc("ver1");

  // 綁定快速切換選單事件
  const quickSelect = document.getElementById("quickSwitch");
  if (quickSelect) {
    quickSelect.addEventListener("change", e => {
      const version = e.target.value;
      if (version) switchDoc(version);
    });
  }
});

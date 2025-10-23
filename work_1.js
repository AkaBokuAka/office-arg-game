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

  function switchDoc(version) {
    const container = document.getElementById("docB");
    container.innerHTML = "";
    versions[version].forEach(line => {
      const p = document.createElement("p");
      p.className = "doc-line";
      p.textContent = line;
      container.appendChild(p);
    });
  }

  function toggleMark(el) {
    el.classList.toggle("marked");
  }

const correctLines = [1, 3]; 

function submitWork() {
  const selected = document.querySelectorAll("#docA .marked");
  let correctCount = 0;
  selected.forEach((el, i) => {
    const index = Array.from(document.querySelectorAll("#docA .doc-line")).indexOf(el) + 1;
    if (correctLines.includes(index)) correctCount++;
  });

  // 跳轉到結果頁並帶上分數
  window.location.href = `result.html?day=1&score=${correctCount}`;
}

  // 初始化顯示版本1
  switchDoc("ver1");



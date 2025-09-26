// 模拟项目数据，可以随便加/删
const projects = [
  {
    name: "期权模拟工具",
    description: "一个短期期权收益模拟工具，可以快速计算 ATM/OTM 的利润和回报率。",
    link: "https://github.com/zhaoqianbiao/options-simulator"
  },
  {
    name: "Excel 插件",
    description: "帮助搜索多个工作表，提高办公效率。",
    link: "https://github.com/zhaoqianbiao/excel-addon"
  },
  {
    name: "ElectronicCorrectionNotebook",
    description: "收集并整理日常练习中的错误，支持搜索、标记和多语言。",
    link: "https://github.com/zhaoqianbiao/ElectronicCorrectionNotebook"
  }
];

// 自动渲染项目卡片
const container = document.getElementById("project-list");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <a href="${p.link}" target="_blank">查看项目 →</a>
  `;
  container.appendChild(card);
});

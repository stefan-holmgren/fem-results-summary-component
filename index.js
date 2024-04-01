const summaryItemTemplate = document.getElementById("summary-item-template");
const summaryList = document.getElementById("summary-list");

const fetchData = async () => {
  const response = await fetch("./data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};

const createSummaryItemElement = (item) => {
  const clone = summaryItemTemplate.content.cloneNode(true);
  clone.querySelector("h3 img").src = item.icon;
  clone.querySelector("h3 span").textContent = item.category;
  clone.querySelector("p span").textContent = item.score;
  clone.querySelector("li").setAttribute("data-type", item.category.toLowerCase());
  return clone;
};

(async () => {
  try {
    const data = await fetchData();
    data.forEach((item) => {
      summaryList.appendChild(createSummaryItemElement(item));
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();

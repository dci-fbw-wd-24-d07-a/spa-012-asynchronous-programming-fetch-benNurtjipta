const list = document.querySelector("ul");
const body = document.querySelector("body");
const processData = function () {
  const text = fetch("data.txt");
  text
    .then((res) => res.text())
    .then((data) => {
      const textArray = data.split("\n");

      textArray.sort();
      textArray.forEach((item, index) => {
        if (item !== textArray[index + 1]) {
          const listItem = document.createElement("li");
          listItem.textContent = `${item}`;
          list.append(listItem);
        }
      });
    });
};

const btn = document.querySelector("button");
btn.addEventListener("click", processData);

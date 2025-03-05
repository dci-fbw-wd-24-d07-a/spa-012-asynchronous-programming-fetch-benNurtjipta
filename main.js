const list = document.querySelector("ul");

const processData = function () {
  const text = fetch("data.txt");
  text
    .then((res) => res.text())
    .then((data) => {
      const textArray = data.split("\n");
      textArray.sort();
      textArray.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item}`;
        list.append(listItem);
      });
    });
};

const btn = document.querySelector("button");
btn.addEventListener("click", processData);

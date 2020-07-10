// показывает выпадающий список
const dropList = function (o) {
	const selected = o.querySelector(".selected");
	const optionsContainer = o.querySelector(".options-container");

	const optionsList = o.querySelectorAll(".option");

	selected.addEventListener("click", () => {
	  optionsContainer.classList.toggle("active");
	});

	optionsList.forEach(o => {
	  o.addEventListener("click", () => {
	    selected.innerHTML = o.querySelector("label").innerHTML;
		selected.classList.add("active");
	    optionsContainer.classList.remove("active");
	  });
	});
};

// для каждого select-box запускаем функцию выпадающего списка
const selectBoxs = document.querySelectorAll(".select-box");
selectBoxs.forEach(o => {
	dropList(o);
});
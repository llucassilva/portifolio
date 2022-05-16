const menu = document.querySelector("#nav");

window.addEventListener("scroll", () => {
	const eixoY = window.pageYOffset;
	console.log(eixoY);
	if (eixoY > 125) {
		menu.classList.add("fixed-top");
		menu.classList.add("js_menu");
	} else if (eixoY <= 125) {
		menu.classList.remove("fixed-top");
		menu.classList.remove("js_menu");
	}
});

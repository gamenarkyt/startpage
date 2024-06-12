const search_input = document.getElementsByClassName("search_input")[0]

// const links = {
// 	piped: "https://piped.video/feed/",
// 	github: "https://github.com/",
// }

// for (let i = 0; i < bookmarks.length; i++) {
// 	const classname = bookmarks[i].className
// 	const linkname = classname.match("site-(.*)")[1]
// 	const element = document.getElementsByClassName(classname)[0]

// 	// onclick
// 	element.addEventListener("click", () => {
// 		if (links[linkname]) {
// 			window.open(links[linkname], "_self")
// 		} else [console.log("bookmark not found")]
// 	})

// 	// onmiddleclick
// 	element.addEventListener("mouseup", (event) => {
// 		if (event.button === 1) {
// 			if (links[linkname]) {
// 				window.open(links[linkname])
// 			} else [console.log("bookmark not found")]
// 		}
// 	})
// }



const openSearch = (event) => {
	event.preventDefault();
	const search_query = String(search_input.value)
	console.log(search_query)
	window.open(`https://searx.be/search?q=${search_query}`, "_blank")
}
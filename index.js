ReactDOM.render(<p> Hi, my name is gando !</p>, document.getElementById("root"))

function MainContent () {
	return (
		<h1>I'm learning React </h1>
	)
}

ReactDOM.render(
	<div>
		<ul><li> Thing 1 </li><li> Thing 2 </li></ul>
		<MainContent />
	</div>,
	document.getElementById("root_")
)


const h1 = document.createElement("h1")
h1.textContent =  "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

const page = (
		<div>
			<h1 className="header">This is a JSX</h1>
			<p>This is a paragraph</p>
		</div>
)

ReactDOM.render(page, document.getElementById("root__"))


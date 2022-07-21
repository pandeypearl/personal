let portfolioData = [
	{
		id: "gstore",
		project: "Gstore",
		desc: "Ecommerce Web Application",
		stack: "HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; JavaScript",
		project_link: "https://pandeypearl.github.io/gstore",
		img: "img/projects/gstore.webp",
		background_color: "green",
	}
];

const portfolio = portfolioData;

let generatePortfolio = () => {
	return (portfolioInfo.innerHTML = portfolio
	.map((x) => {
		let { id, project, desc, stack, project_link, img, background_color} = x;
		return `
		<div class="project">
			<div class="project-img">
				<img src="${img}" />
				<div class="img-overlay"></div>
			</div>
				
			<div class="project-text">
				<div>
					<h3>${project}</h3>
					<small>${stack}</small>
				</div>
				<p>${desc}</p>
				<div class="btn-wrapper">
					<a class="btn" href="${project_link}" target="_blank">view project</a>
				</div>
			</div>
		</div>
		`
	})
	.join(""));
};
generatePortfolio();




 



let skillSetData = [
	{
		name: "HTML",
		type: "Programming Language",
		desc: "Hyper Text Mark-up Language is the  standard mark-up language for creating web pages",
		level: "80",
		usage: "100",
	},
	{
		name: "CSS",
		type: "Programming Language",
		desc: "Cascading Style Sheet is a style sheet language used for describing the presentation of a HTML or XML file",
		level: "75",
		usage: "100",
	},
	{
		name: "JavaScript",
		type: "Programming Language",
		desc: "JavaScript is a scripting language used for web development and web applications",
		level: "65",
		usage: "90",
	},
	{
		name: "React",
		type: "Framework",
		desc: "React is a front-end JavaScript library for building user interfaces based on UI components",
		level: "60",
		usage: "50",
	},
	{
		name: "Python",
		type: "Programming Language",
		desc: "Python is a high level, interpreted, general purpose programming language",
		level: "70",
		usage: "70",
	},
	{
		name: "Django",
		type: "Framework",
		desc: "Django is a high level Python web framework",
		level: "80",
		usage: "75",
	},
	{
		name: "Bootstrap",
		type: "Framework",
		desc: "Bootstrap is a CSS framework directed at responsive, mobile first front-end web development",
		level: "80",
		usage: "50",
	},
	{
		name: "Sass",
		type: "Preprocessor",
		desc: "Syntactically Awesome Style Sheets is a preprocessor scripting language compiled into Cascading Style Sheets",
		level: "55",
		usage: "40",
	},
	{
		name: "LESS",
		type: "Preprocessor",
		desc: "Leaner Style Sheets is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets",
		level: "50",
		usage: "35",
	},
	{
		name: "Figma",
		type: "Design Tool",
		desc: "Figma is a primarily web-based vector graphics editor and prototyping tool", 
		level: "75",
		usage: "70",
	},
	{
		name: "Adobe Photoshop",
		type: "Design Tool",
		desc: "Adobe Photoshop is a raster graphics editor",
		level: "85",
		usage: "80",
	},
	{
		name: "Adobe Illustrator",
		type: "Design Tool",
		desc: "Adobe Illustrator is a vector graphics editor and design program",
		level: "70",
		usage: "60",
	},
];

const skillSet = skillSetData;

let generateSkillSet = () => {
	return (skillSetInfo.innerHTML = skillSet
	.map((x) => {
		let { name, type, desc, level, usage} = x;
		return`
		<div class="skill">
			<div>
				<h3>${name}</h3>
				<small>${type}</small>
			</div>
			<p class="description">${desc}</p>
			
			<div>
				<p class="percentage">${level}%</p>
				<progress id="level" value="${level}" max="100"></progress>
			</div>
		</div>
		`
	})
	.join(""));
};
generateSkillSet();

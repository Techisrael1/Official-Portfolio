import React from "react";
import "./skills.css";
const Skills = () => {
	// const style = {
	// 	width: "100px",
	// };
	return (
		<div>
			<h1 className="h1">SKILLS</h1>
			<div className="skills-card">
				<div className="">
					<img src="./images/html.png"  alt="" />
				</div>
				<div className="">
					<img src="./images/css.png"  alt="" />
				</div>
				<div className="">
					<img src="./images/sass.png"  alt="" />
				</div>

				<div className="">
					<img src="./images/javascript.png"  />
				</div>
				<div className="">
					<img src="./images/react.png" alt=""  />
				</div>
				<div className="">
					<img src="./images/expressjs.png"  alt="" />
				</div>
			</div>
		</div>
	);
};

export default Skills;

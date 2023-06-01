import React from "react";
import "./services.css";
import { FaCode } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaAppStore } from "react-icons/fa";

const style = {
	fontSize: "50px",
	marginBottom: "25px",

};

const Services = () => {
	return (
		<div id="services">
			<div className="container">
				<h1 className="sub-title">My Services</h1>
				<div className="services-list">
					<div>
						<FaCode style={style} />
						<h2>Web Design</h2>
						<p>
							Mobile compatibility, Easy navigation and routing of
							web pages, interesting menu, functionality, great
							and appealing visual design, maximum effect, great,
							informative, easy to read and concise contents,
							web-friendly, SEO optimization, proper engagement of
							visitors, accessible informaions, intuitive and
							interesting landing page, client generating
							websites.
						</p>
					</div>
					<div>
						<RiComputerLine style={style} />
						<h2>GRAPHICS DESIGN</h2>
						<p>
							Touch of reality with images, the proper use of
							illustrations to visualize key information, image
							relevance to designs to convey the tight message and
							tone. Proper typography, fonts, thickness, size,
							weight and style. Proper use of color palette.
						</p>
					</div>
					<div>
						<FaAppStore style={style} />
						<h2>App Development</h2>
						<p>
							USER seamless interaction with the app, great user
							interface that allows little effort to solve a
							problem, private and secure features to make user
							more comfortable, use of more personalize content
							for users, responsive and easy to use interface,
							offline capabilities to ensure maximum usability of
							the app, feedback and review posting, simple alerts
							to be utilized and addressed by user, app data
							synchronization across several devices.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;

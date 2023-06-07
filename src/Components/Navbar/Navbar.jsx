import React from "react";
import { Helmet } from "react-helmet";
import "./navbar.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {
	// let imageDesign = {
	// 	backgroundImage: 'url("./images/background.png")',
	// 	height: "40rem",
	// 	marginRight: "90px",
	// 	backgroundRepeat: "no-repeat",
	// 	backgroundPosition: "right",
	// 	// backgroundSize: "50%",
	// };

	const openMenu = () => {
		const sidemenu = document.getElementById("sidemenu");
		sidemenu.style.right = "0";
	};

	const closeMenu = () => {
		const sidemenu = document.getElementById("sidemenu");
		sidemenu.style.right = "-200px";
	};
	return (
		<div>
			<div id="header">
				<div class="container">
					<nav className="">
						<h1 className="logo" style={{ width: "140px" }}>
							'<span>Rael</span>
						</h1>
						<ul id="sidemenu">
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#services">Services</a>
							</li>
							<li>
								<a href="#portfolio">Portfolio</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
							<FaTimes
								className="res-nav men2"
								onClick={closeMenu}
							/>
						</ul>
						<AiOutlineMenu
							className="res-nav men"
							onClick={openMenu}
						/>
					</nav>
					<div class="header-text" id="home">
						<p>SOFTWARE DEVELOPER</p>
						<h1>
							Hi, I'm <span>Israel Oyegbade.</span>
							<br />
							from Nigeria
						</h1>
					</div>
				</div>
			</div>

			{/* ABOUT PAGE */}

			<div id="about">
				<div class="container">
					<div class="row">
						<div class="about-col-1">
							{/* <img src="./images/me.png" alt="" />	 */}
						</div>
						<div class="about-col-2">
							<h1 class="sub-title">About Me</h1>
							<p>
								Hi, I’m israel! I’m a Software Developer. I
								delved into this niche because I have a strong
								passion for creating solutions to problems and
								making online experiences easy for users. During
								my learning, I sharpened my teamwork skill,
								communication skill, and my critical thinking
								abilities. I'm open to all forms of
								collaboration which include working on projects
								with teams and also intense training.
							</p>
							<ul className="japa">
								<li className="kinsley">
									<p class="tab-links active-link">
										Experience
									</p>
									<div
										className="tab-contents active-tab"
										id="experience"
									>
										<ul className="menumie">
											<li>
												<span>2023 - Present</span>
												<br />
												Full-stack Web development at
												GoMyCode
											</li>
										</ul>
									</div>
								</li>
								<li className="kinsley">
									<p class="tab-links active-link">
										Education
									</p>
									<div
										className="tab-contents active-tab"
										id="education"
									>
										<ul className="menumie">
											<li>
												<span>2023</span>
												<br />
												GoMyCode
											</li>
											<label>
												(Full-stack Web development)
											</label>
											<li>
												<span>2021</span>
												<br />
												Lead city University
											</li>
											<label>(Bsc Physics)</label>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

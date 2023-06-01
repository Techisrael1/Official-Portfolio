import React from "react";
import "./portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
	return (
		<div id="portfolio">
			<div className="container">
				<h1 className="sub-title">My Work</h1>
				<div className="work-list">
					<div className="work">
						<img
							src="https://images.pexels.com/photos/4021801/pexels-photo-4021801.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
						/>
						<div className="layer">
							<h3>HEALTH WEBSITE</h3>
							<p>A Doctor to patient website</p>
							<a href="https://vercel.com/techisrael1/doc-plannner-page">
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>
					<div className="work">
						<img
							src="https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
						/>
						<div className="layer">
							<h3>CAR WEBSITE</h3>
							<p>A car display website</p>
							<a href="https://my-autopage.vercel.app/index.html">
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>
					<div className="work">
						<img src="./images/phone2E.webp" alt="" />
						<div className="layer">
							<h3>ONLINE SHOPPING APP</h3>
							<p>An e-commerce website</p>
							<a href="https://github.com/Techisrael1/E-commerce-Site.git">
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>
				</div>
				<a
					href="https://github.com/Techisrael1?tab=repositories"
					className="btn"
				>
					See more
				</a>
			</div>
		</div>
	);
};

export default Portfolio;

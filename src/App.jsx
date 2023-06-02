import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import "./app.css";
const App = () => {
	// const style = {
	// 	width: "100vw",
	// };
	return (
		<div style={{ backgroundColor: "#000000", color: "#fff", width:"100vw" }}>
			<Navbar />
			<Skills />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;

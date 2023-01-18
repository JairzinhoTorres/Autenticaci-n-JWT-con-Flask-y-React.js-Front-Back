import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<a href=""> <img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png"  className="card-img-top " alt="..."style={{width: "218px"}}/></a>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

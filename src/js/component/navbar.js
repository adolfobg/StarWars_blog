import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import FavDropdown from "./favDropdown";

export const Navbar = () => {
	return (
		<nav className="navbar navbar bg mb-3">
			<div className="container">
				<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img
						src="https://styles.redditmedia.com/t5_2a1p8p/styles/communityIcon_t1dvds2ekk341.png?width=256&s=6458bc6fb6f5004093e2b6018484e430a4fe5bf5"
						className="starwars-logo"
						alt="" width="60" height="54"
					/>
				</span>
				</Link>
				<div className="ml-auto">
				<Link to="/">
				<div className="dropdown">
					<FavDropdown/>
					</div>
				</Link>
				</div>
			</div>
		</nav>

	);
};

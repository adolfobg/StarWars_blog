import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ListCharacters from "../component/listCharacters";
import ListPlanets from "../component/listPlanets";

export const Home = () => (
	<div className="text-center mt-5">
		<ListCharacters/>
		<ListPlanets/>
	</div>
);

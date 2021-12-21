import React from "react";
import classnames from "classnames";
import { useLocation, Link, useParams } from "react-router-dom";

const Tab = (props) => {
	const { id } = useParams()
	return (
		<Link to={`/books/${props.route}`}>

			<div className={classnames("text-gray-500 font-light", { "text-Library-400 font-semibold": props.isActive, })}>
				<h3 className="text-lg md:text-1xl">{props.title}</h3>
			</div>
		</Link>
	);
}



const TabContainer = (props) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const tabs = [
		{
			title: "Fantasy Fiction",
			route: "fantasyfiction",
			isActive: currentPath.includes("fantasyfiction"),
		},
		{
			title: "Romance",
			route: "romance",
			isActive: currentPath.includes("romance"),
		},
		{
			title: "Text-Book",
			route: "textbook",
			isActive: currentPath.includes("textbook"),
		},
		{
			title: "Science Fiction",
			route: "science-fic",
			isActive: currentPath.includes("science-fic"),
		},
		{
			title: "Science & technology",
			route: "science-tech",
			isActive: currentPath.includes("science-tech"),
		}
	];
	return (
		<>
			<div className="flex items-center pb-4 gap-8 md:gap-20 overflow-x-scroll scrollbar-hide border-b-2">
				{tabs.map((tab) => (
					<Tab {...tab} key={`123${tab.route}`} />
				))}
			</div>
		</>
	);
}

export default TabContainer;
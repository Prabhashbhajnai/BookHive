import React from 'react';
import classnames from 'classnames';
import { useLocation, Link, useParams } from 'react-router-dom';

const PaperTabs = (props) => {
    const {id} = useParams();
    return (
        <Link to={`/quespaper/teacher/${id}/${props.route}`}>
            <div className={classnames("text-gray-500 font-light", { "text-Library-400 font-semibold": props.isActive, })}>
                <h3 className="text-lg md:text-1xl">{props.title}</h3>
            </div>
        </Link>
    )
};

const PaperTabsContainer = (props) => {

    const location = useLocation();

    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Mid-Sem",
            route: "midsem",
            isActive: currentPath.includes("midsem"),
        },
        {
            title: "Term End",
            route: "termend",
            isActive: currentPath.includes("termend"),
        },
    ];

    return (
        <>
            <div className='flex flex-col text-right px-3 h-full gap-4 md:gap-4 border-r-2 scrollbar-hide'>
                {tabs.map((tab) => (
                    <PaperTabs {...tab} key={`123${tab.route}`} />
                ))}
            </div>
        </>
    );
};

export default PaperTabsContainer;
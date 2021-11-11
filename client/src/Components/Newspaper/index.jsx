import React, { useState } from 'react';


//Components
import NewspaperCard from './NewspaperCard';

const Homepage = () => {

	const [sourcesList, setSourcesList] = useState([
		{
			_id: "123456",
			photos: ["https://blog.thebrickfactory.com/design/images/wp.gif"],
			name: " Washington Post",
			link: "https://www.washingtonpost.com/",
			content: "Not only do we like the design and the navigability of the Post’s website, but we really love its database applications, which provide interesting tidbits of information difficult to find elsewhere.",
		},
		{
			_id: "123456-2",
			name: "USA Today",
			photos: ["https://blog.thebrickfactory.com/design/images/usa.gif"],
			link: "https://www.usatoday.com/",
			content: "Social networking. Social networking. Social networking. Did I mention that this site has the most robust social networking features out of any of the newspaper websites we researched? Oh yeah. And this site has social networking.",
		},
		{
			_id: "123456-3",
			name: " Houston Chronicle",
			photos: ["https://blog.thebrickfactory.com/design/images/chron.gif"],
			link: "http://www.chron.com/",
			content: "It’s significantly different from any other newspaper site. Chron.com offers its users interactive features such as comments and blogs, has a great RSS system made available right on the homepage, and looks good while doing it.",
		},
		{
			_id: "123456-4",
			name: "Denver Post",
			photos: ["https://blog.thebrickfactory.com/design/images/dp.gif"],
			link: "http://www.denverpost.com/",
			content: "The homepage of this site isn’t much to write home about, but registering with the site automatically gives you your own blog and your own photo gallery for uploading and sharing photos.",
		},
		{
			_id: "123456",
			photos: ["https://blog.thebrickfactory.com/design/images/nyt.gif"],
			name: "New York Times:",
			link: "http://www.newyorktimes.com/",
			content: "We love the general feeling of the NYT site, which is pleasing to the eye and easy to navigate. The site is loaded with great features, and the website is rumored to be dropping its annoying pay wall, TimesSelect, in the coming months.",
		},
		{
			_id: "123456-4",
			name: "Knoxville News Sentinel",
			photos: ["https://blog.thebrickfactory.com/design/images/knox.gif"],
			link: "http://www.knoxnews.com/",
			content: "I’m not sure a newspaper website could look any better than this one. When we talk about de-cluttering sites and making them look “clean”, this is what we mean.",
		},
		{
			_id: "123456-4",
			name: "Fresno Bee",
			photos: ["https://blog.thebrickfactory.com/design/images/bee.gif"],
			link: "http://www.fresnobee.com/",
			content: "Great homepage, interesting CrimeMap feature, and overall just a solid site with lots of technology and an easy-to-use format.",
		},
		{
			_id: "123456-4",
			name: "Austin American Statesman",
			photos: ["https://blog.thebrickfactory.com/design/images/aas.gif"],
			link: "http://www.statesman.com/",
			content: "We really like the unique layout and coloring of this site’s homepage. We’re also giving this site points for allowing anyone to blog and for linking to many of the site’s blogs directly from the homepage.",
		},
	]);
	return (
		<>
			<div className="flex justify-between flex-wrap">
				{
					sourcesList.map((sources) => (
						<NewspaperCard{...sources} key={sources._id} />
					))}
			</div>
		</>
	);
};

export default Homepage;
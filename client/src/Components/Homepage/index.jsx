import React, { useState } from 'react';


//Components
import HomeCarousal from './HomeCarousal';
import SourcesCard from '../SourcesCard';



const Homepage = () => {

  const [sourcesList, setSourcesList] = useState([
    {
      _id: "123456",
      photos: ["https://media.istockphoto.com/photos/newspapers-picture-id513051742?b=1&k=20&m=513051742&s=170667a&w=0&h=ax1sVBU4REigOoOp3c28CntSSDKvg-eHIiSzOIPV6sM="],
      name: "Newspaper",
      category: ["Hindustan Times", "Times Of India", "Amar Ujala"],
      route: "newspaper"
    },
    {
      _id: "123456-2",
      name: "Question Paper",
      photos: ["https://media.istockphoto.com/photos/white-chat-bubble-on-blue-background-picture-id939837832?b=1&k=20&m=939837832&s=170667a&w=0&h=7aBksZiOejYzVYkpLtkz31kbpswGpGX3zU0rC-yKB14="],
      category: ["Physics", "Chemistry", "Maths", "Python"],
      route: "quespaper"
    },
    {
      _id: "123456-3",
      name: "Magazines",
      photos: ["https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnYXppbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
      category: ["Vogue", "FilmFare", "TIME", "Economist"],
      route: "magazines"
    },
    {
      _id: "123456-4",
      name: "Books",
      photos: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
      category: ["Romantic", "Thriller", "Fiction", "Comic"],
      route: "books"
    },
  ]);
  return (
    <>
      <HomeCarousal />
      <div className="flex justify-between flex-wrap">
        {
          sourcesList.map((sources) => (
            <SourcesCard{...sources} key={sources._id} />
          ))}
      </div>
    </>
  );
};

export default Homepage;
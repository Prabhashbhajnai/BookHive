import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import BooksLayoutHOC from "./HOC/Books.HOC";
import NewspaperLayoutHOC from "./HOC/Newspaper.HOC";
import IndividualBookLayoutHOC from "./HOC/IndividualBook.HOC";

// Component
import Temp from "./Components/temp";
import Homepage from "./Components/Homepage";
import Newspaper from "./Components/Newspaper";

//page
import Books from "./Page/Books";
import Humor from "./Page/BooksType/Humor";
import Fiction from "./Page/BooksType/Fiction";
import ScFi from "./Page/BooksType/ScFi";
import ScTech from "./Page/BooksType/ScTech";
import Mystry from "./Page/BooksType/Mystry";
import BioAuto from "./Page/BooksType/BioAuto";
import Fable from "./Page/BooksType/Fable";
import Horror from "./Page/BooksType/Horror";
import ShortStory from "./Page/BooksType/ShortStory";
import Poetry from "./Page/BooksType/Poetry";
import Romance from "./Page/BooksType/Romance";

function App() {
  return (
    <>

      <Switch>
        {/* <Route exact path="/">
          <HomeLayoutHOC component={Homepage} />
        </Route>

        <Route path="/books/:id" exact>
          <Redirect to="/books/:id/humor" />
        </Route>

        <Route path="/books/:id/humor">
          <BooksLayoutHOC component={Humor} />
        </Route>
        <Route path="/books/:id/fiction">
          <BooksLayoutHOC component={Fiction} />
        </Route>
        <Route path="/books/:id/science-fic">
          <BooksLayoutHOC component={ScFi} />
        </Route>
        <Route path="/books/:id/romance">
          <BooksLayoutHOC component={Romance} />
        </Route>
        <Route path="/books/:id/science-tech">
          <BooksLayoutHOC component={ScTech} />
        </Route>
        <Route path="/books/:id/mystry">
          <BooksLayoutHOC component={Mystry} />
        </Route>
        <Route path="/books/:id/bio-auto-graphy">
          <BooksLayoutHOC component={BioAuto} />
        </Route>
        <Route path="/books/:id/fable">
          <BooksLayoutHOC component={Fable} />
        </Route>
        <Route path="/books/:id/horror">
          <BooksLayoutHOC component={Horror} />
        </Route>
        <Route path="/books/:id/s-story">
          <BooksLayoutHOC component={ShortStory} />
        </Route>
        <Route path="/books/:id/poem">
          <BooksLayoutHOC component={Poetry} />
        </Route> */}

        <Route path="/newspaper">
          <NewspaperLayoutHOC component={Newspaper} />
        </Route>
      </Switch>

      <Route path="/books" exact>
        <Redirect to="/books/humor" />
      </Route>
      <HomeLayoutHOC path="/" exact component={Homepage} />

      <BooksLayoutHOC path="/books/humor" exact component={Humor} />
      <BooksLayoutHOC path="/books/fiction" exact component={Fiction} />
      <BooksLayoutHOC path="/books/science-fic" exact component={ScFi} />
      <BooksLayoutHOC path="/books/romance" exact component={Romance} />
      <BooksLayoutHOC path="/books/science-tech" exact component={ScTech} />
      <BooksLayoutHOC path="/books/mystry" exact component={Mystry} />
      <BooksLayoutHOC path="/books/bio-auto-graphy" exact component={BioAuto} />
      <BooksLayoutHOC path="/books/fable" exact component={Fable} />
      <BooksLayoutHOC path="/books/horror" exact component={Horror} />
      <BooksLayoutHOC path="/books/s-story" exact component={ShortStory} />
      <BooksLayoutHOC path="/books/poem" exact component={Poetry} />

      <IndividualBookLayoutHOC path="/books/:id" exact component={Temp} />
    </>
  );
}

export default App;
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import BooksLayoutHOC from "./HOC/Books.HOC";
import NewspaperLayoutHOC from "./HOC/Newspaper.HOC";
import IndividualBookLayoutHOC from "./HOC/IndividualBook.HOC";
import TeachersLayoutHOC from "./HOC/Teachers.HOC";
import QuestionPaperLayoutHOC from "./HOC/QuestionPaper.HOC";

// Component
import Temp from "./Components/temp";
import Homepage from "./Components/Homepage";
import Newspaper from "./Components/Newspaper";

// Redirects
import RedirectTeacher from "./Components/Teachers/Redirect";

//page
import Books from "./Page/Books";
import TextBook from "./Page/BooksType/Textbook";
import Fiction from "./Page/BooksType/Fiction";
import ScFi from "./Page/BooksType/ScFi";
import ScTech from "./Page/BooksType/ScTech";
import Romance from "./Page/BooksType/Romance";
import SpecificBook from "./Page/SpecificBook/SpecificBook";
import Teachers from "./Page/Teachers";
import GoogleAuth from "./Page/GoogleAuth";
import Midsem from "./Page/QuestionPapers/Midsem";
import TEE from "./Page/QuestionPapers/TEE";

// redux action
import { getMyself } from "./Redux/Reducer/user/user.action";

// axios global settings
if (localStorage.elibraryUser) {
  const { token } = JSON.parse(localStorage.elibraryUser);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.elibraryUser) dispatch(getMyself());
  }, [])
  
  return (
    <>

      <Switch>
        <Route path="/newspaper">
          <NewspaperLayoutHOC component={Newspaper} />
        </Route>
      </Switch>

      <Route path="/books" exact>
        <Redirect to="/books/textbook" />
      </Route>
      <HomeLayoutHOC path="/" exact component={Homepage} />
      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />

      <BooksLayoutHOC path="/books/textbook" exact component={TextBook} />
      <BooksLayoutHOC path="/books/fantasyfiction" exact component={Fiction} />
      <BooksLayoutHOC path="/books/science-fic" exact component={ScFi} />
      <BooksLayoutHOC path="/books/romance" exact component={Romance} />
      <BooksLayoutHOC path="/books/science-tech" exact component={ScTech} />

      <IndividualBookLayoutHOC path="/books/category/:id" exact component={SpecificBook} />

      <TeachersLayoutHOC path="/quespaper" exact component={Teachers} />

      <QuestionPaperLayoutHOC path="/quespaper/teacher/:id" exact component={RedirectTeacher} />
      <QuestionPaperLayoutHOC path="/quespaper/teacher/:id/termend" exact component={TEE} />
      <QuestionPaperLayoutHOC path="/quespaper/teacher/:id/midsem" exact component={Midsem} />
    </>
  );
}

export default App;
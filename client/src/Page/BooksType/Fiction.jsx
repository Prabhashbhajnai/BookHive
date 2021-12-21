import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import BookCard from "../../Components/Books/BookCard";

// redux action
import { getFiction } from "../../Redux/Reducer/book/book.action";

const Fiction = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFiction());
	}, [])

	const [bookList, setBookList] = useState([]);
	const reduxState = useSelector(
		(globalStore) => globalStore.book.books
	);

	useEffect(() => {
		reduxState.books && setBookList(reduxState.books);
	}, [reduxState.books])

	return (
		<>
			<div className="flex flex-wrap gap-14 mx-1">
				{bookList.map((book) => (
					<BookCard {...book} key={book._id} />
				))}
			</div>
		</>
	);
}

export default Fiction;
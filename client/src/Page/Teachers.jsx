import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from "react-redux";

// components
import TeacherCard from '../Components/Teachers/TeacherCard';

// redux action
import { getTeacher } from '../Redux/Reducer/teacher/teacher.action';

const Teachers = () => {

    const [teachersList, setTeachersList] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
		dispatch(getTeacher());
	}, [])
    const reduxState = useSelector(
		(globalStore) => globalStore.teacher.teachers
	);
    useEffect(() => {
		reduxState.teachers && setTeachersList(reduxState.teachers);
	}, [reduxState.teachers])

    return (
        <>
            <div className='flex w-full flex-wrap gap-5'>
                {
                    teachersList.map((teachers) => (
                        <TeacherCard {...teachers} key={teachers._id} />
                    ))}
            </div>
        </>
    )
}

export default Teachers

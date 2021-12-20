import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//Components
import Navbar from '../Components/Navbar';
import TeacherInfo from '../Components/QuestionPaper/TeacherInfo';
import Sidebar from '../Components/QuestionPaper/Sidebar';
import MobileTab from '../Components/QuestionPaper/MobileTab';

// redux action
import { getSpecificTeacher } from '../Redux/Reducer/teacher/teacher.action';

const QuestionPaperLayout = (props) => {

    const [teacher, setTeacher] = useState({
        name: "",
        subject: "",
        position: "",
    });
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificTeacher(id)).then((data) => {
            setTeacher((prev) => ({
                ...prev,
                ...data.payload.teacher
            }));
        });

    }, []);

    return (
        <>
            <Navbar />
            <TeacherInfo
                photo={teacher.photo}
                name={teacher.name}
                subject={teacher.subject}
                position={teacher.designation}
            />
            <MobileTab className='mb-0' />
            <div className="flex flex-row gap-5 mt-5 mx-auto px-4 lg:px-20">
                <div className='hidden lg:block w-48 h-full'>
                    <Sidebar />
                </div>
                <div className="container mx-auto px-4 lg:px-20">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default QuestionPaperLayout;
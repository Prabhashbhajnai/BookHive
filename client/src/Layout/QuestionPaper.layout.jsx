import React from 'react';

//Components
import Navbar from '../Components/Navbar';
import TeacherInfo from '../Components/QuestionPaper/TeacherInfo';
import Sidebar from '../Components/QuestionPaper/Sidebar';
import MobileTab from '../Components/QuestionPaper/MobileTab';

const QuestionPaperLayout = (props) => {
    return (
        <>
            <Navbar />
            <TeacherInfo 
                name='Name'
                subject='Subject'
                position='Position'
            />
            <MobileTab className='mb-0' />
            <div className="flex flex-row gap-5 mt-5 container mx-auto px-4 lg:mx-20">
                <div className='hidden lg:block w-48 h-full'>
                    <Sidebar/>
                </div>
                {props.children}
            </div>
        </>
    );
};

export default QuestionPaperLayout;
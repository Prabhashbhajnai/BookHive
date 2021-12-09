import React from 'react';

//Components
import Navbar from '../Components/Navbar';
import TeacherInfo from '../Components/QuestionPaper/TeacherInfo';

const QuestionPaperLayout = (props) => {
    return (
        <>
            <Navbar />
            <TeacherInfo 
                name='Name'
                subject='Subject'
                position='Position'
            />
            <div className="container mx-auto px-4 lg:px-20">
                {props.children}
            </div>
        </>
    );
};

export default QuestionPaperLayout;
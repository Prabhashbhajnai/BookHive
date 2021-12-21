import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// components
import IndividualPaper from '../../Components/QuestionPaper/IndividualPaper';

// redux action
import { getMidsemList } from '../../Redux/Reducer/Quespaper/quespaper.action';

const Midsem = () => {
    /* const [paper, setPaper] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.teacher.selectedTeacher.teacher
    );

    const dispatch = useDispatch();
    useEffect(() => {
        reduxState &&
            dispatch(getMidsemList(reduxState.midsem)).then((data) =>
                setPaper(data.payload.papers.paper)
            );
    }, [reduxState]); */
    return (
        <div className='flex flex-col gap-2'>
            <>
                <IndividualPaper
                    date="November-2021"
                    subject="DAA"
                    location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Dr.+Praveen+2021-22_TEE.pdf"
                />
                <IndividualPaper
                    date="November-2021"
                    subject="DAA"
                    location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Dr.+Praveen+2021-22_TEE.pdf"
                />
            </>
        </div>
    );
};

export default Midsem;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import IndividualPaper from '../../Components/QuestionPaper/IndividualPaper';

// redux action
import { getTermendList } from '../../Redux/Reducer/Quespaper/quespaper.action';

const TEE = () => {
    return (
        <div className='flex flex-col gap-2'>
            <IndividualPaper
                date="December-2021"
                subject="DAA"
                location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Praveen_Interim%202021-22_Midterm_PoM.pdf"
            />
            <IndividualPaper
                date="December-2021"
                subject="DAA"
                location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Praveen_Interim%202021-22_Midterm_PoM.pdf"
            />
            <IndividualPaper
                date="December-2021"
                subject="DAA"
                location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Praveen_Interim%202021-22_Midterm_PoM.pdf"
            />
            <IndividualPaper
                date="December-2021"
                subject="DAA"
                location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Praveen_Interim%202021-22_Midterm_PoM.pdf"
            />
            <IndividualPaper
                date="December-2021"
                subject="DAA"
                location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Praveen_Interim%202021-22_Midterm_PoM.pdf"
            />
            <IndividualPaper
                date="December-2021"
                subject="DAA"
                location="https://e-library-vit.s3.ap-south-1.amazonaws.com/A11_DA1_0051_CSE2002_DSA_Praveen_Interim%202021-22_Midterm_PoM.pdf"
            />
        </div>
    );
};

export default TEE;
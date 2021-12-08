import React, { useState } from 'react';

// components
import TeacherCard from '../Components/Teachers/TeacherCard';

const Teachers = () => {

    const [teachersList, setTeachersList] = useState([
        {
            _id: "123456",
            photo: "https://vitbhopal.ac.in/file/2021/06/Dr_Manas_C.jpg",
            name: "Kushagra"
        },
        {
            _id: "123456",
            photo: "https://vitbhopal.ac.in/file/2021/06/Dr_Manas_C.jpg",
            name: "Kushagra"
        },
        {
            _id: "123456",
            photo: "https://vitbhopal.ac.in/file/2021/06/Dr_Manas_C.jpg",
            name: "Kushagra"
        },
    ]);

    return (
        <>
            <div className='flex gap-5'>
                {
                    teachersList.map((teacher) => (
                        <TeacherCard {...teacher} key={teacher._id} />
                    ))}
            </div>
        </>
    )
}

export default Teachers

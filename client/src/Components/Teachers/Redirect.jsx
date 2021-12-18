import React, {useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const RedirectTeacher = () => {
    const history = useHistory();
    const {id} = useParams();
    useEffect(() => {
        history.push(`/quespaper/teacher/${id}/midsem`)
    }, []);

    return (
        <>
            
        </>
    )
}

export default RedirectTeacher;
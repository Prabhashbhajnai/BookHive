import React from 'react';
import { Route } from 'react-router-dom';

// Layout
import TeachersLayout from '../Layout/Teachers.layout';

const TeachersLayoutHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Route 
                {...rest} 
                component={(props) =>( 
                    <TeachersLayout>
                        <Component {...props} />
                    </TeachersLayout>
                )} 
            />
        </>
    );
};

export default TeachersLayoutHOC;
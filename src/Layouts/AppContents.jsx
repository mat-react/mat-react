import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import styled from '@emotion/styled';
=======
>>>>>>> new_theme

import routes from '../Pages/routes';

function AppContents(props) {

<<<<<<< HEAD
    const PageBody = styled('div')(({ theme }) => ({
        top: theme.palette.height?.header,
        left: theme.palette.width?.sidebar,
        padding: 20,
    }));


    return (
        <PageBody className='absolute right-0 bottom-0'>
=======


    return (
        <div className='p-6'>
>>>>>>> new_theme
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    {
                        routes.map((i, key) => (
                            <Route key={key} exact={i.exact}  path={i.path} element={<i.component />} />
                        ))
                    }
                </Routes>
            </Suspense>
<<<<<<< HEAD
        </PageBody>
=======
        </div>
>>>>>>> new_theme
    );
}

export default AppContents;
import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import styled from '@emotion/styled';

import routes from '../Pages/routes';

function AppContents(props) {

    const PageBody = styled('div')(({ theme }) => ({
        top: theme.palette.height?.header,
        left: theme.palette.width?.sidebar,
        padding: 20,
    }));


    return (
        <PageBody className='absolute right-0 bottom-0'>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    {
                        routes.map((i, key) => (
                            <Route key={key} exact={i.exact}  path={i.path} element={<i.component />} />
                        ))
                    }
                </Routes>
            </Suspense>
        </PageBody>
    );
}

export default AppContents;
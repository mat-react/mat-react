import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import routes from '../Pages/routes';

function AppContents(props) {



    return (
        <div className='p-6'>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    {
                        routes.map((i, key) => (
                            <Route key={key} exact={i.exact}  path={i.path} element={<i.component />} />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    );
}

export default AppContents;
import React from 'react';
import {Error404} from "./Error404/Error404";
import {Login} from "./login/Login";
import {PassRes} from "./passwordReset/PassRES";
import {PassNew} from "./passwordNew/PassNEW";
import {Register} from "./register/Register";
import {Profile} from "./profile/Profile";
import {Route, Routes} from "react-router-dom";
import {TestUi} from "./testUI/TestUI";

export const routes = [
    {path:'*',Component:<Error404/>},
    {path:'/login',Component:<Login/>,navlink:'login'},
    {path:'/reset',Component:<PassRes/>},
    {path:'/newpass',Component:<PassNew/>},
    {path:'/register',Component:<Register/>},
    {path:'/profile',Component:<Profile/>,navlink:'profile'},
    {path:'/ui',Component:<TestUi/>,navlink:'ui'},
]


export const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                {routes.map(r=>{
                    return <Route
                    path={r.path}
                    element={r.Component}
                    />
                })}
            </Routes>
        </div>
    );
};



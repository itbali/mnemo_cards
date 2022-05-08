import React from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../routes/RoutesComponent"

export const Header = () => {
    return (
        <div>
            {routes.map(r => {
                 if (r.navlink) {
                    return <NavLink to={r.path}> {r.navlink} |</NavLink>
                }
            })}
        </div>
    );
};


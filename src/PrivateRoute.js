import {Outlet, Navigate} from "react-router-dom";
import React from "react";

const PrivateRoute = () => {
    let auth = localStorage.getItem("key")

    return( auth === "authenticated" ? <Outlet/> : <Navigate to= "/" />

        )
}

export default PrivateRoute
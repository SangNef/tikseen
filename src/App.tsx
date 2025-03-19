import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {

    return (
            <Router>
                <Routes>
                    {routes.map(({ path, Component, Layout, type }) => {
                        const L = Layout ?? Fragment;
                        const RouteType = typeof type === "function" ? type : Fragment;
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <RouteType>
                                        <L>
                                            <Component />
                                        </L>
                                    </RouteType>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
    );
}

export default App;

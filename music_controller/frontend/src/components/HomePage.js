import React, {Component} from "react";
import {HashRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom"  
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("HomePage render, pathname:", window.location.pathname, window.location.hash);
        return (
         <Router>
            <Routes>
                <Route exact path="/" element={<p>This is the home page</p>} />
                <Route path="/join" element={<RoomJoinPage />} />
                <Route path="/create" element={<CreateRoomPage />} />
            </Routes>
        </Router>
        );
    }
}
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import PostForm from '../components/PostForm';
import Preview from '../components/Preview';

const Main = () => {
    return (
        <Router>
            <div className="main-container">
                <Sidebar />
                <Switch>
                    <Route path="/home">
                        <div>Home Component</div>
                    </Route>
                    <Route path="/plan">
                        <div>Plan Component</div>
                    </Route>
                    <Route path="/create">
                        <PostForm />
                    </Route>
                    <Route path="/inbox">
                        <div>Inbox Component</div>
                    </Route>
                    <Route path="/analytics">
                        <div>Analytics Component</div>
                    </Route>
                    <Route path="/listening">
                        <div>Listening Component</div>
                    </Route>
                    <Route path="/ads">
                        <div>Ads Component</div>
                    </Route>
                    <Route path="/more">
                        <div>More Component</div>
                    </Route>
                    <Route path="/">
                        <div>Welcome! Select an option from the sidebar.</div>
                    </Route>
                </Switch>
                <Preview />
            </div>
        </Router>
    );
};

export default Main;

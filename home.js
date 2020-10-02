import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import { LogOut } from '../../utils/auth';

import { getData, getEmployerData, getAllData, getAllEmployerData, getAllJobs } from '../../utils/database';

import Profile from './profile';
import NonEditProfile from './nonEditProfile';
import axios from 'axios';
import HomeBody from './home/homeBody';
import NavBar from './home/navbar';
import Drawer from './home/drawer';
import ProfileCard from './home/profileCard';
import DashBoard from './home/dashboard';
import Message from './home/message';
import Jobs from './home/jobs';
import './home/styles/home.css';

const Home = () => {
    const [data, setData] = useState({});
    const [allEmployeeData, setAllEmployeeData] = useState({});
    const [allEmployerData, setAllEmployerData] = useState({});
    const [allJobs, setAllJobs] = useState({});
    const [allData, setAllData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { currentUser } = useContext(AuthContext);
    
    const [Inbox, setInbox] = useState({});
    const [Outbox, setOutbox] = useState({}); 
    let userToken = localStorage.getItem('currentUserToken');

    const fetchData = async () => {
        await getAllData().then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setAllEmployeeData(result.data);
            }
        });
        axios.get(`/api/leads`,{ params: { inbox: currentUser.id }})
	.then(response => {
	 setInbox(response.data);
	 });
	
	axios.get(`/api/leads`,{ params: { outbox: currentUser.id }})
		 .then(response => {
		 setOutbox(response.data);
		 });
	
        await getAllEmployerData().then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setAllEmployerData(result.data);
            }
        });
        await getAllJobs().then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setAllJobs(result.data);
            }
        });
        
        if (currentUser.is_employee) {
            await getData(currentUser.username).then(result => {
                if (result != null) {
                    setData(result.data);
                    setLoaded(true);
                } else {
                    setLoaded(true);
                }
            });
        } else {
            await getEmployerData(currentUser.username).then(result => {
                if (result != null) {
                    setData(result.data);
                    setLoaded(true);
                } else {
                    setLoaded(true);
                }
            });
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            {(!loaded) ? <Fragment /> :
                <Fragment>
                    <div className="home-body">
                        <Route exact path='/'>
                            <NavBar data={[...allEmployeeData, ...allEmployerData]} user={currentUser} />
                            <Drawer />
                            <HomeBody employeeData={allEmployeeData} employerData={allEmployerData} />
                        </Route>
                        <Switch>
                            <Route exact path='/dashboard'>
                                <NavBar data={{ ...allEmployeeData, ...allEmployerData }} user={currentUser} />
                                <Drawer />
                                <DashBoard data={data} />
                            </Route>
                            <Route exact path='/jobs'>
                                <NavBar data={{ ...allEmployeeData, ...allEmployerData }} user={currentUser} />
                                <Drawer />
                                <Jobs data={allJobs} />
                            </Route>
                            <Route exact path='/message'>
                                <NavBar data={{ ...allEmployeeData, ...allEmployerData }} user={currentUser} />
                                <Drawer />
                                <Message inb={Inbox} out={Outbox} />
                            </Route>
                            <Route path="/edit/:username">
                                <Profile data={data} edit={true} />
                            </Route>
                            <Route path="/:username">
                                <NonEditProfile data={data} edit={false} />
                            </Route>
                        </Switch>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
}

export default Home;
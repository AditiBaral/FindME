import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import { AuthContext } from '../../../utils/userContext';


import MsgCard from './msgcard';

import './styles/home.css';

const HomeBody = (props) => {
  const [cred, setCred] = useState({
        inbox: true,
        outbox: false,
    });
    
    const styles = makeStyles({
        toggle: {
            background: 'white',
            position: 'absolute',
            right: '40px',
            top: '100px',
            display: 'flex',
            padding: '10px 0px',
            color: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            width: '240px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        switch: {
            position: 'absolute',
            transitionDuration: '0.3s',
            left: (cred.inbox) ? 5 : 115,
            zIndex: 1,
            width: '120px',
            height: '40px',
            backgroundColor: 'rgb(50, 50, 50)',
            cursor: 'pointer',
            borderRadius: '5px'
        }
    });
     const { currentUser } = useContext(AuthContext);

    const classes = styles();
    
     const [Inbox, setInbox] = useState(props.inb);
     const [Outbox, setOutbox] =useState(props.out);  
   //  const [allEmployeeData, setAllEmployeeData] = useState(props.employeeData);
     
  //  const [allEmployerData, setAllEmployerData] = useState(props.employerData);
  //	let arr1=Object.values(allEmployeeData);
  //	let arr2=Object.values(allEmployerData);
  	
  //	let arr3=Object.values(Inbox);
  //	let arr4=Object.values(Outbox);
  	
  	
  
    
    const switchChange = e => {
   		setCred({ ...cred, inbox: cred.outbox, outbox: cred.inbox, });
    }
   
    //const [data, setData] = useState({});
   
    return (
        <Fragment>
            <div className="main-container">
                <div className="main-box">
                    <div>
  
                	<div className={classes.toggle} onClick={switchChange}>
                		<h6 style={{ color: (cred.inbox) ? 'white' : 'black', marginRight: 35, marginTop: 10, zIndex: 10 }}>Inbox</h6>
                		<div className={classes.switch} onClick={switchChange}></div>
                		<h6 style={{ color: (cred.outbox) ? 'white' : 'black', marginTop: 10, zIndex: 10 }}>Outbox</h6>
            		</div>
            		<br/>
             		<br/>
             		<h2 style={{ color: 'white', textAlign: 'center'}}> Messages</h2>
            		
         
                    </div>
                </div>
    		
               
            </div>
            <div style={{marginLeft:100}}>
            
             { (cred.inbox)
             ?(Inbox.length != 0) ? 
             	(Inbox).map((data, index) =><MsgCard key={index} data={data} />) : 
             	<Fragment />
             :(Outbox.length != 0) ? 
             	(Outbox).map((data, index) => <MsgCard key={index} data={data} />) :
             	<Fragment />
              }
            </div>
           
        </Fragment>
    );
}



export default HomeBody;


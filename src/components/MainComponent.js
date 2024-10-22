import React, {Component} from 'react';
import MyContext from '../contexts/MyContext';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import {Routes, Route, Navigate} from 'react-router-dom';
class Main extends Component{
    static contextType = MyContext ; 
    render(){
        if (this.context.token !== ''){
            return(
                <div className ="body-admin">
                <Menu/>
                <Routes>
                <Route path ='/admin' element ={<Navigate replace to ='/admin/home'/>}/>
                <Route path ='/admin/home' element ={<Home/>}/>
            </Routes>
            </div>
                );
            }
            return (<div/>);
        }
    }
export default Main ;
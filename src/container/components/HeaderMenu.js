import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './headerMenu.css';
import back from '../assets/back.png';
import { useHistory } from 'react-router';

export default function HeaderMenu(props) {
    console.log(props);
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }

    return (
        <Paper>
            <div className="header-menu">
                <ArrowBackIosIcon 
                    id="back" 
                    src={back}
                    onClick={() => handleBack()}
                />
                <Typography id="name">{props.pathName}</Typography>
                {
                    props.img ? 
                    <props.img /> 
                    : 
                    <div>
                    </div>
                }
            </div>
        </Paper>
    )
}
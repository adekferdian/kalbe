import React from 'react';
import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import coin from '../../assets/coin.PNG';
import './currentIncentive.css';
import HeaderMenu from '../../components/HeaderMenu';
import { columns, dataTable } from './data';

const ct = require('../../library/customTable');
const getMuiTheme = () => createMuiTheme(ct.customTable());
const options = ct.customOptions();

export default function CurrentIncentive() {
    const location = useLocation()
    const pathName = location.name || "Current Incentive";
    
    return (
        <div>
            <HeaderMenu 
                pathName={pathName}
            />
            <div style={{width: '90vw', height: '92vh', margin: 'auto'}}>
                <div className="date">
                    <Typography style={{fontFamily: 'Poppins'}}>Januari 2020</Typography>
                </div>
                <div className="result">
                    <div>
                        <img src={coin} id="coin" alt="coin" />
                    </div>
                    <div className="data-result">
                        <Typography style={{fontFamily: 'Poppins', fontSize: 16}}>Monthly Incentive</Typography>
                        <Typography style={{fontFamily: 'Poppins', fontSize: 24}}>Rp 200,000,000</Typography>
                    </div>
                </div>
                < hr style={{marginTop: 15}} />
                <div className="reminder">
                    <Typography style={{fontFamily: 'Poppins', fontSize: 14, color: '#ebb272', fontWeight: 300}}>Tingkatkan <span style={{fontWeight: 'bold'}}>Target Sales Product NBC In Value</span> Untuk memaksimalkan Incentive Anda</Typography>
                </div>
                <MuiThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                        columns={columns}
                        data={dataTable}
                        options={options}
                    />
                </MuiThemeProvider>
            </div>
        </div>
    )
}
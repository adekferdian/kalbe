import React from 'react';
import { useLocation } from 'react-router';
import HeaderMenu from '../../components/HeaderMenu';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import ReactECharts from 'echarts-for-react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { tabMenu, options, dataTable, columns } from './data';
import './lastDataIncentive.css';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

const ct = require('../../library/customTable');
const getMuiTheme = () => createMuiTheme(ct.customTable());
const tableOptions = ct.customOptions();

export default function LastDataIncentive() {
    const classes = useStyles();
    const location = useLocation();
    const pathName = location.name || "Last Data Incentive";
    const [selectedTab, setSelectedTab] = React.useState("Januari");

    return (
        <div>
            <HeaderMenu 
                pathName={pathName}
            />
            <div className="body">
                <Paper className="chart">
                    <ReactECharts option={options} />
                </Paper>
                <div className="tab">
                    <Tabs
                        value={selectedTab}
                        indicatorColor="primary"
                        aria-label="disabled tabs example"
                        style={{ outline: 'null', display: 'flex' }}
                        classes={{ indicator: classes.tabsIndicator }}
                    >
                        {
                            tabMenu.map((el, idx) => {
                                return (
                                    <Tab label={el.name}
                                        style={{width: '33%', fontWeight: selectedTab === el.name ? 'bold' : 300, color: selectedTab === el.name ? '#8BC144' : 'rgb(222, 239, 198)',}}
                                        onClick={() => setSelectedTab(el.name)}
                                    />
                                )
                            })
                        }
                    </Tabs>
                </div>
                <div className="table">
                    <MuiThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            columns={columns}
                            data={dataTable}
                            options={tableOptions}
                        />
                    </MuiThemeProvider>
                </div>
            </div>
        </div>
    )
};
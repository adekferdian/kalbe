import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import { Paper, Tabs, Tab, Typography, TextField, InputAdornment, Menu } from '@material-ui/core';
import './learningclass.css';
import SortIcon from '@material-ui/icons/Sort';
import HeaderMenu from '../../components/HeaderMenu';
import { tabWajib, tabOpsional, tabMenu } from './data';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}))

export default function LearningClass() {
    const classes = useStyles();
    const location = useLocation()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const pathName = location.name || "Learning Class";
    const [selectedTab, setSelectedTab] = React.useState("WAJIB");

    const handleClickMenu = (event) => {
        console.log(event);
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <HeaderMenu 
                pathName={pathName}
            />
            <div className="class">
                <Tabs
                    value={selectedTab}
                    indicatorColor="primary"
                    aria-label="disabled tabs example"
                    style={{ outline: 'null', display: 'flex' }}
                    classes={{ indicator: classes.tabsIndicator }}
                >
                    {
                        tabMenu.map(el => {
                            return (
                                <Tab label={el.name}
                                    style={{width: '50%', color: selectedTab === el.name ? '#8BC144' : 'rgb(222, 239, 198)', borderBottom: selectedTab === el.name ? '3px solid #8BC144' : null}}
                                    onClick={() => setSelectedTab(el.name)}
                                />
                            )
                        })
                    }
                </Tabs>
                {
                    selectedTab === 'WAJIB' ?
                    tabWajib.map((el, idx) => (
                        <Paper className="card">
                            <div>
                                <Typography style={{paddingLeft: '1em', paddingTop: 5, fontSize: 14, borderBottom: '1px solid rgb(150, 150, 150)', height: 30, borderRadius: 1}}>{el.title}</Typography>
                            </div>
                            <div>
                                <TextField
                                    label='Nilai'
                                    disabled={true}
                                    style={{borderBottom: '1px solid rgb(150, 150, 150)', width: '100%', borderRadius: 1, textAlign: 'center'}}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: 
                                            <InputAdornment position='end' style={{marginRight: '1em',}}>
                                                <img src={el.status} style={{width: 15, height: 15}} alt={idx} />
                                                <Typography style={{paddingLeft: '1em'}}>
                                                    {el.nilai}
                                                </Typography>
                                            </InputAdornment>
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            paddingLeft: '1em'
                                        }
                                    }}
                                />
                            </div>
                            <div className="btn-link">
                                <Typography style={{paddingTop: 5}}>Akses e-Learning</Typography>
                            </div>
                        </Paper>
                    ))
                    :
                    tabOpsional.map((el, idx) => (
                        <Paper className="card">
                            <div>
                                <Typography style={{paddingLeft: '1em', paddingTop: 5, fontSize: 14, borderBottom: '1px solid rgb(150, 150, 150)', height: 30, borderRadius: 1}}>{el.title}</Typography>
                            </div>
                            <div>
                                <TextField
                                    label='Nilai'
                                    disabled={true}
                                    style={{borderBottom: '1px solid rgb(150, 150, 150)', width: '100%', borderRadius: 1, textAlign: 'center'}}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: 
                                            <InputAdornment position='end' style={{marginRight: '1em',}}>
                                                <img src={el.status} style={{width: 15, height: 15}} alt={idx} />
                                                <Typography style={{paddingLeft: '1em'}}>
                                                    {el.nilai}
                                                </Typography>
                                            </InputAdornment>
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            paddingLeft: '1em'
                                        }
                                    }}
                                />
                            </div>
                            <div className="btn-link">
                                <Typography style={{paddingTop: 5}}>Request e-Learning</Typography>
                            </div>
                        </Paper>
                    ))
                }
                <Paper className="filter"
                >
                    <SortIcon
                      style={{ outline: 'none', width: 20, height: 20, color: 'black', margin: 'auto', marginLeft: '.5em' }}
                      aria-label="more"
                      aria-controls="long-menu"
                      onClick={(e) => handleClickMenu(e)}
                      aria-haspopup="true"
                    >
                    </SortIcon>
                    <Typography onClick={(e) => handleClickMenu(e)} style={{paddingRight: 10}}>Urutkan</Typography>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={openMenu}
                        onClose={handleCloseMenu}
                        PaperProps={{
                            style: {
                                maxHeight: 48 * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        <Typography style={{cursor: "pointer", color: "#278863"}} onClick={() => null}>Berdasarkan Nama</Typography>
                        <Typography style={{cursor: "pointer", color: "#278863"}} onClick={() => null}>Berdasarkan Tanggal</Typography>
                    </Menu>
                </Paper>
            </div>
        </div>
    )
}
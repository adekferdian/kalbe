import React from 'react';
import { Typography, Paper, Menu, withStyles, LinearProgress } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import './home.css';
import notif from '../../assets/notification.png';
import aksi from '../../assets/icon-vertical.png';
import me from '../../assets/me.jpeg';
import people from '../../assets/user.png';
import building from '../../assets/building.png';
import location from '../../assets/location.png';
import career from '../../assets/career_path.png';
import learning_class from '../../assets/learning_class.png';
import achievement from '../../assets/achievement.png';
import rewards from '../../assets/rewards.png';
import announcement from '../../assets/announcement.png';
import { options, dataTarget } from './data';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
      height: 20,
      borderRadius: 10,
  },
  colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
      borderRadius: 10,
      backgroundColor: '#49ea6e',
  },
}))(LinearProgress);

export default function Home() {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  React.useEffect(() => {
    getDate(new Date())
  }, []);

  const getDate = (start) => {
    let tanggal = new Date(start).getDate() < 10 ? `0${new Date(start).getDate()}` : new Date(start).getDate();
    let month = new Date(start).getMonth() + 1 < 10 ? `0${new Date(start).getMonth() + 1}` : new Date(start).getMonth() + 1;
    let year = new Date(start).getFullYear();

    let formatTwoMonth = new Date(start).setMonth(new Date(start).getMonth() + 3);
    let tanggalAfterTwoMonth = new Date(formatTwoMonth).getDate()  < 10 ? `0${new Date(formatTwoMonth).getDate()}` : new Date(formatTwoMonth).getDate();
    let monthAfterTwoMonth = new Date(formatTwoMonth).getMonth() < 10 ? `0${new Date(formatTwoMonth).getMonth()}` : new Date(formatTwoMonth).getMonth();
    let yearAfterTwoMonth = new Date(formatTwoMonth).getFullYear();

    let startDate = `${tanggal}/${month}/${year}`;
    let endDate = `${tanggalAfterTwoMonth}/${monthAfterTwoMonth}/${yearAfterTwoMonth}`;
    setStartDate(String(startDate));
    setEndDate(String(endDate));
  }

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
      <div className="home">
        <div className="header">
          <div className="header-menu">
            <div className="photo">
              <img className="author" src={me} alt="me" />
            </div>
            <div className="account">
                <ChatIcon
                  className="notif"
                />
                <IconButton
                    style={{ outline: 'none', width: 40, height: 40, color: 'white' }}
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={(e) => handleClickMenu(e)}
                >
                    <MoreVertIcon />
                </IconButton>
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
                  <Typography style={{cursor: "pointer", color: "#278863"}} onClick={() => handleLogout()}>Logout</Typography>
                </Menu>
            </div>
          </div>
          <div className="profile-name">
            <Typography id="welcome">Welcome back, Adek Ferdian!</Typography>
          </div>
          <div className="profile-icons">
            <div className="sub-menu"> 
              <img className="profile-icons-menu" src={people} alt="people" />
              <Typography className="profile-icons-text" id="text1">Sales</Typography>
            </div>
            <div className="sub-menu" id="child"> 
              <img className="profile-icons-menu" src={building} alt="building" />
              <Typography className="profile-icons-text" id="text2">Kalimalang</Typography>
            </div>
            <div className="sub-menu" id="last-child"> 
              <img className="profile-icons-menu" src={location} alt="location" />
              <Typography className="profile-icons-text" id="text3">DKI Jakarta</Typography>
            </div>
          </div>
        </div>
        <div className="container">
          <Paper className="wrap-menu">
            <div className="list-menu">
              <div className="section"
                onClick={() => null}
              > 
                <img className="menu-logo" src={career} alt="career" />
                <p>Carrer Path</p>
              </div>
              <div className="section"
                onClick={() => {
                  history.push({
                    pathname: '/learning-class',
                    name: 'Learning Class'
                  })
                }}
              > 
                <img className="menu-logo" src={learning_class} alt="learning-class" />
                <p>Learning Class</p>
              </div>
              <div className="section"
                onClick={() => null}
              > 
                <img className="menu-logo" src={achievement} alt="achieve" />
                <p>Achievement</p>
              </div>
            </div>
            <div className="profit">
              <div
                onClick={() => {
                  history.push({
                    pathname: '/rewards',
                    name: 'Rewards',
                  })
                }}
              > 
                <img src={rewards} alt="rewards" />
                <p>Rewards</p>
              </div>
              <div
                onClick={() => null}
              > 
                <img src={announcement} alt="announcement" />
                <p>Announcement</p>
              </div>
            </div>
          </Paper>
          <div className="time">
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    onChange={(date) => {
                        getDate(date)
                    }}
                    style={{ width: 0, position: 'absolute', left: '2.2rem', left: '2.2rem', bottom: 0, top: '.2em' }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <Typography id="date">{startDate} - {endDate}</Typography>
          </div>
          <Typography id="target">Target</Typography>
          {
            dataTarget.map((el, idx) => {
              return (
                <Paper key={idx} style={{height: '13vh', backgroundColor: 'white', borderRadius: 10, width: '90vw', marginTop: 20, marginBottom: 20, margin: 'auto'}}>
                  <div className="card">
                    <div style={{marginTop: 20}}>
                      <div style={{display: 'flex'}}>
                        <div style={{width: '20%', marginLeft: '4%'}}>
                          <img style={{height: 70, width: 60}} src={el.image}  alt={idx}/>
                        </div>
                        <div style={{width: '72%', display: 'column',}}>
                          <div style={{width: '90%', display: 'flex', justifyContent: 'space-between', marginBottom: 5}}>
                            <Typography>{el.name}</Typography>
                            <Typography style={{color: '#87BD40'}}>Details</Typography>
                          </div>
                          <div>
                              <Typography style={{fontSize: 12, color: 'black', marginBottom: 5, fontWeight: 550}}>{el.rating} <span style={{color: 'gray'}}>/ {el.maxValue}</span></Typography>
                              <BorderLinearProgress variant="determinate" value={+el.value} style={{width: '90%'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              )
            })
          }
          <Typography id="id">FB03X</Typography>
          <Paper style={{height: '42vh', backgroundColor: 'white', borderRadius: 10, width: '90vw', marginTop: 20, margin: 'auto'}}>
            <div className="table" style={{width: '90%', margin: 'auto', borderRadius: 10}}>
              <ReactECharts option={options} style={{color: 'green'}} />
            </div>
          </Paper>
        </div>
      </div>
    );
}
import React from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { withStyles, TextField } from '@material-ui/core';
import shield from '../../assets/shield.PNG';
import { Typography, InputAdornment, IconButton } from '@material-ui/core';
import './login.css';

const InputBaru = withStyles({
    root: {
        '& .MuiInputBase-input': {
            fontFamily: 'Poppins',
            fontSize: '1.7vh',
            fontWeight: '500',
            boxSizing: 'border-box'
        },
        '& .MuiOutlinedInput-input': {
            padding: '2vh 1vh'
        },
        '& input:-internal-autofill-selected': {
            backgroundColor: 'transparent'
        },
    }
})(TextField);

export default function Login() {
    const history = useHistory()
    const [employeeID, setEmployeeID] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const [error, setError] = React.useState(false)
    const [showPass, setShowPass] = React.useState(false)

    const handleLogin = () => {
        if (!employeeID || !password) {
            setError(true)
        } else {
            localStorage.isLogin = true
            history.push({
                pathname: '/',
            })
        }
    }

    return (
        <div className="Login">
            <div className="logo">
                <img className="shields" src={shield} alt="shield" />
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin()
                }}
            >
            <div className="login-form">
                    <div className="form">
                        <Typography id="title">SAKA ARMOR</Typography>
                        {
                            error ?
                            <Typography id="error">Please fill all fields</Typography>
                            :null
                        }
                        <InputBaru
                            className="input"
                            type={"text"}
                            name={"employeeID"}
                            placeholder={'Employee ID'}
                            value={employeeID}
                            onChange={(e) => {
                                setError(false)
                                setEmployeeID(e.target.value)
                            }}
                            variant="outlined"
                            InputProps={{
                                style: { borderRadius: 3, backgroundColor: 'white', borderColor: 'rgba(233, 224, 224, 0.1)', fontSize: '1.5vh', borderStyle: 'solid', minHeight: 40, padding: 0, width: '85vw' },
                                startAdornment: <InputAdornment position="end" style={{ marginRight: '1%', height: '10%' }}></InputAdornment>,
                            }}
                            InputLabelProps={{
                                style: {
                                    marginLeft: '15%', fontSize: '1.5vh',
                                    padding: 0
                                }
                            }}
                        />
                        <InputBaru
                            className="input"
                            type={showPass ? 'text' : 'password'}
                            name={"password"}
                            placeholder={'Password'}
                            value={password}
                            onChange={(e) => {
                                setError(false)
                                setPassword(e.target.value)
                            }}
                            onSubmit={() => handleLogin()}
                            variant="outlined"
                            style={{marginTop: '2em', marginBottom: '2em'}}
                            InputProps={{
                                style: { borderRadius: 3, backgroundColor: 'white', borderColor: 'rgba(233, 224, 224, 0.1)', fontSize: '1.5vh', borderStyle: 'solid', minHeight: 40, padding: 0, width: '85vw' },
                                startAdornment: <InputAdornment position="end" style={{ marginRight: '1%',}}></InputAdornment>,
                                endAdornment: <InputAdornment position="end" style={{ marginRight: '5%' }}>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        style={{ color: '#4b4b4b', opacity: 0.5, outline: 'none', margin: 0, padding: 0 }}
                                        onClick={() => setShowPass(!showPass)}
                                        edge="end"
                                    >
                                        {showPass ? <Visibility style={{ height: '3vh' }} /> : <VisibilityOff style={{ height: '3vh' }} />}
                                    </IconButton>
                                </InputAdornment>,
                            }}
                            InputLabelProps={{
                                style: {
                                    marginLeft: '15%', fontSize: '1.5vh',
                                    padding: 0
                                }
                            }}
                        />
                        <button className="button">
                            <div className="btn">
                                <Typography id="btn-login">Log In</Typography>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
            <div className="advanced">
                <div className="menu">
                    <Typography id="menu-1">Forgot Password</Typography>
                    <Typography id="menu-2">Change Tenant</Typography>
                </div>
            </div>
        </div>
    )
}
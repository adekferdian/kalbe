import React from 'react';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import HeaderMenu from '../../components/HeaderMenu';
import { useHistory, useLocation } from 'react-router';
import { rewardsData } from './rewardsData';
import { Typography } from '@material-ui/core';
import './rewards.css';

export default function Rewards() {
    const history = useHistory()
    const location = useLocation()
    const pathName = location.name || 'Rewards';

    const handleClick = (title) => {
        if (title === 'Current Incentive') {
            history.push({
                pathname: '/current-incentive',
                name: 'Current Incentive'
            })
        } else if (title === 'Last Data Incentive') {
            history.push({
                pathname: '/last-data-incentive',
                name: 'Last Data Incentive'
            })
        }
    }
    return (
        <div>
            <HeaderMenu
                img={SystemUpdateIcon}
                pathName={pathName}
            />
            {
                rewardsData.map((el, idx) => (
                    <div className="rewards"
                        onClick={() => handleClick(el.title)}
                    >
                        <div className="card-rewards">
                            <div className="content details">
                                <Typography id="title">{el.title}</Typography>
                                <Typography id="description">{el.description}</Typography>
                            </div>
                            <div className="content img">
                                <img src={el.img} id="image" alt={idx} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
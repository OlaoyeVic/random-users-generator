import React, { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import TodayIcon from '@material-ui/icons/Today';
import CallIcon from '@material-ui/icons/Call';
import FlagIcon from '@material-ui/icons/Flag';
import Button from '@material-ui/core/Button';

function  Card(props) {
    console.log(props)
    const [hover, setHover] = useState(false)
    const [emailHover, setEmailHover] = useState(false)
    const [ageHover, setAgeHover] = useState(false)
    const [countryHover, setCountryHover] = useState(false)
    const [phoneHover, setPhoneHover] = useState(false)

    
    return(
        <div className = "card">
            <div className = "top">
                <img src = {props.image} alt = "" className = "avatar" />
            </div>
            <div className="description">
                {hover ? <p>My name is {props.name}</p> : null}
                {emailHover ? <p>My email is {props.email}</p> : null}
                {ageHover ? <p>My age is {props.age}</p> : null}
                {countryHover ? <p>My country is {props.country}</p> : null}
                {phoneHover ? <p>My phone is {props.phone}</p> : null}
            </div>
            <div className="bottom">
                <PersonIcon style = {{fontSize: 70}}
                    onMouseOver = {() =>setHover(true)}
                    onMouseOut = {() => setHover(false)}
                    />
                <EmailIcon style = {{fontSize: 70}} 
                    onMouseOver = {() =>setEmailHover(true)}
                    onMouseOut = {() => setEmailHover(false)}
                />
                <TodayIcon style = {{fontSize: 70}} 
                   onMouseOver = {() =>setAgeHover(true)}
                   onMouseOut = {() => setAgeHover(false)} 
                />
                <FlagIcon style = {{fontSize: 70}} 
                    onMouseOver = {() =>setCountryHover(true)}
                    onMouseOut = {() => setCountryHover(false)}
                />
                <CallIcon style = {{fontSize: 70}} 
                    onMouseOver = {() =>setPhoneHover(true)}
                    onMouseOut = {() => setPhoneHover(false)}
                />
            </div>
            <div className="btn">
                <Button variant="contained" color="primary" onClick = {props.buttonClick}>
                    Random User
                </Button>


            </div>
        </div>
    )
}
export default Card
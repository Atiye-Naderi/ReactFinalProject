import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import UserCard from "./UserCard";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
const useStyles = makeStyles({
    root: {
        // border:'solid red 1px',
        width: '100%',
        marginTop: 10,
    },
    main: {
        // border:'solid 1px blue' ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
    },
    userSec: {
        width: 300,
        // height:160,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 15,
        marginBottom: 8,
        border: 'solid 1px  #5c1e7b',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    navigation: {
        // border:'solid red 1px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#cf9ee7'
    },
    navTab: {
        border: 'solid 1px green ',
        width: 40,
        boxShadow: '1px 1px #d1d1d1 ',
        borderRadius: 5,
        '&:hover': {
            cursor: 'pointer'
        }
    },
});
export default function ContactCards({setUserData, userData, pageNumber, setPageNumber, setUserNumber, userNumber}) {
    const classes = useStyles();
    const history = useHistory();
    // const {tab} = useParams();
    const tab = useParams();
    // const [userNumber, setUserNumber] = useState(1);
    const [user, setUser] = useState([]);
    const [showUserCard, setShowUserCard] = useState(false);
    const [numberpge, setNumberPage] = useState(pageNumber);
    const [id, setId] = useState(1);
    useEffect(() => {
        if (userNumber <= 5) {
            axios.get('https://api.randomuser.me').then(({data}) => {
                if(pageNumber === 1){
                    setUserNumber(userNumber + 1);
                    setUserData([
                        ...userData,
                        data.results
                    ])
                }
            });
        }
    }, [userNumber])
    // console.log(numberpge);
    console.log(userData);
    const userOnClick = (data) => {
        setShowUserCard(true);
        setUser(data);
    }
    return (
        <>
            <div className={classes.root}>
                <div className={classes.main}>
                    {
                        userData ?
                            Object.keys(userData).length === 3 ?
                                userData.map((user) => {
                                        return user.map((data) => {
                                            return (
                                                <div className={classes.userSec} onClick={() => userOnClick(data)}>
                                                    <div>{data.name.first} {data.name.last}</div>
                                                </div>
                                            )
                                        })
                                    }
                                ) : null
                            : null
                    }

                </div>
                <UserCard showUserCard={showUserCard} setShowUserCard={setShowUserCard} user={user}/>
                {/*<Contacts user={user} />*/}
            </div>
        </>

    )
}

import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import {makeStyles} from "@material-ui/core";
import axios from "axios";
import {useParams} from "react-router-dom";
const useStyles = makeStyles({
    root:{
        width:'100%',
        marginTop:10,
    },
    main:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexWrap:'wrap',
        width:'100%',
    },
    userSec:{
        width:300,
        borderRadius:12,
        display:'flex',
        alignItems:'center',
        paddingLeft:15,
        marginBottom:8,
        border:'solid 1px  #5c1e7b',
        '&:hover':{
            cursor:'pointer'
        }
    }
})
export  default  function  Contacts ({pageNumber, setPageNumber, userData, setUserData, setUserNumber, userNumber}){
    const classes = useStyles();
    const [user, setUser] = useState([]);
    const [showUserCard, setShowUserCard] = useState(false);
    const { tab } = useParams();
    useEffect(() => {
        if (userNumber <= 5) {
            axios.get('https://api.randomuser.me').then(({data}) => {
                if(userNumber === 1){
                    setUserData([
                        // ...userData,
                        data.results
                    ])
                    setUserNumber(userNumber + 1);
                }
                else {
                    if(pageNumber > 1  ){
                        setUserNumber(userNumber + 1);
                        setUserData([
                            ...userData,
                            data.results
                        ])
                    }
                }
            });
        }
    }, [userNumber])
    console.log(userData);
    console.log(userNumber);
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
                                                    <div>{data.name.first}  {data.name.last}</div>
                                                </div>
                                            )
                                        })
                                    }
                                ) : null
                            : null
                    }
                </div>
                <UserCard showUserCard={showUserCard} setShowUserCard={setShowUserCard} user={user}/>
            </div>
        </>
    )
}

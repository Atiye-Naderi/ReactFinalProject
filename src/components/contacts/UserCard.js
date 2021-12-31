import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    showPaper: {
        width: 400,
        padding:15,
    },
    hidePaper: {
        display: 'none'
    },
    header: {
        display: 'flex',
    },
    closeBtn: {
        marginTop: 5,
        marginLeft:5,
        marginBottom:5,
        '&:hover':{
            cursor:'pointer'
        }
    },
    main: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    imageSec: {
        width:'30%'
    },
    userImg: {
        width: 100,
        height: 80,
        marginRight:5,
    },
    desSec: {
        display: 'flex',
        flexDirection: 'column',
        width:'70%',
        fontSize:14,
        // border:'solid 1px'
    },
    item: {
        display: 'flex',
        width: '100%'
    },
    nameSec:{
        marginBottom:8,
    },
})
export default function UserCard({setShowUserCard, showUserCard, user}) {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={3} className={showUserCard ? classes.showPaper : classes.hidePaper}>
                <div>
                    <div className={classes.header}>
                        <img src={'/img/close.svg'} className={classes.closeBtn}
                             onClick={() => setShowUserCard(false)}/>
                    </div>
                    {
                        Object.keys(user).length > 0 ?
                            <div className={classes.main}>
                                <div className={classes.imageSec}>
                                    <img src={user ? user.picture.large : ''} className={classes.userImg}/>
                                </div>
                                <div className={classes.desSec}>
                                    <div className={classes.nameSec}>
                                        <div>
                                            {user.name.title} {user.name.first} {user.name.last}
                                        </div>
                                    </div>
                                    <div className={classes.item}>
                                        <div> email:</div>
                                        <div>{user.email}</div>
                                    </div>
                                    <div className={classes.item}>
                                        <div> phone:</div>
                                        <div>{user.phone}</div>
                                    </div>
                                    <div className={classes.item}>
                                        <div> city:</div>
                                        <div>{user.location.city}</div>
                                    </div>
                                    <div className={classes.item}>
                                        <div> street:</div>
                                        <div>{user.location.street.name}</div>
                                    </div>
                                    <div className={classes.item}>
                                        <div> state:</div>
                                        <div>{user.location.state}</div>
                                    </div>


                                </div>
                            </div> : null


                    }

                </div>
            </Paper>
        </div>
    )
}

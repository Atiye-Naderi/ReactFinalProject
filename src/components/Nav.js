import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const useStyles = makeStyles({
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
    }

})
export default function Nav({setUserData, userData, pageNumber, setPageNumber, setUserNumber, userNumber}) {
    const classes = useStyles();
    const {tab} = useParams();
    const history = useHistory();
    let pNumber = 1;
    let counter = 1;
    const changeTab = () => {
        setPageNumber(pageNumber + 1);
        history.push(`/users/${pageNumber}`)
        setUserData([]);
        setUserNumber(1);
    }
    return (
        <>
            <nav className={classes.navigation}>
                <div className={classes.navTab} key='a' onClick={() => changeTab()}> a</div>
                <div className={classes.navTab} key='b' onClick={() => changeTab()}> b</div>
                <div className={classes.navTab} key='c' onClick={() => changeTab()}> c</div>
                <div className={classes.navTab} key='d' onClick={() => changeTab()}> d</div>
                <div className={classes.navTab} key='e' onClick={() => changeTab()}> e</div>
                <div className={classes.navTab} key='f' onClick={() => changeTab()}> f</div>
                <div className={classes.navTab} key='g' onClick={() => changeTab()}> g</div>
                <div className={classes.navTab} key='h' onClick={() => changeTab()}> h</div>
                <div className={classes.navTab} key='i' onClick={() => changeTab()}> i</div>
                <div className={classes.navTab} key='j' onClick={() => changeTab()}> j</div>
                <div className={classes.navTab} key='k' onClick={() => changeTab()}> k</div>
                <div className={classes.navTab} key='l' onClick={() => changeTab()}> l</div>
                <div className={classes.navTab} key='m' onClick={() => changeTab()}> m</div>
                <div className={classes.navTab} key='n' onClick={() => changeTab()}> n</div>
                <div className={classes.navTab} key='o' onClick={() => changeTab()}> o</div>
                <div className={classes.navTab} key='p' onClick={() => changeTab()}> p</div>
                <div className={classes.navTab} key='q' onClick={() => changeTab()}> q</div>
                <div className={classes.navTab} key='r' onClick={() => changeTab()}> r</div>
                <div className={classes.navTab} key='s' onClick={() => changeTab()}> s</div>
                <div className={classes.navTab} key='t' onClick={() => changeTab()}> t</div>
                <div className={classes.navTab} key='u' onClick={() => changeTab()}> u</div>
                <div className={classes.navTab} key='v' onClick={() => changeTab()}> v</div>
                <div className={classes.navTab} key='w' onClick={() => changeTab()}> w</div>
                <div className={classes.navTab} key='x' onClick={() => changeTab()}> x</div>
                <div className={classes.navTab} key='y' onClick={() => changeTab()}> y</div>
                <div className={classes.navTab} key='z' onClick={() => changeTab()}> z</div>
            </nav>
        </>
    )
}
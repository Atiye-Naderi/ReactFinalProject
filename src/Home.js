import React from 'react'
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
export default function Home() {
    const history = useHistory();
    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%',border:'solid red', height:'100vh'}}>
            <Button variant='contained'
                    style={{backgroundColor:'#b973e8', height:50, fontWeight:'bold'}}
                    onClick={() => history.push('/users')}>
                I'm home . click to see contacts
            </Button>
        </div>
    )
}

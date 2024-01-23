import { Button, CardContent, Typography, styled } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';

const TringleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achievement = () => {
  return (
    <Card className='' sx={{position:"relative"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>Narender Code</Typography>
            <Typography variant='body2'>Congratulation 🤑🥳</Typography>
            <Typography variant='h5' sx={{my:3.1}}>998k</Typography>
        
        <button size='small' variant='contained'>View Sales</button>

        <TringleImg src=''></TringleImg>
        <TrophyImg src=''/>
        </CardContent>
    </Card>
  )
}

export default Achievement
import { Container, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Carousel from './Carousel'


export default function Banner() {
  const useStyles = makeStyles(() => ({
    Banner: {
      backgroundImage: "url(https://i.pinimg.com/originals/de/1e/9b/de1e9bc7db29ddaa41371c5c49bb24f0.jpg)"
    },
    bannerContent: {
      height: "25%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      
    }
    , 
    tagline: {
      display: "flex", 
      height: "40%",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center"
    }

  }))
  const classes = useStyles()

  return (
    <div className={classes.Banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Carousel />
        </div>
      </Container>
      

    </div>
  )
}

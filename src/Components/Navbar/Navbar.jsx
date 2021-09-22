import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/go-mall.png'
import useStyles from './Nav-styles'

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position ="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography variant="hh6" className={classes.appBar} color="inherit" > 
                        <img src={logo} alt='Go-Mall' height="20px" className={classes.image} />
                        Go-Mall
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} >
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
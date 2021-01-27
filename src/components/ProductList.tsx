import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Product from './Product'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '80px',
    },
    listContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
  }),
);


const ProductList = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.listContainer}>
          <Grid item xs={12} md={3}>
            <Product/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Product/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Product/>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default ProductList

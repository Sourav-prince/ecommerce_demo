import React, { useEffect, useMemo } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useImmer } from "use-immer"

import Product from './Product'
import ProductSkeleton from './ProductSkeleton'

import { getProducts } from '../services/Product'

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


const ProductList = (props:any) => {

  const classes = useStyles();

  const [state, setState] = useImmer({
    list:[]
  })

  const loadProducts = async()=>{
    try{
      const res = await getProducts()
      setState(draft => {
        draft.list = res;
      });
    }catch(e){}
  }

  useEffect(()=>{
    loadProducts()
    // eslint-disable-next-line
  },[])

  const productLoader = useMemo(()=>(
    <>
      <Grid item xs={12} sm={6} md={3}>
        <ProductSkeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ProductSkeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ProductSkeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ProductSkeleton />
      </Grid>
    </>
  ),[])

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.listContainer}>
          {!state.list.length &&
            productLoader
          }
          {state.list.map((value:any,index:number)=>(
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Product key={index} data={value} {...props}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default ProductList

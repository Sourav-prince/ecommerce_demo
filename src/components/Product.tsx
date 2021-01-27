import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { getDynamicPrice } from '../utils/prices';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderRadius: '10px'
  },
  media: {
    height: 140,
  },
  price: {
    textAlign: 'center',
    width: '100%'
  },
});

const Product = (props:any) => {
  const classes = useStyles()
  const { data, selectedCurrency } = props
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.imgUrl}
          title={data.name}
        />
        <CardContent>
          <Typography 
            className={classes.price} 
            gutterBottom 
            variant="subtitle1" 
            component="div">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography 
          className={classes.price} 
          color="primary" 
          variant="subtitle1" 
          component="div">
          {getDynamicPrice(data.price,selectedCurrency)}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Product

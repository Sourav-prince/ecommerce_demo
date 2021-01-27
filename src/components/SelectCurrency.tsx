import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useImmer } from "use-immer"
import { getExchangeRates } from '../services/Currency'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      minWidth: 120,
    },
    container: {
      display: 'flex',
      alignItems: 'center'
    },
    label:{
      marginRight: theme.spacing(1)
    },
    curselect:{
      backgroundColor: '#fff',
      textAlign: 'center'
    }
  }),
);

export default function ControlledOpenSelect(props:any) {
  const classes = useStyles();
  const { selectedCurrency, changeCurrency } = props
  const [open, setOpen] = React.useState(false);

  const [state, setState] = useImmer({
    list: []
  })

  const loadCurrency = async()=>{
    try{
      const res = await getExchangeRates()
      const temp:any = []
      for (const [key, value] of Object.entries(res.rates)) {
        temp.push({ label:key, value })
      }
      setState(draft => {
        draft.list = temp;
      });
    }catch(e){}
  }

  useEffect(()=>{
    loadCurrency()
    // eslint-disable-next-line
  },[])

  const handleChange = (event:any) => {
    changeCurrency(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.container}>{}
      <div className={classes.label}>Currency</div>
      <FormControl className={classes.formControl}>
        <Select
          id="currency-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedCurrency}
          onChange={handleChange}
          className={classes.curselect}
        >
          <MenuItem key={999} value={selectedCurrency}>{selectedCurrency.label}</MenuItem>       
          {// eslint-disable-next-line
            state.list.map((value:any,index:number)=>{
            if(selectedCurrency.label !== value.label)
              return <MenuItem key={index} value={value}>{value.label}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}

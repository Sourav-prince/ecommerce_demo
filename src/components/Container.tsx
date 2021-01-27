import React from 'react'
import { useImmer } from "use-immer"

import Header from './Header'
import ProductList from './ProductList'
import '../assets/styles/index.css'

const Container = () => {
  const [state, setState] = useImmer({
    selectedCurrency: { label:"INR", value:1 }
  })

  const changeCurrency = (obj:any) => {
    setState(draft => {
      draft.selectedCurrency = obj;
    });
  }

  return (
    <>
      <Header changeCurrency={changeCurrency} selectedCurrency={state.selectedCurrency}/>
      <ProductList selectedCurrency={state.selectedCurrency}/>
    </>
  )
}

export default Container

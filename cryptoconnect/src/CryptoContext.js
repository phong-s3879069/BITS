import React, { createContext, useContext, useEffect, useState } from 'react'
const Crypto = createContext()

const CryptoContext = ( { children } ) => {
  const [currency, setCurrency] = useState("USD")
  const [symbol, setSymbol] = useState("$")

  useEffect(() => {
    if (currency === "USD") {
      setSymbol("$")
    }
    else if (currency === "VND") {
      setSymbol("đ")
    }
  }, [currency])

  return (
    <div>
      return <Crypto.Provider value={{currency, symbol, setCurrency}}>{ children }</Crypto.Provider>
    </div>
  )
}

export const CryptoState = () => {
  return useContext(Crypto)
}

export default CryptoContext
import { useState } from 'react'
import './App.css'
import ConnectWalletBtn from './components/connectWalletBtn/ConnectWalletBtn';
import { mint } from './services/explore-coin/web3-services/contractServices'
function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  return (
    <>
      <ConnectWalletBtn currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
      
      <button onClick={(e) => mint(e, currentAccount)}>MINT</button>
      
    </>
  )
}

export default App

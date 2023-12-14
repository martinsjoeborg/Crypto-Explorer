import { useEffect, useState } from 'react'
import './App.css'
import ConnectWalletBtn from './components/connectWalletBtn/ConnectWalletBtn';
import { mint } from './services/explore-coin/web3-services/contractServices';
import { handleAccountChanged } from './services/explore-coin/web3-services/walletServices';

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  handleAccountChanged(setCurrentAccount);

  useEffect(() => {

  }, [currentAccount]);

  return (
    <>
      <ConnectWalletBtn currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
      
      <button onClick={(e) => mint(e, currentAccount)}>MINT</button>
      
    </>
  )
}

export default App

import { connectWallet } from '../../services/explore-coin/web3-services/walletServices';
import "../../App.css";

const ConnectWalletBtn = ({ setCurrentAccount, currentAccount }) => {
    
    const checkAccount = () => {
        if (currentAccount !== null) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            {checkAccount() ?
                <div className="accText">
                    <div className="accText-content">
                    {currentAccount ? currentAccount.slice(0, 6) + '...' + currentAccount.slice(-4) : 'Waiting...'}
                    </div>
                    
                </div> :

                <button onClick={() => connectWallet(setCurrentAccount)} className='connect-btn'>Connect wallet</button>}
            
        </div>
    );
}
 
export default ConnectWalletBtn;
import "./DefiMain.css"
import { Link } from "react-router-dom";

const DefiMain = () => {

    return (
        <div className="defi-main">

            <div className="defi-title">DeFi</div>

            <div className="defi-boxes">
                <Link to="/defi/swap" className="swap-box">
                    <div className="swap-box-title">Swap</div>
                </Link>

                <Link to="/defi/stake" className="stake-box">
                    <div className="stake-box-title">Stake</div>
                </Link>

                <Link to="/defi/borrow-lend" className="borrowLend-box">
                    <div className="borrowLend-box-title">Borrow / Lending</div>
                </Link>
            </div>

        </div>
    );
}
 
export default DefiMain;
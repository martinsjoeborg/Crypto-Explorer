import { initWeb3, initContract } from "./web3Init";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../config/explore-coin-config';

const web3 = initWeb3();
export const contract = initContract(web3);
const web3ForTransactions = new Web3(window.ethereum);
const contractForTransactions = new web3ForTransactions.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export const mint = (e, currentAccount) => {
    e.preventDefault();
  
    contractForTransactions.methods.mint100Tokens().send({from: currentAccount})
      .on('transactionHash', hash => {
        console.log('Transaction Hash:', hash);
      })
      .on('receipt', receipt => {
        console.log('Transaction Receipt:', receipt);
      })
      .on('error', error => {
        console.error(error);
      });
  };
import { initWeb3, initContract } from "./web3Init";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../config/explore-coin-config';

const web3 = initWeb3();
export const contract = initContract(web3);
const web3ForTransactions = new Web3(window.ethereum);
const contractForTransactions = new web3ForTransactions.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

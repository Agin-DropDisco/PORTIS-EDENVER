import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis(
  "0ae17a7f-3a06-4daa-baec-6c5a45bd3a99",
  "rinkeby"
  
);

const web3 = new Web3(portis.provider);

const transferTo = "0xBfBa42de8147de1B20731bD8150531c50cd10803";

const thisamount = 0.005;


export  {
  portis,
  web3,
  transferTo,
  thisamount,
};
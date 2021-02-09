import React from "react";
import { toast, Zoom } from "react-toastify";
import { Modal, Icon, message, Button } from "antd";
import "react-toastify/dist/ReactToastify.min.css";
import { web3, portis, transferTo, thisamount } from "../backend/web3";
import  "./Glitch.css"


class TipsSend extends React.Component {


  
  constructor(props) {
    super(props);
    this.state = {
      ModalText: "Are You Sure ?",
      visible: false,
      confirmLoading: false,
    };
  }
  
 

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = async () => {




    this.setState({
      ModalText: " Fetch Data from Portis ... \n ",
      ModalText2: "⛔ You will send tips for 0.05 ETH ⛔",
      confirmLoading: true,
    });

    toast.configure();


    try {

  
    } catch (error) {

      console.log(`Error: ${error}`);
      message.error("⛔ Something Bad Happen ")
      
    } finally {
      
      const accounts = await portis.provider.enable();
      const txHasher = await sendEther(transferTo, accounts[0], etherToHexWei(thisamount));
      const txScan = "https://rinkeby.etherscan.io/tx/";



      toast.success("Tip has been send.. " , {txScan}  +  {txHasher})



      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 1000);
    }

    function etherToHexWei(value) {
      const wei = value * 10 ** 18;
      const hexWei = wei.toString(16);
      return `0x${hexWei}`;
    }

    function sendEther(transferTo, transferFrom, value) {
      return web3.currentProvider.send("eth_sendTransaction", [
        {
          from: transferFrom,
          to: transferTo,
          value: value,
        },
      ]);
    }

  };


  handleCancel = () => {

    this.setState({
      visible: false,
      confirmLoading: false,
    });
    console.log("🔕 Transactions has been canceled")
  };

  render() {

    const { visible, confirmLoading, ModalText, ModalText2 } = this.state;


    return (
      <>
        <Modal 
          title=" SUBMIT TIPS "
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className="yolo"
          width="400px"
        >
          <p>{ModalText}</p>
          <p className="warn-text">{ModalText2}</p>
        </Modal>
        <div className="buttoncontent">
        <Button type="primary" id="tipbutton" className="button-base btn-glitch-fill" onClick={this.showModal}>
        <span className="text"> Send Tips </span>
        <span className="decoration">
        <Icon type="money-collect" />
        </span>
        </Button>
        </div>
      </>
    );
  }
}

export default TipsSend ;

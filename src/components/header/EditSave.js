import React  from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import EthSigUtil from "eth-sig-util";
import { Button, Col, Popover, Row, Checkbox, message } from "antd";
import styles from './Header.module.css';
import {
  web3,
} from "../backend/web3";

class EditPageSaveOption extends React.Component {


  static propTypes = {
    id: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
    saveArticleContent: PropTypes.func.isRequired,
    resetContentEditStatus: PropTypes.func.isRequired,
    isUpdatingFinished: PropTypes.bool.isRequired,
    updatedPart: PropTypes.string,
    updateArticleStatusReset: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired
  };

  state = {
    visible: false
  };

  hidePopover = () => {
    this.setState({
      visible: false
    });
  };


  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  handleSave = async () => {

    const { id, markdown, saveArticleContent, resetContentEditStatus } = this.props;

      resetContentEditStatus();
      saveArticleContent(id, { markdown });
      message.config({
      duration: 2
    });

  };

  render() {

    const { error, isUpdatingFinished, updatedPart, updateArticleStatusReset } = this.props;

    if (isUpdatingFinished && error) {

      message.error('Failed to update article.');

    } else if (isUpdatingFinished) {

      if (updatedPart === 'content') {

        console.log('The content of article has been saved successfully.');

      } else if (updatedPart === 'info setting') {
        
        console.log('The info setting of article has been saved successfully.');
      }

      updateArticleStatusReset();
    }

    return (
      <Popover
        content={
          <EditPageSaveOptionContent
            hidePopover={this.hidePopover}
            {...this.props}
          />
        }
        title="Please choose the place you want to save"
        trigger={["click"]}
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button
          htmlType="button"
          title="Save the markdown and it can be exported"
          onClick={this.handleSave}
        >
          Save
        </Button>
      </Popover>
    );
  }
}

class EditPageSaveOptionContent extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    hidePopover: PropTypes.func.isRequired,
    publishArticle: PropTypes.func.isRequired,
    saveArticleAsDraft: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isRedirected: true
    };
  }


  toggleCheckbox = () => {
    this.setState((state) => ({
      isRedirected: !state.isRedirected
    }));
  };

  clickOnDraft = () => {

    const { id, saveArticleAsDraft, hidePopover } = this.props;

    saveArticleAsDraft(id);
    hidePopover();
    
  };

  clickOnPublish = async () => {

    const { id, publishArticle, hidePopover } = this.props;

    const accounts = await web3.eth.getAccounts();
  
    const messagez = "⭐ You need to sign this messages to be able to publish an Article ";

    const messageHex = "0x" + new Buffer(messagez, "utf8").toString("hex");

    const signedMessage = await web3.currentProvider.send("personal_sign", [
      messageHex,
      accounts[0]
    ]);
  
    var recovered = EthSigUtil.recoverPersonalSignature({
      data: messageHex,
      sig: signedMessage
    });

    console.log(recovered);

    web3.eth
    .getAccounts()
    .then(signedMessage)
    .then((accounts) => {
      publishArticle(id);
      hidePopover();
      message.config({
        duration: 2
      });
      message.success("Publish Article successfully.");
      console.log(accounts);
    });

  };

  render() {
    const PublishOption = this.state.isRedirected ? (
      <Col>
          <button
            className={styles.publishButton}
            onClick={this.clickOnPublish}
            title="After publishing in article list, you can find it in article list page."
          >
          <Link to="/articles"
          style={{color: "white"}}
          >Ready to publish</Link>
          </button>
      </Col>
    ) : (
      <Col>
        <button
          className={styles.publishButton}
          onClick={this.clickOnPublish}
          title="After publishing in article list, you can find it in article list page."
        >
          Ready to publish
        </button>
      </Col>
    );

    const DraftOption = this.state.isRedirected ? (
      <Col>
        <Link to="/drafts">
          <button
            className={styles.draftButton}
            onClick={this.clickOnDraft}
            title="After saving in draft list, you can find it in draft list page."
          >
            Save as draft
          </button>
        </Link>
      </Col>
    ) : (
      <Col>
        <button
          className={styles.draftButton}
          onClick={this.clickOnDraft}
          title="After saving in draft list, you can find it in draft list page."
        >
          Save as draft
        </button>
      </Col>
    );

    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          {PublishOption}
          {DraftOption}
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col>
            <Checkbox defaultChecked={true} value={this.state.isRedirected} onChange={this.toggleCheckbox} className="let-blue">
              <span className="redirector" 
                      style={{
          color: "black",
        }}
              >Redirect to the relevant page later</span>
            </Checkbox>
          </Col>
        </Row>
      </div>
    );
  }
}

export { EditPageSaveOption };

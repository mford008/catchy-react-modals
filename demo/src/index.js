import React, {Component} from 'react'
import {render} from 'react-dom'
import { Button } from '../../src';
import { Modal } from '../../src';
import './index.css';
import './logo.png';

class App extends Component {

  state = {
      rec_visible: false,
      round_visible: false,
      square_visible: false,
      danger_visible: false,
      info_visible: false,
      success_visible: false,
      small_visible: false,
      med_visible: false,
      large_visible: false,
      sleek_visible: false,
      colorful_visible: false,
      peaceful_visible: false,
    }

    hideRectangleModal = () => {
      this.setState({
        rec_visible: false,
      })
    }
    showRectangleModal = () => {
      this.setState({
        rec_visible: !this.state.rec_visible,
      })
    }
    hideRoundModal = () => {
      this.setState({
        round_visible: false,
      })
    }
    showRoundModal = () => {
      this.setState({
        round_visible: !this.state.round_visible,
      })
    }
    hideSquareModal = () => {
      this.setState({
        square_visible: false,
      })
    }
    showSquareModal = () => {
      this.setState({
        square_visible: !this.state.square_visible,
      })
    }

  /*modal styles*/

  hideDangerModal = () => {
    this.setState({
      danger_visible: false,
    })
  }
  showDangerModal = () => {
    this.setState({
      danger_visible: !this.state.danger_visible,
    })
  }
  hideInfoModal = () => {
    this.setState({
      info_visible: false,
    })
  }
  showInfoModal = () => {
    this.setState({
      info_visible: !this.state.info_visible,
    })
  }
  hideSuccessModal = () => {
    this.setState({
      success_visible: false,
    })
  }
  showSuccessModal = () => {
    this.setState({
      success_visible: !this.state.success_visible,
    })
  }

  /*methods for size modals*/
  hideSmallModal = () => {
    this.setState({
      small_visible: false,
    })
  }
  showSmallModal = () => {
    this.setState({
      small_visible: !this.state.small_visible,
    })
  }
  hideMedModal = () => {
    this.setState({
      med_visible: false,
    })
  }
  showMedModal = () => {
    this.setState({
      med_visible: !this.state.med_visible,
    })
  }
  hideLargeModal = () => {
    this.setState({
      large_visible: false,
    })
  }
  showLargeModal = () => {
    this.setState({
      large_visible: !this.state.large_visible,
    })
  }
  hideSleekModal = () => {
    this.setState({
      sleek_visible: false,
    })
  }
  showSleekModal = () => {
    this.setState({
      sleek_visible: !this.state.sleek_visible,
    })
  }
  hideColorfulModal = () => {
    this.setState({
      colorful_visible: false,
    })
  }
  showColorfulModal = () => {
    this.setState({
      colorful_visible: !this.state.colorful_visible,
    })
  }
  hidePeacefulModal = () => {
    this.setState({
      peaceful_visible: false,
    })
  }
  showPeacefulModal = () => {
    this.setState({
      peaceful_visible: !this.state.peaceful_visible,
    })
  }


        render() {
          return (
            <div className="App">
                <h1 className="Heading">React CatchyModals</h1>
                <h2 className="Subheading">Getting Started: </h2>
                <p className="Para">React CatchyModals is a collection of delightful
                and catchy modals that can be customized to fit into
                any project. The modals have a variety of transitions
                and styles suited to any in-application notification
                purpose.</p>
                <p className="Para">To install, use 'npm install --save react-catchymodals' or 'yarn add react-catchymodals'</p>
           {/*shapes*/}
                  <div className="ButtonContainer-Shape">
                    <h2 className="Subheading">Modals by Shape: </h2>
                      <Button
                         className="PageButton"
                         buttonText="Rectangular Modal"
                         click={this.showRectangleModal}
                           />
                      <Button
                         className="PageButton"
                         buttonText="Rounded Modal"
                         click={this.showRoundModal}
                          />
                      <Button
                         className="PageButton"
                         buttonText="Square Modal"
                         click={this.showSquareModal}
                          />
                  </div>
            {/*styles*/}
                  <div className="ButtonContainer-Style">
                    <h2 className="Subheading">Modals by Style: </h2>
                      <Button
                         className='DangerModal'
                         buttonText="Warning Modal"
                         click={this.showDangerModal}
                           />
                      <Button
                         className="InfoModal"
                         buttonText="Info Modal"
                         click={this.showInfoModal}
                          />
                      <Button
                         className="SuccessModal"
                         buttonText="Success Modal"
                         click={this.showSuccessModal}
                          />
                  </div>
            {/*sizes*/}
                  <div className="ButtonContainer-Size">
                    <h2 className="Subheading">Modals by Size: </h2>
                      <Button
                         className="PageButton"
                         buttonText="Small Modal"
                         click={this.showSmallModal}
                           />
                      <Button
                         className="PageButton"
                         buttonText="Medium Modal"
                         click={this.showMedModal}
                          />
                      <Button
                         className="PageButton"
                         buttonText="Large Modal"
                         click={this.showLargeModal}
                          />
                  </div>
                  <div className="ButtonContainer-Texture">
                    <h2 className="Subheading">More Modal Styles: </h2>
                    <Button
                       className="PageButton"
                       buttonText="Sleek Modal"
                       click={this.showSleekModal}
                         />
                    <Button
                       className="PageButton"
                       buttonText="Colorful Modal"
                       click={this.showColorfulModal}
                         />
                   <Button
                      className="PageButton"
                      buttonText="Peaceful Modal"
                      click={this.showPeacefulModal}
                        />
                  </div>
          {/*shapes*/}
                  <Modal
                    className="rec-modal"
                    title="Rectangular Modal"
                    hideModal={this.hideRectangleModal}
                    visible={this.state.rec_visible}
                    children="Just your standard rectangle"
                    buttonText="Alright"/>
                  <Modal
                    className="round-modal"
                    title="Rounded modal"
                    hideModal={this.hideRoundModal}
                    visible={this.state.round_visible}
                    children="The hipster version of the rectangular modal."
                    buttonText="Groovy"/>
                  <Modal
                    className="square-modal"
                    title="Square modal"
                    hideModal={this.hideSquareModal}
                    visible={this.state.square_visible}
                    children="For all of your square announcements"
                    buttonText="I agree"/>
            {/*styles*/}
                  <Modal
                    className="danger-modal"
                    title="Oh Snap!"
                    hideModal={this.hideDangerModal}
                    visible={this.state.danger_visible}
                    children="Are you sure you want to do that?"
                    buttonText="Yes, I'm sure"/>
                  <Modal
                    className="info-modal"
                    title="Check it out!"
                    hideModal={this.hideInfoModal}
                    visible={this.state.info_visible}
                    children="Take note of this cool piece of info."
                    buttonText="Sweet!"/>
                  <Modal
                    className="success-modal"
                    title="Yessssss"
                    hideModal={this.hideSuccessModal}
                    visible={this.state.success_visible}
                    children="It worked!"
                    buttonText="Yay!"/>
            {/*sizes*/}
                  <Modal
                    className="teeny-modal"
                    title="Tiny Modal!"
                    hideModal={this.hideSmallModal}
                    visible={this.state.small_visible}
                    children="I'm cute and tiny!"
                    buttonText="Awww"/>
                  <Modal
                    className="med-modal"
                    title="Medium modal"
                    hideModal={this.hideMedModal}
                    visible={this.state.med_visible}
                    children="Happy medium is where it's at."
                    buttonText="I am sufficiently notified"/>
                  <Modal
                    className="large-modal"
                    title="Gigantic modal"
                    hideModal={this.hideLargeModal}
                    visible={this.state.large_visible}
                    children="FOR REALLY IMPORTANT STUFF!"
                    buttonText="Yes, okay I get the message"/>

                    <Modal
                      className="sleek-modal"
                      title="A Stylish Arsty modal"
                      hideModal={this.hideSleekModal}
                      visible={this.state.sleek_visible}
                      children="Ooooh, artsy"
                      buttonText="I approve of this design"/>
                    <Modal
                      className="colorful-modal"
                      title="A fun and colorful modal"
                      hideModal={this.hideColorfulModal}
                      visible={this.state.colorful_visible}
                      children="We're a fun business"
                      buttonText="Woot!"/>
                    <Modal
                      className="peaceful-modal"
                      title="A peaceful modal"
                      hideModal={this.hidePeacefulModal}
                      visible={this.state.peaceful_visible}
                      children="So zen."
                      buttonText="Peaceful click"/>
            </div>
          );
        }
      }


render(<App/>, document.querySelector('#demo'))

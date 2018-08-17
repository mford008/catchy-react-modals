import React, {Component} from 'react'
import {render} from 'react-dom'
import { Button } from '../../src';
import { Modal } from '../../src';

class App extends Component {

  state = {
      rec_visible: false,
      round_visible: false,
      square_visible: false,
      danger_visible: false,
      info_visible: false,
      success_visible: false,
      toggle_large: false,
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

  toggleLarge = () => {
    this.setState({
      toggle_large: !this.state.toggle_large,
    })
  }
  toggleSmall = () => {
    this.setState({
      toggle_large: false,
    })
  }

        render() {
          return (
            <div className="App">
                <h1 className="Heading">Available Components:</h1>
                <div className="ButtonContainer">
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
                         buttonText="Round Modal"
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
          {/*shapes*/}
                  <Modal
                    className="rec-modal"
                    title="A Rectangular Modal"
                    hideModal={this.hideRectangleModal}
                    visible={this.state.rec_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
                  <Modal
                    className="round-modal"
                    title="A Circular Modal"
                    hideModal={this.hideRoundModal}
                    visible={this.state.round_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
                  <Modal
                    className="square-modal"
                    title="A Square Modal"
                    hideModal={this.hideSquareModal}
                    visible={this.state.square_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
            {/*styles*/}
                  <Modal
                    className="danger-modal"
                    title="A Warning Modal"
                    hideModal={this.hideDangerModal}
                    visible={this.state.danger_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
                  <Modal
                    className="info-modal"
                    title="An Informational Modal"
                    hideModal={this.hideInfoModal}
                    visible={this.state.info_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
                  <Modal
                    className="success-modal"
                    title="A Success Modal"
                    hideModal={this.hideSuccessModal}
                    visible={this.state.success_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
            {/*sizes*/}
                  <Modal
                    className="teeny-modal"
                    title="A Small Modal"
                    hideModal={this.hideSmallModal}
                    visible={this.state.small_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
                  <Modal
                    className="med-modal"
                    title="An Medium Modal"
                    hideModal={this.hideMedModal}
                    visible={this.state.med_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
                  <Modal
                    className="large-modal"
                    title="A Large Modal"
                    hideModal={this.hideLargeModal}
                    visible={this.state.large_visible}
                    children="Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua."/>
                  </div>
            </div>
          );
        }
      }


render(<App/>, document.querySelector('#demo'))

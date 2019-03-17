import React, { Component } from 'react';
import Modal from "react-animated-modal";
import "./modal.css"
import Ratings from 'react-ratings-declarative';
/* eslint-disable */
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class EmailModal extends Component {
    state = {
        showModal: false,
        showError: false,
        showConfirm: false
    };

    email = "";

    changeRating = (newRating) => {
        this.setState({
            rating: newRating
        });
    }
    submitEmail = (email) => {
        if (validateEmail(email)) {
            console.log("Mail recived: ",email);
            this.setState(() => ({ showModal: false }), () => {
                this.setState({ showConfirm: true });
            });

        } else {
            this.setState({ showError: true });
            console.log("Invalid mail format");
        }

    }

    render() {
        return (
            <div className={"email-modal"}>
                <div style={{ marginTop: 28 }}>
                    <button onClick={() => { this.setState({ showModal: true }); this.email=""; }}>Get map</button>
                </div>
                <Modal
                    visible={this.state.showModal}
                    closemodal={() => this.setState({ showModal: false,showError: false })}
                    type="flipInX"
                >
                    <div className={"modal-body"}>
                        <h2>Stay tuned</h2>
                        <p>subscribe to be notified about the first maps</p>
                        <input onChange={(evt) => { this.email = evt.target.value; }} ></input>
                        <span className="e-but" onClick={() => { this.submitEmail(this.email) }}>
                            <img className="e-img" src={"icons/send.png"}></img>
                        </span>
                        {this.state.showError ? <div className="e-err">Invalid email</div> : null}
                        <div style={{ "fontSize": 16 }}>no spam, we promise</div>
                    </div>
                </Modal>
                <Modal
                    visible={this.state.showConfirm}
                    closemodal={() => this.setState({ showConfirm: false,showError: false })}
                    type="flipInX"
                >
                    <div className={"modal-body"}>
                        <h2>Thanks</h2>
                        <p>
                            We'll update soon.
                            Meanwhile, you can help us be better by leaving feedback :)
                        </p>
                        <p>What is your oponion of this page?</p>
                        <div className="stars">
                            <Ratings
                                rating={this.state.rating}
                                widgetRatedColors="#e0df07"
                                changeRating={this.changeRating}
                            >
                                <Ratings.Widget widgetHoverColor="#e0df07" />
                                <Ratings.Widget widgetHoverColor="#e0df07" />
                                <Ratings.Widget widgetHoverColor="#e0df07" />
                                <Ratings.Widget widgetHoverColor="#e0df07" />
                                <Ratings.Widget widgetHoverColor="#e0df07" />
                            </Ratings>
                        </div>
                        <textarea></textarea>
                        <button onClick={()=>{this.setState({ showConfirm: false,showError: false })}}>Send</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default EmailModal;
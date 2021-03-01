import React, { Component } from 'react';
import Modal from 'react-modal'
import classes from './thanks.module.css'
import check from '../../assest/check.svg'


class Thanks extends Component {
    render() {
        return (
            <Modal className={classes.main} isOpen={this.props.show}>
                <img src={check} className={classes.check} alt="" />
                <p className={classes.th}>Thanks. Successful!</p>
            </Modal>
        );
    }
}

export default Thanks;
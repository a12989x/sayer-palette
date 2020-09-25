import React, { useState, useContext, useRef } from 'react';
import Modal from 'react-modal';
import IdleTimer from 'react-idle-timer';

import { AuthContext } from '../contexts/AuthContext';

const ModalIdleTimer = () => {
    const { isSignIn, signOut } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const idleTimerRef = useRef(null);
    const sessionTimeOutRef = useRef(null);

    const onIdle = () => {
        setModalIsOpen(true);
        sessionTimeOutRef.current = setTimeout(logOut, 10000);
    };

    const logOut = () => {
        setModalIsOpen(false);
        signOut();
        clearTimeout(sessionTimeOutRef.current);
    };

    const stayActive = () => {
        setModalIsOpen(false);
        clearTimeout(sessionTimeOutRef.current);
    };

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                className="modal__content"
                overlayClassName="modal__overlay"
            >
                <h4>You've been idle for a while!</h4>
                <p>You will signed out soon</p>
                <div className="modal__buttons">
                    <button className="primary-button" onClick={logOut}>
                        Sign me out
                    </button>
                    <button className="primary-button" onClick={stayActive}>
                        Keep me signed in
                    </button>
                </div>
            </Modal>
            {isSignIn ? (
                <IdleTimer
                    ref={idleTimerRef}
                    timeout={60 * 1000 * 5}
                    onIdle={onIdle}
                />
            ) : null}
        </>
    );
};

export default ModalIdleTimer;

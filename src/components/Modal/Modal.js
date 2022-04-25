import React from 'react';
import ReactDOM from 'react-dom'
import { useRef, useEffect, useState } from 'react'
import locationItem from '../../constant/locationItem';
import Anh from './Anh.jpg'

function Modal(props) {
    let { bounding, children, position } = props;
    let widthContent = useRef();
    const [style, setStyle] = useState()

    useEffect(()=> {
        let localItem = widthContent.current.getBoundingClientRect();
        setStyle(locationItem(position,bounding, localItem))
    }, [position, bounding])

    return ReactDOM.createPortal(
        <div id="modal-wrapper" style={style} ref={widthContent}>
            <h4>{children}</h4>
            <img src={Anh} alt="anhtuan" />
        </div>,
        document.querySelector('#portal'),
    )
}

export default Modal;
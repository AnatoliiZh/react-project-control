import React, { useState } from 'react'

import { CSSTransition } from 'react-transition-group'

import './Example.scss'

type Props = {}

const Example = (props: Props) => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div>
            <CSSTransition in={isVisible} timeout={300} classNames="sample">
                <div>Text you see me</div>
            </CSSTransition>
            <button type="button" onClick={() => setIsVisible(!isVisible)}>
                Click to show / hide
            </button>
        </div>
    )
}

export default Example

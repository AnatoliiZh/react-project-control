import React from 'react'
import './ButtonToTop.scss'
import NorthIcon from '@mui/icons-material/North'

type Props = {}

const ButtonToTop = (props: Props) => {
    return (
        <div className="arrow-to-top">
            <button
                className="btn-to-top"
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }}
            >
                <NorthIcon />
            </button>
        </div>
    )
}

export default ButtonToTop

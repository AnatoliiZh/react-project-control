import * as React from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener'

type Props = {}

const Demo = (props: Props) => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <button type="button" onClick={handleClick}>
                    Open menu dropdown
                </button>
                {open ? <input type="text" /> : null}
            </div>
        </ClickAwayListener>
    )
}

export default Demo

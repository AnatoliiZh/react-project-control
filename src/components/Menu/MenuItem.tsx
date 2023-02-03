import React from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'
import { useAppDispatch} from 'redux/hooks'
import { updateSearchText } from 'redux/searchReducer'


type Props = {
    to: string
    children: React.ReactNode
}

const MenuItem = ({ to, children }: Props) => {
    // const dispatch = useAppDispatch()
    // const isShowInput = useAppSelector((state) => state.inputShow.isShowInput)
    const dispatch = useAppDispatch()

    return (
        <Button color="inherit" onClick={(e) =>
            dispatch(
                updateSearchText('')
            )} >
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'nav-active' : 'nav-item'
                }
                to={to}
            >
                {children}
            </NavLink>
        </Button>
    )
}

export default MenuItem

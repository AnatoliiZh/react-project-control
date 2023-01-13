import React from 'react'
import { NavLink } from 'react-router-dom'
// import './LinkItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}

const LinkItem = ({ to, children }: Props) => {
    return <NavLink to={to}>{children}</NavLink>
}

export default LinkItem

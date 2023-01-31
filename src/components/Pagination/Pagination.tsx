import React from 'react'
import usePagination from '@mui/material/usePagination'
import { styled } from '@mui/material/styles'

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
})

type Props = {}

const Pagination = (props: Props) => {
    const { items } = usePagination({
        count: 10,
    })
    return (
        <div>
            {' '}
            <nav>
                <List>
                    {items.map(({ page, type, selected, ...item }, index) => {
                        let children = null

                        if (
                            type === 'start-ellipsis' ||
                            type === 'end-ellipsis'
                        ) {
                            children = '…'
                        } else if (type === 'page') {
                            children = (
                                <button
                                    type="button"
                                    style={{
                                        fontWeight: selected
                                            ? 'bold'
                                            : undefined,
                                    }}
                                    {...item}
                                >
                                    {page}
                                </button>
                            )
                        } else {
                            children = (
                                <button type="button" {...item}>
                                    {type}
                                </button>
                            )
                        }

                        return <li key={index}>{children}</li>
                    })}
                </List>
            </nav>
        </div>
    )
}

export default Pagination

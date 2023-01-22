import React from 'react'
import './ButtonToTop.scss'
import NorthIcon from '@mui/icons-material/North';

type Props = {}

const ButtonToTop = (props: Props) => {
  return (
    <button className='btn-to-top'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        // style={{
        //   position: 'fixed',
        //   padding: '1rem 2rem',
        //   fontSize: '20px',
        //   bottom: '40px',
        //   right: '40px',
        //   backgroundColor: '#0C9',
        //   color: '#fff',
        //   textAlign: 'center',
        // }}
      >
        <NorthIcon/>
        
      </button>
  )
}

export default ButtonToTop
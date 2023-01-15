import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East'
import WestIcon from '@mui/icons-material/West'
// import MostReadArray from 'utils/mostReadArray'
import './Slider.scss'

// type MostReadProps = {
//     id: number
//     title: string
//     category: string
//     date: string
//     comments: number
//     image: string
// }

type Props = {}

const img = [
    <img key="1" height="300px" src="/images/1mr_crop.webp" alt="" />,
    <img key="2" height="300px" src="/images/2mr_crop.webp" alt="" />,
    <img key="3" height="300px" src="/images/3mr_crop.webp" alt="" />,
    <img key="4" height="300px" src="/images/4mr_crop.webp" alt="" />,
    <img key="5" height="300px" src="/images/5mr_crop.webp" alt="" />,
    <img key="6" height="300px" src="/images/6mr_crop.webp" alt="" />,
    <img key="7" height="300px" src="/images/7mr_crop.webp" alt="" />,
]

const Slider = (props: Props) => {
    // let id1 = 0
    // let id2 = 1
    // let id3 = 2
    // let id4 = 3
    // Индекс текущего слайда
    const [id1, setId1] = useState(0)
    const [id2, setId2] = useState(1)
    const [id3, setId3] = useState(2)
    const [id4, setId4] = useState(3)
    const [id5, setId5] = useState(4)
    const [id6, setId6] = useState(5)
    // const [id7, setId7] = useState(6)

    const onRightClick = () => {
        setId1((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId2((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId3((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId4((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId5((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId6((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        // setId7((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
    }
    const onLeftClick = () => {
        setId1((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId2((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId3((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId4((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId5((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId6((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        // setId7((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
    }

    return (
        <>
            <div className="popular">
                <div className="popular-heading">Recent Stories</div>
                <div>
                    <WestIcon className="left" onClick={() => onLeftClick()} />
                    <EastIcon
                        className="right"
                        onClick={() => onRightClick()}
                    />
                </div>
            </div>

            <div className="slider">
                <div className="slider-img id1" key={id1}>
                    {img[id1]}
                </div>
                <div className="slider-img id2" key={id2}>
                    {img[id2]}
                </div>
                <div className="slider-img id3" key={id3}>
                    {img[id3]}
                </div>
                <div className="slider-img id4" key={id4}>
                    {img[id4]}
                </div>
                <div className="slider-img id5" key={id5}>
                    {img[id5]}
                </div>
                <div className="slider-img id6" key={id6}>
                    {img[id6]}
                </div>
                {/* <div className="slider-img id7" key={id7}>
                    {img[id7]}
                </div> */}
            </div>
        </>
    )
}

export default Slider

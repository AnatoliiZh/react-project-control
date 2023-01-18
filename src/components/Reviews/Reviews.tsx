import {
    // Button,
    Card,
    CardContent,
    
    Typography,
} from '@mui/material'

import './Reviews.scss'
import arrReviews from 'utils/arrReviews'

import React, { useState } from 'react'

type Props = {}
type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    // const arrReviews: Review[] = [
    //     {
    //         name: 'Jack',
    //         text: "I loved this yoga mat. It's soft and cushy in the best ways. Even when using this on a hardwood floor, I can only feel the soft cushiness of the mat.",
    //     },
    //     {
    //         name: 'Ann',
    //         text: "This is a nice exercise mat. Thick, squishy and a little wider than my previous mat. The extra pad that is included is a nice extra. I'm still not entirely certain what I'll use it for, but it would probably work as a kneeling pad while working around the house.",
    //     },
    // ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
        <div className='reviews'>

            <Typography className='reviews-heading'
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '30px 0',
                }}
            >
                Reviews{' '}
            </Typography>
            {reviews.map(({ name, text }: Review, i) => (
                <Card className='review-card'
                    variant="outlined"
                    key={i}
                    sx={{
                        margin: '30px 0',
                    }}
                >
                    <CardContent className='review-card-text'>
                        <div><span>Name: </span> {name}</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend} className='review-form'>
                <h3>Please leave a review</h3>
                
                <input className='review-name' type="text" name="" id="" placeholder="Your name" value={newReview.name}
                        onChange={handleName}/>
                    
                <textarea className='review-text' name="" id="" 
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}></textarea>
                <button className='review-btn' type="submit">Send</button>    
                {/* <Button variant="outlined" type="submit">
                    Send
                </Button> */}
            </form>

            {/* {arrReviews.map(({ name, text }: Review) => (
                <div>
                    name = {name}
                    text = {text}
                </div>
            ))} */}
        </div>
        </>
    )
}

export default Reviews

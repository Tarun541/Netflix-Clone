import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../listitem/ListItem'
import './list.scss'

export default function List() {

    const [slidernumber, setslidernumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)


    const listRef = useRef()

    const handleclick = (direction) => {

        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slidernumber > 0) {
            setslidernumber(slidernumber - 1)
            listRef.current.style.transform = `translate(${230 + distance}px)`
        }
        if (direction === "right" && slidernumber < 5) {
            setslidernumber(slidernumber + 1)
            listRef.current.style.transform = `translate(${-230 + distance}px)`
        }
    }

    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left'
                    onClick={() => handleclick("left")}
                    style={{ display: !isMoved && "none" }} />
                <div className="container" ref={listRef} >
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                    <ListItem index={10} />
                    <ListItem index={11} />

                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleclick("right")} />

            </div>
        </div>
    )
}

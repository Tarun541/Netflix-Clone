import { AcUnit } from '@material-ui/icons'
import React from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/Navbar/Navbar'
import './home.scss'

const home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default home
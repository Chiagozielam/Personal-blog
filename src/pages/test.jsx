import React, { Component } from 'react'
import Header from '../components/Headers'
import {navigate} from 'gatsby'

const Test = () => (
    <div>
        <Header />
        <h1>Hello To You!!</h1>
        <button onClick={() => navigate('/')}>Navigate to Home</button>

    </div>
)

export default Test;
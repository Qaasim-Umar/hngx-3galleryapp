import React from 'react'
import Imagesgrid from '../sections/Imagesgrid'
import Hero from '../sections/Hero'
import { useState } from 'react'
import Footer from '../sections/Footer'
import imglist  from '../images.json'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    return (
        <div>
            <Hero onSearch={handleSearch} />
            <Imagesgrid searchQuery={searchQuery} imglist={imglist} />
            <Footer/>
        </div>
    )
}

export default Home
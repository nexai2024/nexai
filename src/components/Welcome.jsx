import React from 'react'
import { useRef } from 'react'
const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
  return (
    <section id="welcome">
        <p ref={subtitleRef} className="text-lg text-white">Hey, I'm David! Welcome to my</p>
        <h1 ref={titleRef} className="mt-7 text-3xl text-white">Portfolio</h1>
        <div>
            <p className="text-white">This Portfolio is designed for desktop/tablet screens only.</p>
        </div>
    </section>  
  )
}

export default Welcome
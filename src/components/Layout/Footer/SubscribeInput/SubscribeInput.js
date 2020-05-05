import React, { useState } from 'react'
import './SubscribeInput.css'

const SubscribeInput = () => {
    const [email, setEmail] = useState('')

    const inputChangeHandle = e => setEmail(e.target.value)

    const clickHandle = () => {
        setEmail('')
        alert(`Your email  | ${email} |  has been added to the newsletter.`)
    }

    return (
        <div className='subscribe-input'>
            <h4 className="title">subscribe now</h4>
            <p><strong>Subscribe</strong> to our newsletter to get important news, amazing offers & inside scoops:</p>
            
            <div className="inputField">
                <input
                    type="email"
                    placeholder="Enter your Email Address"
                    value={email}
                    onChange={inputChangeHandle}
                />
                <button onClick={clickHandle} className="email-submit-btn">Subscribe Now</button>
            </div>
        </div>
    )
}

export default SubscribeInput
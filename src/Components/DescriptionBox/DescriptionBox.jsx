import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerec website is an online platform that faclitates the buying and selling of products or services over
                the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products,
                interact with customer and conduct transaction without the need for a physical presence. E-commerec websites have
                gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            </p>
            <p>E-commerce websites typically display product or services along with detailed description, images,prices and any
                avaliable variation (e.g-size,colors). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>

    </div>
  )
}

export default DescriptionBox
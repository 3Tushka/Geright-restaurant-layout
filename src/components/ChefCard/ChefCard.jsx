import React from 'react'
import './chefcard.scss'

function ChefCard({ chefs: { chefImage, chefName, chefPosition } }) {
    return (
        <div className="chef-card flex__center">
            <div className="chef-card__image image__cover">
                <img src={chefImage} alt="chef-image" />
            </div>
            <div className="chef-card__name">
                <h1 className="headtext__cormorant">
                    {chefName}
                </h1>
            </div>
            <div className="chef-card__position">
                <p className="p__opensans">
                    {chefPosition}
                </p>
            </div>
        </div>
    )
}

export default ChefCard
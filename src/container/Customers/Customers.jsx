import React from 'react'
import { SubHeading } from '../../components'
import './customers.scss'
import { images, data } from '../../constants';

const Names = ({ }) => (
    <div className="customer">
        <div className="customer-img">
            <img src="" alt="" />
        </div>
        <div className="customer-content">
            <div className="customer-content__desc">

            </div>
            <div className="customer-content__name">

            </div>
            <div className="customer-content__position">

            </div>
        </div>
    </div>
);

function Customers() {
    return (
        <div className="customers">
            <div className="customers-title flex__center">
                <div className="customers-title__sub-title">
                    <SubHeading title={"Testimony"} />
                </div>
                <div className="customers-title__main-title">
                    <h1>Happy customers</h1>
                </div>
            </div>

            <div className="customers-grid">
                <div className="customers-grid-item">

                </div>

                <div className="customers-grid-item">
                </div>

                <div className="customers-grid-item">

                </div>

                <div className="customers-grid-item">

                </div>
            </div>
        </div>
    )
}

export default Customers
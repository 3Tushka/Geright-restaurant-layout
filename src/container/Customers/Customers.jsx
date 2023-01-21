import React from 'react'
import { SubHeading } from '../../components'
import './customers.scss'
import { images, data } from '../../constants';

const CustomerCard = ({ customer: { imageCustUrl, description, nameCus, positionCus } }) => (
    <div className="customer flex__center">
        <div className="customer-img">
            <img src={imageCustUrl} alt="customer" />
        </div>
        <div className="customer-content">
            <div className="customer-content__desc">
                <p>{description}</p>
            </div>
            <div className="customer-content-info">
                <div className="customer-content-info__name">
                    <p>{nameCus}</p>
                </div>
                <div className="customer-content-info__position">
                    <p className='p__cormorant'>{positionCus}</p>
                </div>
            </div>
        </div>
    </div>
);

function Customers() {
    return (
        <div className="customers">
            <div className="customers-title flex__center">
                <SubHeading title={"Testimony"} />
                <h1 className='headtext__cormorant'>Happy customers</h1>
            </div>
            <div className="customers-box">
                {data.customers.map((customer) => <CustomerCard customer={customer} key={customer.nameCus} />)}
            </div>
        </div>
    )
}

export default Customers
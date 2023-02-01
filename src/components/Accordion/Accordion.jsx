import React from 'react';
import { useState } from 'react';
import { data } from '../../constants';

import './accordion.scss'

function Accordion() {
    const [accordion, setAccordion] = useState(0);

    function toggleAccordion(index) {
        if (index === accordion) {
            setAccordion(0);
            return
        }
        setAccordion(index);
    }

    return (
        <div className="accordion">
            {data.frequentQuestions.map((item, index) =>
                <div className="accordion-item" key={index} onClick={() => toggleAccordion(index)}>
                    <div className="accordion-item__heading">
                        <h3 className={accordion === index ? "active" : ""}>{item.qestion}</h3>
                    </div>
                    <div className="accordion-item__answer">
                        <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                    </div>
                </div>)}
        </div>
    )
}

export default Accordion
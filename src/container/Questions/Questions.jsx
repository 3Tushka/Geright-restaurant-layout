import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import './questions.scss';

export const Questions = () => {
    return (
        <div className="questions flex__center">
            <div className="questions-image">
                <img src="/src/assets/findus.webp" alt="questions" />
            </div>
            <Accordion />
        </div>
    )
}

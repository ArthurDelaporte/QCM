import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `accordion-panel-${index}`;
                const headerId = `accordion-header-${index}`;

                return (
                    <div key={index} className="accordion-item">
                        <button
                            id={headerId}
                            className={`accordion-header ${isOpen ? 'open' : ''}`}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleSection(index)}
                        >
                            {item.header}
                            <span className="accordion-indicator">{isOpen ? '-' : '+'}</span>
                        </button>
                        <div
                            id={panelId}
                            className={`accordion-panel ${isOpen ? 'open' : ''}`}
                            role="region"
                            aria-labelledby={headerId}
                            hidden={!isOpen}
                        >
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;

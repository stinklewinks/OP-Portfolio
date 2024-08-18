import React from 'react'

interface CardProps {
    heading: string;
    content: string;
}

function Card({ heading, content }: CardProps) {
    return (
        <div
                    id="front-end-card"
                    className="rounded:md h:98% p:rel:2 w:10 bg:creamsicle-700 flex col ds:md wiggle"
                >
                    <h3
                        id="front-end-heading"
                        className="text:color::white-100 ml:rel:2"
                    >
                        {heading}
                    </h3>
                    <p>
                        {content}
            </p>
                </div>
    )
}

export default Card
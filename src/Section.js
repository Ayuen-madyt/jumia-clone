import React from 'react'
import './Section.css'
import Innermain2 from './Innermain2'

function Section({ title }) {
    return (
        <div className="section">
            <h2 className="head2">{title}</h2>
            <div className="title">
                <Innermain2
                    cutoff="-34%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/472982/1.jpg?2005"
                    text="Nutrameal polished..."
                    price="KSh 118"
                    originalprice="KSh 180"
                 />
                 <Innermain2
                    cutoff="-30%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/567803/1.jpg?2354"
                    text="futa Vegetable Oil 3ltr..."
                    price="KSh 354"
                    originalprice="KSh 505"
                 />
                  <Innermain2
                    cutoff="-29%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/631133/1.jpg?3391"
                    text="Samsung 64 GB Memory..."
                    price="KSh 850"
                    originalprice="KSh 1,400"
                 />
                  <Innermain2
                    cutoff="-24%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/677423/1.jpg?9991"
                    text="Royal 32 inch HD Smart Tv..."
                    price="KSh 12,995"
                    originalprice="KSh 16,995"
                 />
                  <Innermain2
                    cutoff="-21%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/456182/1.jpg?2905"
                    text="DR. RASHEL Vitamin C..."
                    price="KSh 309"
                    originalprice="KSh 390"
                 />
                  <Innermain2
                    cutoff="-44%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/568472/1.jpg?3825"
                    text="Generic 14-42 inch holder..."
                    price="KSh 293"
                    originalprice="KSh 520"
                 />
            </div>
        </div>
    )
}

export default Section

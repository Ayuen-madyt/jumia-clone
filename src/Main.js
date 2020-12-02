import React from 'react'
import './Main.css'
import Innermain from './Innermain'

function Main({ title }) {
    return (
        <div className="main">
            <h2 className="head">{title}</h2>
            <div className="title">
                <Innermain
                    cutoff="-7%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/297531/1.jpg?8140"
                    text="Generic Wireless Key..."
                    price="KSh 1,1195"
                    originalprice="KSh 2,400"
                 />
                 <Innermain
                    cutoff="-10%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/784382/1.jpg?8886"
                    text="Raoop computer keyboard..."
                    price="KSh 615"
                    originalprice="KSh 1,195"
                 />
                  <Innermain
                    cutoff="-29%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/193851/1.jpg?5456"
                    text="flexible kkeyboard..."
                    price="KSh 1200"
                    originalprice="KSh 2,000"
                 />
                  <Innermain
                    cutoff="-44%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/148252/1.jpg?6025"
                    text="Generic Wireless mini keyboard..."
                    price="KSh 859"
                    originalprice="KSh 2,195"
                 />
                  <Innermain
                    cutoff="-15%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/180623/1.jpg?2248"
                    text="LEISHE USB Mouse..."
                    price="KSh 400"
                    originalprice="KSh 800"
                 />
                  <Innermain
                    cutoff="-46%"
                    image="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/946701/1.jpg?1046"
                    text="Smart Tv Wireless Keyboard.."
                    price="KSh 1,339"
                    originalprice="KSh 2,500"
                 />
            </div>
        </div>
    )
}

export default Main

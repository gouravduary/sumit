import React from 'react'
import '../css/navbar.css'
import Image from 'next/image'
import logo from '../img/frame-logo.png'
import $ from 'jquery'
import { useEffect } from 'react'

export default function navbar() {
    useEffect(() => {
        $(document).ready(function(){
            $(".hamburger").click(function(){
              $("nav .list").slideToggle("slow")
            })
          })
      })
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="hamburger"><i className="fa-solid fa-burger"></i></div>
                    <div className="logo">
                        <Image 
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={30}
                        />
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <a href="/"><li>ABOUT</li></a>
                        <a href="/"><li>DESIGN</li></a>
                        <a href="/"><li>PHOTOGRAPHY</li></a>
                        <a href="/"><li>CONTACT</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

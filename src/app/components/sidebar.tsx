import React from 'react'
import Image from 'next/image'
//import {Envelope, Linkedin, Twitter} from "./icons/"

const Sidebar = ({data}) => {
    const {name, status, education, contactLinks} = data;

//export default function Sidebar() {
  return <div className='bg-black flex flex-col h-screen'>
    <div>
    <Image />
    <h1> {name}</h1>
    <h2> {status}</h2>
    <p> {education[0]}</p>
    <p> {education[1]}</p>
    <div>
    <h3> Contact Me </h3>

    <a href = {contactLinks?.[0]} aria-label = {"email link"} >

        </a>
    <a href = {contactLinks?.[1]} aria-label = {"twitter link"} >

        </a>
    <a href = {contactLinks?.[2]} aria-label = {"linkedin link"} >
    
        </a>

    </div>
    </div>


    </div>
};

export default Sidebar;


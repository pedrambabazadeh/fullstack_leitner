"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [message, setMessage] = useState('loading')
 useEffect(()=>
{
  fetch("http://127.0.0.1:8080/api/home")
  .then((response)=> response.json())
  .then((data)=> setMessage(data.message))
}, [])

  return (
    <div>
      <h1>
      Hello World! Pedram is coming as a fullstack ML engineer
      {message}
    </h1>
    </div>
  );
}

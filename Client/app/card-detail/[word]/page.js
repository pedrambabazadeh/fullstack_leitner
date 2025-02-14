"use client";

import React from 'react'
import { useParams } from 'next/navigation'

export default function CardDetails() {
    const word = useParams();
  return (
    <div>{word.word}</div>
  )
}

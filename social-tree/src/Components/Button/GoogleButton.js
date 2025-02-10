import React from 'react'
import { FaGoogle } from "react-icons/fa";


export default function GoogleButton() {
  return (
    <button
   
    className="shadow text-center w-full py-4 flex gap-3 items-center justify-center bg-purple-700 text-white">
    <FaGoogle className="h-6" />
    <span>Sign In with Google</span>
  </button>
  )
}

import React from 'react'


export default function HeroForm () {
  return (
    <form
   
    className="inline-flex items-center shadow-lg bg-white shadow-gray-500/20">
        <span className="bg-white py-4 pl-4">
          socialtree.to/
        </span>
    <input
      type="text"
      className=""
      style={{backgroundColor:'white',marginBottom:0,paddingLeft:0}}
      placeholder="username"/>
    <button
      type="submit"
      className="bg-blue-500 text-white py-4 px-6 whitespace-nowrap">
      Join for Free
    </button>
  </form>
  )
}

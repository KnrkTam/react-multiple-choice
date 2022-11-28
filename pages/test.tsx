import React from 'react'

export default function test() {
  return (
    <div className='relative'>
      <section className="h-[500px] bg-blue-500 relative">
        <p className='sticky top-0'>Navbar</p>
      </section>
      <section className="h-[500px] bg-red-500 sticky top-0"></section>{" "}
      <section className="h-[500px] bg-yellow-500"></section>{" "}
      <section className="h-[500px] bg-green-500"></section>{" "}
      <section className="h-[500px] bg-blue-500"></section>{" "}
      <section className="h-[500px] bg-blue-500"></section>
    </div>
  );
}

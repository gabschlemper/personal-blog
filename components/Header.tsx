import React, { useContext } from 'react'

import Link from 'next/link'

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'web-dev' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 flex w-full items-center justify-between border-b border-blue-400 py-8 px-10 font-semibold text-white  ">
      <div className="block md:float-left">
        <Link href="/">
          <span className="cursor:pointer text-4xl">Gabriela Schlemper</span>
        </Link>
      </div>

      <div className="hidden items-center md:flex">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="ml-4 cursor-pointer">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header

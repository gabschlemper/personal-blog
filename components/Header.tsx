import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Twitter from '../public/assets/twitter.svg'
import Github from '../public/assets/github.svg'
import Linkedin from '../public/assets/linkedin.svg'

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'web-dev' },
]

function Header() {
  return (
    <div className="container mx-auto mb-8 flex w-full items-center justify-between border-b border-gray-200 py-8 px-6 font-semibold text-black md:px-10">
      <div className="block md:float-left">
        <Link href="/">
          <span className="cursor:pointer text-2xl md:text-4xl">
            Gabriela Schlemper
          </span>
        </Link>
      </div>

      <div className="flex cursor-pointer items-center gap-2">
        {/* {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="ml-4 cursor-pointer">{category.name}</span>
          </Link>
        ))} */}
        <Link href="https://twitter.com/gabschlemper">
          <a target="_blank">
            <Image src={Twitter} width={30} height={30} />
          </a>
        </Link>
        <Link href="https://github.com/gabschlemper">
          <a target="_blank">
            <Image src={Github} width={30} height={30} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/gabrielaschlemper/">
          <a target="_blank">
            <Image src={Linkedin} width={30} height={30} />
          </a>
        </Link>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Header

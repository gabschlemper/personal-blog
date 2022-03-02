import moment from 'moment'
import Link from 'next/link'
import CalendarIcon from './Icons/CalendarIcon'

function PostCard({ post }: any) {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 shadow-lg">
      <div className="relative overflow-hidden pb-60 shadow-md lg:pb-80">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="ronded-t-lg absolute h-60 w-full rounded-t-lg object-cover object-top shadow-lg lg:h-80 lg:rounded-lg"
        />
      </div>
      <div className="py-8 px-4 md:p-8">
        <h1 className="mb-4 cursor-pointer text-center text-2xl font-semibold transition duration-500 hover:text-pink-600 md:mb-8 md:text-3xl">
          <Link href={`/post${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
          <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full align-middle"
              src={post.author.photo.url}
            />
            <p className="ml-2 inline align-middle text-lg text-gray-700">
              {post.author.name}
            </p>
          </div>
          <div className="flex items-center justify-center font-medium text-gray-700">
            <CalendarIcon />
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>

        <p className="lg:px20 mb-8 px-4 text-center text-lg font-light text-gray-600">
          {post.excerpt}
        </p>

        <div className="text-center text-gray-500">
          <Link href={`/post/${post.slug}`}>
            <span className="inline-block transform cursor-pointer rounded-full bg-green-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
              Reading More
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard

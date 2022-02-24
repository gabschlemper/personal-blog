interface PostCardProps {
  post: PostProps
}

interface PostProps {
  title: string
  excerpt: string
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard

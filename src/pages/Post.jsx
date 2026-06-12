import { useParams, Link, Navigate } from 'react-router-dom'
import { getPost } from '../data/writing'

export default function Post() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <Navigate to="/writing" replace />

  return (
    <article className="page section">
      <Link to="/writing" className="back">Writing</Link>
      <h1 className="longform-title">{post.title}</h1>
      <p className="longform-meta">{post.date} · {post.readingTime}</p>

      <div className="longform-body">
        {post.body.map((block, i) => {
          if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
          if (block.type === 'quote') return <p key={i} className="pull">{block.text}</p>
          return <p key={i}>{block.text}</p>
        })}
      </div>
    </article>
  )
}

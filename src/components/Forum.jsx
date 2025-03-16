import { useState } from 'react'

function Forum() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newPost.trim()) return
    
    setPosts([
      {
        id: Date.now(),
        content: newPost,
        author: 'User',
        timestamp: new Date().toLocaleString(),
        likes: 0
      },
      ...posts
    ])
    setNewPost('')
  }

  return (
    <div className="forum">
      <h2>Fan Forum</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button type="submit">Post</button>
      </form>
      
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <p className="post-content">{post.content}</p>
            <div className="post-meta">
              <span>{post.author}</span>
              <span>{post.timestamp}</span>
              <button onClick={() => handleLike(post.id)}>
                ❤️ {post.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forum
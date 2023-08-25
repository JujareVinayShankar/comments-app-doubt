// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, toggleIsLiked, deleteComment} = props
  const {name, comment, id, date, isLiked, initialClassname} = eachComment
  const initial = name ? name[0].toUpperCase() : ' '
  const isLikedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const text = isLiked ? 'color-text' : ''
  const toggleLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const postedTime = formatDistanceToNow(date)
  return (
    <li className="list-item">
      <div className="top-container">
        <div className={`initial-container ${initialClassname}`}>
          <h1 className="initial-heading">{initial}</h1>
        </div>
        <div className="comment-container">
          <div className="top-comment">
            <h1 className="name">{name}</h1>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-container">
        <div className="like-left">
          <img src={isLikedImg} alt="like" className="like-img" />
          <button className={`like ${text}`} onClick={toggleLike}>
            Like
          </button>
        </div>
        <div>
          <button
            className="delete-button"
            type="button"
            onClick={onDeleteComment}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem

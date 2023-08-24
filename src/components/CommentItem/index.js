// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, toggleIsLiked, deleteComment} = props
  const {name, comment, id, date, isLiked} = eachComment
  const initial = name ? name[0].toUpperCase() : ' '
  const isLikedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const toggleLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const postedTime = formatDistanceToNow(date)
  return (
    <li className="list-item">
      <div className="initial-container">
        <h1 className="initial-heading">{initial}</h1>
      </div>
      <div className="comment-container">
        <div className="top-comment">
          <h1 className="name">Hi</h1>
          <p className="time">{postedTime}</p>
        </div>
        <p className="comment">{comment}</p>
      </div>
      <div className="like-container">
        <div>
          <img src={isLikedImg} alt="like" onClick={toggleLike} />
          <p className="like">Like</p>
        </div>
        <div>
          <button
            className="delete-button"
            type="button"
            onClick={onDeleteComment}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem

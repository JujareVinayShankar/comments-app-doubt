// Write your code here

import {Component} from 'react'

import './index.css'

import {v4 as uudiv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  submitButton = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uudiv4,
      name: nameInput,
      date: new Date(),
      comment: commentInput,
      isLiked: false,
      initialClassname: initialBackgroundClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !prevState.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = commentId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        comment => comment.id !== commentId,
      ),
    }))
  }

  getComment = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        eachComment={eachComment}
        key={eachComment.id}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  setName = event => {
    this.setState({nameInput: event.target.value})
  }

  setComment = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="content-container">
          <div className="img-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <form className="form" onSubmit={this.submitButton}>
            <div className="form-container">
              <p className="form-heading">
                Say something about 4.0 technologies
              </p>
              <input
                className="input"
                placeholder="Your Name"
                onChange={this.setName}
                value={nameInput}
              />
              <textarea
                className="text-area"
                placeholder="Your Comment"
                onChange={this.setComment}
                value={commentInput}
                rows="6"
              >
                Hi
              </textarea>
              <button className="button" type="submit">
                Add Comment
              </button>
            </div>
          </form>
          <hr />
        </div>
        <h1 className="comments-count">
          <span className="comment-count">{commentsList.length}</span>Comments
        </h1>
        <ul className="unordered-list">{this.getComment()}</ul>
      </div>
    )
  }
}

export default Comments

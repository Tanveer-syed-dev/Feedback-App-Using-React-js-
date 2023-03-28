// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {ifFeedBackIsSelected: true}

  ifFeedBackIsSelected = () => {
    this.setState(prevState => ({
      ifFeedBackIsSelected: !prevState.ifFeedBackIsSelected,
    }))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    // const {id, name, imageUrl} = emojis
    return (
      <div className="feedback-bg-container">
        <div className="feedback-app-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-list-container">
            {emojis.map(eachEmoji => (
              <li
                className="list-items-container"
                key={eachEmoji.id}
                onClick={this.ifFeedBackIsSelected}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emojis-images"
                />
                <p className="emojis-title">{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-bg-container">
        <div className="thankyou-container">
          <img src={loveEmojiUrl} className="heart-emoji" alt="love emoji" />
          <h1 className="thankyou-heading">Thank You!</h1>
          <p className="thankyou-message">
            We’ll use your feedback to improve our customer support performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {ifFeedBackIsSelected} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {ifFeedBackIsSelected
            ? this.renderEmojiContainer()
            : this.renderSuccessfulContainer()}
        </div>
      </div>
    )
  }
}
export default Feedback

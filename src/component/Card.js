import React from 'react'


class Card extends React.Component {

  state = {
      image: "https://m.media-amazon.com/images/I/61dUgUhAfpL._AC_AA220_.jpg",
      text: "",
      likes: 0
  }


  handleLike = (e) => {
    console.log('like')
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }))
  }
  render () {
    return(
      <div>
        <h1>{this.props.name}</h1><br/>
        <div><img src={this.state.image} alt=""/></div>
        <p>{this.state.text}</p>
        <p>{this.state.likes}</p>
        <button className="like" onClick={this.handleLike}>Like</button>
      </div>
    )
  }
}

export default Card;

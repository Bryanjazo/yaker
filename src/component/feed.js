import React, { Component } from "react";


class Feed extends Component {
//    constructor() {
//         super()
//    } 

    users = [ {name: "Mike"}, {name: "Bryan"}, {name: "Rene"}, {name: "Elias"}, {name: "Laura"}]
    state = {
        users: this.users,
        image: "image",
        text: "", 
        likes: 0
    }
    render(){
        return(
            <div>
                <h1>Testing!</h1>
                <ul>
                    {this.state.users.map(u => <React.Fragment><li>{u.name}</li><br/><li>{this.state.image}</li><li>{this.state.text}</li><li>{this.state.likes}</li></React.Fragment>)}
                </ul>
            </div>
        )
    }
}

export default Feed 
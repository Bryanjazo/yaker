import React, { Component } from "react";
import Card from './Card.js'

class Feed extends Component {
//    constructor() {
//         super()
//    }

    users = [ {name: "Mike"}, {name: "Bryan"}, {name: "Rene"}, {name: "Elias"}, {name: "Laura"}]


    render(){

      const users = this.users.map((u) => <Card {...u}/>)
        return(
            <div>
                  {users}
            </div>
        )
    }
}

export default Feed

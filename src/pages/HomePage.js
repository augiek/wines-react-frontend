import React, {Component} from 'react'
import WineList from '../components/WineList/WineList.js'
import WineAPI from '../api/WineAPI.js'

class HomePage extends Component {
  state = {
    wines: []
  }

  componentDidMount() {
    WineAPI.fetchWines()
      .then((apiResponseJSON) => {
        this.setState({
          wines: apiResponseJSON.wines
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Wines Home</h1>
        <p>Hi there! Here's a list of all our wines...</p>
        <WineList wines={this.state.wines} /> 
      </div>
    )
  }
}

export default HomePage
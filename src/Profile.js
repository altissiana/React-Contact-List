import React, { Component } from 'react'
import data from './users.json'
import './App.css';

class Profile extends Component {
    state = {
        thumb: '',
        first: '',
        last: '',
        email: '',
        cell: '',
        city: '',
        state: '',
        id: ''
    }

    componentDidMount() {
        const person = data.users.find(person => {
            return person.id == this.props.match.params.id
        })

        this.setState({
            thumb: person.picture.thumbnail,
            first: person.name.first,
            last: person.name.last,
            email: person.email,
            cell: person.cell,
            city: person.location.city,
            state: person.location.state
        })
    }

    render() {
        return (
            <div>
                <div id="thumbs"><img src={this.state.thumb} /></div>
                <p class="info"><i class="fa fa-user fa-1x"></i>&nbsp;&nbsp;{this.state.first}&nbsp;{this.state.last}</p>
                <p class="info"><i class="fa fa-envelope fa-1x"></i>&nbsp;&nbsp;{this.state.email}</p>
                <p class="info"><i class="fa fa-mobile fa-2x"></i>&nbsp;&nbsp;{this.state.cell}</p>
                <p class="info"><i class="fa fa-globe fa-1x"></i>&nbsp;&nbsp;{this.state.city}&#44;&nbsp;{this.state.state}</p>
            </div >
        )
    }


}

export default Profile




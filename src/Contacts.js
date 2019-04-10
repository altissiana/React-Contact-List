import React, { Component } from 'react'
import data from './users.json'
import { Link } from 'react-router-dom'


class Profile extends Component {


    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li id="top">My Peeps</li>
                        {
                            data.users.map(person => (
                                <li><i className="fa fa-user-circle">&nbsp;</i><Link to={"/profile/" + person.id}>{person.name.first} {person.name.last}</Link></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        )
    }


}

export default Profile




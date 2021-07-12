import React from 'react'
import Thumbnail from '../../header/thumbnail'

export default function SearchDropdown(props) {
    if(!props.open) return null
    const res = props.res.map(u => {
        return (
             <li className="search-result">
                <Thumbnail type="thumbnail search" bg={{backgroundColor: u.fav_color}}content={u.first_name.slice(0, 1)}/>
                <span className="name">{u.first_name + " " + u.last_name}</span> {u.email}
            </li>
        )
    })
    return (
        <div className="dropdown">
            <ul className="search-results">
                {res}
            </ul>
        </div>
    )
}

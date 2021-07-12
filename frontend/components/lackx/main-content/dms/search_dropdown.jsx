import React from 'react'
import Thumbnail from '../../header/thumbnail'
import { Link } from 'react-router-dom'

export default function SearchDropdown(props) {
    if(!props.open) return null
    const res = props.res.map(u => {
        return (
            <Link key={u.id} to={`/app/${props.currentWorkspace.id}/dms/${u.id + 100}`} className="react-link">
                <li className="search-result" >
                    <Thumbnail type="thumbnail search" bg={{backgroundColor: u.fav_color}}content={u.first_name.slice(0, 1)}/>
                    <span className="name">{u.first_name + " " + u.last_name} </span><span className="you">{u.id === props.currentUser ? "(you)" : null}</span> {u.email}
                </li>
            </Link>
        )
    })
    return (
        <div className="dropdown">
            <ul className="search-results">
                {res.length > 0
                ? res 
                :
                <>
                <div key="no-results">
                    <p className="search-params">No matches for <span className="bold darken">{props.search}</span> at <span className="bold darken">{props.currentWorkspace.name}</span></p>
                    <li className="search-result no-users">
                        <div className="add-users">
                            <svg id="dm-msg-icon" className="sidebar-menu-icon" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15672 1.08334C4.67913 1.08334 1.04169 4.36435 1.04169 8.42105C1.07475 9.5912 1.37651 10.7332 1.91894 11.7411C2.46137 12.749 3.22691 13.5901 4.1445 14.1864L2.95111 16.807L5.72931 15.0669C6.82345 15.5265 7.98527 15.761 9.15672 15.7588C13.6343 15.7588 17.2718 12.4778 17.2718 8.42105C17.2718 4.36435 13.6343 1.08334 9.15672 1.08334Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.5175 5.4231C20.2122 6.10445 23 9.07099 23 12.6141C22.9669 13.7842 22.6652 14.9262 22.1227 15.9341C21.5803 16.942 20.8148 17.7831 19.8972 18.3794L21.0906 21L18.3124 19.2599C17.2182 19.7195 16.0564 19.954 14.885 19.9518C13.4073 20.0128 11.9415 19.641 10.6379 18.8747C9.33432 18.1084 8.23987 16.9751 7.46686 15.5911" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <p className="bold">They're in a different workspace</p>
                            <p>Start a direct message by adding them to this workspace</p>
                        </div>
                    </li>
                    </div>
                </>
                }
            </ul>
        </div>
    )
}

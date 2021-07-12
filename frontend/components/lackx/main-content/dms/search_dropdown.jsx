import React from 'react'
import Thumbnail from '../../header/thumbnail'

export default function SearchDropdown(props) {
    return (
        <div className="dropdown">
            <ul className="search-results">
                <li className="search-result">
                    <Thumbnail type="thumbnail search" content="K"/>
                    <span className="name">Raph Talatala</span> talatalatala@tala.tal
                </li>
                <li className="search-result">
                    <Thumbnail type="thumbnail search" content="K"/>
                    <span className="name">Raph Talatala</span> talatalatala@tala.tal
                </li>
                <li className="search-result">
                    <Thumbnail type="thumbnail search" content="K"/>
                    <span className="name">Raph Talatala</span>talatalatala@tala.tal
                </li>
            </ul>
        </div>
    )
}

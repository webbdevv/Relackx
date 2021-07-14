import React from 'react'
import Thumbnail from '../lackx/header/thumbnail'
export default function CompositionHeader(props){
    return (
        <div className="app-header">
            <div className="title">
                {props.name}
            </div>
            <Thumbnail bg={props.bg} content={props.currentUser.first_name.slice(0, 1)} type="thumbnail-header"/>
        </div>
    )
}

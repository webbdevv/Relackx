import React from 'react'
import Thumbnail from './thumbnail'
export default function AppHeader(props){
    let bg = {
        backgroundColor: props.currentUser.fav_color
    }
    return (
        <div className="app-header">
            <div className="title">
                App Academy Workspace
            </div>
            <Thumbnail bg={bg} content={props.currentUser.first_name.slice(0, 1)} type="thumbnail-header"/>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchWorkspaces } from '../../actions/workspace_actions';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
import Thumbnail from '../lackx/header/thumbnail';

export function WorkspaceIndex(props) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        props.fetchWorkspaces(props.userId).then(
            () => {
                setLoading(false)
            }
        )
    }, [])

    let sectionStyle = {
        backgroundImage: `url(${window.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    
    if(loading) return null
    let workspaces = props.workspaces.map(w => {
        let users = w.users.slice(0, 5)
        let thumbs = users.map(u => {
            return <Thumbnail key={u.id} type="thumbnail sm-cascade" bg={{backgroundColor: u.fav_color}} content={u.first_name.slice(0, 1)}/>
        })
        let imgs = <div className="img-cascade">{thumbs}
            <span className="member-count">{w.users.length} members</span>
        </div>
        return (<div className="workspace-item" key={w.id}>
            <img className="workspace-logo" src="https://a.slack-edge.com/80588/img/avatars-teams/ava_0025-88.png" />
            <div className="workspace-details">
                <div className="workspace-name">{w.name}</div>
                {imgs}
            </div>
            <Link to={`/app/${w.id}/${w.general_channel}`} className="react-link launch-btn">Launch Slack</Link>
        </div>
    )})
    return (
    <>
        <div className="scroll-container">
            <Navbar type="work-index"/>
            <div className="container">
                <section className="section-0" style={sectionStyle}>
                    <div className="workspace-index">
                        <div className="welcome-back">
                            <div className="wave">👋</div>
                            Welcome Back
                        </div>
                        <div className="workspaces-box">
                            <div className="box-header">{`Workspaces for ${props.user.email}`}</div>
                            {workspaces}
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

const mSTP = state => ({
    user: state.entities.users[state.session.id],
    userId: state.session.id,
    workspaces: Object.values(state.entities.workspaces)
})

const mDTP = dispatch => ({
    fetchWorkspaces: id => dispatch(fetchWorkspaces(id))
})

export default connect(mSTP, mDTP)(WorkspaceIndex)
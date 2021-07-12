import React from 'react'
import { connect } from 'react-redux'
import { currentUserDMs } from '../../../../reducers/selectors'
import MainHeader from '../main_header'
import { createChannel } from '../../../../actions/channel_actions'
export const AllDms = (props) => {
    return (
        <>
            <MainHeader description=" " type="dm-browser">All Direct Messages</MainHeader>
            <div className="main-content-body dms">
                <div className="users-search">
                    <span className="dm-to">To:</span>
                    <input placeholder="somebody@something.com" className="dm-search" type="text" />
                </div>
                <div className="dms-container">
                    
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.session.id,
    dms: currentUserDMs(state, state.session.id)
})

const mapDispatchToProps = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllDms)

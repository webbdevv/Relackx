import React from 'react'
import { connect } from 'react-redux'
import MainHeader from '../main_header'
export const AllDms = (props) => {
    return (
        <>
            <MainHeader description=" " type="dm-browser">All Direct Messages</MainHeader>
            <div className="main-content-body dms">
                <div className="browser-container">
                    <div className="users-search">Search</div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AllDms)

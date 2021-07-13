import { connect } from 'react-redux'
import { selectSubscribedUsers } from '../../../reducers/selectors'
import SidebarMessages from './sidebar_messages'
import { withRouter } from 'react-router'
const mapStateToProps = (state, ownProps) => ({
    users: state.entities.users,
    subscriptions: Object.values(state.entities.subscriptions),
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarMessages))

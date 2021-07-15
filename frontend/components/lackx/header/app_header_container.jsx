import { connect } from 'react-redux'
import AppHeader from './app_header'


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})
export default connect(mSTP, null)(AppHeader)

import { connect } from 'react-redux'
import ContextMenu from './context_menu'

const mapStateToProps = (state) => ({
    subscriptions: Object.values(state.entities.subscriptions),
    workspaceId: state.session.workspace.id,
    genChannelId: state.session.workspace.general_channel
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(ContextMenu)

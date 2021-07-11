
import { connect } from 'react-redux'
import ContextMenu from './context_menu'

const mapStateToProps = (state) => ({
    subscriptions: Object.values(state.entities.subscriptions)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(ContextMenu)

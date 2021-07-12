import React from 'react'
import { connect } from 'react-redux'

export const DMShow = (props) => {
    return (
        <div>
            Hello world
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMShow)

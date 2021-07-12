import React from 'react'
import { connect } from 'react-redux'
import MainHeader from '../main_header'
import ChatbarContainer from '../chatbar_container'
export class DMShow extends React.Component{
    constructor(props){
        super(props)
        this.scrollToBottom = this.scrollToBottom.bind(this)
        this.state = {
            text: "",
            edit: false
        }
        this.setText = this.setText.bind(this)
    }

    setText(text){
        this.setState({
            text: text
        })
    }

    scrollToBottom(ele = document.querySelector('.message-container')){
        if(!ele) return 
        ele.scrollTop = ele.scrollHeight
    }

    render(){
        return (
            <>
                <MainHeader channel={this.props.channel} type="content-header" description=" ">Kyle Xu</MainHeader>
                <div className="main-content-body">
                    <ul className="message-container">
                        
                    </ul>
                </div>
                <ChatbarContainer edit={this.state.edit} text={this.state.text} setText={this.setText} scrollToBottom={this.scrollToBottom} channel={this.props.channel} />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.dmId]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMShow)

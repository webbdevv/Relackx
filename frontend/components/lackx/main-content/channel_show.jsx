import React, { useEffect } from 'react'
import Message from './message'
import ChatbarContainer from './chatbar_container'
import MainHeader from './main_header'
import { sortMessages, combineUsers } from '../../../util/misc_util'

export default class ChannelShow extends React.Component{
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
    componentDidMount(){
        this.scrollToBottom()
    }
    componentDidUpdate(){
        this.scrollToBottom()
    }

    scrollToBottom(ele = document.querySelector('.message-container')){
        if(!ele) return 
        ele.scrollTop = ele.scrollHeight
    }
    
    render(){
            let messages = sortMessages(this.props.messages)
            const messageComponents = messages.map((msg, idx) => (
                (<Message key={msg.id} user={this.props.users[msg.author_id]} text={this.state.text} currentUser={this.props.currentUser} setText={this.setText} msg={msg} //data, next line has tools
                     prevCreatedAt = {messages[idx + 1] ? messages[idx + 1].created_time : null} prevAuthorId = {messages[idx + 1] ? messages[idx + 1].author_id : null} > 
                {msg.body}</Message>)
            ))

        return (
        <>
            <MainHeader channel={this.props.channel} type="channel" description={this.props.channel ? this.props.channel.description : ""}>{this.props.channel ? this.props.channel.name : ""}</MainHeader>
            <div className="main-content-body">
                <ul className="message-container" id="message-feed">
                    {messageComponents}
                </ul>
            <ChatbarContainer placeholder={`Send a message to #${this.props.channel.name}`} edit={this.state.edit} text={this.state.text} setText={this.setText} scrollToBottom={this.scrollToBottom} channel={this.props.channel} />
            </div>
        </>
        )
    }
}

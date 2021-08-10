import React from 'react'

export default function MessageDivider(props) {
  return (
    <>
      <div className="msg-divider">
        <div className="date">{props.date}</div>
      </div>
    </>
  )
}

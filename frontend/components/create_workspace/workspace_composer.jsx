import React from 'react'

export default function WorkspaceComposer(props) {
    return (
        <div className="workspace-composer">
            <div className="step"></div>
            <div className="create-question">
                <div></div>
                <div className="workspace-description"></div>
            </div>
            <input type="text" />
            <button>Prompt</button>
            <button>Skip</button>
        </div>
    )
}

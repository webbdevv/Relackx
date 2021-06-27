import React from 'react'

export default function SignUpForm() {
    return (
        <div className="form">
            <p className="form-header">Basic Info:</p>
            <div className="field">
                <label htmlFor="fn">First Name
                    <input type="text" id="fn" placeholder="Chase"/>
                </label>
            </div>

            <div className="field">
                <label htmlFor="ln">Last Name
                    <input type="text" id="ln" placeholder="Liu"/>
                </label>
            </div>

            <div className="field">
                <button>Next</button>
            </div>
        </div>
    )
}

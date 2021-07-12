import React, {useState} from 'react'
import { connect } from 'react-redux'
import SearchDropdown from './search_dropdown'

export const DMSearch = (props) => {
    const [search, setSearch] = useState('')
    return (
        <>
            <div className="search-bar">
                <span className="dm-to">To:</span>
                <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="somebody@something.com" className="dm-search" type="text" />
            </div>  
                <SearchDropdown users={props.users}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    users: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMSearch)

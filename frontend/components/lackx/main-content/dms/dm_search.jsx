import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import SearchDropdown from './search_dropdown'
import { Search } from '../../../../util/misc_util'
export const DMSearch = (props) => {
    const [search, setSearch] = useState('')
    const [drop, setOpen] = useState(false)
    const [res, setResults] = useState(null)
    useEffect(() => {
        if(search.length <= 0){
            setOpen(false)
        } else {
            setResults(Search(search, props.users))
            if(!drop) {
                setOpen(true);
            }
        }
    }, [search])

    function cleanupSearch(){ //memory leak issue
        document.removeEventListener('click', cleanupSearch)
        setSearch('')
        setOpen(false)
    }

    return (
        <>
            <div className="search-bar-dm">
                <span className="dm-to">To:</span>
                <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="somebody@something.com" className="dm-search" type="text" />
            </div>  
            <SearchDropdown currentUser={props.currentUser} onClose={() => setOpen(false)} search={search} currentWorkspace={props.currentWorkspace} res={res} users={props.users} currentUser={props.currentUser} open={drop}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    users: Object.values(state.entities.users),
    currentUser: state.session.id,
    currentWorkspace: state.session.workspace
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMSearch)

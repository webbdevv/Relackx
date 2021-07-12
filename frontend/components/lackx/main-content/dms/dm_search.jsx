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
                document.addEventListener('click', cleanupSearch)
            }
        }
    }, [search])

    function cleanupSearch(){
        setSearch('')
        setOpen(false)
        document.removeEventListener('click', cleanupSearch)
    }

    return (
        <>
            <div className="search-bar">
                <span className="dm-to">To:</span>
                <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="somebody@something.com" className="dm-search" type="text" />
            </div>  
            <SearchDropdown res={res} users={props.users} open={drop}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    users: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMSearch)

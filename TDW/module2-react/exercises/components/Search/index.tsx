import { useDispatch, useSelector } from "react-redux"
import { searchUsersAsync, selectSearch } from "../../redux/slice"
import { SearchType } from "../../types"
import Button from "../Button"

const Search = (props: SearchType) => {
    const dispatch = useDispatch()
    const search = useSelector(selectSearch)

    const searchUser = (e: any) => {
        e.preventDefault()
        const input = document.getElementById('search-input') as HTMLInputElement
        const value = input?.value

        if (value != '' && (search[value] == null || search[value][1] == null)) {
            dispatch(searchUsersAsync({ searchTerm: value, page: 1 }))
        }
        props.setSearchTerm(value)
    }

    return (
        <form className={'search'} onSubmit={searchUser}>
            <input placeholder={"Search for a Github username"} id={'search-input'} />
            <Button type={'submit'}>Search</Button>
        </form>
    )
}

export default Search
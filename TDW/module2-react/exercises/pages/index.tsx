'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import { LoadingIcon } from "../components/Icons";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import UsersList from "../components/UsersList";
import { searchUsersAsync, selectSearch, selectStatus } from "../redux/slice";

export default function Home() {
  const search = useSelector(selectSearch)
  const status = useSelector(selectStatus)
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)

  const onChangePage = (newPage: number) => {
    setPage(newPage)
    if (search[searchTerm][newPage] == null) {
      dispatch(searchUsersAsync({ searchTerm, page: newPage }))
    }
  }

  return (
    <div className={'page-content'}>
      <Search setSearchTerm={(newTerm: string) => { setSearchTerm(newTerm); setPage(1) }} />
      {status == 'default' &&
        searchTerm != '' &&
        search[searchTerm] != null &&
        search[searchTerm][page] != null ?
        search[searchTerm][page].length == 0 ? <h1>No results were found for {`"${searchTerm}"`}</h1> :
          <>
            <UsersList users={search[searchTerm][page]} />
            <Pagination page={page} onChange={onChangePage} maxPages={search[searchTerm][0]} />
          </> : status == 'default' && searchTerm == '' ? <h1 style={{textAlign: 'center'}}>Search for a Github username</h1> : status == 'loading' ? <LoadingIcon height={100} /> :
            searchTerm != '' && <h1>Oops! An error occured while searching</h1>}
      <Footer />
    </div>
  )
}

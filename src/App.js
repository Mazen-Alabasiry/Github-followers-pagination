import React from 'react'
import { useFetch } from './useFetch'
import UsersList from './components/UsersList'
import Pagination from './components/Pagination'
function App() {
  let { currentPageData, NumbersOfPages, displayCurrentPage, loading, currentPageIndex } = useFetch();
  return <main >
    <div className='section-title'>
      <h2>{'Pagination'}</h2>
      <div className='underline'></div>
    </div>
    <UsersList users={currentPageData} loading={loading} />
    <Pagination numbers={NumbersOfPages} displayFun={displayCurrentPage} currentPageIndex={currentPageIndex} />
  </main>
}

export default App

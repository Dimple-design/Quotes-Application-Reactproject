import React, { Fragment } from 'react'
import MainNavigation from './pages/MainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'

 function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<AllQuotes />} />
        <Route path='/new' element={<NewQuote />} />
        <Route path='/quotes/:id' element={<ShowQuote />} />


      </Routes>
    </Fragment>
  )
}


export default App
import React, { useContext } from 'react'
import { BrowserRouter, Route, Link, Routes, Redirect, Navigate } from 'react-router-dom';
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostidPage from '../pages/PostidPage';
import Login from '../pages/Login';
import Main from '../pages/Main';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if(isLoading) {
    return <Loader/>
  }

  return (
    isAuth
    ?
    <Routes>
      <Route path='/about' element={<About />}/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/posts/:id" element={<PostidPage />}/>
      <Route path="/error" element={<Error />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    :
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/*' element={<Navigate to="/login" replace={<Login />} />}/>
    </Routes>
  )
}

export default AppRouter
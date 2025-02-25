import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import SignupForm from './pages/SignupForm'
import LoginForm from './pages/LoginForm'
import DashboardPage from './pages/DashboardPage'
import IncomePage from './pages/IncomePage'
import ExpensePage from './pages/ExpensePage'
import TransactionPage from './pages/TransactionPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/income" element={<IncomePage/>}/>
        <Route path="/expense" element={<ExpensePage/>}/>
        <Route path="/transaction" element={<TransactionPage/>}/>
      </Routes>
    </>
  )
}

export default App

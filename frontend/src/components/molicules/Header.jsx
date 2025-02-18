import React from 'react'
import { Button } from '../ui/button'
import LogoutBtn from '../atoms/LogoutBtn'
import { ThemeChangeBtn } from '../atoms/ThemeChageBtn'
import UserProfileButton from '../atoms/UserProfileButton'
import CreateFlashcardBtn from '../atoms/CreateFlashcardBtn'

function Header() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-300 dark:bg-zinc-600 shadow-lg rounded-2xl py-3 px-5 flex gap-4">
    <LogoutBtn/>
    <ThemeChangeBtn/>
    <CreateFlashcardBtn/>
    <UserProfileButton/>
  </div>
  )
}

export default Header

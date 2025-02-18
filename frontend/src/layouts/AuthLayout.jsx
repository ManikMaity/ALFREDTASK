
function AuthLayout({children}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 dark:bg-zinc-950 p-3">
      {children}
    </div>
  )
}

export default AuthLayout

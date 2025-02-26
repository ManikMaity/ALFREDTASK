import Header from "@/components/molicules/Header"
import CardContainer from "@/components/organisms/CardContainer"


function HomePage() {
  return (
    <main className="flex items-center justify-center bg-gray-200 dark:bg-zinc-900 h-screen">
      <CardContainer/>
      <Header/>
    </main>
  )
}

export default HomePage

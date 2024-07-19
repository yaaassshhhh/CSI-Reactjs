import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/Navbar"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Shadcn UI
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        The King's Plan
      </h2>
      </div>
    </ThemeProvider>
  )
}

export default App

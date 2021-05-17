import { Header } from "./Header/Header"

export const Page = ({children}) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
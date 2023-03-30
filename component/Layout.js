
import Link from "next/link"
import Navbar from "./Navbar"
function Layout(props) {
    return (
     <>
        <Navbar/>

        {props.children}

        <footer>
            footer
        </footer>
     </>
    )
  }
   export default Layout
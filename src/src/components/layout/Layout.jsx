import Footer from "../footer/Footer.jsx";
import Nav from "../nav/Nav.jsx";

function Layout({ children, floatingNav }) {
  return (
    <>
      <Nav floating={floatingNav} />
      
      <div className={`flex flex-col min-h-[100vh] ${floatingNav === true ? 'pt-16' : ''}`}>
        <div className="flex-1 relative flex flex-col justify-center items-center">{ children }</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;

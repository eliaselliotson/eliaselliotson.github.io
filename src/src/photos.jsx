import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NeonText from './components/neonText/NeonText.jsx'
import Layout from './components/layout/Layout.jsx'
import Masonry from "react-responsive-masonry"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout floatingNav>
      {/* <Masonry columnsCount={3} gutter="10px">
        <img src={"/photos/baby-philosopher.jpeg"} />
      </Masonry> */}
      <div className="flex flex-col items-center justify-center gap-12 p-15 lg:w-3/4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-[Geom] text-2xl md:text-3xl lg:text-4xl text-center"><NeonText color="#8f2afb">Coming soon</NeonText></h1>
          <p className="font-[Geom] text-center">This page is still undergoing development and will be made public shortly. In the meantime, please admire this inspirational quote:</p>
        </div>
        <div className="font-[Geom] flex flex-col md:flex-row items-center max-w-300 gap-6">
          <img className="w-56 rounded ratio-1" alt="Greyscale photo of baby Eli deep in thought" src={"/photos/baby-philosopher.jpeg"} />
          <div>
            <p>It is commonly said that a picture is worth a thousand words. However, it is apparent to me that the precise value of an image may vary quite a bit as factors such as the format, resolution, color depth, and compression ratio come into play. Furthermore, it is obvious that words have varying values themselves, and thus before we can even concern ourselves with the value of an image we must produce a reasonable measurement to describe the value of the average word. It is this very dilemma that provoked me to invent the kilobyte.</p>
            <br />
            <p className="text-right italic">- Elias Elliotson, 2009</p>
          </div>
        </div>
      </div>
    </Layout>
  </StrictMode>
)

// import React, { lazy, Suspense} from 'react';
// import {Navbar} from './components';
// import './App.css';

// const AboutUs = lazy(() => import('./container/AboutUs/AboutUs'));
// const Chef = lazy(() => import('./container/Chef/Chef'));
// const FindUs = lazy(() => import('./container/Findus/FindUs'));
// const Footer = lazy(() => import('./container/Footer/Footer'));
// const Gallery = lazy(() => import('./container/Gallery/Gallery'));
// const Header = lazy(() => import('./container/Header/Header'));
// const Laurels = lazy(() => import('./container/Laurels/Laurels'));
// const SpecialMenu = lazy(() => import('./container/Menu/SpecialMenu'));

// const App = () => (
//   <div>
//   <Navbar />
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< Header/> </div>
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< AboutUs/> </div>
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< SpecialMenu/> </div>
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< Chef/> </div>
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< Laurels/> </div>
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< Gallery/> </div>
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< FindUs/> </div>
//   <div><Suspense fallback={<div> Loading... </div>}></Suspense>< Footer/> </div>
//        </div>
//         );

//      export default App;

import React, { lazy, Suspense } from 'react';
import { Navbar } from './components';
import './App.css';

const AboutUs = lazy(() => import('./container/AboutUs/AboutUs'));
const Chef = lazy(() => import('./container/Chef/Chef'));
const FindUs = lazy(() => import('./container/Findus/FindUs'));
const Footer = lazy(() => import('./container/Footer/Footer'));
const Gallery = lazy(() => import('./container/Gallery/Gallery'));
const Header = lazy(() => import('./container/Header/Header'));
const Laurels = lazy(() => import('./container/Laurels/Laurels'));
const SpecialMenu = lazy(() => import('./container/Menu/SpecialMenu'));

const App = () => (
  <div>
    <Navbar />
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <Header />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <AboutUs />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <SpecialMenu />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <Chef />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <Laurels />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <Gallery />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <FindUs />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <Footer />
      </Suspense>
    </div>
  </div>
);

export default App;

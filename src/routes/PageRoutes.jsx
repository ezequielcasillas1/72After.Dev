import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import ScrollToTop from "@/components/Special/ScrollToTop/ScrollToTop";
import Loader from "@/components/Common/Loader/Loader";

const Home = lazy(() => import("@/pages/Home.jsx"));
const About = lazy(() => import("@/pages/About.jsx"));
const Gallery = lazy(() => import("@/pages/Gallery.jsx"));
const Contact = lazy(() => import("@/pages/Contact.jsx"));
const NotFound = lazy(() => import("@/pages/Shared/NotFound.jsx"));

function PageRoutes() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default PageRoutes;

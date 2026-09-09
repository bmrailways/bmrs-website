import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import CaboosePage from './pages/CaboosePage'
import ContactPage from './pages/ContactPage'
import FaqsPage from './pages/FaqsPage'
import FundingPage from './pages/FundingPage'
import HomePage from './pages/HomePage'
import JoinPage from './pages/JoinPage'
import LayoutDetailPage from './pages/LayoutDetailPage'
import LayoutsPage from './pages/LayoutsPage'
import LinksPage from './pages/LinksPage'
import MediaPage from './pages/MediaPage'
import NotFoundPage from './pages/NotFoundPage'
import OutreachPage from './pages/OutreachPage'
import SponsorsPage from './pages/SponsorsPage'
import StemPage from './pages/StemPage'
import TwilightPage from './pages/TwilightPage'
import VisitPage from './pages/VisitPage'
import WorkshopPage from './pages/WorkshopPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/twilight" element={<TwilightPage />} />
        <Route path="/layouts" element={<LayoutsPage />} />
        <Route path="/layouts/:slug" element={<LayoutDetailPage />} />
        <Route path="/outreach" element={<OutreachPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/caboose" element={<CaboosePage />} />
        <Route path="/caboose/faqs" element={<FaqsPage />} />
        <Route path="/caboose/links" element={<LinksPage />} />
        <Route path="/caboose/funding" element={<FundingPage />} />
        <Route path="/caboose/stem" element={<StemPage />} />
        <Route path="/caboose/workshop" element={<WorkshopPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

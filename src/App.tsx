import { Route, Routes } from 'react-router'
import { SiteLayout } from './components/SiteLayout'
import { AmenitiesPage } from './pages/AmenitiesPage'
import { HomePage } from './pages/HomePage'
import { LocationPage } from './pages/LocationPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RoomsPage } from './pages/RoomsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/rooms-suites" element={<RoomsPage />} />
        <Route path="/amenities-guest-information" element={<AmenitiesPage />} />
        <Route path="/location-contact" element={<LocationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

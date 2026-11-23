import { Route, Routes } from 'react-router'
import { SiteLayout } from './layouts/SiteLayout'
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
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/contact" element={<LocationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom'
import { Header } from '../components/header/header'
import { Home } from '../pages/home/home'
import { MovieDetail } from '../pages/movie-detail/movie-detail'
import { NotFound } from '../pages/not-found/not-found'

export const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

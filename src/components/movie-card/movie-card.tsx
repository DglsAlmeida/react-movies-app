import {
  MovieCardContent,
  MovieCardDate,
  MovieCardDescription,
  MovieCardImageContainer,
  MovieCardTitle,
  MovieCardWrapper
} from './movie-card-styles'

type MovieCardProps = {
  id: string
  img: string
  title: string
  date: string
}

export const MovieCard = ({ id, img, title, date }: MovieCardProps) => {
  return (
    <MovieCardWrapper to={`/movie/${id}`}>
      <MovieCardContent>
        <MovieCardImageContainer>
          <img src={img} alt="movie" />
        </MovieCardImageContainer>
        <MovieCardDescription>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardDate>{date}</MovieCardDate>
        </MovieCardDescription>
      </MovieCardContent>
    </MovieCardWrapper>
  )
}

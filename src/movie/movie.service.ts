import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movie.entity';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  private idCounter = 3;

  constructor() {
    const movie1 = new Movie(1, '해리포터', '판타지');
    const movie2 = new Movie(2, '어벤져스', '액션');

    this.movies.push(movie1, movie2);
  }

  getManyMovies(title?: string) {
    if (!title) {
      return this.movies;
    }

    return this.movies.filter((movie) => movie.title.startsWith(title));
  }

  getMovieById(id: number) {
    const movie = this.movies.find((movie) => movie.id === +id);

    if (!movie) {
      throw new NotFoundException('존재하지 않는 ID의 영화입니다!');
    }

    return movie;
  }

  createMovie(createMovieDto: CreateMovieDto) {
    const movie: Movie = {
      id: this.idCounter++,
      ...createMovieDto,
    };

    this.movies.push(movie);

    return movie;
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = this.movies.find((movie) => movie.id === +id);

    if (!movie) {
      throw new NotFoundException('존재하지 않는 ID의 영화입니다!');
    }

    Object.assign(movie, updateMovieDto);

    return movie;
  }

  deleteMovie(id: number) {
    const movieIndex = this.movies.findIndex((movie) => movie.id === +id);

    if (movieIndex === -1) {
      throw new NotFoundException('존재하지 않는 ID의 영화입니다!');
    }

    this.movies.splice(movieIndex, 1);

    return id;
  }
}

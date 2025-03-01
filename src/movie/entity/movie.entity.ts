import { Exclude, Expose } from 'class-transformer';

@Exclude() // class-transformer는 TS의 interface에는 적용이 안 되기때문에 JS 클래스를 만들어줘야 한다.
export class Movie {
  @Expose()
  id: number;
  @Expose()
  title: string;
  @Expose()
  genre: string;

  constructor(id: number, title: string, genre: string) {
    this.id = id;
    this.title = title;
    this.genre = genre;
  }
}

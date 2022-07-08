select "films"."title",
       "genres"."name" as "genre",
       "films"."releaseYear"
  from "filmGenre"
  join "genres" using ("genreId")
  join "films" using ("filmId")
 where "films"."title" = 'Boogie Amelie';

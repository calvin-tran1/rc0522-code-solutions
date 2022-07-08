  select "genres"."name" as "genre",
         count(*) as "genresAppeared"
    from "genres"
    join "filmGenre" using ("genreId")
    join "films" using ("filmId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
   where "actorId" = 178
group by "name"
order by "genresAppeared" desc;

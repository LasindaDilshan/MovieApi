using MovieApi.Entities;

namespace MovieApi.Interfaces
{
    public interface IGenre
    {
        void AddGenre(Genre genre);
        List<Genre> GetAllGenres();
        Genre GetGenrebyId(int id);
    }
}

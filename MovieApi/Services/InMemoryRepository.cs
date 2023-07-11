using MovieApi.Entities;
using MovieApi.Interfaces;

namespace MovieApi.Services
{
    public class InMemoryRepository: IGenre
    {
        private List<Genre> _genres;
        
        public InMemoryRepository()
        {
            _genres = new List<Genre>()
            {
                new Genre(){Id = 1 , Name="Comedy"},
                new Genre(){Id = 1 , Name="Action"}

            };
        }
        public List<Genre> GetAllGenres()
        {
            return _genres;
        }
        public Genre GetGenrebyId(int id)
        {
            return _genres.FirstOrDefault(x =>  x.Id == id);
        }
        public void AddGenre(Genre genre)
        {
            genre.Id = _genres.Max(x => x.Id)+1;
            _genres.Add(genre);
        }
    }
}

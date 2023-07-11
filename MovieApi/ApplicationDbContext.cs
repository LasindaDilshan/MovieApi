using Microsoft.EntityFrameworkCore;
using MovieApi.Entities;

namespace MovieApi
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) { }

        public DbSet<Genre> Genres { get; set; }
    }
}

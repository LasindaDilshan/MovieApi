using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieApi.Entities;
using MovieApi.Interfaces;

namespace MovieApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {

        private readonly ApplicationDbContext Context;

        private readonly ILogger<GenresController> _logger;
        public GenresController(ILogger<GenresController> logger ,ApplicationDbContext context)
        {
            this.Context = context;
            this._logger = logger;
        }
        [HttpGet]
        public async Task<ActionResult<List<Genre>>> Get()
            
        {
            _logger.LogInformation("Getting All The Genres");

            return await Context.Genres.ToListAsync();
        }
        [HttpGet("{id:int}/{param2=felipe}")]
        public ActionResult<Genre> GetById(int id)
        {

            return this.NoContent();
        }
        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            Context.Add(genre);
            Context.SaveChanges();

            return this.NoContent(); 
        }

    }
}

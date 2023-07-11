using Microsoft.EntityFrameworkCore;
using MovieApi;
using MovieApi.Entities;
using MovieApi.Interfaces;
using MovieApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(
    options => options.AddDefaultPolicy(
        builde =>
        {
            var frontendURL = builder.Configuration.GetValue(typeof(string), "frontendurl");

            builde.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
        }
        )
    );
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IGenre, InMemoryRepository>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();

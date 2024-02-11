using CodePulse.API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace CodePulse.API.Data
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions options) : base(options){ }
        public DbSet<BlogPost> BlogPosts => Set<BlogPost>();
        public DbSet<Category> Categories => Set<Category>();
    }
}

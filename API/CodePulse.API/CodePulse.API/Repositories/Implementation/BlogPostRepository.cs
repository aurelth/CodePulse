using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace CodePulse.API.Repositories.Implementation
{
    public class BlogPostRepository : IBlogPostRepository
    {
        private readonly ApplicationDbContext _context;

        public BlogPostRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public async Task<BlogPost> CreateAsync(BlogPost blogPost)
        {
            await _context.BlogPosts.AddAsync(blogPost);
            await _context.SaveChangesAsync();

            return blogPost;
        }

        public async Task<IEnumerable<BlogPost>> GetAllAsync()
            => await _context.BlogPosts.Include(x => x.Categories).ToListAsync();

        public async Task<BlogPost?> GetByIdsync(Guid id)
            => await _context.BlogPosts.Include(x => x.Categories).FirstOrDefaultAsync(x => x.Id == id);

        public async Task<BlogPost?> UpdateAsync(BlogPost blogPost)
        {
            var existingPost = await _context.BlogPosts
                .Include(x => x.Categories)
                .FirstOrDefaultAsync(x => x.Id == blogPost.Id);

            if (existingPost is not null)
            {
                _context.BlogPosts.Entry(existingPost).CurrentValues.SetValues(blogPost);
                existingPost.Categories = blogPost.Categories;

                await _context.SaveChangesAsync();

                return blogPost;
            }

            return null;
        } 
    }
}

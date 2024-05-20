using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodePulse.API.Repositories.Implementation
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ApplicationDbContext _db;
        public CategoryRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<Category> CreateAsync(Category category)
        {
            await _db.Categories.AddAsync(category);
            await _db.SaveChangesAsync();

            return category;
        }        

        public async Task<IEnumerable<Category>> GetAllAsync()
            => await _db.Categories.ToListAsync();

        public async Task<Category?> GetByIdAsync(Guid id)
            => await _db.Categories.FirstAsync(x => x.Id == id);

        public async Task<Category?> UpdateByIdAsync(Category category)
        {
            var existingCategory = await _db.Categories.FirstOrDefaultAsync(x => x.Id == category.Id);

            if (existingCategory != null)
            {
                _db.Categories.Entry(existingCategory).CurrentValues.SetValues(category);
                await _db.SaveChangesAsync();

                return category;
            }

            return null;
        }

        public async Task<Category?> DeleteAsync(Guid id)
        {
            var existingCategory = await _db.Categories.FirstOrDefaultAsync(x => x.Id == id);

            if (existingCategory != null)
            {
                _db.Categories.Remove(existingCategory);
                await _db.SaveChangesAsync();
                return existingCategory;
            }
            
            return null;
        }
    }
}

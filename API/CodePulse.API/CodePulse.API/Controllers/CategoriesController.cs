using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using CodePulse.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace CodePulse.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        public readonly ICategoryRepository _categoryRepository;
        public CategoriesController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        //POST: 
        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryRequestDTO requestDTO)
        {
            //Map DTO to Domain Model
            var category = new Category
            {
                Name = requestDTO.Name,
                UrlHandle = requestDTO.UrlHandle
            };

            await _categoryRepository.CreateAsync(category);

            //Domain Model to DTO
            var response = new CategoryDTO
            {
                Id = category.Id,
                Name = category.Name,
                UrlHandle = category.UrlHandle
            };

            return Ok(response);
        }

        //GET: https://localhost:7206/api/Categories
        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await _categoryRepository.GetAllAsync();

            var response = new List<CategoryDTO>();
            foreach (var category in categories)
            {
                response.Add(new CategoryDTO 
                {
                    Id = category.Id,
                    Name = category.Name, 
                    UrlHandle = category.UrlHandle 
                });
            }

            return Ok(response);
        }
    }
}

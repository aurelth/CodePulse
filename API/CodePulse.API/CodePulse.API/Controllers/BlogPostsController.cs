﻿using Azure;
using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using CodePulse.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IBlogPostRepository _blogPostRepository;

        public BlogPostsController(IBlogPostRepository blogPostRepository)
        {
            _blogPostRepository = blogPostRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBlogPost([FromBody] CreateBlogPostRequestDTO request)
        {
            var blogPost = new BlogPost
            {
                Title = request.Title,
                ShortDescription = request.ShortDescription,
                Content = request.Content,
                FeaturedImageUrl = request.FeaturedImageUrl,
                UrlHandle = request.UrlHandle,
                PublishedDate = request.PublishedDate,
                Author = request.Author,
                IsVisible = request.IsVisible
            };

            blogPost = await _blogPostRepository.CreateAsync(blogPost);

            var response = new BlogPostDTO
            {
                Id = blogPost.Id,
                Title = blogPost.Title,
                ShortDescription = blogPost.ShortDescription,
                Content = blogPost.Content,
                FeaturedImageUrl = blogPost.FeaturedImageUrl,
                UrlHandle = blogPost.UrlHandle,
                PublishedDate = blogPost.PublishedDate,
                Author = blogPost.Author,
                IsVisible = blogPost.IsVisible
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBlogPosts()
        {
            var blogPosts = await _blogPostRepository.GetAllAsync();

            var response = new List<BlogPostDTO>();

            foreach (var blogPost in blogPosts)
            {
                response.Add(new BlogPostDTO
                {
                    Id = blogPost.Id,
                    Title = blogPost.Title,
                    ShortDescription = blogPost.ShortDescription,
                    Content = blogPost.Content,
                    FeaturedImageUrl= blogPost.FeaturedImageUrl,
                    UrlHandle = blogPost.UrlHandle,
                    Author = blogPost.Author,
                    PublishedDate = blogPost.PublishedDate,
                    IsVisible = blogPost.IsVisible
                });
            }

            return Ok(response);
        }
    }
}

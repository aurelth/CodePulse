﻿namespace CodePulse.API.Models.DTO
{
    public class CreateBlogPostRequestDTO
    {
        public string Title { get; set; } = string.Empty;
        public string ShortDescription { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string FeaturedImageUrl { get; set; } = string.Empty;
        public string UrlHandle { get; set; } = string.Empty;
        public DateTime PublishedDate { get; set; }
        public string Author { get; set; } = string.Empty;
        public bool IsVisible { get; set; }
        public Guid[] Categories{ get; set; }
    }
}

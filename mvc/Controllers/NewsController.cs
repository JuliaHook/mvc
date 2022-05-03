using DAL;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;
using System.Text.RegularExpressions;

namespace mvc.Controllers
{
    public class NewsController : Controller
    {
        private readonly ILogger<NewsController> _logger;

        public NewsController(ILogger<NewsController> logger)
        {
            _logger = logger;
        }

        public IActionResult StartPage()
        {

            ViewBag.Articles = Service.Services.ArticleService.Instance.GetPinnedArticles();

            ViewBag.LatestArticles = Service.Services.ArticleService.Instance.GetLatestArticles(5);
            return View();



        }





        [HttpGet("news/{input}")]
        public IActionResult ArticlePage(string input)
        {
            var regex = new Regex(
                "^([0-9A-Fa-f]{8}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{12})");
            Guid guid = Guid.Parse(regex.Match(input).Value);
            ViewBag.articleId = guid;

            ArticleService articleService = new ArticleService();
            var article = articleService.GetById(guid);
            ViewBag.returnUrl = "https://localhost:7208/news/" + input;

            return View(article);
        }



        [HttpPost("news/{CreateComment}")]
        public IActionResult CreateComment(string returnUrl, ArticleDTO articleDTO)
        {
            CreateCommentDTO create = new CreateCommentDTO()
            {
                CommentedBy = articleDTO.NewComment.CommentedBy,
                Value = articleDTO.NewComment.Value,
                ArticleId = (Guid)articleDTO.Id
            };
            ArticleService.Instance.AddComment(create);

            return Redirect(returnUrl);
        }
    }
}
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;

namespace mvc.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class articlesController : ControllerBase
    {
        [HttpDelete("{ArticleId:Guid}")]
        public IActionResult DeleteArticle(Guid articleId)
        {
            try
            {
                Service.Services.ArticleService.Instance.DeleteArticle(articleId);
                return Ok();
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }
        [HttpPut("{ArticleId:Guid}")]
        public IActionResult UpdateArticle(UpdateArticleDTO updatedArticle)
        {
            Service.Services.ArticleService.Instance.UpdateArticle(updatedArticle);
            return Ok();
        }
        [HttpPost()]
        public IActionResult CreateArticle(CreateArticleDTO newArticle)
        {
            Service.Services.ArticleService.Instance.CreateArticle(newArticle);
            return Ok();
        }
        [HttpGet("{ArticleId:Guid?}")]
        public IActionResult GetArticle(Guid? ArticleId = null)
        {
            if (ArticleId is null)
            {
                return Ok(Service.Services.ArticleService.Instance.GetAllArticles());
            }
            else
            {
                try
                {
                    return Ok(Service.Services.ArticleService.Instance.GetById(ArticleId.Value));
                }
                catch (Exception err)
                {
                    return BadRequest(err.Message);
                }
            }
        }



        [HttpGet("articles")]
        public IActionResult ListAllArticles()
        {
            try
            {
                var articlesDTO = ArticleService.Instance.GetAllArticles();
                return Ok(articlesDTO); 
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }    
        

        
    }
}

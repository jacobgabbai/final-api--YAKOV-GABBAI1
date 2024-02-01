using api_final_19.Dto;
using api_final_19.Reposetory;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerExController : ControllerBase
    {
        private readonly FinalProject2Context _context;

        public IAnswerExRepo _AnswerExR;

        public AnswerExController(IAnswerExRepo answerExR, FinalProject2Context context)
        {
            _AnswerExR = answerExR;
            _context = context;
        }


     

        // GET api/<AnswerExController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult< AnswerEx1>> Get(string id)
        {
            return Ok( await Task.Run(()=> _AnswerExR.GetAnswer1(_context , id)));
        }

        // POST api/<AnswerExController>
        [HttpPost]
        public async Task Post(AnswerExDto a)
        {
        
         await Task.Run(()=>   _AnswerExR.PostAnsEx(_context, a));
        }

     
    }
}

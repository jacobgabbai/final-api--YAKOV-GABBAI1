using api_final_19.Dto;
using api_final_19.Reposetory;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuesExController : ControllerBase
    {
        private readonly FinalProject2Context _context;
        public IQuestionExRepo _QuesExRepo;

        public QuesExController(IQuestionExRepo quesExRepo, FinalProject2Context context)
        {
            _QuesExRepo = quesExRepo;
            _context = context;
        }


     

        // GET api/<QuesExController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult< List<QuestionExDto>>> Get(string id)
        {
            return Ok( await Task.Run(()=> _QuesExRepo.GetQuestion3(_context, id)));
        }

        // POST api/<QuesExController>
        [HttpPost]
        public async Task <ActionResult< QuestionEx>> Post(QuestionExDto q)
        {
          
            return Ok( await Task.Run(()=> _QuesExRepo.PostQueEx(_context, q)));

        }

    
    }
}

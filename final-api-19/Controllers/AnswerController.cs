using api_final_19;
using api_final_19
    .Reposetory;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly FinalProject2Context _context;
        public IAnswerRepo _AnswerRepo;
        public AnswerController(IAnswerRepo answerRepo, FinalProject2Context context)
        {
            _AnswerRepo = answerRepo;
            _context = context;
        }
        // GET: api/<AnswerController>
        [HttpGet]
        public async Task<List<Answer>> Get()
        {
            var a= await Task.Run(() => _AnswerRepo.GetAnswer(_context));
        
                return a;
            
        }

        // GET api/<AnswerController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Answer>>> Get(string id)
        {
            var a=await Task.Run(()=> _AnswerRepo.GetAnswer1(_context,id));
            if(a==null)
            {
                
            }
            return a;
        }

        // POST api/<AnswerController>
        [HttpPost]
        public async Task Post( AnswerDto1 value)

        {
           await Task.Run(() => _AnswerRepo.TAnswer(_context, value)); 
        }

        // PUT api/<AnswerController>/5
        [HttpPut]
        public async Task Put(AnswerDto1 v)
        {
            await Task.Run(()=>  _AnswerRepo.AnswerPut(_context, v));
        }

     
    }
}

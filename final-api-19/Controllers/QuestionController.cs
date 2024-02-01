using api_final_19.Reposetory;
using final_api_19.Dto;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly FinalProject2Context _context;
        public IQuaestionRepo _QuestRepo;

        public QuestionController(IQuaestionRepo QuestRepo, FinalProject2Context context)
        {

            _QuestRepo = QuestRepo;
            _context = context;
        }
    

        // GET api/<QuestionController>/5
        [HttpGet]
        public async Task<ActionResult< List<Question>>> Get()
        {
            return Ok( await Task.Run(()=> _QuestRepo.T3(_context)));
        }

        [HttpGet("{TestIdRef}") ]
        public async Task<ActionResult< List<QuestionDtoB>>> Get(string TestIdRef)
        {
            return Ok( await Task.Run(()=> _QuestRepo.T31(_context, TestIdRef)));
        }

        [HttpPost]
        public async Task<ActionResult < QuestionDtoB>> Post(QuestionDto3 value)
        {
            
            if (value.Id == "0")
            {
              
           
                
                return Ok( await Task.Run(() => _QuestRepo.PostQuestion(_context, value)));
            }
            else
            {
               return Ok( await Task.Run(()=>  _QuestRepo.TQ1(_context, value)));
            }
        }
        [HttpPut]
        public async Task<ActionResult< Question>> Put(QuestionDto3 v)
        {

            return Ok( await Task.Run(()=> _QuestRepo.TQ2(_context, v)));
        }


        // DELETE api/<QuestionController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult< int>> Delete(string id)
        {
          return Ok( await Task.Run(()=> _QuestRepo.QuestionDelete(_context, id)));
        }
    }
}

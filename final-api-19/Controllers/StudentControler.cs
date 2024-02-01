using api_final_19.Reposetory;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentControler : ControllerBase
    {
        private readonly FinalProject2Context _context;

        public IStudentRepo _StudentRepo;

        public StudentControler(IStudentRepo S ,FinalProject2Context context ) { 
        
        _StudentRepo= S;
            _context= context;
        
        }
     

        // GET api/<StudentControler>
        [HttpGet]
        public async Task<ActionResult< Student>> Get([FromQuery] Student j)
        {
            return Ok( await Task.Run(()=> _StudentRepo.GetStuName(_context, j)));
        }

        // POST api/<StudentControler>
        [HttpPost]
        public async Task<ActionResult< Student>> Post([FromBody] StudentDtocs e)
        {
            return Ok( await Task.Run(() => _StudentRepo.PostStudent(_context, e)));
        }

     
    }
}

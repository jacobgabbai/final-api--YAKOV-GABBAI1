using api_final_19.Dto;
using api_final_19.Reposetory;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;
//using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherControler : ControllerBase
    {
        private readonly FinalProject2Context _context;
        public ITeacherRepo _TeacherR=null;

        public TeacherControler(ITeacherRepo TeacherR, FinalProject2Context context)
        {
            _TeacherR = TeacherR;
            _context = context;
        }

        // GET: api/<TeacherControler>


        [HttpGet]
        public async Task<ActionResult< Teacher>> Get([FromQuery]  Teacher t)
        {
            return Ok( await Task.Run(()=>  _TeacherR.TG(_context, t)));
        
        }

        [HttpGet("{Name}")]

        public async Task<ActionResult< Teacher>> Get(string Name)
        {
            return  Ok ( await Task.Run(()=> _TeacherR.T1(_context, Name)));
           
        }
    


        [HttpPost]
        public async Task<ActionResult < Teacher>> Post(TeacherDto t)
        {
           
            return Ok ( await Task.Run(()=> _TeacherR.PostT(_context, t)));




        }


    }
}


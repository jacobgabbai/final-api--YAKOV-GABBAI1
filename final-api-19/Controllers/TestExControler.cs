using api_final_19.Dto;
using api_final_19.Reposetory;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestExControler : ControllerBase
    {

        public ITestExRepo _TestExRepo;
        private readonly FinalProject2Context _context;
        public TestExControler(ITestExRepo testExRepo, FinalProject2Context final1000Context)
        {

            _TestExRepo = testExRepo;
            _context = final1000Context;
        }
        

        // GET api/<TestEx>/5
        [HttpGet]
        public async Task<ActionResult< int>> Get(string sname, string tname)
        {
            return Ok( await Task.Run(() => _TestExRepo.GetIdName(_context, sname, tname)));
        }

        [HttpGet("{Name}")]
        public async Task<ActionResult< List<TestEx1>>> Get(string Name, int i)
        {
         

            List<TestEx1> t = new List<TestEx1>();
            if (i == 0)
            {
                return Ok( await Task.Run(() => _TestExRepo.GetTestExes(_context, Name)));
            }
            else if (i == 1)
            {
                return Ok( await Task.Run(() => _TestExRepo.GetByName1(_context, Name)));

            }
            else if (i == 2)
            {
                return Ok( await Task.Run(() => _TestExRepo.TestSearch(_context, Name)));
            }
            else { return BadRequest(); }
        }
        // POST api/<TestEx>
        [HttpPost]
        public async Task<ActionResult< TestEx1>> Post(TestExDto y)
        {
            
           return Ok( await Task.Run(()=> _TestExRepo.PostTestEx(_context, y)));
        }

  
    }
}

using api_final_19.Reposetory;
using final_api_19.MainModels;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_19
    .Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly FinalProject2Context _context;
        public ITestRepo _TestRepo;

        public TestController(ITestRepo T,FinalProject2Context context) { 
        
        _context = context;

        _TestRepo = T;

        }


        [HttpGet]
        public async Task<ActionResult< int>> Get([FromQuery] Test1 t  )
        {
          
            return Ok ( await Task.Run(() => _TestRepo.T24(_context, t)));
        }

        [HttpGet("{Name},{tid},{type}")]
        public async Task< ActionResult< Test>> Get(string tid,string Name,string type)
        {
          
            if (tid != "0")
            {
                if (type == "name") 
                { 
                return Ok ( await Task.Run(() => _TestRepo.T21(_context, tid, Name)));
                }

                else
                {
                    return Ok ( await Task.Run(() => _TestRepo.T211(_context, tid, Name)));
                }
            }
            else {
              
                if (type == "date")
                {

                    return Ok ( await Task.Run(() => _TestRepo.T23(_context, Name)));
                }

                else
                {
                    return Ok ( await Task.Run(() => _TestRepo.T22(_context, Name)));
                }
            }
        }
        [HttpGet("id")]
        public async Task<ActionResult< Test>> Get(string id)
        {
            return Ok(await Task.Run(() => _TestRepo.T33(_context, id)));
        }
        [HttpPost]

        public async Task<ActionResult<Test>> Post1(Test1 value)
        {
          return Ok( await Task.Run(() => _TestRepo.TB1(_context, value)));
        }

        [HttpPut]

        public async Task<ActionResult<Test>> Put(Test2Dto value)
        { 
            return Ok ( await Task.Run(()=> _TestRepo.PutTest1(_context, value)));        
        }

        //DELETE api/<TESTController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult< int>> Delete(string id)
        {
            return Ok( await Task.Run(()=> _TestRepo.TestDelete(_context, id)));
        }
    }
}

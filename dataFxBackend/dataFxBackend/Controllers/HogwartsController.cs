using dataFxBackend.Models;
using dataFxBackend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace dataFxBackend.Controllers
{
    [Route("api/hogwarts")]
    public class HogwartsController : Controller
    {
        public HogwartsController(IHogwartsService hogwartsService)
        {
            _hogwartsService = hogwartsService;
        }

        private IHogwartsService _hogwartsService;

        [HttpPost]
        public IActionResult Post([FromBody] Hogwarts hogwarts) {
            if (_hogwartsService.save(hogwarts))
                return Ok();
            return BadRequest(new { message = "La casa que quieres ingresar no es valida" });
        }

        [HttpGet]
        public IActionResult Get() {
            IEnumerable<Hogwarts> hogwarts = _hogwartsService.GetHogwarts();
            if(hogwarts == null)
                return BadRequest();
            return Ok(hogwarts);
            
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int Id) {
            Hogwarts hogwarts = _hogwartsService.getById(Id);
            if (hogwarts == null)
                return BadRequest(new { message = "La solicitud que buscas, no existe" });
            return Ok(hogwarts);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(int Id)
        {
            if (_hogwartsService.deleteById(Id))
                return Ok();
            return BadRequest(new { message = "La solicitud que intentas eliminar, no existe" });
        }
    }
}

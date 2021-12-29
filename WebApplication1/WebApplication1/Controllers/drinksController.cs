using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class drinksController : ControllerBase
    {
        private readonly TicketContext _context;

        public drinksController(TicketContext context)
        {
            _context = context;
        }

        // GET: api/drinks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<drinks>>> Getdrinks()
        {
            return await _context.drinks.ToListAsync();
        }

        // GET: api/drinks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<drinks>> Getdrinks(int id)
        {
            var drinks = await _context.drinks.FindAsync(id);

            if (drinks == null)
            {
                return NotFound();
            }

            return drinks;
        }

        // PUT: api/drinks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putdrinks(int id, drinks drinks)
        {
            if (id != drinks.id)
            {
                return BadRequest();
            }

            _context.Entry(drinks).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!drinksExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/drinks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<drinks>> Postdrinks(drinks drinks)
        {
            _context.drinks.Add(drinks);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getdrinks", new { id = drinks.id }, drinks);
        }

        // DELETE: api/drinks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<drinks>> Deletedrinks(int id)
        {
            var drinks = await _context.drinks.FindAsync(id);
            if (drinks == null)
            {
                return NotFound();
            }

            _context.drinks.Remove(drinks);
            await _context.SaveChangesAsync();

            return drinks;
        }

        private bool drinksExists(int id)
        {
            return _context.drinks.Any(e => e.id == id);
        }
    }
}

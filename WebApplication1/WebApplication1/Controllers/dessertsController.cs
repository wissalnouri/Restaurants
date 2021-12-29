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
    public class dessertsController : ControllerBase
    {
        private readonly TicketContext _context;

        public dessertsController(TicketContext context)
        {
            _context = context;
        }

        // GET: api/desserts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<dessert>>> Getdessert()
        {
            return await _context.dessert.ToListAsync();
        }

        // GET: api/desserts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<dessert>> Getdessert(int id)
        {
            var dessert = await _context.dessert.FindAsync(id);

            if (dessert == null)
            {
                return NotFound();
            }

            return dessert;
        }

        // PUT: api/desserts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putdessert(int id, dessert dessert)
        {
            if (id != dessert.id)
            {
                return BadRequest();
            }

            _context.Entry(dessert).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!dessertExists(id))
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

        // POST: api/desserts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<dessert>> Postdessert(dessert dessert)
        {
            _context.dessert.Add(dessert);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getdessert", new { id = dessert.id }, dessert);
        }

        // DELETE: api/desserts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<dessert>> Deletedessert(int id)
        {
            var dessert = await _context.dessert.FindAsync(id);
            if (dessert == null)
            {
                return NotFound();
            }

            _context.dessert.Remove(dessert);
            await _context.SaveChangesAsync();

            return dessert;
        }

        private bool dessertExists(int id)
        {
            return _context.dessert.Any(e => e.id == id);
        }
    }
}

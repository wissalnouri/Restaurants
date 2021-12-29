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
    public class livraisonsController : ControllerBase
    {
        private readonly TicketContext _context;

        public livraisonsController(TicketContext context)
        {
            _context = context;
        }

        // GET: api/livraisons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<livraison>>> Getlivraison()
        {
            return await _context.livraison.ToListAsync();
        }

        // GET: api/livraisons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<livraison>> Getlivraison(int id)
        {
            var livraison = await _context.livraison.FindAsync(id);

            if (livraison == null)
            {
                return NotFound();
            }

            return livraison;
        }

        // PUT: api/livraisons/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putlivraison(int id, livraison livraison)
        {
            if (id != livraison.idLivraison)
            {
                return BadRequest();
            }

            _context.Entry(livraison).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!livraisonExists(id))
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

        // POST: api/livraisons
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<livraison>> Postlivraison(livraison livraison)
        {
            _context.livraison.Add(livraison);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getlivraison", new { id = livraison.idLivraison }, livraison);
        }

        // DELETE: api/livraisons/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<livraison>> Deletelivraison(int id)
        {
            var livraison = await _context.livraison.FindAsync(id);
            if (livraison == null)
            {
                return NotFound();
            }

            _context.livraison.Remove(livraison);
            await _context.SaveChangesAsync();

            return livraison;
        }

        private bool livraisonExists(int id)
        {
            return _context.livraison.Any(e => e.idLivraison == id);
        }
    }
}

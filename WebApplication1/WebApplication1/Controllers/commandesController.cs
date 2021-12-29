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
    public class commandesController : ControllerBase
    {
        private readonly TicketContext _context;

        public commandesController(TicketContext context)
        {
            _context = context;
        }

        // GET: api/commandes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<commande>>> Getcommande()
        {
            return await _context.commande.ToListAsync();
        }

        // GET: api/commandes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<commande>> Getcommande(int id)
        {
            var commande = await _context.commande.FindAsync(id);

            if (commande == null)
            {
                return NotFound();
            }

            return commande;
        }

        // PUT: api/commandes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putcommande(int id, commande commande)
        {
            if (id != commande.idCommande)
            {
                return BadRequest();
            }

            _context.Entry(commande).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!commandeExists(id))
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

        // POST: api/commandes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<commande>> Postcommande(commande commande)
        {
            _context.commande.Add(commande);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getcommande", new { id = commande.idCommande }, commande);
        }

        // DELETE: api/commandes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<commande>> Deletecommande(int id)
        {
            var commande = await _context.commande.FindAsync(id);
            if (commande == null)
            {
                return NotFound();
            }

            _context.commande.Remove(commande);
            await _context.SaveChangesAsync();

            return commande;
        }

        private bool commandeExists(int id)
        {
            return _context.commande.Any(e => e.idCommande == id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Plats
    {
        [Key]
        public int id { get; set; }
        public string nom { get; set; }
        public float prix { get; set; }
        public string image { get; set; }
        public string  description { get; set; }
        public ICollection<commande> commande { get; set; }
       
    }
}

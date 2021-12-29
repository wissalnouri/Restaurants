using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class commande
    {
        [Key]
        public int  idCommande{ get; set; }
        public string nomUser { get; set; }
 

        public string dateCommande { get; set; }
        public string phoneNumber { get; set; }

        public string Status { get; set; }
        [ForeignKey("platsId")]
        public Plats plats { get; set; }
        public int platsId { get; set; }
        public string platName { get; set; }
    }
}

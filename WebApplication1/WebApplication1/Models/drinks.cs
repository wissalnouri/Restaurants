using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class drinks
    {
        public int id { get; set; }
        public  string  nom { get; set; }
        public string image { get; set; }
        public float prix { get; set; }

        public string description  { get; set; }
    }
}

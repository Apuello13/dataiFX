using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dataFxBackend.Models
{
    public class Hogwarts
    {
        [Key]
        public int Id { get; set; }
        [Column( TypeName = "varchar(20)" )]
        public string Nombre { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Apellido { get; set; }
        public int Identificacion { get; set; }
        public int Edad { get; set; }
        public string Casa { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Diet.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Column(TypeName = "nvarchar(60)")]
        public string UserName { get; set; }

        [Column(TypeName = "nvarchar(60)")]
        public string Email { get; set; }
    }
}

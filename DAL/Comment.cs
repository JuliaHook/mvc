using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Comment
    {
        
        //[Required(ErrorMessage = "Vänligen ange en mailadress")]
        //[DataType(DataType.EmailAddress)]

      
        public int Id { get; set; }

        public string Value { get; set; }

        public DateTime Created { get; set; }

        public string CommentedBy { get; set; }
    }
}

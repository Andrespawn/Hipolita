using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Hipolita.Models
{

  public class parametrosFile
  {
    #region propiedades
    [Required]
    public string pathRemoteFile { get; set; }
    public string sNameFile { get; set; }
    #endregion
  }
  public class pathLocalFile
  {
    #region propiedades
    [Required]
    public string sRutaLocal { get; set; }
    public string sNameFile { get; set; }
    #endregion
  }
}

using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;
using Hipolita.Models;
using Newtonsoft.Json;
using Renci.SshNet;
using Renci.SshNet.Sftp;

namespace Hipolita.Controllers
{
  public class ServicesFilesController : ApiController
  {
    // GET api/values
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }

    // GET api/values/5
    public string Get(int id)
    {
      return "value";
    }

    // POST api/ServicesFiles
    [System.Web.Http.HttpPost]
    public HttpResponseMessage DownloadFileFTP(parametrosFile _parametrosFile )
    {
      string host = ConfigurationManager.AppSettings["urlFTP"];
      string username = ConfigurationManager.AppSettings["userFTP"];
      string password = ConfigurationManager.AppSettings["passwordFTP"];

      string pathLocalFile = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory,  ConfigurationManager.AppSettings["LocalPath"] + _parametrosFile.sNameFile);
      using (SftpClient sftp = new SftpClient(host, username, password))
      {
        try
        {
          sftp.Connect();

          Console.WriteLine("Downloading {0}", _parametrosFile.pathRemoteFile);

          using (Stream fileStream = File.OpenWrite(pathLocalFile))
          {
            sftp.DownloadFile(_parametrosFile.pathRemoteFile, fileStream);
          }

          sftp.Disconnect();

          HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "value");
          response.Content = new StringContent(JsonConvert.SerializeObject("{'localPath':'" + pathLocalFile + "'}"), Encoding.UTF8, "application/json");
          return response;
        }
        catch (Exception er)
        {
          Console.WriteLine("An exception has been caught " + er.ToString());
          HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.InternalServerError, "value");
          //response.Content = new StringContent(JsonConvert.SerializeObject("{'localPath':'" + pathLocalFile + "'}"), Encoding.UTF8, "application/json");
          return response;
        }
      }
    }

    // PUT api/values/5
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    public void Delete(int id)
    {
    }
  }
}

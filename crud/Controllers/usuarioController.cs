using crud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace crud.Controllers
{
    public class usuarioController : Controller
    {
        #region Método para Listar Usuário - READ

        // GET Usuario/GetUsuario
        public JsonResult GetUsuario()
        {
            using (var db = new UsuarioDBEntities())
            {
                List<Usuario> listarUsuarios = db.Usuarios.ToList();

                return Json(listarUsuarios, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion


        #region Método para Adicionar Usuário - CREATE

        //POST Usuario/AdicionarUsuario
        [HttpPost]
        public JsonResult AdicionarUsuario(Usuario usuario)
        {
            if (usuario != null)
            {
                using (var db = new UsuarioDBEntities())
                {
                    db.Usuarios.Add(usuario);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion
    }
}
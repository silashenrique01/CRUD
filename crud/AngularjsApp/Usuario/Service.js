/**
 * Arquivo: Service.js
 * Data: 10/12/2017
 * Descrição: arquivo responsável por carregar os dados via $http.get - do MVC Controller
 * (onde transformará os dados em Json)
 * Author: Silas Henrique
 */

usuarioApp.service('usuarioService', function ($http) {

    //Método responsável por Listar todos os Usuários: READ
    this.getTodosUsuarios = function () {

        return $http.get("/Usuario/GetUsuario");
    }

    //Método responsável por Adicionar Usuário: CREATE
    this.adicionarUsuario = function (usuario) {

        var request = $http({
            method: 'post',
            url: '/Usuario/AdicionarUsuario',
            data: usuario
        });

        return request;
    }

    //Método responsável por Atualizar Usuário Por Id: Update
    this.atualizarUsuario = function (usuario) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Usuario/AtualizarUsuario',
            data: usuario
        });
        return requestAtualizado;
    }

    //Método responsável por Excluir Usuário Por Id: Delete
    this.excluirUsuario = function (AtualizadoUsuarioId) {

        return $http.post('/Usuario/ExcluirUsuario/' + AtualizadoUsuarioId);
    }
});
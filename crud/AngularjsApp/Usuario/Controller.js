// Controller - Usuário:
usuarioApp.controller('usuarioCtrl', function ($scope, usuarioService) {

    //Aqui estamos carregando todos os dados gravados do Usuário quando a página for recarregada:
    carregarUsuarios();

    //Método responsável por carregar todos as propriedades do Usuário:
    function carregarUsuarios() {
        var listarUsuarios = usuarioService.getTodosUsuarios();

        listarUsuarios.then(function (d) {
            //se tudo der certo:
            $scope.Usuarios = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os usuários!");
            });
    }

    //Método responsável por adicionar cada propriedade de um Novo Usuário:
    $scope.adicionarUsuario = function () {

        var usuario = {
            IdUser: $scope.IdUser,
            Nome: $scope.Nome,
            Email: $scope.Email,
            Username: $scope.Username,
            Password: $scope.Password,
            DtNasc: $scope.DtNasc
        };

        var adicionarInfos = usuarioService.adicionarUsuario(usuario);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarUsuarios();
                alert("Usuário Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Usuário não Adicionado!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Usuário!");
            });
    }

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function () {
        $scope.IdUser = "";
        $scope.Nome = "";
        $scope.Email = "";
        $scope.Username = "";
        $scope.Password = "";
        $scope.DtNasc = "";
    }

    //Método responsável por atualizar Usuario pelo Id:
    $scope.atualizarUsuarioPorId = function (usuario) {

        $scope.AtualizadoUsuarioId = usuario.IdUser;
        $scope.AtualizadoNome = usuario.Nome;
        $scope.AtualizadoEmail = usuario.Email;
        $scope.AtualizadoDepartamento = usuario.Username;
        $scope.AtualizadoCargo = usuario.Password;
        $scope.AtualizadoDtNasc = usuario.DtNasc;
    }

    //Método responsável por resgatar dados para a exclusão do Usuário:
    $scope.excluirUsuarioPorId = function(usuario) {
        $scope.AtualizadoUsuarioId = usuario.IdUser;
        $scope.AtualizadoNome = usuario.Nome;
    }

    //Método responsável por atualizar dados do Usuario:
    $scope.atualizarUsuario = function () {
        var usuario = {
            IdUser: $scope.AtualizadoUsuarioId,
            Nome: $scope.AtualizadoNome,
            Email: $scope.AtualizadoEmail,
            Username: $scope.AtualizadoUsername,
            Password: $scope.AtualizadoPassword,
            DtNasc: $scope.AtualizadoDtNasc
        };
        var atualizarInfos = usuarioService.atualizarUsuario(usuario);
        atualizarInfos.then(function (d) {
                if (d.data.success === true) {
                    carregarUsuarios();
                    alert("Usuario Atualizado com Sucesso!");
                    $scope.limparDadosAtualizados();
                }
                else {
                    alert("Usuário não Atualizado");
                }
            },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Usuário!");
            });
    }

    //Método responsável por Limpar os Dados depois de Atualizar Usuário:
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoUsuarioId = '';
        $scope.AtualizadoNome = '';
        $scope.AtualizadoEmail = '';
        $scope.AtualizadoUsername = '';
        $scope.AtualizadoPassword= '';
        $scope.AtualizadoDtNasc= '';
    }

    //Método responsável por excluir o Usuario pelo Id:
    $scope.excluirUsuario = function (AtualizadoUsuarioId) {

        var excluirInfos = usuarioService.excluirUsuario($scope.AtualizadoUsuarioId);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarUsuarios();

                alert("Usuário excluído com Sucesso!");
            }
            else {
                alert("Usuário não excluído!");
            }
        });
    }
});
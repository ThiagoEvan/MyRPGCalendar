<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entrar no MyRPGCalendar</title>
    <link rel="stylesheet" href="login.css?v=<?php echo time(); ?>">
</head>
<body>
    <div class="container">
        <form action="" class="Login">
            <label for="userlog" class="lblLogin">Digite o seu usuário</label>
            <input type="text" name="userlog" class="input">
            <label for="userlog" class="lblSenha">Digite a sua senha</label>
            <input type="text" name="senhalog" class="input">
            <button type="submit" class="botao" id="botaoregis">Entrar</button>
        </form>
        <div class="registro">
            <p class="texto" id="a">Não tem conta?</p>
        </div>
    </div>
</body>
</html>
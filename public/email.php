<?php
    if(isset($_POST['email']) && !empty($_POST['email'])){

        $nome_empresa = addslashes($_POST['nome_empresa']);
        $nome_responsavel = addslashes($_POST['nome_responsavel']);
        $telefone = addslashes($_POST['telefone']);
        $email = addslashes($_POST['email']);
        $mensagem = addslashes($_POST['mensagem']);

        $to = "kaiofhs@hotmail.com";
        $subject = "Contato - Site CS7";
        $body = "Nome Empresa: ". $nome_empresa . "\r\n".
                "Nome Responsavel: ". $nome_responsavel . "\r\n".
                "Telefone: ".$telefone . "\r\n".
                "Email: ".$email . "\r\n".
                "Mensagem: " . $mensagem;

        $header = "From:" . $email ."\r\n".
                  "Reply-To:" . $email ."\r\n".
                  "X=Mailer:PHP" . phpversion();

        if(mail($to,$subject,$body,$header)){
            echo("Email enviado com sucesso!");
        }else {
            echo("Email não pode ser enviado");
        }
    }
?>

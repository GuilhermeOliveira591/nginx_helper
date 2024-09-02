# desafio-2
## Resposta ao desafio 2 do módulo Docker do curso Full Cycle 3.0

### Imagens docker em
https://hub.docker.com/repository/docker/adrianoluisdasilva/proxy-reverso<br>
https://hub.docker.com/repository/docker/adrianoluisdasilva/app<br>
https://hub.docker.com/repository/docker/adrianoluisdasilva/sgbd<br>

Preciso de apoio para entender onde está o erro e como corrigí-lo.

Funciona ao acessar o Node pela porta 3000, mas o porta 8080 pelo nginx não funciona.
Erro no novegador "Esta página não está funcionando".

O log do proxy-reverso mostra o erro "[emerg] "user" directive is not allowed here in /etc/nginx/conf.d/default.conf:1".
Retirando o trecho user, a mensagem altera para "server" directive.
Retirando o trecho server, a mensagem altera para "location." directive.


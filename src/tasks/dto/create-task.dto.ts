// isso é um template para o que o usuário envia no body da requisição para criar uma task
// logo, como temos um title: string, e uma description: string, a requisição deve ser algo como:
/*
{
    "title": "teste",
    "description": "desc teste"
}
 */

export class CreateTaskDto {
  title: string;
  description: string;
}

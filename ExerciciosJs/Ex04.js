// 4. Gerador de Senhas Aleatórias
// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode().

function gerarSenha() {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    const todos = letras + numeros + simbolos;
    let senha = "";
  
    for (let i = 0; i < 10; i++) {
      const indiceAleatorio = Math.floor(Math.random() * todos.length);
      senha += todos.charAt(indiceAleatorio);
    }
  
    return senha;
  }
  
  console.log(gerarSenha()); // Vai mostrar uma senha maluca, tipo "A3@b!Xz7#"
  
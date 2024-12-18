let blog = document.querySelector('#postagens')
fetch("https://tiagobernardes.com.br/api/blog/posts.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} : ${response.statusText}`)
        }
        return response.json();
    })
    .then(data => {
        let sliceData = data.slice(0, 3);
        let ul = document.createElement('ul');
        ul.style.display = "flex"
        ul.style.justifyContent = "space-between"
        ul.style.padding = "0"
        sliceData.forEach((item, index) => {
            let li = document.createElement('li')
            //li.style.padding = "20px"
            li.style.width = "30%"
            li.style.textAlign = "center"

            let = image = document.createElement('img')
            image.src = item.imagem;
            image.width = 400;
            image.height = 400;
            image.style.objectFit = 'cover';

            let = linkImagem = document.createElement('a');
            linkImagem.href = `/blog-tb/${item.slug}`

            let titulo = document.createElement('h4')
            titulo.textContent = item.titulo;

            let = linkTitulo = document.createElement('a');
            linkTitulo.href = `/blog_post/${item.slug}`
            //linkTitulo.textContent = item.titulo

            let resumo = document.createElement('p')
            resumo.textContent = item.resumo

            let botao = document.createElement('button')
            botao.id = `abrePost${index}`
            botao.textContent = "leia mais"
            botao.onclick = () => window.location.href = `single_post.html?slug=${item.slug}`
            botao.addEventListener("click", () => {})
            
            li.appendChild(image)
            li.appendChild(linkImagem)
            linkImagem.appendChild(image)
            linkTitulo.appendChild(titulo)
            li.appendChild(linkTitulo)
            li.appendChild(resumo)
            li.appendChild(botao)
            ul.appendChild(li)

        })
        blog.appendChild(ul);
    })
    .catch(error => {
        console.error("Ocorreu o erro: ", error.message)
    })
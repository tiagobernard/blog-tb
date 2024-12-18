let blogIntegra = document.querySelector(`#singlePost`)
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
fetch("https://tiagobernardes.com.br/api/blog/posts.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ${response.status} : ${response.statusText}`)
        }
        return response.json();
    })
    .then(data => {
        const post = data.find(item => item.slug === slug);
        document.title = `Blog Tiago Bernardes - ${post.titulo}`

        let dv = document.createElement('div')
        let titulo = document.createElement('h1')
        titulo.style.textAlign = "center"

        let artigo = document.createElement('article')
        let voltar = document.createElement('button')

        let imagem = document.createElement('img')
        imagem.src = post.imagem
        imagem.width = 500
        imagem.height = 500
        imagem.style.objectFit = "cover"
        imagem.style.float = "left"
        imagem.style.marginRight = "50px"
        imagem.style.marginBottom = "50px"

        voltar.textContent = "voltar"
        //voltar.onclick = () => window.history.back();
        voltar.onclick = () => window.location.href = "index.html"

        titulo.textContent = `${post.titulo}`
        artigo.innerHTML = `${post.artigo}`

        
        dv.appendChild(titulo)
        dv.append(imagem)
        dv.appendChild(artigo)
        dv.appendChild(voltar)
        blogIntegra.appendChild(dv)
    })
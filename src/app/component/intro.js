export default async function Intro() {
    const data = await fetch("http://strapi:1337/api/introducaos?populate=*"); // Corrigido o nome do host para 'strapi'
    const result = await data.json();
    const post = result.data[0];
    const imageUrl = post.image[0]?.formats.medium.url || post.image[0]?.url;
  
    return (
      <div>
        <h1>{post.title}</h1>
        <img src={imageUrl} alt={post.image[0]?.name || "Imagem"} width={750} height={420} />
        <p>{post.descricao[0].children[0].text}</p>
      </div>
    );
  }

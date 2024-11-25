import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Um gatinho fofo dormindo",
        imagem: "https://images.pexels.com/photos/1264074/pexels-photo-1264074.jpeg"
    },
    {
        id: 2,
        descricao: "Gato curioso olhando pela janela",
        imagem: "https://images.pexels.com/photos/258158/pexels-photo-258158.jpeg"
    },
    {
        id: 3,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://images.pexels.com/photos/519386/pexels-photo-519386.jpeg"
    },
    {
        id: 4,
        descricao: "Gato siamês de olhos azuis",
        imagem: "https://images.pexels.com/photos/127006/pexels-photo-127006.jpeg"
    },
    {
        id: 5,
        descricao: "Gato preto fazendo pose",
        imagem: "https://images.pexels.com/photos/45201/kitty-cat-black-cat-pet-45201.jpeg"
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
})

function searchPostById(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = searchPostById(req.params.id)
    res.status(200).json(posts[index]);
})
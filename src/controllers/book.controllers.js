const prisma = require('../../prisma')

exports.CreateBook = async (req , res) => {
    try {

        const { title, author, summary, ISBN, genresIds = [] } = req.body

        const foundAuthor = await prisma.author.findFirst({
            where: { first_name: author },
        });

        if (!title || !author || !summary || !ISBN) {
            // console.log(title)
            return res.status(400).json({ error: 'Missing fields' });
        }
        const book = await prisma.book.create({
            data: {
                title,
                authorId: foundAuthor.id,
                summary,
                ISBN,
                genres: {
                    create: genresIds.map((genreId) => ({
                        genre: { connect: { id: genreId } },
                    })),
                },
            },
            include: {
                genres: true,
            }
        });


        return res.json({ status: 'created', book });

    } catch (error) {
        console.log(error)
    }
}
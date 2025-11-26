const prisma = require('../../prisma')

exports.CreateGenre = async (req, res) => {

    try {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ error: 'Missing fields' });
        }

        const GenreCreated = await prisma.genre.create({
            data: {
                name: name
            }
        })

        return res.status(200).json({ status: 'Created', GenreCreated })

    } catch (error) {
        console.log(error)
    }

}



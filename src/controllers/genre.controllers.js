const prisma = require('../../prisma')

// exports.GetGenre = async (req , res) => {

// }

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


exports.UpdateGenre = async (req , res) => {
    
    try{
        const { genreId , name } = req.body 
        if (!genreId || !name) {
            return res.status(400).json({ error: 'Missing fields' });
        }

        const updatedGenre = await prisma.genre.update({
            where : {
                id : genreId
            } ,
            data : {
                name : name
            }
        })

        return res.status(200).json({ status: 'Updated', updatedGenre })


    }catch(error){
        console.log(error)
    }
    
    
}
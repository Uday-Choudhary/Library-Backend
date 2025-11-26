const prisma = require('../../prisma')

exports.GetGenre = async (req , res) => {
    try{
        const {id} = req.params
        if (!id){
            return res.status(400).json({ error: 'Missing id' });
        }

        const genre = await prisma.genre.findFirst({
            where : {
                id : Number(id)
            }
        })

        if (!genre){
            return res.status(404).json({ status: 'Not Found' })

        }
        return res.status(200).json({ status: 'Found', genre })
    }catch(error){
        console.log(error)
    }
}

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

exports.DeleteGenre = async (req , res) => {
    try{
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ error: 'Missing fields' });}
            
        
        deleteGenre = await prisma.genre.delete({
            where : {
                id : Number(id)
            }
        })

        return res.status(200).json({status : 'deleted' , deleteGenre})
        
    }catch(error){

    }
}
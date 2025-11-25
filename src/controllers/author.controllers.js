const prisma = require('../../prisma')

exports.CreateAuthor = async (req , res) => {
    const {first_name , family_name , date_of_birth , date_of_death} = req.body

    try{

        if (!first_name || !family_name){
            return res.status(400).json({ error: 'Missing fields' });
        }
        const author = prisma.author.create({
            data : {
                first_name,
                family_name,
                date_of_birth,
                date_of_death
            }
        })

        return res.json({ status : 'created' , author})

    }catch(error){
        console.log(error)
    }
}
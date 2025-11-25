const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require('dotenv').config()

async function main() {
    console.log(" Seeding Data...");


    await prisma.author.createMany({
        data: [
            {
                first_name: "John",
                family_name: "Doe",
                date_of_birth: new Date("1970-05-10"),
                name: "John Doe",
                lifespan: "1970 - Present",
                url: "/author/john-doe",
            },
            {
                first_name: "Jane",
                family_name: "Smith",
                date_of_birth: new Date("1985-09-25"),
                name: "Jane Smith",
                lifespan: "1985 - Present",
                url: "/author/jane-smith",
            },
            {
                first_name: "Robert",
                family_name: "Brown",
                date_of_birth: new Date("1950-02-14"),
                date_of_death: new Date("2020-10-10"),
                name: "Robert Brown",
                lifespan: "1950 - 2020",
                url: "/author/robert-brown",
            }
        ],
    });

    console.log(" Authors Seeded");

    const authors = await prisma.author.findMany();

    const getAuthor = (first) =>
        authors.find((a) => a.first_name === first);



    await prisma.genre.createMany({
        data: [
            { name: "Fantasy", url: "/genre/fantasy" },
            { name: "Sci-Fi", url: "/genre/sci-fi" },
            { name: "Mystery", url: "/genre/mystery" },
            { name: "Horror", url: "/genre/horror" },
        ],
    });

    console.log(" Genres Seeded");

    const genres = await prisma.genre.findMany();
    const getGenre = (name) =>
        genres.find((g) => g.name === name);



    const b1 = await prisma.book.create({
        data: {
            title: "The Enchanted Forest",
            summary: "A magical fantasy adventure.",
            ISBN: "111-111",
            url: "/book/enchanted-forest",
            authorId: getAuthor("John").id,
        },
    });

    const b2 = await prisma.book.create({
        data: {
            title: "Galaxy Wars",
            summary: "Epic battles across galaxies.",
            ISBN: "222-222",
            url: "/book/galaxy-wars",
            authorId: getAuthor("Jane").id,
        },
    });

    const b3 = await prisma.book.create({
        data: {
            title: "The Lost Detective",
            summary: "A detective disappears mysteriously.",
            ISBN: "333-333",
            url: "/book/lost-detective",
            authorId: getAuthor("John").id,
        },
    });

    const b4 = await prisma.book.create({
        data: {
            title: "Haunted Nights",
            summary: "Horror stories from an abandoned house.",
            ISBN: "444-444",
            url: "/book/haunted-nights",
            authorId: getAuthor("Robert").id,
        },
    });

    const b5 = await prisma.book.create({
        data: {
            title: "Mystic Journey",
            summary: "A mix of fantasy & mystery.",
            ISBN: "555-555",
            url: "/book/mystic-journey",
            authorId: getAuthor("Jane").id,
        },
    });

    console.log(" Books Seeded");



    await prisma.bookGenres.createMany({
        data: [
            { bookId: b1.id, genreId: getGenre("Fantasy").id },

            { bookId: b2.id, genreId: getGenre("Sci-Fi").id },

            { bookId: b3.id, genreId: getGenre("Mystery").id },

            { bookId: b4.id, genreId: getGenre("Horror").id },

            { bookId: b5.id, genreId: getGenre("Fantasy").id },
            { bookId: b5.id, genreId: getGenre("Mystery").id },
        ],
    });

    console.log(" BookGenres (relations) Seeded");

    console.log(" Seeding Complete!");
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());

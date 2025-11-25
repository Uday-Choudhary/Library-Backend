// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Seeding database...");

    // --- AUTHORS ---
    await prisma.author.createMany({
        data: [
            {
                first_name: "John",
                family_name: "Doe",
                date_of_birth: new Date("1970-05-10"),
                date_of_death: null,
                name: "John Doe",
                lifespan: "1970 - Present",
                url: "/author/john-doe"
            },
            {
                first_name: "Jane",
                family_name: "Smith",
                date_of_birth: new Date("1985-09-25"),
                date_of_death: null,
                name: "Jane Smith",
                lifespan: "1985 - Present",
                url: "/author/jane-smith"
            },
            {
                first_name: "Robert",
                family_name: "Brown",
                date_of_birth: new Date("1950-02-14"),
                date_of_death: new Date("2020-10-10"),
                name: "Robert Brown",
                lifespan: "1950 - 2020",
                url: "/author/robert-brown"
            }
        ]
    });

    console.log("✅ Authors seeded");

    // --- GENRES ---
    const genreData = [
        { name: "Fantasy", url: "/genre/fantasy" },
        { name: "Science Fiction", url: "/genre/sci-fi" },
        { name: "Mystery", url: "/genre/mystery" },
        { name: "Horror", url: "/genre/horror" },
    ];

    await prisma.genre.createMany({ data: genreData });
    console.log("✅ Genres seeded");

    const allAuthors = await prisma.author.findMany();
    const allGenres = await prisma.genre.findMany();

    const getAuthor = (firstName) =>
        allAuthors.find(a => a.first_name === firstName);

    const getGenre = (name) =>
        allGenres.find(g => g.name === name);

    // --- BOOKS ---
    await prisma.book.create({
        data: {
            title: "The Enchanted Forest",
            summary: "A fantasy adventure story.",
            ISBN: "111-111",
            url: "/book/enchanted-forest",
            authorId: getAuthor("John").id,
            genres: {
                connect: [{ id: getGenre("Fantasy").id }]
            }
        }
    });

    await prisma.book.create({
        data: {
            title: "Galaxy Wars",
            summary: "Epic sci-fi battles across the universe.",
            ISBN: "222-222",
            url: "/book/galaxy-wars",
            authorId: getAuthor("Jane").id,
            genres: {
                connect: [{ id: getGenre("Science Fiction").id }]
            }
        }
    });

    await prisma.book.create({
        data: {
            title: "The Lost Detective",
            summary: "A gripping mystery about a missing detective.",
            ISBN: "333-333",
            url: "/book/lost-detective",
            authorId: getAuthor("John").id,
            genres: {
                connect: [{ id: getGenre("Mystery").id }]
            }
        }
    });

    await prisma.book.create({
        data: {
            title: "Haunted Nights",
            summary: "A terrifying horror novel.",
            ISBN: "444-444",
            url: "/book/haunted-nights",
            authorId: getAuthor("Robert").id,
            genres: {
                connect: [{ id: getGenre("Horror").id }]
            }
        }
    });

    await prisma.book.create({
        data: {
            title: "Mystic Journey",
            summary: "A blend of fantasy and mystery.",
            ISBN: "555-555",
            url: "/book/mystic-journey",
            authorId: getAuthor("Jane").id,
            genres: {
                connect: [
                    { id: getGenre("Fantasy").id },
                    { id: getGenre("Mystery").id }
                ]
            }
        }
    });

    console.log("✅ Books seeded");
}

main()
    .then(() => {
        console.log("🌱 Seeding finished.");
    })
    .catch((e) => {
        console.error("❌ Seeding error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

interface LinkProps {
    title: string,
    description: string,
    demoLink: string,
    codeLink: string
}

export const RouteLinks: LinkProps[] = [
    {
        codeLink: "https://github.com/JacobChikwanda/next-js-refresher/src/app/concepts/connect-to-prisma",
        demoLink: "/concepts/connect-to-prisma",
        description: "Concept focuses on how you can connect your Next.js project to the Prisma ORM.",
        title: "Connect to Prisma"
    }
];
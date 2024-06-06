export type ProjectType = {
    title: string,
    description: string,
    category: string,
    platforms: string[],
    link?: string
}

export const projects: ProjectType[] = [
    {
        title: "Chimera Project",
        description: "This is a 2D genetically modified game. Create a bad-ass chimera and fight boss through levels.",
        category: "Action",
        platforms: [
            "W"
        ]
    },
    {
        title: "JG#36 - Another World: Near-Death Experience",
        description: "a 2D Action / Adventure atmospheric game",
        category: "Action",
        platforms: [
            "W",
            "L",
        ]
    },
    {
        title: "GWJ#65 - Overload: Space Cleaner",
        description: "",
        category: "Shooter",
        platforms: [
            "W",
            "L",
            "Apple",
        ]
    },    
    {
        title:'Game demo update: Agoge',
        description:'',
        category:'Action',
        platforms:[
            'W',
        ]

    },
    {
        title:'GWJ#63 - Cats - Family Ties',
        description:'Your kittens have disappeared. Inquire with the inhabitants of the farm. Then go on an adventure.',
        category:'',
        platforms:[
            'W',
            'L',
        ]
    },
    {
        title:'GWJ#62 - Harvest - To bee or not to bee',
        description:'To bee or not to bee : a 2D bucolic bee game',
        category:'Adventure',
        platforms:[
            'W',
            'L',
            'Apple',
        ]
    },
    {
        title:'GWJ#61 - Climb - Update',
        description:'2D rock climbing game',
        category:'',
        platforms:[
            'W',
            'L',
            'Apple',
        ]
    },
    {
        title:'FTPS, 2 weeks to create from scratch a UR4 demo',
        description:'2 weeks to create from scratch an UR4 demo',
        category:'Shooter',
        platforms:[
            'W',
        ]
    },
    {
        title:'GWJ#61 - Ascension - Main theme of Climb',
        description:'2D rock climbing game',
        category:'Ascension',
        platforms:[
            'W',
            'L',
            'Apple',
        ]
    },
    {
        title:'Game demo - Agögé - Vertical slice',
        description:"A 2D platformser, h'n's and roguelite demo game",
        category:'Game demo',
        platforms:[
            'W',
        ],
        link: 'https://h1to.itch.io/vertical-slice-agg'
    },
    {
        title:'Agögé - a 2d game - presentation',
        description:"2D roguelite, H'n'S and platformser styles game",
        category:'Action - 2D Game',
        platforms:[
            'W',
        ],
        link: 'https://h1to.itch.io/final-project-v-slice-agg'
    },
    {
        title:'Godot Wild Jam #61 - Climb',
        description:"",
        category:'Adventure - Climb',
        platforms:[
            'W',
            'L',
        ]
    },   
]
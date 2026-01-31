export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    region: string;
    material: string;
    description: string;
    images: string[];
    isNew?: boolean;
    isBestSeller?: boolean;
}

export const CATEGORIES = [
    { id: 'rugs', name: 'Rugs & Textiles', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2678&auto=format&fit=crop' },
    { id: 'ceramics', name: 'Ceramics', image: 'https://images.unsplash.com/photo-1628102377484-938f368dd625?q=80&w=2574&auto=format&fit=crop' },
    { id: 'leather', name: 'Leather', image: 'https://images.unsplash.com/photo-1596547609852-aa382583842c?q=80&w=2574&auto=format&fit=crop' },
    { id: 'metal', name: 'Metalwork', image: 'https://images.unsplash.com/photo-1620050519106-444458d0959f?q=80&w=2574&auto=format&fit=crop' },
];

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Vintage Beni Ourain',
        price: 450,
        category: 'rugs',
        region: 'Atlas Mountains',
        material: 'Wool',
        description: 'Authentic vintage Beni Ourain rug, hand-knotted by Berber women in the Atlas Mountains. Features classic geometric diamond patterns on a cream wool base.',
        images: [
            'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1591871937631-2f6568486715?q=80&w=2670&auto=format&fit=crop'
        ],
        isNew: true
    },
    {
        id: '2',
        name: 'Tamegroute Green Vase',
        price: 85,
        category: 'ceramics',
        region: 'Zagora',
        material: 'Clay',
        description: 'Iconic green glazed pottery from Tamegroute. The unique color comes from a glaze containing copper and manganese, fired in traditional earth kilns.',
        images: [
            'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2670&auto=format&fit=crop'
        ],
        isBestSeller: true
    },
    {
        id: '3',
        name: 'Fez Leather Pouf',
        price: 120,
        category: 'leather',
        region: 'Fes',
        material: 'Leather',
        description: 'Hand-stitched leather pouf made in the tanneries of Fez. Dyed using natural vegetable dyes and embroidered with traditional geometric motifs.',
        images: [
            'https://images.unsplash.com/photo-1589830500257-2059345c26b8?q=80&w=2574&auto=format&fit=crop'
        ]
    },
    {
        id: '4',
        name: 'Brass Lantern',
        price: 180,
        category: 'metal',
        region: 'Marrakech',
        material: 'Brass',
        description: 'Intricately pierced brass lantern that casts beautiful shadow patterns when lit. Handcrafted in the souks of Marrakech.',
        images: [
            'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2670&auto=format&fit=crop'
        ]
    }
];

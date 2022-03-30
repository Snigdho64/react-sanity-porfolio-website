export default {
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'imageUrl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
    ],
}

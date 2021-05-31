export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'matadata',
            title: 'Metadata',
            type: 'urlWithMetadata',
        }
    ],
    preview: {
        select: {
            title: 'metadata.openGraph.title',
            subtitle: 'metadata.openGraph.url'
        }
    }
}
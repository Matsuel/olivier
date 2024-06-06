export const nameToLink = (name: string) => {
    return name
        .toLowerCase()
        .replaceAll('#', "")
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ')
        .replaceAll(' ', '-')
}
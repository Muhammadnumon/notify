function hasUnread(items) {
    return items.some(function (posts) { return posts.read == false; });
}
const posts = [
    {
        id: 1,
        read: true,
    },
    {
        id: 2,
        read: true,
    },
    {
        id: 3,
        read: false,
    },
];
const notify = hasUnread(posts);
console.log(notify);
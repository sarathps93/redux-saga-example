export default (url) => {
    return window.fetch(url).then(res => res.text());
}
function loadMedia(mediaUrl) {
    if (typeof mediaUrl != 'undefined' && mediaUrl)
        return `<img class="tweet-image" src="${mediaUrl}" alt="Tweet Image">`;
}
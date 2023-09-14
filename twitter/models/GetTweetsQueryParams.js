class GetTweetsQueryParams {
    constructor(username, userId, includeReplies, limit) {
        this.username = username;
        this.userId = userId;
        this.includeReplies = includeReplies;
        this.limit = limit
    }
    toJson() {
        return {
            "username": this.username,
            "user_id": this.userId,
            "include_replies": this.includeReplies,
            "limit": this.limit
        }
    }
}
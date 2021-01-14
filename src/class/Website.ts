class Website {
    constructor(
        public website: String,
        public shortName: String,
        public status: Number,
        public statusText: String
    )
    {
        this.website = website;
        this.shortName = shortName;
        this.status = 0;
        this.statusText = ""
    }
}

export { Website };
class Website {
    constructor(
        public website: String,
        public shortName: String,
        public status: number
    )
    {
        this.website = website;
        this.shortName = shortName;
        this.status = 0;
    }
}

export { Website };
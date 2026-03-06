const axios = require("axios");

async function main() {
    const res = await axios.get("https://api.github.com");
    console.log("GitHub API status:", res.status);
}

main();
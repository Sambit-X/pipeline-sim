const axios = require("axios");

async function main() {
    const res = await axios.get("https://api.github.com");
    console.log("GitHub API status:", res.status);

    const res2 = await axios.get("https://www.google.com");
    console.log("Google API status:", res2.status);
}

main();
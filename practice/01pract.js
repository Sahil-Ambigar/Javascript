const name='Sahil';
const age = 21;
const IsCodeLover= true;
const  College='VIT';

const dreamCompanies = ["google","microsoft", "spotify"];

const githubprofile = {
    username: "Sahilambigar",
    repocount: 12,
    isHiring: false
};


console.log(`👋 Hi, I'm ${name}, a ${age}-year-old student at ${College}.`);
console.log(`💻 Do I love coding? ${IsCodeLover ? "Absolutely!" : "Not really"}`);
console.log(`🚀 My dream companies to work at are: ${dreamCompanies.join(", ")}.`);
console.log(`📂 GitHub: My username is @${githubprofile.username} with ${githubprofile.repoCount} repositories.`);
console.log(`📢 Am I hiring others on GitHub? ${githubprofile.isHiring ? "Yes!" : "Nope, not yet."}`);

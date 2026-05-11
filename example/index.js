require("dotenv").config();

const { client, applicationGetAll, projectAll } = require("@dokploy/sdk");

client.setConfig({
  baseUrl: process.env.DOKPLOY_URL,
  headers: {
    "x-api-key": process.env.DOKPLOY_TOKEN,
  },
});

async function main() {
  const { data: projects, error } = await projectAll();

  if (error) {
    console.error("Error fetching projects:", error);
    process.exit(1);
  }

  console.log("Projects:", projects);

  const { data: apps } = await applicationGetAll();
  console.log("Applications:", apps);
}

main();

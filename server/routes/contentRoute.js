const { Router } = require("express");
const { generate_content } = require("../controller/AIController");

const content = Router();

content.post("/generate-content",generate_content);

module.exports = content;

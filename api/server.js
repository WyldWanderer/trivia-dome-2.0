const app = require("../app.js")

// 4) START SERVER
const port = 9000;
app.listen(port, () => {
    console.log(`App running on port ${port}....`)
});
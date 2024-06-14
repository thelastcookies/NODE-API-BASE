import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-koa#3-using-the-rest-api`),
);

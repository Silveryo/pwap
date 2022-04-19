import app from './app';
import bootstrap from './App/bootstrap';

bootstrap();

const PORT = 2222;
const server =app.listen((PORT || process.env.PORT), () => {
    console.log(`App running on localhost:${PORT}`);
});

export default server;

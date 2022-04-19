import app from './app';
import bootstrap from './App/bootstrap';

bootstrap();

const PORT = 2222 || process.env.PORT;;
const server =app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`);
});

export default server;

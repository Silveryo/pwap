import app from './app';
import bootstrap from './App/bootstrap';

bootstrap();

const server =app.listen((process.env.PORT), () => {
    console.log(`App running!`);
});

export default server;

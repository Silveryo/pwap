import app from './app';
import bootstrap from './App/bootstrap';

bootstrap();

const server =app.listen((process.env.PORT || 2222), () => {
    console.log(`App running! Port: ${process.env.PORT || 2222}`);
});

export default server;

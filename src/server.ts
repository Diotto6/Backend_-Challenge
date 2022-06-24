import Application from "./app";

const application = new Application();

const port =  process.env.PORT ? Number(process.env.PORT) : 5432;


application.init();
application.start(port)
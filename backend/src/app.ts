import dotenv from "dotenv";
import { AppDataSource } from "./AppDataSource";
import ServerConfig from "./ServerConfig";

dotenv.config();

async function main(): Promise<void> {
  //const config = new ServerConfig(process.env);

  try {
    await AppDataSource.initialize();
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Error during database setup:", error);
    process.exit(1);
  }

  const port = Number(process.env.API_PORT) || 80;
  //const appRoutes = new AppRoute().getRouter();

  //const server = new Server(port, appRoutes);

  //server.start();
}

main();

import { Sequelize } from "sequelize";
import 'dotenv/config';

const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const tryConnectSequelize = async () => {
  try {
    await database.authenticate();
    await database.sync({ logging: false });
    console.log("Conexão bem-sucedida");
  } catch (error) {
    console.error("Erro de conexão: ", error);
  }
};

export { tryConnectSequelize, database };

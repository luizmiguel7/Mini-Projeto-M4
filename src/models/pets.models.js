import { database } from "../database/db.js";
import { DataTypes } from "sequelize";

const Pets = database.define('Pets', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    idade: { type: DataTypes.STRING, allowNull: false },
    raca: { type: DataTypes.STRING, allowNull: false },
    porte: { type: DataTypes.STRING, allowNull: false },
    sexo: { type: DataTypes.STRING, allowNull: false },
    vacinado: { type: DataTypes.BOOLEAN, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
});

export { Pets };

const { DataTypes, Model } = require("sequelize/types");

const sequelize = require('../config/connection.js');

class Options extends Model { }



Options.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        answer_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isTrue: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refrences: {
                model: 'question',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'quiz'
    }

)

module.exports = Options
module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const User = sequelize.define('user', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        email: {
            type: Sequelize.STRING,
            allowNull: false, 
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: Date.now
        }
    });
    return User;
}
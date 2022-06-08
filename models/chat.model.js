

module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const Chat = sequelize.define('chat', {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        message: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        groupMessage: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        sentOn: {
            type: DataTypes.DATE,
            defaultValue: Date.now
        },
        senderId: {
            type: Sequelize.INTEGER,
        }
    });
    return Chat;
}
module.exports = (database, dataTypes) => {
const Banks = database.define('banks',{
    name: {
        type: dataTypes.STRING
    },
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true
    }
},{
    underscored: true,
    timestamps: false
});
return Banks;
}
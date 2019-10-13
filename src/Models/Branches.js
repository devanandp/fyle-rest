module.exports = (database, dataTypes) => {
    const Branches = database.define('branches', {
    ifsc: {
        type: dataTypes.STRING,
        primaryKey: true
    },
    bank_id: {
        type: dataTypes.INTEGER
    },
    branch: {
        type: dataTypes.STRING
    },
    address: {
        type: dataTypes.STRING
    },
    city: {
        type: dataTypes.STRING
    },
    district: {
        type: dataTypes.STRING
    },
    state: {
        type: dataTypes.STRING
    }
},{
    underscored: true,
    timestamps: false
  });
  return Branches;
}
// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'customer';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       userId: { type: String, required: true, unique: true },
       custName: { type: String, required: true },
       isMember: { type: Boolean, required: true, default: false },
       createdDate: { type: Date, required: true },
       phoneNo: { type: Boolean, required: true, unique: true },
       icNo: { type: String, required: true, unique: true },
       avatarCust: { type: String },

    }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };
import mongoose from 'mongoose';

interface IUserData {
    email: string;
    password: string;
}

interface IUserModel extends mongoose.Model<IUserDocument> {
    build(data: IUserData): IUserDocument;
}

interface IUserDocument extends mongoose.Document {
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.statics.build = (data: IUserData) => {
    return new User(data);
};

const User = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);

export { User };

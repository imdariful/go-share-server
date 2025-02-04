import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB_URL).then(() => {
        console.log('Database connected');
        return mongoose;
      }),
  },
];

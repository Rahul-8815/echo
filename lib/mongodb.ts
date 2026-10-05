import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.MONGODB_URL ||
  process.env.MONODB_URI ||
  process.env.MONODB_URL;


interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

async function connectDB() {
  const uri =
    process.env.MONGODB_URI ||
    process.env.MONGODB_URL ||
    process.env.MONODB_URI ||
    process.env.MONODB_URL;

  if (!uri) {
    throw new Error('Please define the MONODB_URI or MONGODB_URI environment variable');
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;

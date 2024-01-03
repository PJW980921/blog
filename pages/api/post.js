import { MongoClient, ObjectId } from 'mongodb';
export default async function handler(req, res) {
 const url = 'mongodb+srv://admin:blog1644@cluster0.ebcae3z.mongodb.net/';
const client = new MongoClient(url);
try {
 await client.connect();
const db = client.db('blog');
const posts = await db.collection('post').find().toArray();
res.status(200).json(posts);
} catch (error) {
 res.status(500).json({ error: 'Unable to fetch data' });
} finally {
 await client.close();
}
}




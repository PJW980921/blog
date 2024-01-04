import { MongoClient } from 'mongodb';
export default async function handler(req, res) {
  const url = 'mongodb+srv://admin:aaaaaaa@cluster0.ebcae3z.mongodb.net/';
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db('blog');
    const posts = await db.collection('post').find().toArray();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: '데이터를 불러오는데 실패 했습니다.' });
  } finally {
    await client.close();
  }
}

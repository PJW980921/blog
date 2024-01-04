import { MongoClient } from 'mongodb';

export default async function newHandler(req, res) {
  const url = 'mongodb+srv://admin:blog1644@cluster0.ebcae3z.mongodb.net/';
  const client = new MongoClient(url);

  if (req.method === 'POST') {
    console.log(req.body);
  }
  if (req.body.title === '') {
    return res.status(500).json('제목을 작성 해주세요.');
  }
  try {
    await client.connect();
    const db = client.db('blog');
    await db.collection('post').insertOne(req.body);
    return res.status(200).redirect('/List');
  } catch (error) {
    res.status(500).json({ error: '데이터를 불러오는데 실패 했습니다.' });
  } finally {
    await client.close();
  }
}

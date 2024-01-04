import { MongoClient,ObjectId } from 'mongodb';

export default async function deleteHandler(req, res) {
  const url = 'mongodb+srv://admin:baaaaa@cluster0.ebcae3z.mongodb.net/';
  const client = new MongoClient(url);
  const filter = { _id: new ObjectId(req.body) };
  if (req.method === 'DELETE') {
    console.log(req.body);
  }
  if (req.body.title === '') {
    return res.status(500).json('제목을 작성 해주세요.');
  }
  try {
    await client.connect();
    const db = client.db('blog');
   await db.collection('post').deleteOne(filter);
    return res.status(200).redirect('삭제 완료');
  } catch (error) {
    res.status(500).json({ error: '삭제하기를 실패 했습니다.' });
  } finally {
    await client.close();
  }
}

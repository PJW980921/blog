import React from 'react';

export default function Write() {
  return (
    <div className="write-container">
      <h4>글 작성</h4>
      <form action="api/post/new" method="POST">
        <input
          className="input-title"
          name="title"
          placeholder="글 제목을 작성해주세요."
        />
        <input
          className="input-content"
          name="content"
          placeholder="글 내용을 작성해주세요."
        />
        <button className="post-btn" type="submit">
          작성하기
        </button>
      </form>
    </div>
  );
}

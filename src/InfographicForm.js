// src/InfographicForm.js
import React, { useState } from "react";

function InfographicForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("message", message);
    formData.append("image", image);

    // Gửi dữ liệu đến backend
    const response = await fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setSubmittedData(data);
  };

  return (
    <div>
      <h2>Infographic Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Họ tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vị trí chức danh"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Lời chúc"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Infographic Preview</h3>
          <img src={submittedData.imageUrl} alt="Infographic" />
          <p>{submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default InfographicForm;
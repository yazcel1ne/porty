import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto">
      <label htmlFor="name" className="block mb-2">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 mb-4 border rounded-md" />

      <label htmlFor="email" className="block mb-2">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 mb-4 border rounded-md" />

      <label htmlFor="message" className="block mb-2">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-3 py-2 mb-4 border rounded-md"></textarea>

      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">Submit</button>
    </form>
  );
};

export default ContactForm;

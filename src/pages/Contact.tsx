// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import axios from 'axios';  // Import axios for making HTTP requests
// import ContactInfo from '../components/Contact/ContactInfo.tsx';
// import { contactInfo } from '../data/contact.js';
// import SocialLink from '../components/About/SocialLink';
// import { socialLinks } from '../data/about.js';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// export default function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: ''
//   });

//   // Handle form submission
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       // Send form data to the backend
//       const response = await axios.post('http://localhost:5000/send-email', formData);
//       alert(response.data.message);
//       setFormData({ name: '', email: '', message: '' }); // Clear form
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again later.');
//     }
//   };

//   // Handle input field changes
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-24">
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Contact Information Section */}
//         <div className="flex-1">
//           <h1 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h1>
//           <div className="space-y-6">
//             <ContactInfo 
//               icon={<Mail />}
//               {...contactInfo.email}
//             />
//             <ContactInfo 
//               icon={<Phone />}
//               {...contactInfo.phone}
//             />
//             <ContactInfo 
//               icon={<MapPin />}
//               {...contactInfo.location}
//             />
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="flex-1 bg-white rounded-xl shadow-md p-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               <Send className="h-5 w-5" />
//               <span>Send Message</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

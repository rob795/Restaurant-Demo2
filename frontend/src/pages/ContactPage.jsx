import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { restaurantInfo } from '../data/mock';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Mock submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#ECEC75] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0f172a]/70 font-medium mb-4 tracking-wide uppercase">
            Get in Touch
          </p>
          <h1 
            className="text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Contact Us
          </h1>
          <p className="text-xl text-[#0f172a]/80 max-w-2xl mx-auto">
            We'd love to hear from you. Make a reservation or reach out with any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 
                className="text-3xl font-bold text-[#0f172a] mb-8"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                Visit Us
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start bg-[#e6e67c] p-6 rounded-xl">
                  <MapPin size={24} className="text-[#0f172a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">Address</h3>
                    <p className="text-[#0f172a]/70">
                      {restaurantInfo.address.street}<br />
                      {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-[#e6e67c] p-6 rounded-xl">
                  <Phone size={24} className="text-[#0f172a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">Phone</h3>
                    <a 
                      href={`tel:${restaurantInfo.phone}`}
                      className="text-[#0f172a]/70 hover:text-[#0f172a] transition-colors"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-[#e6e67c] p-6 rounded-xl">
                  <Mail size={24} className="text-[#0f172a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">Email</h3>
                    <a 
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-[#0f172a]/70 hover:text-[#0f172a] transition-colors"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <h2 
                className="text-3xl font-bold text-[#0f172a] mb-6"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                <Clock size={28} className="inline mr-3" />
                Hours of Operation
              </h2>
              <div className="bg-[#e6e67c] p-6 rounded-xl">
                <div className="space-y-3">
                  {restaurantInfo.hours.map((item) => (
                    <div 
                      key={item.day} 
                      className="flex justify-between text-[#0f172a] py-2 border-b border-[#0f172a]/10 last:border-0"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={item.time === 'Closed' ? 'text-red-600 font-medium' : 'text-[#0f172a]/70'}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <h2 
                className="text-3xl font-bold text-[#0f172a] mb-8"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                Make a Reservation
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl flex items-center">
                  <CheckCircle size={24} className="mr-3" />
                  <div>
                    <p className="font-semibold">Reservation Request Sent!</p>
                    <p className="text-sm">We'll confirm your reservation shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-[#0f172a] font-medium mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`bg-white border-2 ${errors.name ? 'border-red-500' : 'border-[#e6e67c]'} focus:border-[#0f172a] rounded-lg`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#0f172a] font-medium mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`bg-white border-2 ${errors.email ? 'border-red-500' : 'border-[#e6e67c]'} focus:border-[#0f172a] rounded-lg`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-[#0f172a] font-medium mb-2 block">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={`bg-white border-2 ${errors.phone ? 'border-red-500' : 'border-[#e6e67c]'} focus:border-[#0f172a] rounded-lg`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-[#0f172a] font-medium mb-2 block">
                      Number of Guests
                    </Label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full h-10 px-3 bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests (Large Party)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date" className="text-[#0f172a] font-medium mb-2 block">
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`bg-white border-2 ${errors.date ? 'border-red-500' : 'border-[#e6e67c]'} focus:border-[#0f172a] rounded-lg`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-[#0f172a] font-medium mb-2 block">
                      Preferred Time *
                    </Label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full h-10 px-3 bg-white border-2 ${errors.time ? 'border-red-500' : 'border-[#e6e67c]'} focus:border-[#0f172a] rounded-lg outline-none transition-colors`}
                    >
                      <option value="">Select time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#0f172a] font-medium mb-2 block">
                    Special Requests
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any dietary restrictions, special occasions, or seating preferences?"
                    rows={4}
                    className="bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0f172a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e293b] transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Request Reservation
                </button>

                <p className="text-sm text-[#64748b] text-center">
                  By submitting, you agree to receive a confirmation call or email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-[#e6e67c]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin size={48} className="text-[#0f172a] mx-auto mb-4" />
            <h3 
              className="text-2xl font-bold text-[#0f172a] mb-2"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Find Us
            </h3>
            <p className="text-[#0f172a]/70">
              {restaurantInfo.address.street}, {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${restaurantInfo.address.street}, ${restaurantInfo.address.city}, ${restaurantInfo.address.state} ${restaurantInfo.address.zip}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#0f172a] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1e293b] transition-all duration-200"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

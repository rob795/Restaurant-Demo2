import React from 'react';
import { MapPin, Phone, Mail, Clock, LockKeyhole } from 'lucide-react';
import { restaurantInfo } from '../data/mock';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const ContactPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#ECEC75] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0f172a]/70 font-medium mb-4 tracking-wide uppercase">
            Contact Page Preview
          </p>
          <h1 
            className="text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Contact Demo
          </h1>
          <p className="text-xl text-[#0f172a]/80 max-w-2xl mx-auto">
            Explore a sample contact layout. This fictional restaurant cannot be contacted or booked.
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
                Sample Contact Details
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start bg-[#e6e67c] p-6 rounded-xl">
                  <MapPin size={24} className="text-[#0f172a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">Sample Address</h3>
                    <p className="text-[#0f172a]/70">
                      {restaurantInfo.address.street}<br />
                      {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-[#e6e67c] p-6 rounded-xl">
                  <Phone size={24} className="text-[#0f172a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">Sample Phone</h3>
                    <span className="text-[#0f172a]/70 break-words">
                      {restaurantInfo.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start bg-[#e6e67c] p-6 rounded-xl">
                  <Mail size={24} className="text-[#0f172a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">Sample Email</h3>
                    <span className="text-[#0f172a]/70 break-words">
                      {restaurantInfo.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <h2 
                className="text-3xl font-bold text-[#0f172a] mb-6"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                <Clock size={28} className="inline mr-3" />
                Sample Hours of Operation
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
                Reservation Layout Preview
              </h2>

              <p id="reservation-demo-notice" className="mb-6 p-4 bg-[#e6e67c] text-[#0f172a] rounded-xl leading-relaxed">
                Preview only. This form is disabled and not connected to a reservation service.
                No information can be entered or sent, and no booking will be made.
                Reservation systems are not included in the one-page $500 offer.
              </p>

              <fieldset disabled aria-describedby="reservation-demo-notice" className="space-y-6 min-w-0">
                <legend className="sr-only">Disabled reservation form preview</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-[#0f172a] font-medium mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Sample guest name"
                      className="bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#0f172a] font-medium mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="guest@example.com"
                      className="bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-[#0f172a] font-medium mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Sample phone number"
                      className="bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-[#0f172a] font-medium mb-2 block">
                      Number of Guests
                    </Label>
                    <select
                      id="guests"
                      name="guests"
                      defaultValue="2"
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
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      className="bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-[#0f172a] font-medium mb-2 block">
                      Preferred Time
                    </Label>
                    <select
                      id="time"
                      name="time"
                      className="w-full h-10 px-3 bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg outline-none transition-colors"
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
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#0f172a] font-medium mb-2 block">
                    Special Requests
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Sample special request (preview only)"
                    rows={4}
                    className="bg-white border-2 border-[#e6e67c] focus:border-[#0f172a] rounded-lg resize-none"
                  />
                </div>

                <button
                  type="button"
                  disabled
                  className="w-full bg-[#0f172a] text-white px-8 py-4 rounded-lg font-semibold cursor-not-allowed opacity-70 flex items-center justify-center"
                >
                  <LockKeyhole size={20} className="mr-2" />
                  Reservations Unavailable in Demo
                </button>

                <p className="text-sm text-[#64748b] text-center">
                  Design preview only. Please do not provide personal information.
                </p>
              </fieldset>
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
              Location Preview
            </h3>
            <p className="text-[#0f172a]/70">
              {restaurantInfo.address.street}, {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
            </p>
            <p className="mt-4 text-sm text-[#0f172a]/70">
              Sample location only. No real address or map is connected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

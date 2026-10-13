import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Phone, Mail, CheckCircle2, MessageCircle, PartyPopper, Clock, Heart, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const PartyEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: 'Turning 4',
    eventDate: '',
    dayType: 'weekday', // 'weekday' | 'weekend'
    timeSlot: 'Weekday Evening (4:00 PM – 7:00 PM)',
    packageName: 'Joyful Play Party (Up to 12 Kids)',
    guestCount: '10–15 Kids',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [mailtoGeneratedUrl, setMailtoGeneratedUrl] = useState('');
  const [whatsappGeneratedUrl, setWhatsappGeneratedUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Auto adjust default slot if day type changed
      if (name === 'dayType') {
        if (value === 'weekday') {
          updated.timeSlot = 'Weekday Evening (4:00 PM – 7:00 PM)';
        } else {
          updated.timeSlot = 'Weekend Evening (4:00 PM – 7:30 PM)';
        }
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Birthday Party Enquiry - ${formData.childName || 'Child'} (${formData.childAge}) - Slide & Glide Nagarabhavi`;
    
    const body = `Hi Slide & Glide Team,

I would like to enquire about hosting a birthday party at Slide & Glide Nagarabhavi.

--- PARTY DETAILS ---
• Parent Name: ${formData.parentName}
• Contact Phone: ${formData.phone}
• Parent Email: ${formData.email || 'Not provided'}
• Child's Name: ${formData.childName || 'Our Child'} (${formData.childAge})
• Event Date: ${formData.eventDate || 'Flexible / To be confirmed'}
• Day & Time Slot: ${formData.timeSlot} (${formData.dayType === 'weekday' ? 'Weekday booking' : 'Weekend booking'})
• Selected Package: ${formData.packageName}
• Estimated Number of Kids: ${formData.guestCount}

--- SPECIAL NOTES / REQUESTS ---
${formData.notes || 'None'}

${formData.dayType === 'weekday' ? '(Note: Excited about weekday play features including slides, swings, and obstacle area!)' : ''}

Please confirm availability, pricing, and next steps for booking.

Warm regards,
${formData.parentName}
Phone: ${formData.phone}`;

    const mailtoUrl = `mailto:slide.glide.0926@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoGeneratedUrl(mailtoUrl);

    const waText = `Hi Slide & Glide! I have submitted a birthday party enquiry for my child ${formData.childName || ''} (${formData.childAge}) on ${formData.eventDate || 'an upcoming date'} (${formData.timeSlot}). Package: ${formData.packageName}. Please share details!`;
    const waUrl = `https://wa.me/919538678201?text=${encodeURIComponent(waText)}`;
    setWhatsappGeneratedUrl(waUrl);

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div id="party-enquiry" className="mt-8 bg-white rounded-3xl p-5 sm:p-8 border border-violet-200 shadow-sm scroll-mt-20">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-bold border border-pink-200 mb-2">
          <PartyPopper className="w-3.5 h-3.5 text-pink-600" />
          <span>Direct Party Enquiry to slide.glide.0926@gmail.com</span>
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
          Plan Your Child's Dream Birthday in Nagarabhavi
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Fill out the basic details below. We'll receive your enquiry directly at <strong className="text-slate-900">slide.glide.0926@gmail.com</strong> and get back with complete pricing, inclusions, and slot availability.
        </p>
      </div>

      {/* Weekday Highlight Callout */}
      <div className="mb-6 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
        <span className="text-lg">🎈</span>
        <div>
          <p className="font-bold text-amber-950">
            Planning on a Weekday? Enjoy Exclusive Fun!
          </p>
          <p className="text-amber-800 text-[11px] sm:text-xs mt-0.5">
            On weekdays, party kids enjoy unhurried playtime across our vibrant <strong>slides and swings along with the multi-level obstacle area</strong>, trampoline beds, and toddler foam zone with maximum space and flexibility.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-violet-50/80 border border-violet-200 text-center space-y-4 animate-in fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-['Fredoka',sans-serif]">
              Enquiry Prepared for slide.glide.0926@gmail.com!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
              Your default email application has opened with the formatted party enquiry. If you didn't see the email prompt, you can click below to send it or message us on WhatsApp for an instant response.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={mailtoGeneratedUrl}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Open Email to Send</span>
            </a>

            <a
              href={whatsappGeneratedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Send via WhatsApp Instantly</span>
            </a>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-300 transition-colors"
            >
              Edit Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Parent Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Parent / Guardian Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="parentName"
                required
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. Deepika Ravi"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone / WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 97397 80837"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              />
            </div>

            {/* Child Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Birthday Child's Name
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="e.g. Aarav"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              />
            </div>

            {/* Child Age */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Turning Age
              </label>
              <select
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              >
                <option value="Turning 1 (Toddler)">Turning 1 Year (Toddler)</option>
                <option value="Turning 2 (Toddler)">Turning 2 Years (Toddler)</option>
                <option value="Turning 3 (Toddler)">Turning 3 Years (Toddler)</option>
                <option value="Turning 4">Turning 4 Years</option>
                <option value="Turning 5">Turning 5 Years</option>
                <option value="Turning 6">Turning 6 Years</option>
                <option value="Turning 7">Turning 7 Years</option>
                <option value="Turning 8">Turning 8 Years</option>
                <option value="Turning 9">Turning 9 Years</option>
                <option value="Turning 10">Turning 10 Years</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Party Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              />
            </div>

            {/* Weekday vs Weekend */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Day Preference
              </label>
              <select
                name="dayType"
                value={formData.dayType}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              >
                <option value="weekday">Weekday (Includes slides & swings + obstacle area fun)</option>
                <option value="weekend">Weekend (Saturday / Sunday)</option>
              </select>
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Time Slot
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              >
                {formData.dayType === 'weekday' ? (
                  <>
                    <option value="Weekday Morning (11:00 AM – 2:00 PM)">Weekday Morning (11:00 AM – 2:00 PM)</option>
                    <option value="Weekday Afternoon (1:00 PM – 4:00 PM)">Weekday Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="Weekday Evening (4:00 PM – 7:00 PM)">Weekday Evening (4:00 PM – 7:00 PM)</option>
                    <option value="Weekday Late Evening (6:00 PM – 9:00 PM)">Weekday Late Evening (6:00 PM – 9:00 PM)</option>
                  </>
                ) : (
                  <>
                    <option value="Weekend Morning (11:00 AM – 2:00 PM)">Weekend Morning (11:00 AM – 2:00 PM)</option>
                    <option value="Weekend Afternoon (1:30 PM – 4:30 PM)">Weekend Afternoon (1:30 PM – 4:30 PM)</option>
                    <option value="Weekend Evening (4:30 PM – 7:30 PM)">Weekend Evening (4:30 PM – 7:30 PM)</option>
                    <option value="Weekend Late Evening (6:30 PM – 9:00 PM)">Weekend Late Evening (6:30 PM – 9:00 PM)</option>
                  </>
                )}
              </select>
            </div>

            {/* Number of Kids */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Estimated Number of Kids
              </label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              >
                <option value="Up to 10 Kids">Up to 10 Kids (Small Group)</option>
                <option value="10–15 Kids">10–15 Kids (Most Popular)</option>
                <option value="15–25 Kids">15–25 Kids (Grand Party)</option>
                <option value="25–40 Kids">25–40 Kids (Large Celebration)</option>
                <option value="40+ Kids">40+ Kids (Exclusive Arena Hire)</option>
              </select>
            </div>

            {/* Package Choice */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Package Preference
              </label>
              <select
                name="packageName"
                value={formData.packageName}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              >
                <option value="Joyful Play Party (Up to 12 Kids)">Joyful Play Party (Up to 12 Kids • 90m play + 30m celebration)</option>
                <option value="Grand Adventure Party (12–25 Kids)">Grand Adventure Party (12–25 Kids • 2h play + 45m celebration)</option>
                <option value="Exclusive Arena Hire (Private Venue)">Exclusive Arena Hire (Complete private facility)</option>
                <option value="Custom Party Request">Custom / Sibling Joint Party</option>
              </select>
            </div>

            {/* Special Notes */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Any Special Notes, Themes, or Refreshment Inquiries?
              </label>
              <textarea
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Mention any food preferences, specific decor themes, or toddler age requirements..."
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
              />
            </div>

          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 text-center sm:text-left">
              📩 Sends directly to <strong>slide.glide.0926@gmail.com</strong>. We reply within 2–4 hours.
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Party Enquiry</span>
            </button>
          </div>
        </form>
      )}

    </div>
  );
};

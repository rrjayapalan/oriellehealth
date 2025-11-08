export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="text-2xl font-serif text-teal tracking-wide">
          ORIELLE HEALTH SERVICES
        </div>
        <div className="space-x-8 text-teal font-medium">
          <a href="#home" className="hover:text-gold">Home</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </div>
        <a
          href="https://wa.me/60172740741"
          target="_blank"
          className="bg-gold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition"
        >
          WhatsApp Us
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center py-40 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise via-white to-teal opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl">
         <h1 className="text-red-600 text-5xl font-bold">
            Clinician-led on-site wound care, clinical and nursing care
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Professional, evidence-based care brought directly to you — delivered
            with compassion, precision, and trust.
          </p>
          <a
            href="https://wa.me/60172740741"
            target="_blank"
            className="bg-gold text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-ivory text-center">
        <h2 className="text-4xl font-serif mb-14 text-teal">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {/* Wound & Clinical Care */}
          <div className="bg-white rounded-2xl shadow-lg p-10 text-left hover:shadow-xl transition">
            <h3 className="text-2xl font-serif mb-6 text-gold border-b pb-2">
              Wound & Clinical Care Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-teal">
              <li>Professional wound care</li>
              <li>Complex wound management</li>
              <li>Modern dressing methods</li>
              <li>Wound debridement</li>
              <li>Post-operative wound care</li>
              <li>Removal of sutures</li>
              <li>Nutritional consultation for wound healing</li>
              <li>Pressure injury prevention</li>
            </ul>
          </div>

          {/* Home Nursing Services */}
          <div className="bg-white rounded-2xl shadow-lg p-10 text-left hover:shadow-xl transition">
            <h3 className="text-2xl font-serif mb-6 text-gold border-b pb-2">
              Home Nursing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-teal">
              <li>Urinary catheter exchange</li>
              <li>Change of urine bag</li>
              <li>Feeding / nasogastric tube exchange</li>
              <li>Tracheostomy wound dressing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 text-center bg-gradient-to-br from-teal via-turquoise to-teal text-white"
      >
        <h2 className="text-4xl font-serif mb-8">Contact Us</h2>
        <p className="mb-4 text-white/90">
          On-site services available by appointment only.
        </p>
        <p className="mb-2">
          <span className="font-semibold text-gold">WhatsApp:</span>{" "}
          <a
            href="https://wa.me/60172740741"
            className="underline hover:text-gold"
          >
            +6017 274 0741
          </a>
        </p>
        <p>
          <span className="font-semibold text-gold">Email:</span>{" "}
          <a
            href="mailto:oriellehealthservices@gmail.com"
            className="underline hover:text-gold"
          >
            oriellehealthservices@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white text-center text-sm text-teal border-t">
        © {new Date().getFullYear()} Orielle Health Services. All rights reserved.
      </footer>
    </main>
  );
}

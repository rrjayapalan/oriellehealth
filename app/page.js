export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="text-2xl font-serif text-teal">ORIELLE HEALTH SERVICES</div>
        <div className="space-x-8 text-teal font-medium">
          <a href="#home" className="hover:text-gold">Home</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </div>
        <a
          href="https://wa.me/60172740741"
          target="_blank"
          className="bg-gold text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          WhatsApp Us
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-32 px-4 bg-hero-gradient text-white"
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Clinician-led on-site wound care, clinical and nursing care
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Professional, evidence-based care brought directly to you.
        </p>
        <a
          href="https://wa.me/60172740741"
          target="_blank"
          className="bg-gold text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition"
        >
          Book Appointment
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-serif mb-10 text-teal">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {/* Wound & Clinical Care */}
          <div className="p-6 bg-ivory rounded-xl shadow-md">
            <h3 className="text-2xl font-serif mb-4 text-gold">
              Wound & Clinical Care Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
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

          {/* Home Nursing */}
          <div className="p-6 bg-ivory rounded-xl shadow-md">
            <h3 className="text-2xl font-serif mb-4 text-gold">
              Home Nursing Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Urinary catheter exchange</li>
              <li>Change of urine bag</li>
              <li>Feeding/nasogastric tube exchange</li>
              <li>Tracheostomy wound dressing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-teal text-white text-center">
        <h2 className="text-3xl font-serif mb-6">Contact Us</h2>
        <p className="mb-4">On-site services by appointment only.</p>
        <p>
          WhatsApp:{" "}
          <a href="https://wa.me/60172740741" className="text-gold underline">
            +6017 274 0741
          </a>
        </p>
        <p>Email: oriellehealthservices@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white text-center text-sm text-teal border-t">
        © {new Date().getFullYear()} Orielle Health Services. All rights reserved.
      </footer>
    </main>
  );
}

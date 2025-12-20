import Image from "next/image";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hubungi Kami
          </h1>
          <p className="text-gray-600 mb-6">
            Punya pertanyaan atau ingin bekerja sama? segera hubungi kamu! 
            Silakan hubungi kami melalui form berikut.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="nama@email.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                rows={4}
                placeholder="Tulis pesan anda..."
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center justify-center bg-indigo-600">
          <div className="text-center text-white p-8">
            <Image
              src="/contact.svg"
              alt="Contact Illustration"
              width={250}
              height={250}
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">
              Kami Siap Membantu
            </h2>
            <p className="text-indigo-100 text-sm mt-2">
              Respon cepat & solusi terbaik untuk anda
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

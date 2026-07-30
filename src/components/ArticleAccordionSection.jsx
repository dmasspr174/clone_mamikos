import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ArticleAccordionSection() {
  const articleFeatures = [
    {
      letter: "a.",
      title: "Fitur Pencarian",
      description:
        "Di kolom pencarian, kamu bisa cari kos di sekitarmu atau kos di seluruh daerah di Indonesia dengan memasukkan keyword, seperti kos dekat Kampus/Universitas di masing-masing kota, cari kos di Jogja, Depok, Jakarta, Surabaya, Bandung, dan kota besar lainnya atau cari kos di sekitar lokasi saya saat ini.",
    },
    {
      letter: "b.",
      title: "Filter Pencarian",
      description:
        "Cari kos berdasarkan fasilitas kos yang kamu mau, lebih mudah dengan filter berdasarkan Kos AC, Kos Kamar mandi dalam, Kos Wifi. Bisa juga pilih kos dengan tipe kos, mulai dari Kos Harian, Kos Bulanan hingga Kos Tahunan. Mau cari Kos Bebas, Kos Pasutri, Kos Putra, Kos Putri, Kos Campur juga bisa.",
    },
    {
      letter: "c.",
      title: "Chat dengan Penyewa",
      description:
        "Terhubung langsung dengan pemilik kos dan bisa bertanya lebih lanjut mengenai info kos melalui fitur chat di Mamikos.",
    },
    {
      letter: "d.",
      title: "Sewa Langsung via Mamikos",
      description:
        "Bisa langsung mengajukan sewa kos di aplikasi atau website Mamikos. Bahkan, kamu bisa mulai sewa kos dari 3 bulan sebelum masuk kosan. Transaksi lebih aman, tanpa takut kamarnya penuh keduluan orang lain.",
    },
    {
      letter: "e.",
      title: "Virtual Tour",
      description:
        "Virtual Tour Mamikos adalah media foto lingkungan kos dalam 360° yang diperuntukkan untuk kamu, para pencari kos, agar dapat mengetahui kondisi lingkungan kos secara detail tanpa harus survei langsung. Fitur ini cocok jadi andalanmu yang butuh kosan tapi tidak punya waktu untuk survei langsung, karena fitur ini menampilkan keadaan kos secara lengkap dari berbagai sudut.",
    },
    {
      letter: "f.",
      title: "Pembayaran via Mamikos",
      description:
        "Bayar kosan anti ribet, cashless, dan jaminan aman, dengan beragam pilihan metode pembayaran. Nikmati promo-promo menarik yang diselenggarakan secara berkala untuk membantu kamu ngekos lebih hemat.",
    },
    {
      letter: "g.",
      title: "MamiPoin",
      description:
        "Sebagai wujud terima kasih, Mamikos menghadirkan program loyalti melalui MamiPoin. Anak kos bisa mendapatkan poin sebagai cashback setiap melakukan pembayaran kos dan dapat dikumpulkan untuk digunakan sebagai tambahan diskon di pembayaran kos selanjutnya. Pemilik kos juga akan mendapatkan MamiPoin setiap melakukan aktivitas di Mamikos dan dapat dikumpulkan untuk ditukar menjadi beragam hadiah menarik atau tambahan diskon di pembayaran paket Mamikos GoldPlus.",
    },
    {
      letter: "h.",
      title: "Kos Review",
      description:
        "Lihat review dari para penghuni kos agar kamu semakin yakin untuk sewa kos. Kamu juga bisa tulis pengalaman kamu selama ngekos untuk menambah info kos tersebut.",
    },
    {
      letter: "i.",
      title: "Favorit",
      description:
        "Ketemu dengan kos idaman, bisa disimpan dulu melalui fitur favorit kos. Kos yang sudah kamu simpan, dapat kamu sewa di kemudian hari.",
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-10 lg:py-14 select-none">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Main Article Header & Description */}
        <div className="space-y-3 max-w-5xl mx-auto text-slate-800">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center tracking-tight text-slate-900">
            Mamikos - Aplikasi Anak Kos No. 1 di Indonesia
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify lg:text-center font-normal">
            Mamikos memanfaatkan teknologi untuk berkembang dari aplikasi cari
            kos menjadi aplikasi yang memudahkan calon anak kos untuk booking
            properti kos dan juga melakukan pembayaran kos. Saat ini kami
            memiliki lebih dari 2 juta kamar kos yang tersebar di lebih dari 140
            kota di seluruh Indonesia. Mamikos juga menyediakan layanan
            manajemen properti, bernama Singgahsini dan Apik, untuk menjawab
            kebutuhan calon penghuni yang menginginkan kos eksklusif atau kos
            murah. Mamikos berusaha untuk bisa terus menyajikan daftar rumah kos
            dengan data ketersediaan kamar yang akurat, fasilitas kos
            terperinci, dilengkapi dengan foto serta detail harga kos, dan
            kemudahan survei via fitur virtual tour agar calon penghuni
            mendapatkan kenyamanan dalam proses pencarian dan booking kos.
          </p>
        </div>

        {/* Shadcn Accordion for 'Fitur yang dapat dimanfaatkan di Mamikos' */}
        <div className="max-w-5xl mx-auto pt-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                Fitur yang dapat dimanfaatkan di Mamikos
              </AccordionTrigger>

              <AccordionContent className="pt-4 space-y-5 text-slate-700">
                {articleFeatures.map((item) => (
                  <div key={item.letter} className="flex items-start gap-3">
                    <span className="font-bold text-slate-800 text-xs sm:text-sm shrink-0 min-w-[20px]">
                      {item.letter}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const questions = [
  { id: 1, axis: "EI", positive: "E", text: "Saya merasa berenergi setelah banyak berinteraksi dengan orang baru." },
  { id: 2, axis: "EI", positive: "I", text: "Sebelum bicara, saya biasanya butuh waktu untuk memikirkan isi kepala saya lebih dulu." },
  { id: 3, axis: "EI", positive: "E", text: "Saya lebih hidup ketika diskusi berlangsung ramai dan spontan." },
  { id: 4, axis: "EI", positive: "I", text: "Waktu sendirian adalah cara tercepat saya untuk memulihkan energi." },
  { id: 5, axis: "EI", positive: "E", text: "Saya cukup mudah memulai obrolan di lingkungan baru." },
  { id: 6, axis: "EI", positive: "I", text: "Saya lebih nyaman mengamati situasi daripada langsung jadi pusat perhatian." },
  { id: 7, axis: "EI", positive: "E", text: "Jadwal yang penuh interaksi sosial biasanya terasa menyenangkan bagi saya." },
  { id: 8, axis: "EI", positive: "I", text: "Setelah hari yang sibuk, saya cenderung mencari ruang tenang dulu sebelum bertemu orang lagi." },
  { id: 9, axis: "EI", positive: "E", text: "Saya berpikir lebih jernih ketika bisa memantulkan ide secara langsung bersama orang lain." },
  { id: 10, axis: "EI", positive: "I", text: "Banyak ide terbaik saya justru muncul saat saya sedang sendiri." },
  { id: 11, axis: "EI", positive: "E", text: "Saat butuh semangat, saya cenderung menghubungi orang lain lebih dulu." },
  { id: 12, axis: "EI", positive: "I", text: "Saya sengaja menjaga lingkaran sosial tetap kecil tapi dekat." },
  { id: 13, axis: "EI", positive: "E", text: "Saya menikmati keputusan cepat yang lahir dari obrolan langsung." },
  { id: 14, axis: "EI", positive: "I", text: "Saya lebih suka menulis pesan yang terstruktur daripada menerima telepon mendadak." },

  { id: 15, axis: "SN", positive: "S", text: "Saya lebih percaya pada fakta konkret daripada firasat yang belum teruji." },
  { id: 16, axis: "SN", positive: "N", text: "Saya sering membayangkan kemungkinan masa depan yang belum terlihat sekarang." },
  { id: 17, axis: "SN", positive: "S", text: "Saya nyaman mengikuti cara yang sudah terbukti berhasil." },
  { id: 18, axis: "SN", positive: "N", text: "Saya tertarik mencari pola besar di balik detail kecil." },
  { id: 19, axis: "SN", positive: "S", text: "Instruksi langkah demi langkah membuat saya lebih tenang saat mengerjakan sesuatu." },
  { id: 20, axis: "SN", positive: "N", text: "Saya sering melompat ke ide baru bahkan ketika detailnya belum lengkap." },
  { id: 21, axis: "SN", positive: "S", text: "Saya biasanya fokus pada apa yang nyata dan terjadi di depan mata." },
  { id: 22, axis: "SN", positive: "N", text: "Saya suka menghubungkan konsep dari bidang yang berbeda untuk menemukan insight baru." },
  { id: 23, axis: "SN", positive: "S", text: "Teori yang terlalu abstrak sering terasa kurang menarik bagi saya." },
  { id: 24, axis: "SN", positive: "N", text: "Saya sering menangkap makna tersembunyi atau simbolis dari suatu situasi." },
  { id: 25, axis: "SN", positive: "S", text: "Saat mengambil keputusan, saya banyak mengandalkan pengalaman langsung." },
  { id: 26, axis: "SN", positive: "N", text: "Saya lebih tertarik pada visi jangka panjang daripada cara yang sedang dipakai sekarang." },
  { id: 27, axis: "SN", positive: "S", text: "Saya menikmati pekerjaan yang praktis, konkret, dan bisa segera terlihat hasilnya." },
  { id: 28, axis: "SN", positive: "N", text: "Ide yang liar, eksploratif, dan belum umum justru membuat saya bersemangat." },

  { id: 29, axis: "TF", positive: "T", text: "Dalam konflik, saya cenderung mengutamakan logika objektif." },
  { id: 30, axis: "TF", positive: "F", text: "Keputusan saya sering dipengaruhi oleh dampaknya pada perasaan orang lain." },
  { id: 31, axis: "TF", positive: "T", text: "Saya nyaman memberi kritik langsung selama itu membantu memperbaiki hasil." },
  { id: 32, axis: "TF", positive: "F", text: "Menjaga harmoni hubungan kadang lebih penting daripada memilih opsi yang paling efisien." },
  { id: 33, axis: "TF", positive: "T", text: "Saya cukup mudah memisahkan masalah dari orang yang terlibat di dalamnya." },
  { id: 34, axis: "TF", positive: "F", text: "Saya sering mempertimbangkan nilai personal sebelum menyetujui sesuatu." },
  { id: 35, axis: "TF", positive: "T", text: "Bagi saya, adil berarti aturan yang konsisten untuk semua orang." },
  { id: 36, axis: "TF", positive: "F", text: "Bagi saya, adil berarti memahami kondisi unik setiap orang." },
  { id: 37, axis: "TF", positive: "T", text: "Saya menghargai debat yang tajam, jelas, dan langsung ke inti." },
  { id: 38, axis: "TF", positive: "F", text: "Saya berusaha memilih kata-kata yang menjaga orang lain tetap nyaman." },
  { id: 39, axis: "TF", positive: "T", text: "Dalam kerja tim, hasil biasanya lebih penting bagi saya daripada suasana." },
  { id: 40, axis: "TF", positive: "F", text: "Saya sulit nyaman dengan keputusan yang terasa benar tetapi terlalu dingin." },
  { id: 41, axis: "TF", positive: "T", text: "Analisis yang kuat lebih meyakinkan saya daripada niat baik saja." },
  { id: 42, axis: "TF", positive: "F", text: "Saya cukup cepat menangkap kebutuhan emosional orang di sekitar." },

  { id: 43, axis: "JP", positive: "J", text: "Saya merasa lebih tenang kalau rencana sudah jelas sejak awal." },
  { id: 44, axis: "JP", positive: "P", text: "Saya suka membiarkan beberapa pilihan tetap terbuka selama mungkin." },
  { id: 45, axis: "JP", positive: "J", text: "Deadline pribadi membantu saya tetap fokus." },
  { id: 46, axis: "JP", positive: "P", text: "Saya cukup sering bekerja mepet deadline tetapi tetap nyaman dengan ritme itu." },
  { id: 47, axis: "JP", positive: "J", text: "Meja, arsip, atau to-do list yang rapi membantu saya berpikir jernih." },
  { id: 48, axis: "JP", positive: "P", text: "Saya relatif mudah beradaptasi ketika rencana berubah mendadak." },
  { id: 49, axis: "JP", positive: "J", text: "Saya lebih suka menuntaskan satu hal sebelum beralih ke hal lain." },
  { id: 50, axis: "JP", positive: "P", text: "Terlalu banyak aturan membuat saya cepat kehilangan semangat." },
  { id: 51, axis: "JP", positive: "J", text: "Saya menikmati membuat checklist lalu menandai progresnya satu per satu." },
  { id: 52, axis: "JP", positive: "P", text: "Spontanitas membuat hidup terasa lebih seru bagi saya." },
  { id: 53, axis: "JP", positive: "J", text: "Saya kurang nyaman kalau keputusan penting digantung terlalu lama." },
  { id: 54, axis: "JP", positive: "P", text: "Saya senang mengeksplorasi dulu sebelum memutuskan format akhir." },
  { id: 55, axis: "JP", positive: "J", text: "Rutinitas yang stabil cukup membantu saya menjaga produktivitas." },
  { id: 56, axis: "JP", positive: "P", text: "Sering kali saya menemukan cara terbaik justru saat proses sudah berjalan." }
];

const axisMeta = {
  EI: {
    letters: ["E", "I"],
    short: "E / I",
    label: "Energi sosial",
    support: "Lihat kebiasaanmu sehari-hari: apakah energi lebih sering tumbuh dari interaksi atau ruang pribadi?"
  },
  SN: {
    letters: ["S", "N"],
    short: "S / N",
    label: "Pemrosesan informasi",
    support: "Pertimbangkan cara alammu menyerap informasi: lebih nyaman dengan fakta konkret atau pola besar dan kemungkinan?"
  },
  TF: {
    letters: ["T", "F"],
    short: "T / F",
    label: "Pengambilan keputusan",
    support: "Fokus pada apa yang biasanya paling kuat memengaruhi pilihanmu: logika objektif atau nilai dan dampak emosional?"
  },
  JP: {
    letters: ["J", "P"],
    short: "J / P",
    label: "Gaya struktur",
    support: "Bayangkan ritme harianmu: lebih nyaman dengan rencana yang rapi atau fleksibilitas yang bisa berubah?"
  }
};

const typeProfiles = {
  INTJ: {
    archetype: "Strategist Visioner",
    summary: "Kamu cenderung sistematis, berpikir jauh ke depan, dan suka membangun kerangka yang rapi untuk mencapai tujuan. Biasanya kamu nyaman bekerja mandiri, lalu muncul dengan ide yang matang dan solid.",
    workStyle: "Kamu bekerja paling baik saat punya target yang jelas, ruang berpikir mendalam, dan kebebasan menyusun strategi sendiri. Kamu kuat dalam memetakan arah besar sekaligus mengoptimalkan langkah penting.",
    communication: "Gaya komunikasimu biasanya ringkas, tajam, dan substansial. Kamu lebih suka percakapan yang bermakna daripada small talk panjang.",
    strengths: ["Visioner dan berpikir beberapa langkah ke depan.", "Cepat melihat pola, kelemahan sistem, dan peluang perbaikan.", "Mandiri, fokus, dan tahan menghadapi proyek kompleks."],
    watchouts: ["Bisa terkesan terlalu dingin atau sulit dibaca orang lain.", "Kadang cepat frustrasi pada proses yang terasa tidak efisien.", "Perlu sengaja memberi ruang bagi masukan yang lebih emosional atau praktis."]
  },
  INTP: {
    archetype: "Analyst Konseptual",
    summary: "Kamu biasanya terdorong oleh rasa ingin tahu, senang memahami cara kerja sesuatu, dan menikmati eksplorasi ide yang dalam. Kamu cenderung melihat banyak kemungkinan sebelum mengunci satu jawaban.",
    workStyle: "Kamu unggul dalam analisis, riset, pemecahan masalah abstrak, dan membongkar asumsi lama. Lingkungan yang memberi otonomi tinggi biasanya paling cocok untukmu.",
    communication: "Kamu sering berbicara setelah benar-benar memikirkan isinya. Saat topiknya menarik, kamu bisa sangat detail, presisi, dan kreatif.",
    strengths: ["Cepat membaca pola logis dan struktur konsep.", "Punya rasa ingin tahu tinggi dan senang mendalami akar masalah.", "Fleksibel dalam mengeksplorasi banyak pendekatan sebelum memilih."],
    watchouts: ["Bisa terlalu lama berada di tahap analisis tanpa eksekusi.", "Kadang kurang sabar dengan detail administratif atau rutinitas.", "Perlu menjaga supaya ide brilianmu juga bisa dipahami orang lain."]
  },
  ENTJ: {
    archetype: "Builder Strategis",
    summary: "Kamu cenderung tegas, berorientasi hasil, dan nyaman memimpin arah ketika situasinya belum tertata. Kamu biasanya cepat melihat apa yang perlu diputuskan dan bagaimana sistem bisa dibuat lebih efektif.",
    workStyle: "Kamu kuat di perencanaan, eksekusi, dan koordinasi menuju target besar. Tantangan, kecepatan, dan tanggung jawab sering membuat energimu justru naik.",
    communication: "Komunikasimu lugas, langsung, dan penuh arah. Kamu suka diskusi yang fokus pada solusi, bukan berputar terlalu lama di masalah.",
    strengths: ["Cepat mengambil keputusan dalam situasi ambigu.", "Mampu menyusun strategi dan mendorong orang bergerak.", "Punya standar tinggi pada kualitas, efektivitas, dan perkembangan."],
    watchouts: ["Bisa terlihat terlalu dominan bila tidak mengatur tempo bicara.", "Kadang mengabaikan ritme emosional tim demi target.", "Perlu memberi ruang lebih untuk proses orang yang berbeda gaya."]
  },
  ENTP: {
    archetype: "Explorer Ide",
    summary: "Kamu biasanya antusias dengan kemungkinan baru, suka memantik ide, dan menikmati permainan intelektual. Kamu cenderung lincah berpindah dari satu konsep ke konsep lain tanpa cepat bosan.",
    workStyle: "Kamu berkembang di lingkungan yang dinamis, terbuka, dan memberi ruang eksperimen. Proyek baru, brainstorming, dan tantangan tak biasa sering jadi bahan bakarmu.",
    communication: "Gaya komunikasimu energik, spontan, dan penuh improvisasi. Kamu senang adu gagasan dan sering memunculkan sudut pandang tak terduga.",
    strengths: ["Cepat menemukan peluang, alternatif, dan ide segar.", "Nyaman menghadapi perubahan dan problem yang belum punya pola baku.", "Pandai memantik diskusi yang hidup dan kreatif."],
    watchouts: ["Bisa terlalu cepat pindah topik sebelum ide matang dieksekusi.", "Kadang menyepelekan detail follow-up dan konsistensi.", "Perlu membedakan kapan debat itu produktif dan kapan melelahkan orang lain."]
  },
  INFJ: {
    archetype: "Guide Visioner",
    summary: "Kamu cenderung reflektif, peka, dan punya dorongan memahami makna yang lebih dalam dari perilaku manusia. Kamu sering terlihat tenang, tetapi isi pikiranmu kaya dan terarah.",
    workStyle: "Kamu cocok di peran yang menghubungkan visi, nilai, dan dampak jangka panjang. Saat merasa pekerjaannya punya makna, fokusmu bisa sangat kuat dan konsisten.",
    communication: "Komunikasimu biasanya hangat, terukur, dan penuh niat baik. Kamu cenderung mendengar dengan serius lalu merespons secara personal dan bermakna.",
    strengths: ["Peka terhadap dinamika orang dan arah masa depan.", "Mampu memadukan empati dengan pemikiran strategis.", "Konsisten pada nilai dan tujuan yang dianggap penting."],
    watchouts: ["Bisa menyimpan terlalu banyak beban emosional sendiri.", "Kadang perfeksionis pada idealisme atau standar internal.", "Perlu menjaga energi sosial agar tidak habis diam-diam."]
  },
  INFP: {
    archetype: "Idealist Reflektif",
    summary: "Kamu biasanya lembut, autentik, dan banyak digerakkan oleh nilai personal. Kamu senang ruang yang memberi kebebasan untuk mengeksplorasi makna, identitas, dan kreativitas.",
    workStyle: "Kamu bekerja paling baik ketika tugas terasa selaras dengan hati nurani dan memberi ruang ekspresi. Lingkungan yang terlalu kaku sering terasa membatasi alur terbaikmu.",
    communication: "Kamu cenderung hangat, penuh pertimbangan, dan memilih kata dengan hati-hati. Saat merasa aman, kamu bisa sangat jujur dan dalam.",
    strengths: ["Autentik, empatik, dan mudah melihat nilai unik orang lain.", "Kreatif dalam membangun ide yang personal dan bermakna.", "Tahan mengejar hal yang benar-benar diyakini penting."],
    watchouts: ["Bisa sulit bertindak cepat jika nilai batinmu masih belum selaras.", "Kadang terlalu keras pada diri sendiri saat hasil belum sesuai ideal.", "Perlu menjaga batas agar tidak terlalu menyerap emosi sekitar."]
  },
  ENFJ: {
    archetype: "Catalyst Sosial",
    summary: "Kamu cenderung hangat, ekspresif, dan alami dalam membaca kebutuhan orang. Kamu sering terdorong menggerakkan orang lain menuju tujuan yang terasa lebih besar dari sekadar target biasa.",
    workStyle: "Kamu kuat di peran yang menggabungkan arah, relasi, dan pengaruh positif. Saat tim terasa terhubung, kamu biasanya bisa mengangkat performa bersama dengan baik.",
    communication: "Komunikasimu persuasif, ramah, dan mudah membangun kedekatan. Kamu pandai membuat orang merasa didengar sekaligus diarahkan.",
    strengths: ["Mudah membaca dinamika kelompok dan membangun kepercayaan.", "Pandai memotivasi, mengarahkan, dan menyatukan energi tim.", "Punya kombinasi empati dan visi yang kuat."],
    watchouts: ["Bisa terlalu memikul perasaan atau ekspektasi orang lain.", "Kadang sulit berkata tidak demi menjaga harmoni.", "Perlu memastikan keputusan tetap realistis, bukan hanya terasa baik." ]
  },
  ENFP: {
    archetype: "Inspirer Kreatif",
    summary: "Kamu biasanya penuh energi, rasa penasaran, dan semangat melihat kemungkinan baru di sekitar. Kamu senang koneksi yang hidup, ide yang berkembang, dan ruang untuk jadi versi diri yang autentik.",
    workStyle: "Kamu berkembang di lingkungan yang fleksibel, kolaboratif, dan tidak terlalu membatasi kreativitas. Proyek dengan unsur inovasi dan manusia biasanya sangat cocok untukmu.",
    communication: "Gaya komunikasimu hangat, spontan, dan mudah menular. Kamu sering membuat suasana jadi hidup sekaligus personal.",
    strengths: ["Kreatif dan cepat melihat banyak potensi sekaligus.", "Mudah membangun koneksi dan antusiasme di sekitar.", "Fleksibel, adaptif, dan terbuka pada eksperimen baru."],
    watchouts: ["Bisa sulit menjaga konsistensi saat semangat awal mulai turun.", "Kadang terlalu banyak membuka kemungkinan tanpa menutup satu per satu.", "Perlu sistem sederhana agar ide tidak berhenti di inspirasi saja."]
  },
  ISTJ: {
    archetype: "Guardian Terstruktur",
    summary: "Kamu cenderung tenang, dapat diandalkan, dan menghargai kepastian yang dibangun lewat proses yang rapi. Kamu biasanya nyaman ketika peran, standar, dan ekspektasi sudah jelas.",
    workStyle: "Kamu kuat dalam konsistensi, akurasi, dan tanggung jawab jangka panjang. Proyek yang butuh ketelitian, stabilitas, dan tindak lanjut biasanya sangat cocok untukmu.",
    communication: "Komunikasimu lugas, sopan, dan tidak berlebihan. Kamu cenderung lebih suka menunjukkan komitmen lewat tindakan nyata daripada banyak kata.",
    strengths: ["Disiplin, teliti, dan tahan menjaga kualitas dalam jangka panjang.", "Punya rasa tanggung jawab tinggi terhadap komitmen.", "Nyaman bekerja dengan sistem yang jelas dan dapat diandalkan."],
    watchouts: ["Bisa terasa kaku ketika perubahan datang terlalu cepat.", "Kadang sulit percaya pada ide baru yang belum teruji.", "Perlu sengaja memberi ruang untuk improvisasi yang tetap sehat."]
  },
  ISFJ: {
    archetype: "Supporter Andal",
    summary: "Kamu biasanya hangat, penuh perhatian, dan suka membantu dengan cara yang praktis serta nyata. Kamu sering jadi orang yang diam-diam menjaga kestabilan banyak hal di sekelilingmu.",
    workStyle: "Kamu cocok di peran yang butuh ketelitian, kepedulian, dan tindak lanjut yang konsisten. Ketika merasa dibutuhkan dan dihargai, loyalitas serta kualitas kerjamu biasanya sangat kuat.",
    communication: "Kamu berkomunikasi dengan halus, sopan, dan penuh empati. Kamu cenderung peka membaca kebutuhan kecil yang sering luput dari perhatian orang lain.",
    strengths: ["Teliti, loyal, dan dapat diandalkan untuk hal penting.", "Peka pada kebutuhan orang dan detail operasional.", "Membantu menjaga suasana tetap stabil dan aman."],
    watchouts: ["Bisa terlalu mendahulukan kebutuhan orang lain daripada diri sendiri.", "Kadang sulit menyampaikan ketidaknyamanan secara langsung.", "Perlu menjaga batas agar tidak kewalahan memikul semuanya sendirian."]
  },
  ESTJ: {
    archetype: "Executor Tegas",
    summary: "Kamu cenderung praktis, tegas, dan suka melihat sesuatu bergerak menuju hasil yang jelas. Kamu biasanya nyaman mengambil kendali ketika situasi butuh struktur, keputusan, dan tindak lanjut cepat.",
    workStyle: "Kamu kuat di organisasi, eksekusi, dan menjaga standar tetap berjalan. Proyek besar dengan target, tenggat, dan pembagian peran yang jelas sering terasa natural bagimu.",
    communication: "Gaya komunikasimu langsung, tegas, dan berorientasi aksi. Kamu suka hal yang jelas, konkret, dan tidak bertele-tele.",
    strengths: ["Sigap mengubah rencana jadi tindakan nyata.", "Pandai menata proses, peran, dan prioritas.", "Tahan menghadapi tanggung jawab dan tekanan operasional."],
    watchouts: ["Bisa terlalu cepat menilai cara lain sebagai tidak efektif.", "Kadang kurang sabar pada ritme orang yang lebih lambat atau lebih reflektif.", "Perlu menyisakan ruang untuk empati dan eksperimen baru."]
  },
  ESFJ: {
    archetype: "Harmonizer Komunal",
    summary: "Kamu biasanya ramah, kooperatif, dan cepat peka pada kebutuhan kelompok. Kamu sering senang ketika bisa membuat suasana tetap hangat, tertata, dan saling mendukung.",
    workStyle: "Kamu berkembang saat peranmu terasa berguna bagi banyak orang dan hasil kerjamu punya dampak langsung. Kamu biasanya kuat di koordinasi, layanan, dan menjaga ritme tim tetap stabil.",
    communication: "Komunikasimu terbuka, hangat, dan mudah membuat orang merasa diterima. Kamu cenderung cepat merespons dan memperhatikan kenyamanan bersama.",
    strengths: ["Mudah membangun kehangatan dan rasa kebersamaan.", "Teliti terhadap kebutuhan praktis serta dinamika sosial tim.", "Rajin, suportif, dan cepat bergerak membantu."],
    watchouts: ["Bisa terlalu khawatir pada penilaian orang lain.", "Kadang sulit memprioritaskan kebutuhan diri sendiri.", "Perlu tetap objektif ketika keputusan tidak bisa menyenangkan semua pihak."]
  },
  ISTP: {
    archetype: "Problem Solver Taktis",
    summary: "Kamu cenderung tenang, observan, dan suka memahami cara kerja sesuatu secara langsung. Kamu biasanya lebih senang membuktikan kemampuan lewat aksi daripada banyak penjelasan panjang.",
    workStyle: "Kamu unggul saat menghadapi masalah yang konkret, dinamis, dan butuh respons cepat. Ruang yang memberi otonomi serta kebebasan teknis biasanya sangat cocok untukmu.",
    communication: "Gaya komunikasimu cenderung hemat kata, langsung, dan fungsional. Kamu lebih nyaman bicara saat ada hal nyata yang ingin dipecahkan.",
    strengths: ["Cepat membaca situasi nyata dan mencari solusi praktis.", "Tenang di bawah tekanan dan tidak mudah panik.", "Mandiri serta fleksibel menyesuaikan pendekatan di lapangan."],
    watchouts: ["Bisa sulit dijangkau secara emosional oleh orang dekat.", "Kadang menunda komitmen terlalu lama karena ingin tetap bebas.", "Perlu mengomunikasikan proses berpikir agar tidak disalahpahami."]
  },
  ISFP: {
    archetype: "Creator Sensitif",
    summary: "Kamu biasanya lembut, spontan, dan punya kepekaan kuat pada estetika maupun pengalaman personal. Kamu lebih suka menunjukkan siapa dirimu lewat pilihan, karya, dan tindakan yang terasa tulus.",
    workStyle: "Kamu cocok di ruang yang memberi kebebasan, fleksibilitas, dan sentuhan personal. Saat suasana aman dan tidak terlalu menekan, kreativitasmu sering muncul dengan natural.",
    communication: "Komunikasimu cenderung hangat tapi tidak berisik. Kamu lebih nyaman ketika hubungan terasa tulus dan tidak terlalu memaksa." ,
    strengths: ["Peka pada nuansa, pengalaman, dan detail yang terasa manusiawi.", "Autentik dan setia pada nilai personal.", "Fleksibel serta mampu mengekspresikan kreativitas dengan cara unik."],
    watchouts: ["Bisa menghindari konflik sampai masalah jadi menumpuk.", "Kadang sulit menjaga ritme jangka panjang untuk hal yang terasa kaku.", "Perlu menyuarakan kebutuhan diri lebih jelas, bukan hanya berharap dipahami."]
  },
  ESTP: {
    archetype: "Dynamo Adaptif",
    summary: "Kamu cenderung aktif, cepat tanggap, dan menikmati pengalaman yang langsung terasa nyata. Kamu biasanya nyaman bergerak di situasi cepat, berubah, dan penuh keputusan spontan.",
    workStyle: "Kamu berkembang saat ada tantangan langsung, aksi, dan ruang improvisasi. Krisis atau momentum cepat justru sering membuat kemampuanmu tampil maksimal.",
    communication: "Komunikasimu enerjik, lugas, dan apa adanya. Kamu suka respons cepat, interaksi hidup, dan pembahasan yang langsung menyentuh inti praktik.",
    strengths: ["Cepat membaca peluang dan bertindak di saat yang tepat.", "Percaya diri menghadapi perubahan dan tekanan lapangan.", "Pandai membuat suasana tetap bergerak, ringan, dan tidak kaku."],
    watchouts: ["Bisa terlalu fokus pada momen sekarang hingga kurang melihat dampak jangka panjang.", "Kadang cepat bosan pada rutinitas dan follow-up detail.", "Perlu menjaga impuls agar keputusan tetap konsisten dengan tujuan besar."]
  },
  ESFP: {
    archetype: "Spark Sosial",
    summary: "Kamu biasanya hangat, ekspresif, dan menikmati pengalaman yang membuat hidup terasa nyata. Kamu senang koneksi antarmanusia, suasana yang hidup, dan ruang untuk menghadirkan energi positif.",
    workStyle: "Kamu cocok di lingkungan yang interaktif, manusiawi, dan cukup fleksibel. Saat bekerja dengan orang serta dampak yang terlihat langsung, kamu biasanya lebih bersemangat.",
    communication: "Komunikasimu spontan, ramah, dan mudah mencairkan suasana. Kamu cenderung hadir penuh di momen dan membuat interaksi terasa hangat.",
    strengths: ["Mudah membawa energi baik ke lingkungan sekitar.", "Cepat membaca respon orang secara langsung dan menyesuaikan diri.", "Adaptif, spontan, dan menikmati kolaborasi yang hidup."],
    watchouts: ["Bisa sulit fokus pada rencana jangka panjang yang terlalu abstrak.", "Kadang menunda keputusan yang terasa membatasi kebebasan.", "Perlu sistem sederhana agar hal penting tetap konsisten selesai."]
  }
};

const state = {
  currentQuestionIndex: 0,
  answers: new Array(questions.length).fill(null),
  identity: {
    name: "",
    gender: ""
  }
};

const screens = {
  intro: document.getElementById("introScreen"),
  question: document.getElementById("questionScreen"),
  identity: document.getElementById("identityScreen"),
  result: document.getElementById("resultScreen")
};

const startButton = document.getElementById("startButton");
const restartTopButton = document.getElementById("restartTopButton");
const progressCounter = document.getElementById("progressCounter");
const progressFill = document.getElementById("progressFill");
const axisPill = document.getElementById("axisPill");
const questionDimensionBadge = document.getElementById("questionDimensionBadge");
const questionId = document.getElementById("questionId");
const questionTitle = document.getElementById("questionTitle");
const questionSupport = document.getElementById("questionSupport");
const feedbackRow = document.getElementById("feedbackRow");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const answerForm = document.getElementById("answerForm");
const likertOptions = Array.from(document.querySelectorAll(".likert-option"));
const answerInputs = Array.from(document.querySelectorAll('input[name="answer"]'));
const identityForm = document.getElementById("identityForm");
const nameInput = document.getElementById("nameInput");
const genderInput = document.getElementById("genderInput");
const identityBackButton = document.getElementById("identityBackButton");
const resultGreeting = document.getElementById("resultGreeting");
const resultTitle = document.getElementById("resultTitle");
const resultArchetype = document.getElementById("resultArchetype");
const resultSummary = document.getElementById("resultSummary");
const resultName = document.getElementById("resultName");
const resultGender = document.getElementById("resultGender");
const resultWorkStyle = document.getElementById("resultWorkStyle");
const resultCommunication = document.getElementById("resultCommunication");
const strengthList = document.getElementById("strengthList");
const watchoutList = document.getElementById("watchoutList");
const scoreBars = document.getElementById("scoreBars");
const scoreBarTemplate = document.getElementById("scoreBarTemplate");
const restartButton = document.getElementById("restartButton");
const downloadButton = document.getElementById("downloadButton");

function showScreen(key) {
  Object.entries(screens).forEach(([screenKey, element]) => {
    element.classList.toggle("active", screenKey === key);
  });
}

function resetFeedback() {
  feedbackRow.textContent = "";
  feedbackRow.classList.remove("error");
}

function updateLikertSelection() {
  likertOptions.forEach((option) => {
    const input = option.querySelector("input");
    option.classList.toggle("selected", input.checked);
  });
}

function renderQuestion() {
  const question = questions[state.currentQuestionIndex];
  const axis = axisMeta[question.axis];
  const currentAnswer = state.answers[state.currentQuestionIndex];
  const progressPercent = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  progressCounter.textContent = `${state.currentQuestionIndex + 1} / ${questions.length}`;
  progressFill.style.width = `${progressPercent}%`;
  axisPill.textContent = axis.short;
  questionDimensionBadge.textContent = `${axis.label} · ${axis.short}`;
  questionId.textContent = `Butir ${question.id}`;
  questionTitle.textContent = question.text;
  questionSupport.textContent = axis.support;
  prevButton.disabled = state.currentQuestionIndex === 0;
  nextButton.textContent = state.currentQuestionIndex === questions.length - 1 ? "Lanjut ke Identitas" : "Lanjut";

  answerInputs.forEach((input) => {
    input.checked = Number(input.value) === currentAnswer;
  });

  updateLikertSelection();
  resetFeedback();
}

function startTest() {
  showScreen("question");
  renderQuestion();
}

function saveCurrentAnswer() {
  const checked = answerInputs.find((input) => input.checked);
  if (!checked) {
    feedbackRow.textContent = "Pilih satu jawaban dulu sebelum lanjut ya.";
    feedbackRow.classList.add("error");
    return false;
  }

  state.answers[state.currentQuestionIndex] = Number(checked.value);
  resetFeedback();
  return true;
}

function goToNext() {
  if (!saveCurrentAnswer()) {
    return;
  }

  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  showScreen("identity");
}

function goToPrevious() {
  if (state.currentQuestionIndex === 0) {
    return;
  }

  state.currentQuestionIndex -= 1;
  renderQuestion();
}

function getDominanceLabel(percent) {
  if (percent >= 80) return "sangat dominan";
  if (percent >= 68) return "dominan";
  if (percent >= 57) return "cukup menonjol";
  return "relatif seimbang";
}

function calculateResults() {
  const accumulator = { EI: 0, SN: 0, TF: 0, JP: 0 };
  const counts = { EI: 0, SN: 0, TF: 0, JP: 0 };

  questions.forEach((question, index) => {
    const answer = state.answers[index];
    const centered = answer - 3;
    const firstLetter = axisMeta[question.axis].letters[0];
    const signedContribution = question.positive === firstLetter ? centered : centered * -1;
    accumulator[question.axis] += signedContribution;
    counts[question.axis] += 1;
  });

  const axisResults = Object.entries(axisMeta).map(([axisKey, meta]) => {
    const maxScore = counts[axisKey] * 2;
    const firstPercent = Math.round(((accumulator[axisKey] + maxScore) / (maxScore * 2)) * 100);
    const secondPercent = 100 - firstPercent;
    const dominantLetter = firstPercent >= secondPercent ? meta.letters[0] : meta.letters[1];
    const dominantPercent = Math.max(firstPercent, secondPercent);

    return {
      axis: axisKey,
      label: meta.label,
      firstLetter: meta.letters[0],
      secondLetter: meta.letters[1],
      firstPercent,
      secondPercent,
      dominantLetter,
      dominantPercent,
      dominanceLabel: getDominanceLabel(dominantPercent)
    };
  });

  const typeCode = axisResults.map((axisResult) => axisResult.dominantLetter).join("");
  const profile = typeProfiles[typeCode] || typeProfiles.INTJ;

  return {
    typeCode,
    profile,
    axisResults,
    identity: { ...state.identity }
  };
}

function createListItems(items, parent) {
  parent.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    parent.appendChild(li);
  });
}

function renderScoreBars(axisResults) {
  scoreBars.innerHTML = "";

  axisResults.forEach((axisResult) => {
    const fragment = scoreBarTemplate.content.cloneNode(true);
    fragment.querySelector(".score-code").textContent = `${axisResult.firstLetter}/${axisResult.secondLetter}`;
    fragment.querySelector(".score-label").textContent = axisResult.label;
    fragment.querySelector(".score-caption").textContent = `${axisResult.dominantLetter} ${axisResult.dominanceLabel} · ${axisResult.dominantPercent}%`;
    fragment.querySelector(".score-left").textContent = axisResult.firstLetter;
    fragment.querySelector(".score-right").textContent = axisResult.secondLetter;
    fragment.querySelector(".score-balance").style.width = `${axisResult.firstPercent}%`;
    scoreBars.appendChild(fragment);
  });
}

function renderResult(result) {
  resultGreeting.textContent = `Halo, ${result.identity.name}. Dari pola jawabanmu, kamu cenderung bertipe`;
  resultTitle.textContent = result.typeCode;
  resultArchetype.textContent = result.profile.archetype;
  resultSummary.textContent = result.profile.summary;
  resultName.textContent = result.identity.name;
  resultGender.textContent = result.identity.gender;
  resultWorkStyle.textContent = result.profile.workStyle;
  resultCommunication.textContent = result.profile.communication;
  createListItems(result.profile.strengths, strengthList);
  createListItems(result.profile.watchouts, watchoutList);
  renderScoreBars(result.axisResults);

  localStorage.setItem(
    "personaGridLatestResult",
    JSON.stringify({
      type: result.typeCode,
      identity: result.identity,
      axisResults: result.axisResults,
      createdAt: new Date().toISOString()
    })
  );
}

function submitIdentity(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const gender = genderInput.value;

  if (!name || !gender) {
    return;
  }

  state.identity.name = name;
  state.identity.gender = gender;

  const result = calculateResults();
  renderResult(result);
  showScreen("result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetApp() {
  const confirmed = window.confirm("Ulangi tes dari awal? Semua jawaban akan direset.");
  if (!confirmed) {
    return;
  }

  state.currentQuestionIndex = 0;
  state.answers = new Array(questions.length).fill(null);
  state.identity = { name: "", gender: "" };
  answerForm.reset();
  identityForm.reset();
  updateLikertSelection();
  resetFeedback();
  showScreen("intro");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleKeyboardShortcut(event) {
  const activeScreen = document.querySelector(".screen.active");
  if (activeScreen?.id !== "questionScreen") {
    return;
  }

  const keyNumber = Number(event.key);
  if (keyNumber >= 1 && keyNumber <= 5) {
    const input = answerInputs.find((candidate) => Number(candidate.value) === keyNumber);
    if (input) {
      input.checked = true;
      state.answers[state.currentQuestionIndex] = keyNumber;
      updateLikertSelection();
      resetFeedback();
    }
  }

  if (event.key === "Enter") {
    event.preventDefault();
    goToNext();
  }
}

startButton.addEventListener("click", startTest);
restartTopButton.addEventListener("click", resetApp);
prevButton.addEventListener("click", goToPrevious);
nextButton.addEventListener("click", goToNext);
identityForm.addEventListener("submit", submitIdentity);
identityBackButton.addEventListener("click", () => {
  showScreen("question");
  renderQuestion();
});
restartButton.addEventListener("click", resetApp);
downloadButton.addEventListener("click", () => window.print());
document.addEventListener("keydown", handleKeyboardShortcut);

answerInputs.forEach((input) => {
  input.addEventListener("change", () => {
    state.answers[state.currentQuestionIndex] = Number(input.value);
    updateLikertSelection();
    resetFeedback();
  });
});

renderQuestion();
showScreen("intro");

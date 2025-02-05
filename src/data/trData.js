export const trData = [
  {
    hero: {
      title1: "Yaratıcı düşünceyle",
      title2: "Sadeliği benimseyen",
      text: "Merhaba, Ben Ali Can. Full-stack geliştirici olarak, sağlam ve ölçeklenebilir öntuç ürünleri tasarlıyorum. Minimalist yaklaşımım ve yaratıcı düşünme yeteneklerimle projelerinize hayat veriyorum.",
    },
    skills: [
      {
        title: "JavaScript",
        text: "Modern web uygulamalarının temel yapı taşı olan JavaScript'te güçlü bir temel oluşturdum. DOM manipülasyonu, asenkron programlama ve modern ES6+ özellikleriyle dinamik ve etkileşimli web uygulamaları geliştiriyorum.",
      },
      {
        title: "React.Js",
        text: "React ekosisteminde kapsamlı deneyime sahibim. Redux state yönetimi, hooks, ve modern React pratikleriyle kullanıcı dostu ve performanslı single-page uygulamalar geliştiriyorum.",
      },
      {
        title: "Java",
        text: "Nesne yönelimli programlama prensiplerini Java ile uygulayarak güçlü ve sürdürülebilir backend sistemleri geliştiriyorum. Java 8+ özelliklerini etkin şekilde kullanıyorum.",
      },
      {
        title: "Spring Boot",
        text: "Spring Boot framework'ü ile mikroservis mimarileri tasarlıyor, RESTful API'ler geliştiriyor ve veritabanı entegrasyonları sağlıyorum.",
      },
      {
        title: "PostgreSQL",
        text: "İlişkisel veritabanı yönetiminde PostgreSQL kullanarak, karmaşık sorgular yazıyor ve veritabanı optimizasyonları gerçekleştiriyorum.",
      },
      {
        title: "TypeScript",
        text: "JavaScript projelerinde tip güvenliği sağlamak için TypeScript kullanıyor, daha güvenilir ve bakımı kolay kod tabanları oluşturuyorum.",
      },
      {
        title: "Tailwind CSS",
        text: "Modern ve responsive web tasarımlarını Tailwind CSS ile hızlı ve etkili bir şekilde geliştiriyor, özelleştirilebilir ve yeniden kullanılabilir bileşenler oluşturuyorum.",
      },
      {
        title: "Testing",
        text: "JUnit ve TestNG kullanarak kapsamlı birim testleri yazıyor, test odaklı geliştirme (TDD) yaklaşımını benimsiyorum.",
      },
      {
        title: "Selenium",
        text: "Web uygulamalarının otomatik testlerini Selenium ile geliştirerek, kullanıcı deneyimini sürekli olarak test ediyor ve iyileştiriyorum.",
      },
      {
        title: "Jenkins",
        text: "Sürekli entegrasyon ve sürekli dağıtım (CI/CD) süreçlerini Jenkins ile otomatize ediyor, yazılım geliştirme süreçlerini hızlandırıyorum.",
      },
      {
        title: "Postman",
        text: "API geliştirme ve test süreçlerinde Postman kullanarak, endpoint testleri yapıyor ve API dokümantasyonu oluşturuyorum.",
      },
    ],
    profiles: {
      title1: "Profil",
      title2: "Hakkımda",
      items: [
        {
          title: "Kişisel Bilgiler",
          details: {
            "Doğum Tarihi": "18.07.1993",
            Şehir: "Ankara",
            "Eğitim Durumu":
              "Atatürk Üniversitesi, Makine Mühendisliği Lisans, 2019",
            "Tercih Ettiği Rol": "Backend Geliştirici",
          },
        },
        {
          title: "Mesleki Geçmiş",
          text: "Makine mühendisi olarak savunma sanayisinde yaklaşık 3 yıl deneyim kazandıktan sonra sürekli öğrenme ve kendimi geliştirme tutkusuyla yazılım alanına geçiş yaptım. Yoğun bir Full Stack DevOps eğitimi aldım ve 70'ten fazla proje tamamlayarak pratik deneyim kazandım. Mühendislik geçmişimle yeni edindiğim yazılım becerilerimi birleştirerek, teknoloji odaklı bir ortamda Full Stack Developer olarak katkıda bulunmaya ve kişisel gelişimimi ilerletmeye hazırım.",
        },
      ],
    },
    footer: {
      text: "Birlikte bir sonraki ürününüz üzerinde çalışalım.",
      text2: "Kişisel Blog",
    },
    header: {
      title1: "Yetenekler",
      title2: "Projeler",
      title3: "İletişim",
    },
    projects: [
      {
        title: "Teknolojik Yemekler",
        text: "React kullanarak bir pizza sipariş sistemi için tek sayfalık bir uygulama (SPA) geliştirdim. Kullanıcı deneyimini artırmak için duyarlı (responsive) tasarım ve form doğrulama (validation) uyguladım. Yeniden kullanılabilir React bileşenleri oluşturdum ve sorunsuz gezinme için React Router kullandım. Ayrıca, uygulamanın işlevselliğini ve güvenilirliğini sağlamak amacıyla Cypress testlerini geliştirdim ve çalıştırdım.",
        technologies: ["React", "CSS3", "HTML5", "JavaScript"],
        github: "https://github.com/alicansadeler/teknolojikyemekler",
        live: "https://teknolojikyemekler.vercel.app/",
        image: "./assets/projectsResim/project1.jpg",
      },
      {
        title: "TwitterClone",
        text: "React ve Context API kullanarak Twitter'ın ana sayfasının etkileşimli bir klonunu geliştirdim. Kullanıcı kimlik doğrulama ve yetkilendirme ile güvenli bir giriş/kayıt olma akışı uyguladım. Ayrıca, özel bir giriş ekranı tasarladım ve kullanıcı yönlendirme (redirection) mantığını geliştirdim.Örnek kullanıcı: Edison_West@example.net I0my3jBzmY9PTm6",
        technologies: [
          "React",
          "CSS3",
          "HTML5",
          "JavaScript",
          "Context API",
          "TailwindCSS",
        ],
        github: "https://github.com/alicansadeler/twitterclone",
        live: "https://twitterclone-iota-fawn.vercel.app/",
        image: "./assets/projectsResim/project2.jpg",
      },
      {
        title: "N11 Test Otomasyonu",
        text: "N11 e-ticaret platformunun login süreçleri için kapsamlı bir test otomasyonu geliştirdim. Selenium WebDriver kullanarak Java'da page object model (POM) tasarım desenini uyguladım. Test senaryolarını Allure Framework ile raporlayarak, test sonuçlarının detaylı ve görsel olarak anlaşılır raporlarını oluşturdum. Jenkins CI/CD pipeline'ına entegre ederek, otomatik test süreçlerini ve raporlamayı sürekli entegrasyon sürecine dahil ettim. Proje, test senaryolarının yeniden kullanılabilirliğini ve bakımını kolaylaştıran modüler bir yapıya sahip.",
        technologies: [
          "Java",
          "Selenium WebDriver",
          "Allure Framework",
          "Jenkins",
          "TestNG",
          "Maven",
        ],
        github: "https://github.com/alicansadeler/n11testautomation",
        image: "./assets/projectsResim/project3.png",
      },
    ],
  },
];

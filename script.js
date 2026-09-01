
/* =========================================================
   BOOSTILY LANDING PAGE
   Language + UI functionality
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

  fr: {

    navSolution: "Solution",
    navRoles: "Pour qui ?",
    navHow: "Comment ça marche",
    navDownload: "Télécharger",

    heroBadge:
      "La solution digitale pour les commerces locaux",

    heroTitle:
      'Boostez votre activité.<span>Vendez plus simplement.</span>',

    heroDescription:
      "Boostily connecte les commerces locaux, leurs clients et leurs livreurs dans une seule plateforme simple et moderne.",

    heroDownload:
      "Télécharger Boostily",

    heroDiscover:
      "Découvrir",

    heroFree:
      "Téléchargement gratuit",

    statOrders:
      "commandes",

    statDelivery:
      "livraison",


    solutionTitle:
      'Votre activité mérite <span>plus qu’une simple page.</span>',

    solutionDescription:
      "Boostily donne aux commerces locaux les outils nécessaires pour développer leur présence digitale, vendre en ligne et organiser leurs commandes et leurs livraisons.",


    solutionDigitalTitle:
      "Présence digitale",

    solutionDigitalText:
      "Donnez à votre commerce une présence digitale professionnelle et facile à partager.",

    solutionStoreTitle:
      "Boutique en ligne",

    solutionStoreText:
      "Présentez vos produits, vos prix et vos promotions à vos clients.",

    solutionOrdersTitle:
      "Commandes",

    solutionOrdersText:
      "Recevez et gérez les commandes de vos clients simplement.",

    solutionDeliveryTitle:
      "Livraison",

    solutionDeliveryText:
      "Organisez les livraisons et connectez les commandes aux livreurs.",

    solutionPromoTitle:
      "Promotions",

    solutionPromoText:
      "Mettez vos offres et promotions en avant pour attirer davantage de clients.",

    solutionStatsTitle:
      "Statistiques",

    solutionStatsText:
      "Suivez votre activité et obtenez une meilleure visibilité sur vos commandes.",


    rolesTitle:
      'Boostily pour <span>chaque rôle.</span>',

    rolesDescription:
      "Une plateforme qui rapproche les commerces, les livreurs et leurs clients.",


    ownerTitle:
      "Propriétaire",

    ownerDescription:
      "Gérez votre activité et développez votre présence digitale.",

    ownerFeature1:
      "Gérer les produits",

    ownerFeature2:
      "Créer des promotions",

    ownerFeature3:
      "Recevoir les commandes",

    ownerFeature4:
      "Gérer les livraisons",

    ownerFeature5:
      "Suivre votre activité",


    deliveryTitle:
      "Livreur",

    deliveryDescription:
      "Recevez vos livraisons et gérez vos commandes assignées.",

    deliveryFeature1:
      "Recevoir les livraisons",

    deliveryFeature2:
      "Voir les détails de commande",

    deliveryFeature3:
      "Mettre à jour le statut",

    deliveryFeature4:
      "Organiser vos livraisons",

    deliveryFeature5:
      "Travailler plus efficacement",


    customerTitle:
      "Client",

    customerDescription:
      "Découvrez les commerces locaux et commandez facilement.",

    customerFeature1:
      "Découvrir les commerces",

    customerFeature2:
      "Parcourir les produits",

    customerFeature3:
      "Passer une commande",

    customerFeature4:
      "Recevoir sa commande",

    customerFeature5:
      "Suivre la livraison",


    videoTitle:
      'Découvrez Boostily <span>en action.</span>',

    videoDescription:
      "Une courte présentation de l'application, de la gestion des commandes et de la livraison.",

    videoComing:
      "Démo Boostily",

    videoComingText:
      "Votre vidéo sera ajoutée ici",


    screenshotsTitle:
      'Découvrez <span>Boostily.</span>',

    screenshotsDescription:
      "Les outils essentiels pour gérer votre activité depuis votre téléphone.",


    screenOwnerTitle:
      "Gérez votre activité",

    screenOwnerText:
      "Retrouvez vos informations importantes, vos commandes et votre activité au même endroit.",

    screenProductsTitle:
      "Produits",

    screenProductsText:
      "Gérez vos produits, prix et promotions.",

    screenOrdersTitle:
      "Commandes",

    screenOrdersText:
      "Recevez et gérez les commandes de vos clients.",

    screenDeliveryTitle:
      "Livraison",

    screenDeliveryText:
      "Les livreurs suivent leurs livraisons depuis leur téléphone.",

    screenCustomerTitle:
      "Boutique client",

    screenCustomerText:
      "Les clients découvrent vos produits et passent leurs commandes.",


    howTitle:
      'Commencez en <span>quelques étapes.</span>',

    step1Title:
      "Créez votre activité",

    step1Text:
      "Configurez votre profil et commencez à construire votre présence digitale.",

    step2Title:
      "Ajoutez vos produits",

    step2Text:
      "Ajoutez vos produits, prix, images et promotions.",

    step3Title:
      "Partagez votre boutique",

    step3Text:
      "Partagez votre boutique sur WhatsApp, Facebook, Instagram ou TikTok.",

    step4Title:
      "Recevez vos commandes",

    step4Text:
      "Vos clients commandent en ligne et vous gérez leurs commandes.",

    step5Title:
      "Livrez vos clients",

    step5Text:
      "Organisez la livraison avec vos livreurs.",


    downloadTitle:
      'Prêt à booster <span>votre activité ?</span>',

    downloadDescription:
      "Téléchargez l'application Boostily pour gérer votre activité, vos commandes et vos livraisons.",

    downloadSmall:
      "Télécharger gratuitement",

    apkFree:
      "Téléchargement gratuit",

    downloadTagline:
      "Boostez votre activité.",


    installTitle:
      'Installez Boostily <span>en quelques secondes.</span>',

    install1Title:
      "Téléchargez",

    install1Text:
      "Cliquez sur le bouton pour télécharger l'application Android.",

    install2Title:
      "Ouvrez le fichier",

    install2Text:
      "Ouvrez le fichier APK après le téléchargement.",

    install3Title:
      "Autorisez l'installation",

    install3Text:
      "Android peut vous demander d'autoriser l'installation depuis cette source.",

    install4Title:
      "Ouvrez Boostily",

    install4Text:
      "Installez l'application puis ouvrez Boostily.",


    faqTitle:
      'Questions <span>fréquentes.</span>',

    faq1Question:
      "Boostily est-il gratuit ?",

    faq1Answer:
      "Le téléchargement de l'application Boostily est gratuit.",

    faq2Question:
      "Quels commerces peuvent utiliser Boostily ?",

    faq2Answer:
      "Boostily peut être utilisé par différents commerces locaux : supermarchés, boulangeries, restaurants, boucheries, magasins de fruits et légumes et bien plus.",

    faq3Question:
      "Boostily est-il uniquement pour les supermarchés ?",

    faq3Answer:
      "Non. Boostily est conçu pour différents types de commerces locaux.",

    faq4Question:
      "Puis-je partager ma boutique ?",

    faq4Answer:
      "Oui. Vous pouvez partager votre présence digitale avec vos clients sur vos réseaux sociaux et vos canaux de communication.",

    faq5Question:
      "Comment devenir livreur ?",

    faq5Answer:
      "L'accès au rôle de livreur dépend de l'organisation et des commerces utilisant Boostily.",


    footerTagline:
      "Boostez votre activité. Vendez plus simplement.",

    footerMade:
      "Une solution digitale pour les commerces locaux."
  },


  /* =====================================================
     ENGLISH
  ====================================================== */

  en: {

    navSolution:
      "Solution",

    navRoles:
      "For who?",

    navHow:
      "How it works",

    navDownload:
      "Download",


    heroBadge:
      "The digital solution for local businesses",

    heroTitle:
      'Boost your business.<span>Sell more simply.</span>',

    heroDescription:
      "Boostily connects local businesses, customers and delivery agents in one simple and modern platform.",

    heroDownload:
      "Download Boostily",

    heroDiscover:
      "Discover",

    heroFree:
      "Free download",

    statOrders:
      "orders",

    statDelivery:
      "delivery",


    solutionTitle:
      'Your business deserves <span>more than a simple page.</span>',

    solutionDescription:
      "Boostily gives local businesses the tools they need to build their digital presence, sell online and organize orders and deliveries.",


    solutionDigitalTitle:
      "Digital presence",

    solutionDigitalText:
      "Give your business a professional digital presence that is easy to share.",

    solutionStoreTitle:
      "Online store",

    solutionStoreText:
      "Show your products, prices and promotions to your customers.",

    solutionOrdersTitle:
      "Orders",

    solutionOrdersText:
      "Receive and manage customer orders simply.",

    solutionDeliveryTitle:
      "Delivery",

    solutionDeliveryText:
      "Organize deliveries and connect orders with delivery agents.",

    solutionPromoTitle:
      "Promotions",

    solutionPromoText:
      "Highlight your offers and promotions to attract more customers.",

    solutionStatsTitle:
      "Analytics",

    solutionStatsText:
      "Track your activity and get better visibility into your orders.",


    rolesTitle:
      'Boostily for <span>every role.</span>',

    rolesDescription:
      "One platform connecting businesses, delivery agents and customers.",


    ownerTitle:
      "Business Owner",

    ownerDescription:
      "Manage your business and grow your digital presence.",

    ownerFeature1:
      "Manage products",

    ownerFeature2:
      "Create promotions",

    ownerFeature3:
      "Receive orders",

    ownerFeature4:
      "Manage deliveries",

    ownerFeature5:
      "Track your activity",


    deliveryTitle:
      "Delivery Agent",

    deliveryDescription:
      "Receive deliveries and manage your assigned orders.",

    deliveryFeature1:
      "Receive deliveries",

    deliveryFeature2:
      "View order details",

    deliveryFeature3:
      "Update delivery status",

    deliveryFeature4:
      "Organize deliveries",

    deliveryFeature5:
      "Work more efficiently",


    customerTitle:
      "Customer",

    customerDescription:
      "Discover local businesses and order easily.",

    customerFeature1:
      "Discover businesses",

    customerFeature2:
      "Browse products",

    customerFeature3:
      "Place orders",

    customerFeature4:
      "Receive your order",

    customerFeature5:
      "Track delivery",


    videoTitle:
      'See Boostily <span>in action.</span>',

    videoDescription:
      "A short presentation of the app, order management and delivery.",

    videoComing:
      "Boostily Demo",

    videoComingText:
      "Your video will be added here",


    screenshotsTitle:
      'Discover <span>Boostily.</span>',

    screenshotsDescription:
      "The essential tools to manage your business from your phone.",


    screenOwnerTitle:
      "Manage your business",

    screenOwnerText:
      "See your important information, orders and business activity in one place.",

    screenProductsTitle:
      "Products",

    screenProductsText:
      "Manage your products, prices and promotions.",

    screenOrdersTitle:
      "Orders",

    screenOrdersText:
      "Receive and manage customer orders.",

    screenDeliveryTitle:
      "Delivery",

    screenDeliveryText:
      "Delivery agents manage their deliveries from their phones.",

    screenCustomerTitle:
      "Customer store",

    screenCustomerText:
      "Customers discover your products and place orders.",


    howTitle:
      'Get started in <span>a few steps.</span>',

    step1Title:
      "Create your business",

    step1Text:
      "Set up your profile and start building your digital presence.",

    step2Title:
      "Add your products",

    step2Text:
      "Add products, prices, images and promotions.",

    step3Title:
      "Share your store",

    step3Text:
      "Share your store on WhatsApp, Facebook, Instagram or TikTok.",

    step4Title:
      "Receive orders",

    step4Text:
      "Customers order online and you manage their orders.",

    step5Title:
      "Deliver to customers",

    step5Text:
      "Organize delivery with your delivery agents.",


    downloadTitle:
      'Ready to boost <span>your business?</span>',

    downloadDescription:
      "Download the Boostily app to manage your business, orders and deliveries.",

    downloadSmall:
      "Free download",

    apkFree:
      "Free download",

    downloadTagline:
      "Boost your business.",


    installTitle:
      'Install Boostily <span>in seconds.</span>',

    install1Title:
      "Download",

    install1Text:
      "Click the button to download the Android application.",

    install2Title:
      "Open the file",

    install2Text:
      "Open the APK file after downloading it.",

    install3Title:
      "Allow installation",

    install3Text:
      "Android may ask you to allow installation from this source.",

    install4Title:
      "Open Boostily",

    install4Text:
      "Install the app and open Boostily.",


    faqTitle:
      'Frequently <span>asked questions.</span>',

    faq1Question:
      "Is Boostily free?",

    faq1Answer:
      "Downloading the Boostily application is free.",

    faq2Question:
      "What businesses can use Boostily?",

    faq2Answer:
      "Boostily can be used by many local businesses, including supermarkets, bakeries, restaurants, butcher shops, fruit and vegetable stores and more.",

    faq3Question:
      "Is Boostily only for supermarkets?",

    faq3Answer:
      "No. Boostily is designed for different types of local businesses.",

    faq4Question:
      "Can I share my store?",

    faq4Answer:
      "Yes. You can share your digital presence with customers through social media and your communication channels.",

    faq5Question:
      "How can I become a delivery agent?",

    faq5Answer:
      "Access to the delivery agent role depends on the organization and businesses using Boostily.",


    footerTagline:
      "Boost your business. Sell more simply.",

    footerMade:
      "A digital solution for local businesses."
  },


  /* =====================================================
     ARABIC
  ====================================================== */

  ar: {

    navSolution:
      "الحل",

    navRoles:
      "لمن؟",

    navHow:
      "كيف يعمل؟",

    navDownload:
      "تحميل",


    heroBadge:
      "الحل الرقمي للمحلات والأعمال المحلية",

    heroTitle:
      'طوّر نشاطك.<span>وبِع بطريقة أسهل.</span>',

    heroDescription:
      "Boostily يربط بين أصحاب المحلات والزبائن وموظفي التوصيل في منصة واحدة بسيطة وحديثة.",

    heroDownload:
      "تحميل Boostily",

    heroDiscover:
      "اكتشف المزيد",

    heroFree:
      "تحميل مجاني",

    statOrders:
      "طلبات",

    statDelivery:
      "توصيل",


    solutionTitle:
      'نشاطك التجاري يستحق <span>أكثر من مجرد صفحة.</span>',

    solutionDescription:
      "يوفر Boostily للمحلات المحلية الأدوات اللازمة لبناء حضور رقمي، استقبال الطلبات وتنظيم عمليات التوصيل.",


    solutionDigitalTitle:
      "الحضور الرقمي",

    solutionDigitalText:
      "امنح نشاطك التجاري حضوراً رقمياً احترافياً وسهل المشاركة.",

    solutionStoreTitle:
      "متجر إلكتروني",

    solutionStoreText:
      "اعرض منتجاتك وأسعارك وعروضك لعملائك.",

    solutionOrdersTitle:
      "الطلبات",

    solutionOrdersText:
      "استقبل طلبات العملاء وقم بإدارتها بسهولة.",

    solutionDeliveryTitle:
      "التوصيل",

    solutionDeliveryText:
      "نظّم عمليات التوصيل واربط الطلبات بموظفي التوصيل.",

    solutionPromoTitle:
      "العروض",

    solutionPromoText:
      "اعرض عروضك وتخفيضاتك لجذب المزيد من العملاء.",

    solutionStatsTitle:
      "الإحصائيات",

    solutionStatsText:
      "تابع نشاطك واحصل على رؤية أفضل حول طلباتك.",


    rolesTitle:
      'Boostily <span>لكل مستخدم.</span>',

    rolesDescription:
      "منصة واحدة تربط المحلات بموظفي التوصيل والعملاء.",


    ownerTitle:
      "صاحب النشاط",

    ownerDescription:
      "أدر نشاطك التجاري وطوّر حضورك الرقمي.",

    ownerFeature1:
      "إدارة المنتجات",

    ownerFeature2:
      "إنشاء العروض",

    ownerFeature3:
      "استقبال الطلبات",

    ownerFeature4:
      "إدارة التوصيل",

    ownerFeature5:
      "متابعة النشاط",


    deliveryTitle:
      "موظف التوصيل",

    deliveryDescription:
      "استقبل عمليات التوصيل وقم بإدارة الطلبات المخصصة لك.",

    deliveryFeature1:
      "استقبال عمليات التوصيل",

    deliveryFeature2:
      "عرض تفاصيل الطلب",

    deliveryFeature3:
      "تحديث حالة التوصيل",

    deliveryFeature4:
      "تنظيم عمليات التوصيل",

    deliveryFeature5:
      "العمل بكفاءة أكبر",


    customerTitle:
      "العميل",

    customerDescription:
      "اكتشف المحلات المحلية واطلب بسهولة.",

    customerFeature1:
      "اكتشاف المحلات",

    customerFeature2:
      "تصفح المنتجات",

    customerFeature3:
      "إرسال الطلبات",

    customerFeature4:
      "استلام الطلب",

    customerFeature5:
      "متابعة التوصيل",


    videoTitle:
      'شاهد Boostily <span>أثناء العمل.</span>',

    videoDescription:
      "فيديو قصير يوضح التطبيق وإدارة الطلبات والتوصيل.",

    videoComing:
      "فيديو Boostily",

    videoComingText:
      "ستتم إضافة الفيديو هنا لاحقاً",


    screenshotsTitle:
      'اكتشف <span>Boostily.</span>',

    screenshotsDescription:
      "الأدوات الأساسية لإدارة نشاطك التجاري من هاتفك.",


    screenOwnerTitle:
      "أدر نشاطك التجاري",

    screenOwnerText:
      "تابع معلوماتك وطلباتك ونشاطك التجاري من مكان واحد.",

    screenProductsTitle:
      "المنتجات",

    screenProductsText:
      "أدر المنتجات والأسعار والعروض.",

    screenOrdersTitle:
      "الطلبات",

    screenOrdersText:
      "استقبل طلبات العملاء وقم بإدارتها.",

    screenDeliveryTitle:
      "التوصيل",

    screenDeliveryText:
      "يمكن لموظفي التوصيل إدارة عمليات التوصيل من الهاتف.",

    screenCustomerTitle:
      "متجر العميل",

    screenCustomerText:
      "يمكن للعملاء اكتشاف منتجاتك وإرسال الطلبات.",


    howTitle:
      'ابدأ في <span>بضع خطوات.</span>',

    step1Title:
      "أنشئ نشاطك التجاري",

    step1Text:
      "قم بإعداد ملف نشاطك وابدأ في بناء حضورك الرقمي.",

    step2Title:
      "أضف منتجاتك",

    step2Text:
      "أضف المنتجات والأسعار والصور والعروض.",

    step3Title:
      "شارك متجرك",

    step3Text:
      "شارك متجرك عبر واتساب وفيسبوك وإنستغرام وتيك توك.",

    step4Title:
      "استقبل الطلبات",

    step4Text:
      "يقوم العملاء بالطلب عبر الإنترنت وتقوم بإدارة طلباتهم.",

    step5Title:
      "وصّل طلباتك",

    step5Text:
      "نظّم عمليات التوصيل مع موظفي التوصيل.",


    downloadTitle:
      'جاهز لتطوير <span>نشاطك التجاري؟</span>',

    downloadDescription:
      "حمّل تطبيق Boostily لإدارة نشاطك التجاري وطلباتك وعمليات التوصيل.",

    downloadSmall:
      "تحميل مجاني",

    apkFree:
      "تحميل مجاني",

    downloadTagline:
      "طوّر نشاطك.",


    installTitle:
      'ثبّت Boostily <span>في بضع ثوانٍ.</span>',

    install1Title:
      "حمّل التطبيق",

    install1Text:
      "اضغط على الزر لتحميل تطبيق Android.",

    install2Title:
      "افتح الملف",

    install2Text:
      "افتح ملف APK بعد انتهاء التحميل.",

    install3Title:
      "السماح بالتثبيت",

    install3Text:
      "قد يطلب Android السماح بتثبيت التطبيقات من هذا المصدر.",

    install4Title:
      "افتح Boostily",

    install4Text:
      "ثبّت التطبيق ثم افتح Boostily.",


    faqTitle:
      'الأسئلة <span>الشائعة.</span>',

    faq1Question:
      "هل Boostily مجاني؟",

    faq1Answer:
      "تحميل تطبيق Boostily مجاني.",

    faq2Question:
      "ما هي الأنشطة التي يمكنها استخدام Boostily؟",

    faq2Answer:
      "يمكن استخدام Boostily من طرف العديد من الأنشطة المحلية مثل محلات المواد الغذائية والمخابز والمطاعم والجزارات ومحلات الخضر والفواكه وغيرها.",

    faq3Question:
      "هل Boostily مخصص فقط للمحلات الكبرى؟",

    faq3Answer:
      "لا. تم تصميم Boostily ليدعم أنواعاً مختلفة من الأنشطة التجارية المحلية.",

    faq4Question:
      "هل يمكنني مشاركة متجري؟",

    faq4Answer:
      "نعم. يمكنك مشاركة حضورك الرقمي مع العملاء عبر مواقع التواصل الاجتماعي وقنوات الاتصال.",

    faq5Question:
      "كيف يمكنني أن أصبح موظف توصيل؟",

    faq5Answer:
      "يعتمد الوصول إلى دور موظف التوصيل على تنظيم النشاطات التي تستخدم Boostily.",


    footerTagline:
      "طوّر نشاطك. وبِع بطريقة أسهل.",

    footerMade:
      "حل رقمي للمحلات والأعمال المحلية."
  }

};


/* =========================================================
   LANGUAGE ELEMENTS
========================================================= */

const languageButton =
  document.getElementById(
    "languageButton"
  );

const languageMenu =
  document.getElementById(
    "languageMenu"
  );

const currentLanguage =
  document.getElementById(
    "currentLanguage"
  );


/* =========================================================
   OPEN / CLOSE LANGUAGE MENU
========================================================= */

languageButton.addEventListener(
  "click",
  function (event) {

    event.stopPropagation();

    languageMenu.classList.toggle(
      "open"
    );

  }
);


document.addEventListener(
  "click",
  function () {

    languageMenu.classList.remove(
      "open"
    );

  }
);


/* =========================================================
   APPLY TRANSLATION
========================================================= */

function setLanguage(language) {

  const dictionary =
    translations[language];

  if (!dictionary) {
    return;
  }


  /*
    Change text content.

    innerHTML is intentionally used because
    some translations contain <span> elements.
  */

  document
    .querySelectorAll("[data-i18n]")
    .forEach(function (element) {

      const key =
        element.getAttribute(
          "data-i18n"
        );

      if (
        dictionary[key] !== undefined
      ) {

        element.innerHTML =
          dictionary[key];

      }

    });


  /* HTML direction */

  if (language === "ar") {

    document.documentElement
      .setAttribute(
        "dir",
        "rtl"
      );

  } else {

    document.documentElement
      .setAttribute(
        "dir",
        "ltr"
      );

  }


  /* HTML language */

  document.documentElement
    .setAttribute(
      "lang",
      language
    );


  /* Button label */

  currentLanguage.textContent =
    language.toUpperCase();


  /* Save preference */

  localStorage.setItem(
    "boostily-language",
    language
  );


  /* Close menu */

  languageMenu.classList.remove(
    "open"
  );

}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

document
  .querySelectorAll(
    "[data-language]"
  )
  .forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const language =
          button.getAttribute(
            "data-language"
          );

        setLanguage(
          language
        );

      }
    );

  });


/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

const savedLanguage =
  localStorage.getItem(
    "boostily-language"
  );


if (
  savedLanguage &&
  translations[savedLanguage]
) {

  setLanguage(
    savedLanguage
  );

} else {

  setLanguage(
    "fr"
  );

}


/* =========================================================
   DOWNLOAD TRACKING
========================================================= */

const downloadLinks =
  document.querySelectorAll(
    'a[href="downloads/boostily.apk"]'
  );


downloadLinks.forEach(
  function (link) {

    link.addEventListener(
      "click",
      function () {

        /*
          This is intentionally simple.

          Later, if you add Google Analytics,
          Meta Pixel or another analytics system,
          this is where download events can be tracked.
        */

        console.log(
          "Boostily APK download started."
        );

      }
    );

  }
);


/* =========================================================
   SMOOTH MOBILE NAVIGATION
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        languageMenu.classList.remove(
          "open"
        );

      }
    );

  });



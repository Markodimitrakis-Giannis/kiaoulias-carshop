/* Kiaoulias preview — shared i18n + UI behaviour (both pages) */

const I18N = {
  en: {
    skip: "Skip to content",
    "nav.services": "Services", "nav.why": "Why us", "nav.faq": "FAQ", "nav.contact": "Contact",
    "cta.book": "Book now",
    "hero.eyebrow": "// Tyres · Alignment · Balancing",
    "hero.title": "The right tyres, fitted right — same day.",
    "hero.sub": "Family-run tyre shop in Athens. Honest pricing, precision wheel alignment, and brands you trust — in and out without the runaround.",
    "hero.cta1": "Get a tyre quote", "hero.cta2": "Call us",
    "quick.title": "Quick tyre check", "quick.sub": "Tell us your size, we'll confirm stock & price.",
    "quick.size": "Tyre size", "quick.btn": "Check availability",
    "trust.h": "Why customers choose us",
    "trust.1.t": "Clear pricing", "trust.1.b": "The price we quote is the price you pay. No surprises at the counter.",
    "trust.2.t": "Same-day fitting", "trust.2.b": "Most tyre and alignment jobs done while you wait. Book a slot, skip the wait.",
    "trust.3.t": "Workmanship guarantee", "trust.3.b": "Every fit and alignment backed in writing. Something off? We make it right.",
    "svc.eyebrow": "// What we do", "svc.h": "Services",
    "svc.f.all": "All", "svc.f.tyres": "Tyres", "svc.f.align": "Alignment", "svc.f.more": "More",
    "svc.tyres.t": "Tyre sales & fitting", "svc.tyres.b": "Summer, winter, all-season and run-flat. Major brands and budget options, fitted on site.", "svc.tyres.p": "from €45 / tyre",
    "svc.align.t": "Wheel alignment", "svc.align.b": "Computerised 4-wheel alignment. Stops uneven wear, pulls and steering drift.", "svc.align.p": "from €40",
    "svc.bal.t": "Wheel balancing", "svc.bal.b": "Smooth out vibration at speed. Precision balancing on every wheel fitted.", "svc.bal.p": "from €8 / wheel",
    "svc.tpms.t": "TPMS & pressure", "svc.tpms.b": "Sensor checks, resets and seasonal pressure top-ups. Nitrogen on request.", "svc.tpms.p": "from €15",
    "svc.brakes.t": "Brakes", "svc.brakes.b": "Pads, discs and inspections while the wheels are off — quick and thorough.", "svc.brakes.p": "on inspection",
    "svc.repair.t": "Puncture repair", "svc.repair.b": "Safe, regulation repairs where the tyre allows — far cheaper than a replacement.", "svc.repair.p": "from €12",
    "band.h": "Brands we stock",
    "band.1": "years on the same street", "band.2": "average Google rating", "band.3": "typical fit & balance",
    "why.eyebrow": "// The difference", "why.h": "Why drivers come back",
    "why.1.t": "Straight talk.", "why.1.b": "We show you the worn tread and explain it. You decide.",
    "why.2.t": "Proper kit.", "why.2.b": "Computerised alignment and Hunter balancing, not guesswork.",
    "why.3.t": "Fair on price.", "why.3.b": "Budget to premium — we fit your car and your wallet.",
    "why.4.t": "Local & accountable.", "why.4.b": "Same family, same street, for two decades.",
    "faq.eyebrow": "// Good to know", "faq.h": "FAQ",
    "faq.1.q": "Do I need an appointment?", "faq.1.a": "Walk-ins are welcome, but booking a slot means we have your tyres ready and you're straight in.",
    "faq.2.q": "How long does a fit take?", "faq.2.a": "A set of four with balancing is usually about 30–45 minutes. Alignment adds around 30.",
    "faq.3.q": "Where are you?", "faq.3.a": "Central Athens, open Mon–Fri 08:00–18:00 and Sat 09:00–14:00. Map link in the footer.",
    "book.eyebrow": "// Book in", "book.h": "Book your slot", "book.sub": "Send the basics and we'll confirm by phone within the hour during opening times.",
    "book.addr": "123 Mechanic St, Athens", "book.hours": "Mon–Fri 08–18 · Sat 09–14",
    "form.name": "Name", "form.phone": "Phone", "form.email": "Email", "form.car": "Vehicle (optional)", "form.service": "Service",
    "form.hint": "Phone or email — at least one, so we can reach you.",
    "form.opt1": "Tyres", "form.opt2": "Alignment", "form.opt3": "Balancing", "form.opt4": "Other", "form.submit": "Request booking",
    "form.consent.1": "I agree to the", "form.consent.link": "privacy policy",
    "form.err.name": "Please enter your name.",
    "form.err.contact": "Add a phone number or an email so we can reach you.",
    "form.err.email": "That email doesn't look right.",
    "form.err.consent": "Please accept the privacy policy.",
    "form.success": "Request sent — we'll confirm shortly.",
    "foot.tag": "Tyres, alignment & balancing in central Athens since 2005.",
    "foot.privacy": "Privacy policy",
    "pv.back": "Back to home",
    "pv.h": "Privacy policy",
    "pv.updated": "Last updated: June 2026 — placeholder text, review with a legal advisor before launch.",
    "pv.intro": "This page explains what personal data Kiaoulias Carshop collects through this website and how we use it. Short version: only what you type into the booking form, only to serve you, never sold.",
    "pv.collect.h": "What we collect",
    "pv.collect.b": "Only what you give us in the booking form: your name, a phone number and/or email, and — optionally — your vehicle details and the service you're interested in. No accounts, no ad trackers.",
    "pv.use.h": "How we use it",
    "pv.use.b": "To confirm and manage your booking and to contact you about it. We don't send marketing and we never sell or share your details with third parties.",
    "pv.store.h": "How long we keep it",
    "pv.store.b": "Booking requests are kept for up to 12 months for warranty and service history, then deleted.",
    "pv.rights.h": "Your rights",
    "pv.rights.b": "Under GDPR you can ask to see, correct or delete your data at any time. One phone call or email is enough — no forms, no waiting.",
    "pv.contact.h": "Contact",
    "pv.contact.b": "Questions about your data? Call 210 000 0000 or visit us at 123 Mechanic St, Athens.",
  },
  el: {
    skip: "Μετάβαση στο περιεχόμενο",
    "nav.services": "Υπηρεσίες", "nav.why": "Γιατί εμάς", "nav.faq": "Συχνές ερωτήσεις", "nav.contact": "Επικοινωνία",
    "cta.book": "Κλείστε ραντεβού",
    "hero.eyebrow": "// Ελαστικά · Ευθυγράμμιση · Ζυγοστάθμιση",
    "hero.title": "Τα σωστά ελαστικά, σωστά τοποθετημένα — αυθημερόν.",
    "hero.sub": "Οικογενειακό κατάστημα ελαστικών στην Αθήνα. Τίμιες τιμές, ακριβής ευθυγράμμιση και μάρκες που εμπιστεύεστε — γρήγορα και χωρίς ταλαιπωρία.",
    "hero.cta1": "Ζητήστε προσφορά", "hero.cta2": "Καλέστε μας",
    "quick.title": "Γρήγορος έλεγχος ελαστικού", "quick.sub": "Πείτε μας τη διάσταση και επιβεβαιώνουμε διαθεσιμότητα & τιμή.",
    "quick.size": "Διάσταση ελαστικού", "quick.btn": "Έλεγχος διαθεσιμότητας",
    "trust.h": "Γιατί μας επιλέγουν",
    "trust.1.t": "Ξεκάθαρες τιμές", "trust.1.b": "Η τιμή που σας λέμε είναι η τιμή που πληρώνετε. Καμία έκπληξη στο ταμείο.",
    "trust.2.t": "Τοποθέτηση αυθημερόν", "trust.2.b": "Οι περισσότερες εργασίες γίνονται όσο περιμένετε. Κλείστε ραντεβού, χωρίς αναμονή.",
    "trust.3.t": "Εγγύηση εργασίας", "trust.3.b": "Κάθε τοποθέτηση και ευθυγράμμιση με γραπτή εγγύηση. Κάτι δεν πάει καλά; Το διορθώνουμε.",
    "svc.eyebrow": "// Τι κάνουμε", "svc.h": "Υπηρεσίες",
    "svc.f.all": "Όλα", "svc.f.tyres": "Ελαστικά", "svc.f.align": "Ευθυγράμμιση", "svc.f.more": "Περισσότερα",
    "svc.tyres.t": "Πώληση & τοποθέτηση ελαστικών", "svc.tyres.b": "Θερινά, χειμερινά, all-season και run-flat. Επώνυμες και οικονομικές επιλογές, με τοποθέτηση επί τόπου.", "svc.tyres.p": "από €45 / ελαστικό",
    "svc.align.t": "Ευθυγράμμιση", "svc.align.b": "Ηλεκτρονική ευθυγράμμιση 4 τροχών. Σταματά την ανομοιόμορφη φθορά και το τράβηγμα του τιμονιού.", "svc.align.p": "από €40",
    "svc.bal.t": "Ζυγοστάθμιση", "svc.bal.b": "Εξαλείφει τους κραδασμούς στην ταχύτητα. Ακριβής ζυγοστάθμιση σε κάθε τροχό.", "svc.bal.p": "από €8 / τροχό",
    "svc.tpms.t": "TPMS & πίεση", "svc.tpms.b": "Έλεγχος αισθητήρων, επαναφορά και εποχιακή ρύθμιση πίεσης. Άζωτο κατόπιν αιτήματος.", "svc.tpms.p": "από €15",
    "svc.brakes.t": "Φρένα", "svc.brakes.b": "Τακάκια, δισκόπλακες και έλεγχος όσο οι τροχοί είναι κάτω — γρήγορα και σχολαστικά.", "svc.brakes.p": "κατόπιν ελέγχου",
    "svc.repair.t": "Επισκευή ελαστικού", "svc.repair.b": "Ασφαλείς επισκευές όπου επιτρέπεται — πολύ φθηνότερες από αντικατάσταση.", "svc.repair.p": "από €12",
    "band.h": "Μάρκες που διαθέτουμε",
    "band.1": "χρόνια στον ίδιο δρόμο", "band.2": "μέση βαθμολογία Google", "band.3": "τυπική τοποθέτηση & ζυγοστάθμιση",
    "why.eyebrow": "// Η διαφορά", "why.h": "Γιατί επιστρέφουν οι οδηγοί",
    "why.1.t": "Καθαρή κουβέντα.", "why.1.b": "Σας δείχνουμε τη φθαρμένη επιφάνεια και εξηγούμε. Εσείς αποφασίζετε.",
    "why.2.t": "Σωστός εξοπλισμός.", "why.2.b": "Ηλεκτρονική ευθυγράμμιση και ζυγοστάθμιση Hunter, όχι στο περίπου.",
    "why.3.t": "Δίκαιη τιμή.", "why.3.b": "Από οικονομικά έως premium — ταιριάζουμε το αυτοκίνητο και το πορτοφόλι σας.",
    "why.4.t": "Τοπικοί & υπεύθυνοι.", "why.4.b": "Ίδια οικογένεια, ίδιος δρόμος, δύο δεκαετίες.",
    "faq.eyebrow": "// Καλό να ξέρετε", "faq.h": "Συχνές ερωτήσεις",
    "faq.1.q": "Χρειάζομαι ραντεβού;", "faq.1.a": "Δεχόμαστε και χωρίς ραντεβού, αλλά με κράτηση έχουμε έτοιμα τα ελαστικά σας και μπαίνετε κατευθείαν.",
    "faq.2.q": "Πόσο διαρκεί η τοποθέτηση;", "faq.2.a": "Ένα σετ τεσσάρων με ζυγοστάθμιση συνήθως 30–45 λεπτά. Η ευθυγράμμιση προσθέτει περίπου 30.",
    "faq.3.q": "Πού βρίσκεστε;", "faq.3.a": "Κέντρο Αθήνας, Δευτ–Παρ 08:00–18:00 και Σάβ 09:00–14:00. Σύνδεσμος χάρτη στο υποσέλιδο.",
    "book.eyebrow": "// Κλείστε", "book.h": "Κλείστε το ραντεβού σας", "book.sub": "Στείλτε τα βασικά και επιβεβαιώνουμε τηλεφωνικά εντός μίας ώρας στις ώρες λειτουργίας.",
    "book.addr": "Οδός Μηχανικών 123, Αθήνα", "book.hours": "Δευτ–Παρ 08–18 · Σάβ 09–14",
    "form.name": "Όνομα", "form.phone": "Τηλέφωνο", "form.email": "Email", "form.car": "Όχημα (προαιρετικό)", "form.service": "Υπηρεσία",
    "form.hint": "Τηλέφωνο ή email — τουλάχιστον ένα, για να επικοινωνήσουμε μαζί σας.",
    "form.opt1": "Ελαστικά", "form.opt2": "Ευθυγράμμιση", "form.opt3": "Ζυγοστάθμιση", "form.opt4": "Άλλο", "form.submit": "Αίτημα ραντεβού",
    "form.consent.1": "Συμφωνώ με την", "form.consent.link": "πολιτική απορρήτου",
    "form.err.name": "Συμπληρώστε το όνομά σας.",
    "form.err.contact": "Προσθέστε τηλέφωνο ή email για να επικοινωνήσουμε μαζί σας.",
    "form.err.email": "Το email δεν φαίνεται σωστό.",
    "form.err.consent": "Αποδεχθείτε την πολιτική απορρήτου.",
    "form.success": "Το αίτημα στάλθηκε — θα επιβεβαιώσουμε σύντομα.",
    "foot.tag": "Ελαστικά, ευθυγράμμιση & ζυγοστάθμιση στο κέντρο της Αθήνας από το 2005.",
    "foot.privacy": "Πολιτική απορρήτου",
    "pv.back": "Πίσω στην αρχική",
    "pv.h": "Πολιτική απορρήτου",
    "pv.updated": "Τελευταία ενημέρωση: Ιούνιος 2026 — προσωρινό κείμενο, ελέγξτε το με νομικό σύμβουλο πριν τη δημοσίευση.",
    "pv.intro": "Η σελίδα εξηγεί ποια προσωπικά δεδομένα συλλέγει το Kiaoulias Carshop μέσω αυτού του ιστότοπου και πώς τα χρησιμοποιούμε. Με λίγα λόγια: μόνο όσα γράφετε στη φόρμα ραντεβού, μόνο για την εξυπηρέτησή σας, ποτέ προς πώληση.",
    "pv.collect.h": "Τι συλλέγουμε",
    "pv.collect.b": "Μόνο όσα μας δίνετε στη φόρμα ραντεβού: όνομα, τηλέφωνο ή/και email, και — προαιρετικά — στοιχεία οχήματος και την υπηρεσία που σας ενδιαφέρει. Χωρίς λογαριασμούς, χωρίς διαφημιστικούς ιχνηλάτες.",
    "pv.use.h": "Πώς τα χρησιμοποιούμε",
    "pv.use.b": "Για την επιβεβαίωση και τη διαχείριση του ραντεβού σας και για επικοινωνία σχετικά με αυτό. Δεν στέλνουμε διαφημιστικά και δεν πουλάμε ούτε μοιραζόμαστε τα στοιχεία σας με τρίτους.",
    "pv.store.h": "Πόσο καιρό τα κρατάμε",
    "pv.store.b": "Τα αιτήματα ραντεβού διατηρούνται έως 12 μήνες για εγγύηση και ιστορικό εργασιών, και έπειτα διαγράφονται.",
    "pv.rights.h": "Τα δικαιώματά σας",
    "pv.rights.b": "Βάσει GDPR μπορείτε ανά πάσα στιγμή να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των δεδομένων σας. Ένα τηλεφώνημα ή email αρκεί — χωρίς έντυπα, χωρίς αναμονή.",
    "pv.contact.h": "Επικοινωνία",
    "pv.contact.b": "Απορίες για τα δεδομένα σας; Καλέστε 210 000 0000 ή επισκεφθείτε μας: Οδός Μηχανικών 123, Αθήνα.",
  },
};

function setLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach((b) => {
    const active = b.dataset.lang === lang;
    b.classList.toggle("bg-accent", active);
    b.classList.toggle("text-on-accent", active);
    b.classList.toggle("text-muted", !active);
  });
  localStorage.setItem("lang", lang);
}
document.querySelectorAll(".lang-btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

// Theme toggle (light/dark)
const themeBtn = document.getElementById("themeBtn");
function setTheme(mode) {
  document.documentElement.classList.toggle("light", mode === "light");
  if (themeBtn) {
    themeBtn.innerHTML = mode === "light" ? '<i data-lucide="sun" class="h-4 w-4"></i>' : '<i data-lucide="moon" class="h-4 w-4"></i>';
  }
  localStorage.setItem("theme", mode);
  lucide.createIcons();
}
if (themeBtn) {
  themeBtn.addEventListener("click", () => setTheme(document.documentElement.classList.contains("light") ? "dark" : "light"));
}

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("hidden") === false;
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );
}

// Service filter (visual only in preview)
document.querySelectorAll(".filter-chip").forEach((chip) =>
  chip.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((c) => {
      c.classList.remove("bg-accent", "text-on-accent", "border-accent");
      c.classList.add("border-border", "text-muted");
    });
    chip.classList.add("bg-accent", "text-on-accent", "border-accent");
    chip.classList.remove("border-border", "text-muted");
  })
);

// Scroll reveal
const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---- Booking form validation: name required + (phone OR email) + consent ----
const bookForm = document.getElementById("bookForm");
if (bookForm) {
  const t = (key) => I18N[document.documentElement.lang || "en"][key];
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showErr = (input, errEl, msg) => {
    errEl.textContent = msg;
    errEl.classList.remove("hidden");
    if (input) input.setAttribute("aria-invalid", "true");
  };
  const clearErr = (input, errEl) => {
    errEl.textContent = "";
    errEl.classList.add("hidden");
    if (input) input.removeAttribute("aria-invalid");
  };

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("f-name");
    const phone = document.getElementById("f-phone");
    const email = document.getElementById("f-email");
    const consent = document.getElementById("f-consent");
    const nameErr = document.getElementById("f-name-err");
    const emailErr = document.getElementById("f-email-err");
    const contactErr = document.getElementById("f-contact-err");
    const consentErr = document.getElementById("f-consent-err");
    const status = document.getElementById("formStatus");

    [ [name, nameErr], [email, emailErr], [null, contactErr], [consent, consentErr] ].forEach(([i, el]) => clearErr(i, el));
    status.classList.add("hidden");

    let firstBad = null;

    if (!name.value.trim()) {
      showErr(name, nameErr, t("form.err.name"));
      firstBad = firstBad || name;
    }
    const hasPhone = phone.value.trim().length > 0;
    const hasEmail = email.value.trim().length > 0;
    if (!hasPhone && !hasEmail) {
      showErr(phone, contactErr, t("form.err.contact"));
      email.setAttribute("aria-invalid", "true");
      firstBad = firstBad || phone;
    } else if (hasEmail && !EMAIL_RE.test(email.value.trim())) {
      showErr(email, emailErr, t("form.err.email"));
      firstBad = firstBad || email;
    }
    if (!consent.checked) {
      showErr(consent, consentErr, t("form.err.consent"));
      firstBad = firstBad || consent;
    }

    if (firstBad) {
      firstBad.focus();
      return;
    }

    status.textContent = t("form.success");
    status.classList.remove("hidden");
    bookForm.reset();
  });
}

// Init
setLang(localStorage.getItem("lang") || "en");
setTheme(localStorage.getItem("theme") || "dark");
lucide.createIcons();

/* ── data ─────────────────────────────────────────────────── */

const programs = {
    beginners: {
        badge: 'Ages 6–7 · Book 1', icon: 'fas fa-child',
        title: 'Islamic Studies – Beginners',
        subtitle: 'An engaging introduction to Islam for young children aged 6–9',
        info: [
            { label: 'Age Group', val: '6–7 years' },
            { label: 'Schedule', val: 'Every Friday' },
            { label: 'Time', val: '5:30 – 7:30 PM' },
            { label: 'Language', val: 'English' },
            { label: 'Level', val: 'Beginners (Book 1)' },
            { label: 'Fee', val: 'Contact us' }
        ],
        what: ['Introduction to the five pillars of Islam', 'Arabic letters and basic Islamic vocabulary', 'Stories of the Prophets (peace be upon them)', 'Islamic manners, adab and daily du\'as', 'Aqeedah foundations taught through stories and activities'],
        outcomes: ['Recognise Arabic letters and basic Islamic terms', 'Memorise essential du\'as', 'Understand the five pillars', 'Develop Islamic character and good manners', 'Build a love for Islam from a young age']
    },
    elementary: {
        badge: 'Ages 8–9 · Book 2', icon: 'fas fa-book-open',
        title: 'Islamic Studies – Elementary',
        subtitle: 'Building upon foundational knowledge with deeper Islamic and Fiqh studies',
        info: [
            { label: 'Age Group', val: '8–9 years' },
            { label: 'Schedule', val: 'Every Friday' },
            { label: 'Time', val: '5:30 – 7:30 PM' },
            { label: 'Language', val: 'English' },
            { label: 'Level', val: 'Elementary (Book 2)' },
            { label: 'Prerequisite', val: 'Book 1 or equivalent' }
        ],
        what: ['Deeper study of Islamic worship and prayer', 'Prayer — method, significance and khushoo\'', 'Seerah of the Prophet Muhammad ﷺ', 'Introduction to Islamic jurisprudence (fiqh)', 'Character building and Islamic ethics'],
        outcomes: ['Perform salah correctly with understanding', 'Know the life story of the Prophet ﷺ', 'Understand basic halal/haram concepts', 'Grow in Islamic character and responsibility', 'Strengthen daily acts of worship and devotion']
    },
    boysgroup: {
        badge: 'Ages 10–14 · Boys', icon: 'fas fa-male',
        title: 'Islamic Studies – Boys Group',
        subtitle: 'Intermediate studies designed for boys aged 10–14 in a supportive brotherhood setting',
        info: [
            { label: 'Age Group', val: '10–14 years (Boys)' },
            { label: 'Schedule', val: 'Every Friday' },
            { label: 'Time', val: '5:30 – 7:30 PM' },
            { label: 'Language', val: 'English' },
            { label: 'Level', val: 'Intermediate' },
            { label: 'Setting', val: 'Boys only' }
        ],
        what: ['Islamic studies circles and group discussion', 'Islamic history and civilisation', 'Ethics, character, and personal responsibility', 'Contemporary issues for Muslim youth', 'Brotherhood, mentoring and community service'],
        outcomes: ['Deepen understanding of Islamic studies', 'Understand Islamic history and its relevance today', 'Navigate adolescence with Islamic guidance', 'Develop leadership and service mindset', 'Build strong Muslim brotherhood']
    },
    girlsgroup: {
        badge: 'Ages 10–14 · Girls', icon: 'fas fa-female',
        title: 'Islamic Studies – Girls Group',
        subtitle: 'Empowering girls aged 10–14 with Islamic knowledge, confidence and sisterhood',
        info: [
            { label: 'Age Group', val: '10–14 years (Girls)' },
            { label: 'Schedule', val: 'Every Friday' },
            { label: 'Time', val: '5:30 – 7:30 PM' },
            { label: 'Language', val: 'English' },
            { label: 'Level', val: 'Intermediate' },
            { label: 'Setting', val: 'Girls only' }
        ],
        what: ['Islamic vocabulary and foundational knowledge', 'Role models from Islamic history (Khadijah, Aisha RA)', 'Islamic etiquette, modesty and sisterhood', 'Faith, identity and confidence in the West', 'Creative Islamic arts, calligraphy and activities'],
        outcomes: ['Strengthen Islamic knowledge and understanding', 'Discover inspiring Muslim women in history', 'Build confidence as a young Muslim woman', 'Develop a positive Islamic identity', 'Form strong bonds with the Muslim sisterhood']
    },
    youthboys: {
        badge: 'Ages 15+ · Discussion Series', icon: 'fas fa-comments',
        title: 'Youth Series – Boys',
        subtitle: 'Interactive and guided discussions for Muslim teenage boys exploring questions about faith, life, and identity in today\'s world',
        info: [
            { label: 'Age Group', val: '15+ years' },
            { label: 'Location', val: 'Coming Soon' },
            { label: 'Schedule', val: 'Twice monthly' },
            { label: 'Format', val: 'Small group, guided discussion' },
            { label: 'Language', val: 'English' },
            { label: 'Extras', val: 'Light refreshments provided' }
        ],
        what: [
            'Faith and belief — Why do we believe in Islam? Core articles of faith and how to respond to modern doubts',
            'Life and struggles — Why does Allah test us? Dealing with hardship, anxiety, and finding purpose',
            'Identity and character — What does it mean to be a Muslim today? Building character and self-discipline',
            'Contemporary challenges — Social media, materialism, and navigating Islam in a non-Muslim society',
            'Essentials and devotional practice — Strengthening daily worship and developing habits of a practicing Muslim'
        ],
        outcomes: [
            'Understand Islam thoughtfully and strengthen core beliefs and practices',
            'Build clarity about identity and develop confidence living as Muslims',
            'Engage positively and constructively with the world around them',
            'Ask honest questions and express ideas confidently in English',
            'Connect with a supportive network of young Muslim brothers in Geneva'
        ]
    },
    youthgirls: {
        badge: 'Ages 15+ · Discussion Series', icon: 'fas fa-comments',
        title: 'Youth Series – Girls',
        subtitle: 'Interactive and guided discussions for Muslim teenage girls exploring questions about faith, life, and identity in today\'s world',
        info: [
            { label: 'Age Group', val: '15+ years' },
            { label: 'Location', val: 'Coming Soon' },
            { label: 'Schedule', val: 'Twice monthly' },
            { label: 'Format', val: 'Small group, guided discussion' },
            { label: 'Language', val: 'English' },
            { label: 'Extras', val: 'Light refreshments provided' }
        ],
        what: [
            'Faith and belief — Why do we believe in Islam? Core articles of faith and how to respond to modern doubts',
            'Life and struggles — Why does Allah test us? Dealing with hardship, anxiety, and finding purpose',
            'Identity and character — What does it mean to be a Muslim today? Building confidence and character',
            'Contemporary challenges — Social media, materialism, and navigating Islam in a non-Muslim society',
            'Essentials and devotional practice — Strengthening daily worship and developing habits of a practicing Muslim'
        ],
        outcomes: [
            'Understand Islam thoughtfully and strengthen core beliefs and practices',
            'Build clarity about identity and develop confidence living as Muslims',
            'Engage positively and constructively with the world around them',
            'Ask honest questions and express ideas confidently in English',
            'Connect with a supportive network of young Muslim sisters in Geneva'
        ]
    },
    parental: {
        badge: 'For Parents · All Ages', icon: 'fas fa-users',
        title: 'Parental Classes',
        subtitle: 'Supporting Muslim parents to raise children with strong values and Islamic identity',
        info: [
            { label: 'Target', val: 'Parents & Guardians' },
            { label: 'Status', val: 'Launching Soon 2025' },
            { label: 'Language', val: 'English' },
            { label: 'Format', val: 'Workshops & Q&A' },
            { label: 'Commitment', val: 'Monthly sessions' },
            { label: 'Cost', val: 'Register interest' }
        ],
        what: ['Raising children with Islamic values in the West', 'Practical parenting tools drawn from Sunnah', 'Supporting your child\'s Islamic identity', 'Q&A sessions with qualified scholars', 'Peer support network for Muslim parents in Geneva'],
        outcomes: ['Practical strategies for Islamic parenting', 'Stronger connection with your child\'s faith journey', 'Access to a supportive parent community', 'Scholar guidance on modern parenting challenges', 'Confidence in raising Muslims in a secular society']
    }
};

/* ── modal ───────────────────────────────────────────────── */
let currentModalId = null;
const programOrder = ['beginners', 'elementary', 'boysgroup', 'girlsgroup', 'youthboys', 'youthgirls', 'parental'];

const subjectMap = {
    beginners:  'Enrol my child in a program',
    elementary: 'Enrol my child in a program',
    boysgroup:  'Enrol my child in a program',
    girlsgroup: 'Enrol my child in a program',
    youthboys:  'Youth Series information',
    youthgirls: 'Youth Series information',
    parental:   'Parental Classes interest'
};

function openModal(id) {
    const p = programs[id];
    if (!p) return;
    currentModalId = id;
    document.getElementById('modalBadge').innerHTML =
        `<div style="display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.9);font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:5px 14px;border-radius:50px;margin-bottom:14px"><i class="${p.icon}"></i> ${p.badge}</div>`;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalSubtitle').textContent = p.subtitle;

    const infoGrid = p.info.map(i => `<div class="mod-info-item"><label>${i.label}</label><p>${i.val}</p></div>`).join('');
    const whatList = p.what.map(w => `<li>${w}</li>`).join('');
    const outList = p.outcomes.map(o => `<li>${o}</li>`).join('');

    document.getElementById('modalBody').innerHTML = `
    <div class="mod-section"><h4>Program Information</h4><div class="mod-info-grid">${infoGrid}</div></div>
    <div class="mod-section"><h4>What You Will Learn</h4><ul>${whatList}</ul></div>
    <div class="mod-section"><h4>Learning Outcomes</h4><ul>${outList}</ul></div>
    <button class="btn-enroll-full" onclick="enquireAboutProgram('${id}')">
      <i class="fas fa-paper-plane"></i> &nbsp;Enquire About This Program
    </button>
  `;
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function modalNav(dir) {
    if (!currentModalId) return;
    const idx = programOrder.indexOf(currentModalId);
    const next = (idx + dir + programOrder.length) % programOrder.length;
    openModal(programOrder[next]);
}

function enquireAboutProgram(id) {
    closeModal();
    presetContactSubject(subjectMap[id] || 'Enrol my child in a program');
}

function presetContactSubject(subject) {
    const select = document.querySelector('#contact select');
    if (select) {
        for (const opt of select.options) {
            if (opt.text === subject) { select.value = opt.value || opt.text; break; }
        }
    }
    const wrap = document.querySelector('.contact-form-wrap');
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    if (wrap) {
        setTimeout(() => {
            wrap.classList.remove('cf-pulse');
            void wrap.offsetWidth;
            wrap.classList.add('cf-pulse');
        }, 600);
    }
}
function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
}
function closeModalOutside(e) {
    if (e.target === document.getElementById('modal')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── navbar ──────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

/* ── mobile menu ─────────────────────────────────────────── */
/* ── reading progress bar ────────────────────────────────── */
(function () {
    const bar = document.getElementById('readProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.width = max > 0 ? (window.scrollY / max * 100) + '%' : '0%';
    }, { passive: true });
})();

/* ── click-to-copy ───────────────────────────────────────── */
function copyToClipboard(text, el) {
    const showToast = (msg, ok = true) => {
        const t = document.getElementById('toast');
        if (!t) return;
        t.innerHTML = (ok ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>') + msg;
        t.classList.add('toast-show');
        clearTimeout(t._timer);
        t._timer = setTimeout(() => t.classList.remove('toast-show'), 2400);
    };
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => showToast('Copied to clipboard'))
            .catch(() => showToast('Could not copy', false));
    } else {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); showToast('Copied to clipboard'); }
        catch { showToast('Could not copy', false); }
        document.body.removeChild(ta);
    }
}

/* ── filter tab counts ───────────────────────────────────── */
(function () {
    const tabs  = document.querySelectorAll('.pf-tab');
    const cards = document.querySelectorAll('.prog-card');
    if (!tabs.length || !cards.length) return;

    const counts = { all: cards.length, '6-9': 0, '10-14': 0, '15plus': 0, parents: 0 };
    cards.forEach(c => {
        const f = c.dataset.filter;
        if (counts[f] !== undefined) counts[f]++;
    });

    const labels = ['all', '6-9', '10-14', '15plus', 'parents'];
    tabs.forEach((tab, i) => {
        const span = tab.querySelector('.pf-count');
        if (span) span.textContent = `(${counts[labels[i]] || 0})`;
    });
})();

/* ── modal keyboard nav (arrows) ─────────────────────────── */
document.addEventListener('keydown', e => {
    const modalOpen = document.getElementById('modal').classList.contains('open');
    if (!modalOpen) return;
    if (e.key === 'ArrowLeft')  modalNav(-1);
    if (e.key === 'ArrowRight') modalNav(1);
});

/* ── 1. active nav highlight ─────────────────────────────── */
(function () {
    const ids = ['about', 'programs', 'contact'];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const links    = document.querySelectorAll('.nav-links a');

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(a => {
                    a.classList.toggle('nav-active', a.getAttribute('href') === `#${e.target.id}`);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-72px 0px -30% 0px' });

    sections.forEach(s => obs.observe(s));
})();

/* ── 2. contact form live validation ─────────────────────── */
(function () {
    function validate(fg, input) {
        const msg = fg.querySelector('.fg-msg');
        const val = input.value.trim();
        if (!val) {
            fg.classList.remove('fg-valid'); fg.classList.add('fg-invalid');
            msg.textContent = 'This field is required.';
            return;
        }
        if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            fg.classList.remove('fg-valid'); fg.classList.add('fg-invalid');
            msg.textContent = 'Please enter a valid email address.';
            return;
        }
        fg.classList.remove('fg-invalid'); fg.classList.add('fg-valid');
        msg.textContent = input.type === 'email' ? '✓ Looks good!' : '✓';
    }

    [
        ['fg-fname', 'fName'],
        ['fg-lname', 'fLName'],
        ['fg-email', 'fEmail'],
        ['fg-msg',   'fMsg']
    ].forEach(([fgId, inputId]) => {
        const fg    = document.getElementById(fgId);
        const input = document.getElementById(inputId);
        if (!fg || !input) return;
        input.addEventListener('blur',  () => validate(fg, input));
        input.addEventListener('input', () => {
            if (fg.classList.contains('fg-invalid')) validate(fg, input);
        });
    });
})();

/* ── 3. hero parallax ────────────────────────────────────── */
(function () {
    const overlay = document.querySelector('.hero-bg-overlay');
    const deco    = document.querySelector('.hero-deco');
    const inner   = document.querySelector('.hero-inner');
    const vh      = () => window.innerHeight;

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y > vh()) return;
        if (overlay) overlay.style.transform = `translateY(${y * 0.18}px)`;
        if (deco)    deco.style.transform    = `translateY(${y * 0.28}px)`;
        if (inner)   inner.style.transform   = `translateY(${y * 0.08}px)`;
    }, { passive: true });
})();

/* ── 5. testimonial swipe ────────────────────────────────── */
(function () {
    const track = document.querySelector('.testi-track');
    if (!track) return;
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) testiNav(diff > 0 ? 1 : -1);
    }, { passive: true });
})();

/* ── testimonial slider ──────────────────────────────────── */
(function () {
    const slides = document.querySelectorAll('.testi-slide');
    const dots   = document.querySelectorAll('.testi-dot');
    let current  = 0;
    let timer;

    function goTo(n) {
        slides[current].classList.remove('testi-active');
        dots[current].classList.remove('testi-dot-active');
        current = (n + slides.length) % slides.length;
        slides[current].classList.add('testi-active');
        dots[current].classList.add('testi-dot-active');
    }

    function start() {
        timer = setInterval(() => goTo(current + 1), 5000);
    }

    function reset() {
        clearInterval(timer);
        start();
    }

    window.testiNav   = (dir) => { goTo(current + dir); reset(); };
    window.testiGoTo  = (n)   => { goTo(n); reset(); };

    start();
})();

/* ── typewriter ──────────────────────────────────────────── */
(function () {
    const words = ['children', 'teenagers', 'families', 'parents'];
    const el = document.querySelector('.tw-word');
    if (!el) return;
    let idx = 0, char = 0, deleting = false;

    function tick() {
        const word = words[idx];
        if (!deleting) {
            el.textContent = word.slice(0, ++char);
            if (char === word.length) {
                deleting = true;
                setTimeout(tick, 2000);
                return;
            }
        } else {
            el.textContent = word.slice(0, --char);
            if (char === 0) {
                deleting = false;
                idx = (idx + 1) % words.length;
            }
        }
        setTimeout(tick, deleting ? 55 : 110);
    }
    setTimeout(tick, 800);
})();

/* ── back to top ─────────────────────────────────────────── */
(function () {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('btt-visible', window.scrollY > 400);
    }, { passive: true });
})();

/* ── floating enrol button ───────────────────────────────── */
(function () {
    const btn = document.getElementById('floatEnrol');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('fe-visible', window.scrollY > 400);
    }, { passive: true });

    setInterval(() => {
        if (!btn.classList.contains('fe-visible')) return;
        btn.classList.remove('fe-pulse');
        void btn.offsetWidth;
        btn.classList.add('fe-pulse');
    }, 4000);
})();

/* ── program filter ──────────────────────────────────────── */
function filterPrograms(filter, btn) {
    document.querySelectorAll('.pf-tab').forEach(t => t.classList.remove('pf-active'));
    btn.classList.add('pf-active');
    document.querySelectorAll('.prog-card').forEach(card => {
        const match = filter === 'all' || card.dataset.filter === filter;
        card.classList.toggle('pf-hidden', !match);
    });
}

/* ── FAQ accordion ───────────────────────────────────────── */
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('faq-open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('faq-open'));
    if (!isOpen) item.classList.add('faq-open');
}

function toggleMobile() {
    document.getElementById('mobileNav').classList.toggle('open');
}
function closeMobile() {
    document.getElementById('mobileNav').classList.remove('open');
}

/* ── scroll animations ───────────────────────────────────── */
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: 0.11 });
document.querySelectorAll('.fade-up,.fade-left,.fade-right').forEach(el => obs.observe(el));

/* ── form handlers ───────────────────────────────────────── */
function sendMsg(btn) {
    btn.innerHTML = '<i class="fas fa-check"></i> &nbsp;Message Sent — JazakAllah Khayr!';
    btn.style.background = 'linear-gradient(135deg,#1b5e35,#2d9e5f)';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> &nbsp;Send Message';
        btn.style.background = '';
    }, 3500);
}
function subscribeNl() {
    const i = document.getElementById('nlEmail');
    if (!i.value) return;
    const btn = i.nextElementSibling;
    btn.textContent = 'Subscribed ✓';
    btn.style.background = '#2d9e5f';
    i.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3500);
}

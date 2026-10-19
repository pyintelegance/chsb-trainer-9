// ChSB Master 9 — Interactive Core Logic & Visual Engine

let currentQuestionIndex = 0;
let currentLang = 'ru'; // 'ru' or 'uz'
let currentMode = 'practice'; // 'practice' or 'exam'
let currentFilter = 'all';
let userAnswers = {}; // { qId: selectedOptionIndex }
let examTimerInterval = null;
let examTimeLeft = 20 * 60; // 20 minutes in seconds

// Translation dictionary
const I18N = {
    ru: {
        score: "Баллы",
        solved: "Решено",
        accuracy: "Точность",
        practiceMode: "Тренажёр",
        examMode: "Экзамен",
        filterAll: "Все задания (16)",
        filterMistakes: "⚠️ Ошибки твоего теста (9)",
        filterFuncs: "Параболы и функции",
        filterIneqs: "Неравенства",
        filterEqs: "Уравнения и прикладные",
        taskNav: "Вопросы ЧСБ",
        formulaCheatTitle: "Шпаргалка к ЧСБ",
        formulaCheatDesc: "Все ключевые формулы 9 класса в один клик",
        openCheatsheet: "Открыть",
        checkBtn: "Проверить ответ",
        explainBtn: "Объяснить решение и формулы",
        explainHeader: "Подробный разбор, формулы и теория",
        stepsTitle: "Пошаговое решение",
        visualTitle: "Интерактивная визуализация",
        formulasTitle: "Используемые формулы и теоремы",
        trapTitle: "Ловушка в тесте (почему ученики ошибаются)",
        prevWasWrong: "В демо-тесте: Была ошибка ⚠️",
        prevWasCorrect: "В демо-тесте: Решено верно ✓",
        correctFeedback: "🎉 Абсолютно верно! Отличная работа.",
        wrongFeedback: "❌ Неверно. Нажми «Объяснить решение», чтобы увидеть разбор и формулы!",
        taskWord: "Задание"
    },
    uz: {
        score: "Ballar",
        solved: "Yechildi",
        accuracy: "Aniqlik",
        practiceMode: "Mashq",
        examMode: "Imtihon",
        filterAll: "Barcha savollar (16)",
        filterMistakes: "⚠️ Testdagi xatolaringiz (9)",
        filterFuncs: "Parabola va funksiyalar",
        filterIneqs: "Tengsizliklar",
        filterEqs: "Tenglama va amaliy",
        taskNav: "ChSB Savollari",
        formulaCheatTitle: "ChSB Formulalari",
        formulaCheatDesc: "9-sinf algebra formulalari bir joyda",
        openCheatsheet: "Ochish",
        checkBtn: "Javobni tekshirish",
        explainBtn: "Yechim va formulalarni ko'rsatish",
        explainHeader: "Batafsil yechim, formulalar va nazariya",
        stepsTitle: "Qadam-baqadam yechim",
        visualTitle: "Vizual grafik va chizma",
        formulasTitle: "Foydalanilgan formulalar",
        trapTitle: "Testdagi tuzoq (ko'p uchraydigan xato)",
        prevWasWrong: "Demo-testda: Xato bo'lgan ⚠️",
        prevWasCorrect: "Demo-testda: To'g'ri yechilgan ✓",
        correctFeedback: "🎉 Barakalla! Javobingiz mutlaqo to'g'ri.",
        wrongFeedback: "❌ Noto'g'ri. «Yechimni ko'rsatish» tugmasini bosib tahlil bilan tanishing!",
        taskWord: "Savol"
    }
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderSidebarGrid();
    loadQuestion(0);
    setupEventListeners();
    updateStats();
    renderCheatsheet();
}

function setupEventListeners() {
    // Language toggle
    document.getElementById("lang-toggle").addEventListener("click", () => {
        currentLang = currentLang === 'ru' ? 'uz' : 'ru';
        document.querySelector(".lang-text").textContent = currentLang.toUpperCase();
        applyLanguage();
        loadQuestion(currentQuestionIndex);
    });

    // Mode switch
    document.getElementById("mode-practice").addEventListener("click", () => switchMode('practice'));
    document.getElementById("mode-exam").addEventListener("click", () => switchMode('exam'));

    // Filter chips
    document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentFilter = chip.dataset.filter;
            renderSidebarGrid();
            
            // Jump to first visible question under this filter
            const visibleQuestions = getFilteredQuestions();
            if (visibleQuestions.length > 0) {
                const targetIdx = CHSB_QUESTIONS.findIndex(q => q.id === visibleQuestions[0].id);
                loadQuestion(targetIdx);
            }
        });
    });

    // Check Answer
    document.getElementById("btn-check-answer").addEventListener("click", checkCurrentAnswer);

    // Toggle Explanation Panel
    document.getElementById("btn-toggle-explain").addEventListener("click", () => {
        const panel = document.getElementById("explanation-panel");
        panel.classList.toggle("hidden");
        if (!panel.classList.contains("hidden")) {
            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    document.getElementById("btn-close-explain").addEventListener("click", () => {
        document.getElementById("explanation-panel").classList.add("hidden");
    });

    // Next / Prev
    document.getElementById("btn-prev-task").addEventListener("click", () => {
        if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1);
    });
    document.getElementById("btn-next-task").addEventListener("click", () => {
        if (currentQuestionIndex < CHSB_QUESTIONS.length - 1) loadQuestion(currentQuestionIndex + 1);
    });

    // Reset All Progress
    document.getElementById("btn-reset-all").addEventListener("click", () => {
        if (confirm("Сбросить весь прогресс ответов?")) {
            userAnswers = {};
            renderSidebarGrid();
            loadQuestion(currentQuestionIndex);
            updateStats();
        }
    });

    // Cheatsheet modal
    document.getElementById("open-cheatsheet-btn").addEventListener("click", () => {
        document.getElementById("cheatsheet-modal").classList.remove("hidden");
    });
    document.getElementById("btn-close-modal").addEventListener("click", () => {
        document.getElementById("cheatsheet-modal").classList.add("hidden");
    });
    document.getElementById("cheatsheet-modal").addEventListener("click", (e) => {
        if (e.target.id === "cheatsheet-modal") {
            document.getElementById("cheatsheet-modal").classList.add("hidden");
        }
    });
}

function getFilteredQuestions() {
    return CHSB_QUESTIONS.filter(q => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'mistakes') return q.userPrevStatus === 'incorrect';
        if (currentFilter === 'functions') return [1, 2, 3, 5, 7, 8, 12, 14, 15].includes(q.id);
        if (currentFilter === 'inequalities') return [9, 10, 13, 16].includes(q.id);
        if (currentFilter === 'equations') return [4, 6, 11].includes(q.id);
        return true;
    });
}

function renderSidebarGrid() {
    const grid = document.getElementById("questions-grid");
    grid.innerHTML = "";

    const filtered = getFilteredQuestions();

    CHSB_QUESTIONS.forEach((q, idx) => {
        const isVisible = filtered.some(fq => fq.id === q.id);
        const btn = document.createElement("button");
        btn.className = `q-btn ${idx === currentQuestionIndex ? 'active' : ''}`;
        if (!isVisible) btn.style.opacity = '0.25';

        if (q.userPrevStatus === 'incorrect') {
            btn.classList.add("prev-was-wrong");
        }

        if (userAnswers[q.id] !== undefined) {
            if (userAnswers[q.id] === q.correctIndex) {
                btn.classList.add("status-correct");
            } else {
                btn.classList.add("status-wrong");
            }
        }

        btn.innerHTML = `
            <span>${q.id}</span>
            <span class="prev-tag">${q.userPrevStatus === 'incorrect' ? '⚠️' : '✓'}</span>
        `;

        btn.addEventListener("click", () => {
            loadQuestion(idx);
        });

        grid.appendChild(btn);
    });
}

function loadQuestion(idx) {
    currentQuestionIndex = idx;
    const q = CHSB_QUESTIONS[idx];

    // Update active button in sidebar
    document.querySelectorAll(".q-btn").forEach((b, i) => {
        b.classList.toggle("active", i === idx);
    });

    // Task Meta
    const t = I18N[currentLang];
    document.getElementById("task-badge").textContent = `${t.taskWord} ${q.id}`;
    document.getElementById("task-topic").textContent = currentLang === 'ru' ? q.topicRu : q.topic;
    document.getElementById("task-diff").textContent = `${q.type} (${q.points} ball)`;

    const prevPill = document.getElementById("prev-status-pill");
    if (q.userPrevStatus === 'incorrect') {
        prevPill.textContent = t.prevWasWrong;
        prevPill.className = "your-prev-status was-wrong";
    } else {
        prevPill.textContent = t.prevWasCorrect;
        prevPill.className = "your-prev-status was-correct";
    }

    // Statements
    const stUz = document.getElementById("statement-uz");
    const stRu = document.getElementById("statement-ru");
    stUz.textContent = q.statementUz;
    stRu.textContent = q.statementRu;

    if (currentLang === 'uz') {
        stUz.style.fontSize = "1.2rem";
        stUz.style.color = "#f8fafc";
        stRu.style.fontSize = "0.95rem";
        stRu.style.color = "#94a3b8";
    } else {
        stRu.style.fontSize = "1.2rem";
        stRu.style.color = "#f8fafc";
        stUz.style.fontSize = "0.95rem";
        stUz.style.color = "#94a3b8";
    }

    // Visual Area in Statement (e.g. Parabola preview or graphic)
    renderQuestionVisual(q);

    // Options
    const optContainer = document.getElementById("options-container");
    optContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.dataset.index = optIdx;

        btn.innerHTML = `
            <span class="option-letter">${letters[optIdx]}</span>
            <span class="option-content">${optText}</span>
        `;

        if (userAnswers[q.id] !== undefined) {
            if (userAnswers[q.id] === optIdx) {
                btn.classList.add("selected");
            }
            if (optIdx === q.correctIndex) {
                btn.classList.add("correct");
            } else if (userAnswers[q.id] === optIdx) {
                btn.classList.add("incorrect");
            }
        }

        btn.addEventListener("click", () => {
            selectOption(optIdx);
        });

        optContainer.appendChild(btn);
    });

    // Reset feedback and explanation
    const feedback = document.getElementById("feedback-banner");
    if (userAnswers[q.id] !== undefined) {
        showFeedback(userAnswers[q.id] === q.correctIndex);
    } else {
        feedback.classList.add("hidden");
    }

    document.getElementById("explanation-panel").classList.add("hidden");
    renderExplanation(q);

    // Re-render KaTeX math
    triggerMathRender();
}

function selectOption(optIdx) {
    const q = CHSB_QUESTIONS[currentQuestionIndex];
    document.querySelectorAll(".option-btn").forEach((btn, i) => {
        btn.classList.toggle("selected", i === optIdx);
    });
    userAnswers[q.id] = optIdx;

    if (currentMode === 'practice') {
        checkCurrentAnswer();
    }
}

function checkCurrentAnswer() {
    const q = CHSB_QUESTIONS[currentQuestionIndex];
    const selected = userAnswers[q.id];

    if (selected === undefined) {
        alert(currentLang === 'ru' ? "Сначала выберите вариант ответа!" : "Avval javob variantini tanlang!");
        return;
    }

    const isCorrect = selected === q.correctIndex;

    document.querySelectorAll(".option-btn").forEach((btn, i) => {
        btn.classList.remove("correct", "incorrect");
        if (i === q.correctIndex) {
            btn.classList.add("correct");
        } else if (i === selected) {
            btn.classList.add("incorrect");
        }
    });

    showFeedback(isCorrect);
    renderSidebarGrid();
    updateStats();

    // Automatically open explanation if student made a mistake in practice mode!
    if (!isCorrect && currentMode === 'practice') {
        const panel = document.getElementById("explanation-panel");
        panel.classList.remove("hidden");
    }
}

function showFeedback(isCorrect) {
    const banner = document.getElementById("feedback-banner");
    const t = I18N[currentLang];
    banner.classList.remove("hidden", "correct", "wrong");
    if (isCorrect) {
        banner.classList.add("correct");
        banner.innerHTML = `<strong>${t.correctFeedback}</strong>`;
    } else {
        banner.classList.add("wrong");
        banner.innerHTML = `<strong>${t.wrongFeedback}</strong>`;
    }
}

function renderQuestionVisual(q) {
    const area = document.getElementById("task-visual-area");
    area.innerHTML = "";

    // Generate tailored visual representation based on visualType
    let svgHtml = "";
    if (q.id === 5) {
        // Parabola completely above axis
        svgHtml = generateParabolaSvg({ a: 1, vertex: [0, 2], roots: [], title: "y = ax² + bx + c > 0" });
    } else if (q.id === 14) {
        // 3 parabolas comparing coefficients
        svgHtml = generateThreeParabolasSvg();
    } else if (q.id === 2 || q.id === 8 || q.id === 12) {
        // Parabolas with vertices/roots
        svgHtml = generateParabolaSvg(q.parabolaData || { a: 1, roots: [2, 4], vertex: [3, -1] });
    } else if (q.id === 15) {
        // Water jets
        svgHtml = generateWaterJetsSvg();
    } else if (q.id === 10 || q.id === 13 || q.id === 9 || q.id === 16) {
        // Interval number line
        svgHtml = generateIntervalSvg(q.id);
    } else if (q.id === 11) {
        // Physics motion
        svgHtml = generatePhysicsMotionSvg();
    } else {
        area.style.display = "none";
        return;
    }

    area.style.display = "flex";
    area.innerHTML = svgHtml;
}

function renderExplanation(q) {
    const stepsBox = document.getElementById("explain-steps");
    const steps = currentLang === 'ru' ? q.stepsRu : q.stepsUz;
    
    let stepsListHtml = "<ol>";
    steps.forEach(st => {
        stepsListHtml += `<li>${st}</li>`;
    });
    stepsListHtml += "</ol>";
    stepsBox.innerHTML = stepsListHtml;

    // Visual Diagram in explanation
    const diagBox = document.getElementById("interactive-diagram-box");
    if (q.id === 10 || q.id === 13 || q.id === 9 || q.id === 16) {
        diagBox.innerHTML = generateIntervalSvg(q.id, true);
    } else if (q.parabolaData || q.id === 5 || q.id === 14) {
        diagBox.innerHTML = generateParabolaSvg(q.parabolaData || { a: 1, roots: [1, 3], vertex: [2, -1] }, true);
    } else if (q.id === 11) {
        diagBox.innerHTML = generatePhysicsMotionSvg();
    } else {
        diagBox.innerHTML = generateFormulaHighlightSvg(q);
    }

    // Formulas
    const formulasBox = document.getElementById("explain-formulas");
    formulasBox.innerHTML = "";
    q.formulas.forEach(f => {
        const card = document.createElement("div");
        card.className = "formula-card";
        card.innerHTML = `
            <div class="formula-title">${f.title}</div>
            <div class="formula-math">$${f.math}$</div>
        `;
        formulasBox.appendChild(card);
    });

    // Trap
    const trapBox = document.getElementById("explain-trap");
    trapBox.textContent = currentLang === 'ru' ? q.trapRu : q.trapUz;
}

// Procedural SVG Diagrams

function generateParabolaSvg(data, isLarge = false) {
    const width = isLarge ? 560 : 420;
    const height = isLarge ? 240 : 180;
    const ox = width / 2;
    const oy = height / 2 + 20;

    let pathD = "";
    const points = [];
    for (let x = -70; x <= 70; x += 2) {
        const realX = x / 18;
        // quadratic equation
        let realY = 0;
        if (data.vertex) {
            realY = (realX - data.vertex[0])**2 + data.vertex[1];
        } else if (data.roots && data.roots.length === 2) {
            realY = (realX - data.roots[0]) * (realX - data.roots[1]);
        } else {
            realY = realX**2 + 1;
        }
        const py = oy - realY * 18;
        const px = ox + realX * 24;
        points.push(`${px},${py}`);
    }
    pathD = `M ${points.join(" L ")}`;

    return `
        <svg class="diagram-svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
            <!-- Grid lines -->
            <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                </pattern>
            </defs>
            <rect width="${width}" height="${height}" fill="url(#grid)" />

            <!-- Axes -->
            <line x1="20" y1="${oy}" x2="${width - 20}" y2="${oy}" stroke="#475569" stroke-width="2" />
            <polygon points="${width - 15},${oy} ${width - 25},${oy - 4} ${width - 25},${oy + 4}" fill="#475569" />
            <text x="${width - 25}" y="${oy - 8}" fill="#94a3b8" font-size="12" font-family="monospace">x</text>

            <line x1="${ox}" y1="${height - 15}" x2="${ox}" y2="15" stroke="#475569" stroke-width="2" />
            <polygon points="${ox},15 ${ox - 4},25 ${ox + 4},25}" fill="#475569" />
            <text x="${ox + 8}" y="25" fill="#94a3b8" font-size="12" font-family="monospace">y</text>

            <!-- Parabola Curve -->
            <path d="${pathD}" fill="none" stroke="#06b6d4" stroke-width="3" stroke-linecap="round" />

            <!-- Annotations -->
            ${data.vertex ? `
                <circle cx="${ox + data.vertex[0] * 24}" cy="${oy - data.vertex[1] * 18}" r="5" fill="#ef4444" />
                <text x="${ox + data.vertex[0] * 24 + 8}" y="${oy - data.vertex[1] * 18 - 4}" fill="#fca5a5" font-size="11" font-weight="bold">T(${data.vertex[0]}; ${data.vertex[1]})</text>
            ` : ''}

            ${data.roots && data.roots.length === 2 ? `
                <circle cx="${ox + data.roots[0] * 24}" cy="${oy}" r="4" fill="#10b981" />
                <circle cx="${ox + data.roots[1] * 24}" cy="${oy}" r="4" fill="#10b981" />
                <text x="${ox + data.roots[0] * 24 - 4}" y="${oy + 16}" fill="#6ee7b7" font-size="11" font-weight="bold">${data.roots[0]}</text>
                <text x="${ox + data.roots[1] * 24 - 4}" y="${oy + 16}" fill="#6ee7b7" font-size="11" font-weight="bold">${data.roots[1]}</text>
            ` : ''}
        </svg>
    `;
}

function generateThreeParabolasSvg() {
    return `
        <svg class="diagram-svg" viewBox="0 0 460 220" width="460" height="220">
            <line x1="30" y1="180" x2="430" y2="180" stroke="#475569" stroke-width="2" />
            <line x1="230" y1="200" x2="230" y2="20" stroke="#475569" stroke-width="2" />
            <text x="425" y="172" fill="#94a3b8" font-size="12">x</text>
            <text x="238" y="28" fill="#94a3b8" font-size="12">y</text>

            <!-- Curve c (narrowest / highest) -->
            <path d="M 170,20 Q 230,220 290,20" fill="none" stroke="#06b6d4" stroke-width="3" />
            <text x="295" y="40" fill="#06b6d4" font-weight="bold" font-size="12">y = cx² (c)</text>

            <!-- Curve b (medium) -->
            <path d="M 130,30 Q 230,210 330,30" fill="none" stroke="#6366f1" stroke-width="3" />
            <text x="335" y="55" fill="#a5b4fc" font-weight="bold" font-size="12">y = bx² (b)</text>

            <!-- Curve a (widest) -->
            <path d="M 90,50 Q 230,200 370,50" fill="none" stroke="#f59e0b" stroke-width="3" />
            <text x="375" y="75" fill="#fcd34d" font-weight="bold" font-size="12">y = ax² (a)</text>

            <!-- Explanation badge -->
            <rect x="35" y="30" width="130" height="45" rx="8" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.1)"/>
            <text x="45" y="48" fill="#e2e8f0" font-size="11" font-weight="bold">Kenglik / Сжатие:</text>
            <text x="45" y="65" fill="#38bdf8" font-size="12" font-weight="bold">c > b > a</text>
        </svg>
    `;
}

function generateIntervalSvg(qId, showShading = true) {
    let points = [];
    let signs = [];
    let solutionZones = [];

    if (qId === 13) {
        // (x-4)/(x+4) < 0 => roots -4, 4. intervals +, -, +
        points = [{ val: -4, x: 140 }, { val: 4, x: 320 }];
        signs = [{ text: "+", x: 80, pos: true }, { text: "−", x: 230, pos: false }, { text: "+", x: 380, pos: true }];
        solutionZones = [{ x1: 140, x2: 320 }];
    } else if (qId === 10) {
        // (x-3)/((x+5)(x-2)) < 0 => points -5, 2, 3
        points = [{ val: -5, x: 100 }, { val: 2, x: 240 }, { val: 3, x: 330 }];
        signs = [
            { text: "−", x: 50, pos: false },
            { text: "+", x: 170, pos: true },
            { text: "−", x: 285, pos: false },
            { text: "+", x: 390, pos: true }
        ];
        solutionZones = [{ x1: 20, x2: 100 }, { x1: 240, x2: 330 }];
    } else if (qId === 9) {
        // (x-5)^2 (x^2-25) >= 0 => points -5, 5
        points = [{ val: -5, x: 160 }, { val: 5, x: 300, solid: true }];
        signs = [{ text: "+", x: 90, pos: true }, { text: "−", x: 230, pos: false }, { text: "+", x: 370, pos: true }];
        solutionZones = [{ x1: 300, x2: 440 }];
    } else if (qId === 16) {
        // (x+a)(x+c) > 0 with -c < -a
        points = [{ val: "-c", x: 160 }, { val: "-a", x: 300 }];
        signs = [{ text: "+", x: 90, pos: true }, { text: "−", x: 230, pos: false }, { text: "+", x: 370, pos: true }];
        solutionZones = [{ x1: 20, x2: 160 }, { x1: 300, x2: 440 }];
    }

    return `
        <svg class="diagram-svg" viewBox="0 0 460 140" width="460" height="140">
            <!-- Number Line -->
            <line x1="20" y1="80" x2="440" y2="80" stroke="#64748b" stroke-width="3" />
            <polygon points="440,80 430,75 430,85" fill="#64748b" />
            <text x="435" y="100" fill="#94a3b8" font-size="13" font-family="monospace">x</text>

            <!-- Shaded Solution Zones -->
            ${showShading ? solutionZones.map(z => `
                <rect x="${z.x1}" y="76" width="${z.x2 - z.x1}" height="8" fill="#10b981" rx="4" opacity="0.6"/>
                <!-- Waves or arches -->
                <path d="M ${z.x1},76 Q ${(z.x1 + z.x2)/2},35 ${z.x2},76" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4"/>
            `).join("") : ''}

            <!-- Signs (+ / -) -->
            ${signs.map(s => `
                <circle cx="${s.x}" cy="45" r="14" fill="${s.pos ? 'rgba(99,102,241,0.2)' : 'rgba(239,68,68,0.2)'}" stroke="${s.pos ? '#6366f1' : '#ef4444'}" stroke-width="1.5" />
                <text x="${s.x - 5}" y="50" fill="${s.pos ? '#c7d2fe' : '#fca5a5'}" font-size="16" font-weight="bold">${s.text}</text>
            `).join("")}

            <!-- Boundary Points -->
            ${points.map(p => `
                <circle cx="${p.x}" cy="80" r="6" fill="${p.solid ? '#10b981' : '#0b0f19'}" stroke="#10b981" stroke-width="3" />
                <text x="${p.x - 8}" y="105" fill="#f8fafc" font-size="13" font-weight="bold">${p.val}</text>
            `).join("")}
        </svg>
    `;
}

function generateWaterJetsSvg() {
    return `
        <svg class="diagram-svg" viewBox="0 0 460 200" width="460" height="200">
            <!-- Ground -->
            <line x1="20" y1="180" x2="440" y2="180" stroke="#475569" stroke-width="3" />

            <!-- Cylinder idish -->
            <rect x="50" y="30" width="60" height="150" fill="rgba(30,41,59,0.8)" stroke="#6366f1" stroke-width="2" rx="4" />
            <text x="56" y="22" fill="#a5b4fc" font-size="11" font-weight="bold">Idish / Бак</text>

            <!-- Holes A, B, C -->
            <!-- A: h=9 -->
            <circle cx="110" cy="50" r="4" fill="#ef4444" />
            <text x="95" y="54" fill="#fca5a5" font-size="11" font-weight="bold">A</text>
            <path d="M 110,50 Q 200,50 230,180" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" />

            <!-- B: h=8 -->
            <circle cx="110" cy="70" r="4" fill="#38bdf8" />
            <text x="95" y="74" fill="#7dd3fc" font-size="11" font-weight="bold">B</text>
            <path d="M 110,70 Q 230,70 290,180" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3" />

            <!-- C: h=7 -->
            <circle cx="110" cy="90" r="4" fill="#10b981" />
            <text x="95" y="94" fill="#6ee7b7" font-size="11" font-weight="bold">C</text>
            <path d="M 110,90 Q 260,90 350,180" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3" />

            <!-- Landing distance annotations -->
            <text x="220" y="195" fill="#fca5a5" font-size="11">L=3</text>
            <text x="280" y="195" fill="#7dd3fc" font-size="11">L=4</text>
            <text x="340" y="195" fill="#6ee7b7" font-size="11">L=5</text>

            <!-- Difference bracket -->
            <line x1="290" y1="165" x2="350" y2="165" stroke="#f59e0b" stroke-width="2" />
            <text x="305" y="158" fill="#fcd34d" font-size="12" font-weight="bold">d = 1</text>
        </svg>
    `;
}

function generatePhysicsMotionSvg() {
    return `
        <svg class="diagram-svg" viewBox="0 0 440 160" width="440" height="160">
            <line x1="40" y1="130" x2="400" y2="130" stroke="#64748b" stroke-width="2" />
            <line x1="40" y1="130" x2="40" y2="20" stroke="#64748b" stroke-width="2" />
            <text x="395" y="145" fill="#94a3b8" font-size="12">t (s)</text>
            <text x="20" y="25" fill="#94a3b8" font-size="12">S (m)</text>

            <!-- Parabolic motion curve S = at^2 / 2 -->
            <path d="M 40,130 Q 180,130 320,40" fill="none" stroke="#10b981" stroke-width="3" />
            <circle cx="320" cy="40" r="5" fill="#ef4444" />
            <text x="330" y="45" fill="#fca5a5" font-size="12" font-weight="bold">(8 s; 96 m)</text>

            <line x1="320" y1="40" x2="320" y2="130" stroke="rgba(255,255,255,0.2)" stroke-dasharray="3,3" />
            <line x1="40" y1="40" x2="320" y2="40" stroke="rgba(255,255,255,0.2)" stroke-dasharray="3,3" />
            <text x="310" y="145" fill="#cbd5e1" font-size="11">t = 8 s</text>
            <text x="5" y="45" fill="#cbd5e1" font-size="11">S=96</text>
        </svg>
    `;
}

function generateFormulaHighlightSvg(q) {
    return `
        <div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 0.95rem;">
            📌 <em>${currentLang === 'ru' ? 'Смотри подробные формулы ниже в блоке формул!' : 'Quyidagi formulalar blokida barcha qoidalar keltirilgan!'}</em>
        </div>
    `;
}

// Mode & Exam logic
function switchMode(mode) {
    currentMode = mode;
    document.getElementById("mode-practice").classList.toggle("active", mode === 'practice');
    document.getElementById("mode-exam").classList.toggle("active", mode === 'exam');

    const timerWrapper = document.getElementById("exam-timer-wrapper");
    if (mode === 'exam') {
        timerWrapper.classList.remove("hidden");
        startExamTimer();
    } else {
        timerWrapper.classList.add("hidden");
        clearInterval(examTimerInterval);
    }
}

function startExamTimer() {
    clearInterval(examTimerInterval);
    examTimeLeft = 20 * 60;
    updateTimerDisplay();

    examTimerInterval = setInterval(() => {
        examTimeLeft--;
        updateTimerDisplay();
        if (examTimeLeft <= 0) {
            clearInterval(examTimerInterval);
            alert(currentLang === 'ru' ? "Время экзамена истекло!" : "Imtihon vaqti tugadi!");
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(examTimeLeft / 60).toString().padStart(2, '0');
    const s = (examTimeLeft % 60).toString().padStart(2, '0');
    document.getElementById("exam-timer").textContent = `${m}:${s}`;
}

function updateStats() {
    let score = 0;
    let solvedCount = 0;
    let correctCount = 0;

    CHSB_QUESTIONS.forEach(q => {
        if (userAnswers[q.id] !== undefined) {
            solvedCount++;
            if (userAnswers[q.id] === q.correctIndex) {
                correctCount++;
                score += q.points;
            }
        }
    });

    document.getElementById("score-counter").textContent = score.toFixed(1);
    document.getElementById("solved-counter").textContent = solvedCount;
    const acc = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;
    document.getElementById("accuracy-counter").textContent = `${acc}%`;
}

function applyLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.dataset.i18n;
        if (I18N[currentLang][key]) {
            elem.textContent = I18N[currentLang][key];
        }
    });
}

function triggerMathRender() {
    if (window.renderMathInElement) {
        window.renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false }
            ],
            throwOnError: false
        });
    }
}

// Cheatsheet modal populator
function renderCheatsheet() {
    const box = document.getElementById("cheatsheet-content");
    box.innerHTML = `
        <div class="cheat-group">
            <h4>1. Kvadrat funksiya (Квадратичная функция)</h4>
            <div class="cheat-item"><strong>Umumiy ko'rinish:</strong> $y = ax^2 + bx + c$</div>
            <div class="cheat-item"><strong>Uchining koordinatalari:</strong> $x_0 = -\\frac{b}{2a}, \\; y_0 = f(x_0)$</div>
            <div class="cheat-item"><strong>Kanonik ko'rinish:</strong> $y = a(x - x_0)^2 + y_0$</div>
            <div class="cheat-item"><strong>Tarmoqlar:</strong> $a > 0$ — yuqoriga (min), $a < 0$ — pastga (max)</div>
        </div>

        <div class="cheat-group">
            <h4>2. Viyet teoremasi (Теорема Виета)</h4>
            <div class="cheat-item"><strong>Ildizlar yig'indisi:</strong> $x_1 + x_2 = -\\frac{b}{a}$</div>
            <div class="cheat-item"><strong>Ildizlar ko'paytmasi:</strong> $x_1 \\cdot x_2 = \\frac{c}{a}$</div>
            <div class="cheat-item"><strong>Ko'paytuvchilarga ajratish:</strong> $a(x - x_1)(x - x_2)$</div>
        </div>

        <div class="cheat-group">
            <h4>3. Intervalar usuli (Метод интервалов)</h4>
            <div class="cheat-item"><strong>$< 0$ bo'lganda:</strong> Manfiy ($-$) oraliqlar olinadi</div>
            <div class="cheat-item"><strong>$> 0$ bo'lganda:</strong> Musbat ($+$) oraliqlar olinadi</div>
            <div class="cheat-item"><strong>Noqat'iy ($\\ge 0, \\le 0$):</strong> Nollar ham yechimga kiradi!</div>
        </div>

        <div class="cheat-group">
            <h4>4. Irratsional tenglamalar (Иррациональные)</h4>
            <div class="cheat-item">$\\sqrt{f(x)} = g(x) \\iff \\begin{cases} f(x) = g(x)^2 \\\\ g(x) \\ge 0 \\end{cases}$</div>
            <div class="cheat-item"><strong>Muhim:</strong> Topilgan ildizlarni doimo tekshiring!</div>
        </div>

        <div class="cheat-group">
            <h4>5. Harakat formulasi (Равноускоренное движение)</h4>
            <div class="cheat-item"><strong>Bosib o'tilgan yo'l:</strong> $S = \\frac{a t^2}{2}$</div>
            <div class="cheat-item"><strong>Tezlanishni topish:</strong> $a = \\frac{2S}{t^2}$</div>
        </div>
    `;
}

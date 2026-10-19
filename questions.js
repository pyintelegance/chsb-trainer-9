// 16 Real ChSB 9th Grade Algebra Questions with Deep Explanations, Formulas, and Visuals

const CHSB_QUESTIONS = [
    {
        id: 1,
        topic: "Funksiyalar • Чётные и нечётные функции",
        topicRu: "Функции • Чётные и нечётные функции",
        type: "Bilish",
        points: 2.0,
        userPrevStatus: "correct",
        statementUz: "Berilgan funksiyalar ichida nechta juft funksiya berilgan:\n1) $y = |x|$\n2) $y = x$\n3) $y = x^6$\n4) $y = x + 2$",
        statementRu: "Сколько среди данных функций являются чётными:\n1) $y = |x|$\n2) $y = x$\n3) $y = x^6$\n4) $y = x + 2$",
        options: ["1", "2", "3", "4"],
        correctIndex: 1, // "2"
        visualType: "symmetry",
        stepsUz: [
            "Juft funksiya qoidasi: agar aniqlanish sohasidagi barcha $x$ lar uchun $f(-x) = f(x)$ tenglik bajarilsa, funksiya **juft** deyiladi.",
            "1) $y = |x| \\implies |-x| = |x|$ — tenglik bajariladi, demak **juft**.",
            "2) $y = x \\implies -x = -f(x)$ — bu **toq** funksiya.",
            "3) $y = x^6 \\implies (-x)^6 = x^6$ — juft daraja har doim musbat, demak **juft**.",
            "4) $y = x + 2 \\implies -x + 2 \\neq f(x)$ va $\\neq -f(x)$ — na juft, na toq funksiya.",
            "Xulosa: 1 va 3 raqamli funksiyalar juft, jami **2 ta**."
        ],
        stepsRu: [
            "Определение чётной функции: если для любого $x$ выполняется равенство $f(-x) = f(x)$, то функция называется **чётной** (её график симметричен относительно оси $Oy$).",
            "1) $y = |x| \\implies |-x| = |x| = f(x)$ — чётная.",
            "2) $y = x \\implies f(-x) = -x = -f(x)$ — нечётная.",
            "3) $y = x^6 \\implies (-x)^6 = x^6 = f(x)$ — чётная степень «съедает» минус, функция чётная.",
            "4) $y = x + 2 \\implies -x + 2$ не равно ни $f(x)$, ни $-f(x)$ — функция общего вида.",
            "Итого: чётными являются функции 1 и 3. Всего **2 функции**."
        ],
        formulas: [
            { title: "Чётная функция (Juft)", math: "f(-x) = f(x)" },
            { title: "Нечётная функция (Toq)", math: "f(-x) = -f(x)" },
            { title: "Свойство модуля", math: "|-x| = |x|" },
            { title: "Чётная степень", math: "(-x)^{2n} = x^{2n}" }
        ],
        trapRu: "Частая ошибка: считать функцию $y = x + 2$ чётной из-за наличия числа 2. Помните: свободное слагаемое смещает график по оси $Oy$, но прямая линия перестает быть симметричной относительно $Oy$!",
        trapUz: "Tez-tez uchraydigan xato: $y = x + 2$ funksiyani 2 soni borligi uchun juft deb o'ylash. Aslida bu funksiya grafigi $Oy$ o'qiga nisbatan simmetrik emas!"
    },
    {
        id: 2,
        topic: "Parabola • Вершина параболы",
        topicRu: "Парабола • Координаты вершины",
        type: "Bilish",
        points: 2.0,
        userPrevStatus: "correct",
        statementUz: "$y = x^2 + 4x + 1$ parabola uchining koordinatalarini toping.",
        statementRu: "Найдите координаты вершины параболы $y = x^2 + 4x + 1$.",
        options: ["(2; 13)", "(-2; -3)", "(-2; 3)", "(2; -3)"],
        correctIndex: 1, // "(-2; -3)"
        visualType: "parabola",
        parabolaData: { a: 1, b: 4, c: 1, vertex: [-2, -3] },
        stepsUz: [
            "Kvadrat funksiya $y = ax^2 + bx + c$ uchun koeffitsiyentlar: $a = 1$, $b = 4$, $c = 1$.",
            "Parabola uchining absissasi: $x_0 = -\\frac{b}{2a} = -\\frac{4}{2 \\cdot 1} = -2$.",
            "Parabola uchining ordinatasi: $x_0 = -2$ ni funksiyaga qo'yamiz:",
            "$y_0 = (-2)^2 + 4(-2) + 1 = 4 - 8 + 1 = -3$.",
            "Parabola uchi nuqtasi: $(-2; -3)$."
        ],
        stepsRu: [
            "Коэффициенты квадратного трёхчлена: $a = 1$, $b = 4$, $c = 1$.",
            "Абсцисса вершины вычисляется по формуле: $x_0 = -\\frac{b}{2a} = -\\frac{4}{2 \\cdot 1} = -2$.",
            "Ординату $y_0$ находим, подставив найденный $x_0 = -2$ в уравнение функции:",
            "$y_0 = (-2)^2 + 4(-2) + 1 = 4 - 8 + 1 = -3$.",
            "Координаты вершины: **(-2; -3)**."
        ],
        formulas: [
            { title: "Абсцисса вершины ($x_0$)", math: "x_0 = -\\frac{b}{2a}" },
            { title: "Ордината вершины ($y_0$)", math: "y_0 = f(x_0) = -\\frac{D}{4a}" },
            { title: "Канонический вид", math: "y = a(x - x_0)^2 + y_0" }
        ],
        trapRu: "Внимание на знак минус в формуле вершины: $x_0 = -b / (2a)$. Если забыть минус, получится $+2$ и ответ $(2; 13)$, что неверно!",
        trapUz: "Formuladagi minus ishorasiga e'tibor bering: $x_0 = -b / (2a)$. Minusni unutib qo'ysangiz, $+2$ chiqib javob noto'g'ri bo'ladi!"
    },
    {
        id: 3,
        topic: "Kvadrat funksiya • Нули функции и теорема Виета",
        topicRu: "Квадратичная функция • Нули функции и теорема Виета",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "incorrect",
        statementUz: "$y(x) = x^2 - 4x + 3$ kvadrat funksiyaning nollari yigʻindisini toping.",
        statementRu: "Найдите сумму нулей квадратичной функции $y(x) = x^2 - 4x + 3$.",
        options: ["-4", "3", "4", "-3"],
        correctIndex: 2, // "4"
        visualType: "roots",
        parabolaData: { a: 1, b: -4, c: 3, roots: [1, 3] },
        stepsUz: [
            "**Nollari** — bu $y(x) = 0$ bo'ladigan $x$ larning qiymatlari (ya'ni $x^2 - 4x + 3 = 0$ tenglama ildizlari).",
            "**Yig'indisi** — bu ildizlarining qo'shilmasi ($x_1 + x_2$).",
            "Viyet teoremasiga ko'ra: keltirilgan kvadrat tenglamada $x_1 + x_2 = -p = -(-4) = 4$.",
            "Ildizlarni alohida topsak ham: $(x - 1)(x - 3) = 0 \\implies x_1 = 1, x_2 = 3$. Ularning yig'indisi: $1 + 3 = 4$."
        ],
        stepsRu: [
            "**Нули функции** — это значения аргумента $x$, при которых $y(x) = 0$ (то есть корни уравнения $x^2 - 4x + 3 = 0$).",
            "**Сумма нулей** ($x_1 + x_2$) мгновенно находится по **теореме Виета**:",
            "В уравнении $x^2 + px + q = 0$: $x_1 + x_2 = -p$, а $x_1 \\cdot x_2 = q$.",
            "Здесь $p = -4$, значит сумма корней равна $-(-4) = 4$.",
            "Либо раскладываем на множители: $(x - 1)(x - 3) = 0 \\implies x_1 = 1, x_2 = 3$. Сумма: $1 + 3 = 4$."
        ],
        formulas: [
            { title: "Теорема Виета (Сумма)", math: "x_1 + x_2 = -\\frac{b}{a}" },
            { title: "Теорема Виета (Произведение)", math: "x_1 \\cdot x_2 = \\frac{c}{a}" },
            { title: "Разложение на множители", math: "a(x - x_1)(x - x_2)" }
        ],
        trapRu: "ГЛАВНАЯ ЛОВУШКА: В тесте ты выбрал 3! Ты перепутал сумму корней (yig'indisi) с их произведением (ko'paytmasi = 3). Запомни: сумма — это второй коэффициент с противоположным знаком!",
        trapUz: "ASOSIY XATO: Siz javob sifatida 3 ni tanladingiz. Bu ildizlar ko'paytmasi ($c = 3$). Savolda esa yig'indisi so'ralgan ($x_1 + x_2 = -(-4) = 4$)!"
    },
    {
        id: 4,
        topic: "Aniqlanish sohasi • Область определения",
        topicRu: "Область определения функции",
        type: "Bilish",
        points: 2.0,
        userPrevStatus: "incorrect",
        statementUz: "$x = 2$ soni quyidagi funksiyalarning nechtasining aniqlanish sohasiga tegishli boʻladi?\n1) $y = \\sqrt{x-2}$\n2) $y = \\frac{1}{x-2}$\n3) $y = x^2$\n4) $y = x + 2$",
        statementRu: "Число $x = 2$ принадлежит области определения скольких из следующих функций?\n1) $y = \\sqrt{x-2}$\n2) $y = \\frac{1}{x-2}$\n3) $y = x^2$\n4) $y = x + 2$",
        options: ["1", "2", "3", "4"],
        correctIndex: 2, // "3"
        visualType: "domainCheck",
        stepsUz: [
            "Har bir funksiyaga $x = 2$ qiymatini qo'yib tekshiramiz:",
            "1) $y = \\sqrt{2-2} = \\sqrt{0} = 0$ — noldan ildiz mavjud! Demak, $x = 2$ sohaga **kiradi**.",
            "2) $y = \\frac{1}{2-2} = \\frac{1}{0}$ — nolga bo'lish mumkin emas! Demak, $x = 2$ sohaga **kirmaydi**.",
            "3) $y = 2^2 = 4$ — qiymat hisoblanadi, sohaga **kiradi**.",
            "4) $y = 2 + 2 = 4$ — qiymat hisoblanadi, sohaga **kiradi**.",
            "Jami 3 ta funksiyaning (1, 3 va 4) aniqlanish sohasiga tegishli."
        ],
        stepsRu: [
            "Подставим $x = 2$ поочередно в каждую формулу и проверим корректность вычисления:",
            "1) $y = \\sqrt{2 - 2} = \\sqrt{0} = 0$ — подкоренное выражение может быть $\\ge 0$. Корень из нуля равен 0! Функция определена.",
            "2) $y = \\frac{1}{2 - 2} = \\frac{1}{0}$ — знаменатель обращается в ноль, деление на ноль невозможно! Функция НЕ определена.",
            "3) $y = 2^2 = 4$ — многочлен определен на всем $\\mathbb{R}$. Функция определена.",
            "4) $y = 2 + 2 = 4$ — линейная функция определена везде. Функция определена.",
            "Итого подходят функции 1, 3 и 4 — ровно **3 функции**."
        ],
        formulas: [
            { title: "Подкоренное выражение", math: "\\sqrt{f(x)} \\implies f(x) \\ge 0" },
            { title: "Знаменатель дроби", math: "\\frac{1}{g(x)} \\implies g(x) \\neq 0" },
            { title: "Корень из нуля", math: "\\sqrt{0} = 0 \\quad (\\text{существует})" }
        ],
        trapRu: "ЛОВУШКА: Многие думают, что под корнем не может быть 0, путая строгое неравенство со строгим делением на ноль. $\\sqrt{0} = 0$ — это законное действительное число!",
        trapUz: "XATO: Ko'pchilik ildiz ostida 0 bo'lishi mumkin emas deb o'ylaydi. Ildiz osti $\\ge 0$ bo'lishi kifoya: $\\sqrt{0} = 0$ hisoblanadi!"
    },
    {
        id: 5,
        topic: "Parabola grafigi • Квадратные неравенства по графику",
        topicRu: "График параболы • Знак трёхчлена",
        type: "Bilish",
        points: 2.0,
        userPrevStatus: "correct",
        statementUz: "$y = ax^2 + bx + c$ kvadrat funksiyaning grafigi tasvirlangan (parabola butunlay $Ox$ o'qidan yuqorida joylashgan, tarmoqlari yuqoriga qaragan). $ax^2 + bx + c > 0$ tengsizlik yechimlar toʻplamini toping.",
        statementRu: "Изображен график квадратичной функции $y = ax^2 + bx + c$ (парабола целиком лежит выше оси $Ox$, ветви направлены вверх). Найдите множество решений неравенства $ax^2 + bx + c > 0$.",
        options: ["$x \\in \\mathbb{R}$", "yechimga ega emas", "$x > 0$", "$x < 0$"],
        correctIndex: 0, // "x \in R"
        visualType: "parabolaAboveAxis",
        parabolaData: { a: 1, b: 0, c: 2 },
        stepsUz: [
            "Grafikka qaraymiz: parabola $Ox$ o'qi bilan kesishmaydi ($D < 0$) va uning barcha nuqtalari $Ox$ o'qidan yuqorida yotibdi.",
            "Bu degani, har qanday $x$ qiymatida funksiyaning qiymati musbat: $y > 0$.",
            "Shuning uchun $ax^2 + bx + c > 0$ tengsizlik barcha haqiqiy sonlar to'plamida bajariladi: $x \\in \\mathbb{R}$."
        ],
        stepsRu: [
            "Анализируем график: парабола не пересекает ось $Ox$ (дискриминант $D < 0$), а её ветви направлены вверх ($a > 0$).",
            "Следовательно, для абсолютно любого действительного значения $x$ ордината $y = ax^2 + bx + c$ строго положительна ($y > 0$).",
            "Решением строгого неравенства $> 0$ является вся числовая прямая: $x \\in \\mathbb{R}$ (или $(-\\infty; +\\infty)$)."
        ],
        formulas: [
            { title: "Положительность при $D < 0$", math: "a > 0 \\text{ и } D < 0 \\implies ax^2+bx+c > 0 \\; \\forall x" },
            { title: "Числовая прямая", math: "x \\in \\mathbb{R} = (-\\infty; +\\infty)" }
        ],
        trapRu: "Если бы знак был $ax^2 + bx + c < 0$, тогда решений не было бы (пустое множество $\\varnothing$). А при знаке $> 0$ подходят все числа!",
        trapUz: "Agar tengsizlik $< 0$ bo'lganida yechim bo'lmasdi. Lekin $> 0$ bo'lgani uchun barcha sonlar yechim bo'ladi!"
    },
    {
        id: 6,
        topic: "Irratsional tenglamalar • Иррациональные уравнения",
        topicRu: "Иррациональные уравнения",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "incorrect",
        statementUz: "Tenglamani yeching: $\\sqrt{x^2 - x - 8} = x - 2$",
        statementRu: "Решите уравнение: $\\sqrt{x^2 - x - 8} = x - 2$",
        options: ["$x = 4$", "tenglama haqiqiy yechimga ega emas", "$x = -4$", "$x = 2$"],
        correctIndex: 0, // "x = 4"
        visualType: "irrationalRoot",
        stepsUz: [
            "1) O.D.Z. va o'ng taraf sharti: arifmetik ildiz manfiy bo'lolmaydi, demak $x - 2 \\ge 0 \\implies x \\ge 2$.",
            "2) Tenglamaning ikkala qismini kvadratga ko'taramiz:",
            "$(\\sqrt{x^2 - x - 8})^2 = (x - 2)^2$",
            "$x^2 - x - 8 = x^2 - 4x + 4$",
            "3) $x^2$ larni qisqartirib, $x$ li hadlarni chapga, sonlarni o'ngga o'tkazamiz:",
            "$-x + 4x = 4 + 8$",
            "$3x = 12 \\implies x = 4$.",
            "4) Tekshirish: $x = 4 \\ge 2$ shartni qanoatlantiradi. $\\sqrt{4^2 - 4 - 8} = \\sqrt{16 - 12} = \\sqrt{4} = 2$. O'ng taraf: $4 - 2 = 2$. Tenglik to'g'ri: $2 = 2$."
        ],
        stepsRu: [
            "1) Условие существования (ОДЗ): правая часть корня не может быть отрицательной: $x - 2 \\ge 0 \\implies x \\ge 2$.",
            "2) Возводим обе части уравнения в квадрат:",
            "$$x^2 - x - 8 = (x - 2)^2$$",
            "$$x^2 - x - 8 = x^2 - 4x + 4$$",
            "3) Замечаем, что квадраты $x^2$ взаимно уничтожаются с обеих сторон:",
            "$$-x - 8 = -4x + 4$$",
            "$$-x + 4x = 4 + 8 \\implies 3x = 12 \\implies x = 4$$",
            "4) Обязательная проверка: подставляем $x = 4$ в исходное уравнение:",
            "Левая часть: $\\sqrt{16 - 4 - 8} = \\sqrt{4} = 2$. Правая часть: $4 - 2 = 2$. Равенство $2 = 2$ истинно!",
            "Ответ: **x = 4**."
        ],
        formulas: [
            { title: "Возведение в квадрат", math: "\\sqrt{f(x)} = g(x) \\iff \\begin{cases} f(x) = g(x)^2 \\\\ g(x) \\ge 0 \\end{cases}" },
            { title: "Квадрат разности", math: "(x - 2)^2 = x^2 - 4x + 4" }
        ],
        trapRu: "ЛОВУШКА: Ты ответил «нет решений». Ученики часто пугаются корня или делают ошибку в знаках при переносе $-x - 4x$ вместо $-x + 4x$. Решение есть, и оно проверяется за 10 секунд!",
        trapUz: "XATO: Siz «yechimga ega emas» deb belgiladingiz. Belgilarni ko'chirishda adashmaslik kerak: $-x + 4x = 3x$ va $4 + 8 = 12$."
    },
    {
        id: 7,
        topic: "Parabola uchi parametrlari • Параметры вершины параболы",
        topicRu: "Параметры вершины параболы",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "incorrect",
        statementUz: "$y = 3(x - 2)^2 + d$ parabola uchining koordinatalari $T(a; 2a)$ boʻlsa, $a - d$ ifoda qiymatini toping.",
        statementRu: "Если координаты вершины параболы $y = 3(x - 2)^2 + d$ равны $T(a; 2a)$, найдите значение выражения $a - d$.",
        options: ["2", "-2", "4", "-4"],
        correctIndex: 1, // "-2"
        visualType: "vertexParam",
        stepsUz: [
            "1) Kanonik ko'rinish: $y = k(x - x_0)^2 + y_0$. Bu formulada $(x_0; y_0)$ — parabola uchining koordinatalari.",
            "Bizning funksiyada $x_0 = 2$, $y_0 = d$. Ya'ni uchi $(2; d)$ nuqtada.",
            "2) Masala shartiga ko'ra uchi $T(a; 2a)$ nuqtada joylashgan:",
            "Demak: $a = 2$.",
            "Ordinata: $d = 2a = 2 \\cdot 2 = 4$.",
            "3) So'ralgan ifoda: $a - d = 2 - 4 = -2$."
        ],
        stepsRu: [
            "1) Парабола задана в каноническом виде: $y = k(x - x_0)^2 + y_0$, где $(x_0; y_0)$ — координаты её вершины.",
            "Сравнивая с $y = 3(x - 2)^2 + d$, получаем: $x_0 = 2$, $y_0 = d$.",
            "2) По условию координаты вершины заданы точкой $T(a; 2a)$:",
            "Отсюда: $a = 2$.",
            "Тогда вторая координата: $d = 2a = 2 \\cdot 2 = 4$.",
            "3) Вычисляем требуемую разность: $a - d = 2 - 4 = \\mathbf{-2}$."
        ],
        formulas: [
            { title: "Каноническое уравнение параболы", math: "y = a(x - x_0)^2 + y_0" },
            { title: "Координаты вершины $T$", math: "x_0 = a, \\quad y_0 = d" }
        ],
        trapRu: "ЛОВУШКА: Ты ответил +2! Ты вычислил $d - a = 4 - 2 = 2$ вместо $a - d = 2 - 4 = -2$. Будь предельно внимателен к порядку букв в выражении!",
        trapUz: "XATO: Siz 2 deb javob berdingiz, chunki $d - a = 4 - 2 = 2$ ni hisoblab qo'ygansiz. Savolda esa $a - d = 2 - 4 = -2$ so'ralgan!"
    },
    {
        id: 8,
        topic: "Geometriya va funksiya • Площадь треугольника",
        topicRu: "Геометрия и функции • Площадь треугольника",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "correct",
        statementUz: "$y = x^2 - 6x + 8$ kvadrat funksiyaning koordinata oʻqlari bilan kesishish nuqtalari $A, B$ va $C$ boʻlsin. $ABC$ uchburchak yuzini toping.",
        statementRu: "Точки $A, B$ и $C$ являются точками пересечения квадратичной функции $y = x^2 - 6x + 8$ с осями координат. Найдите площадь треугольника $ABC$.",
        options: ["8 kv. birlik", "16 kv. birlik", "4 kv. birlik", "12 kv. birlik"],
        correctIndex: 0, // "8 kv. birlik"
        visualType: "trianglePlot",
        stepsUz: [
            "1) $Ox$ o'qi bilan kesishish nuqtalarini topish uchun $y = 0$ deymiz: $x^2 - 6x + 8 = 0$.",
            "Viyet teoremasiga ko'ra: $x_1 = 2, x_2 = 4$. Nuqtalar: $A(2; 0)$ va $B(4; 0)$.",
            "2) $A$ va $B$ orasidagi masofa (asos): $AB = 4 - 2 = 2$ birlik.",
            "3) $Oy$ o'qi bilan kesishish nuqtasi uchun $x = 0$ qo'yamiz: $y = 0^2 - 6(0) + 8 = 8$. Nuqta: $C(0; 8)$.",
            "4) $ABC$ uchburchakning $Ox$ dagi $AB$ asosiga tushirilgan balandligi $C$ nuqtaning ordinatasiga teng: $h = 8$.",
            "5) Uchburchak yuzi: $S = \\frac{1}{2} \\cdot AB \\cdot h = \\frac{1}{2} \\cdot 2 \\cdot 8 = 8$ kv. birlik."
        ],
        stepsRu: [
            "1) Точки пересечения с осью $Ox$ ($y = 0$): решаем $x^2 - 6x + 8 = 0$. Корни: $x_1 = 2, x_2 = 4$. Точки: $A(2; 0)$ и $B(4; 0)$.",
            "Основание треугольника на оси $Ox$: $AB = 4 - 2 = 2$.",
            "2) Точка пересечения с осью $Oy$ ($x = 0$): подставляем ноль: $y = 8$. Точка $C(0; 8)$.",
            "3) Высота треугольника, опущенная на основание $AB$, равна расстоянию от точки $C$ до оси $Ox$, то есть $h = 8$.",
            "4) Площадь треугольника: $S = \\frac{1}{2} \\cdot a \\cdot h = \\frac{1}{2} \\cdot 2 \\cdot 8 = \\mathbf{8}$ кв. единиц."
        ],
        formulas: [
            { title: "Точки пересечения с $Ox$", math: "y = 0 \\implies ax^2 + bx + c = 0" },
            { title: "Точка пересечения с $Oy$", math: "x = 0 \\implies y = c" },
            { title: "Площадь треугольника", math: "S = \\frac{1}{2} a h" }
        ],
        trapRu: "Отличный результат, эта задача решена верно! Главное здесь — не перепутать длину основания $4 - 2 = 2$ с координатой 4.",
        trapUz: "Barakalla, bu masalani to'g'ri yechgansiz! Asos uzunligi $4 - 2 = 2$ ekanligini to'g'ri topgansiz."
    },
    {
        id: 9,
        topic: "Tengsizliklar • Нестрогие неравенства и натуральные числа",
        topicRu: "Неравенства • Нестрогие неравенства и натуральные числа",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "incorrect",
        statementUz: "$(x - 5)^2 \\cdot (x^2 - 25) \\ge 0$ tengsizlikni qanoatlantiruvchi eng kichik natural sonni toping.",
        statementRu: "Найдите наименьшее натуральное число, удовлетворяющее неравенству $(x - 5)^2 \\cdot (x^2 - 25) \\ge 0$.",
        options: ["5", "1", "0", "natural yechimga ega emas"],
        correctIndex: 0, // "5"
        visualType: "intervalLineQ9",
        stepsUz: [
            "1) Ifodani ko'paytuvchilarga ajratamiz: $(x - 5)^2 \\cdot (x - 5)(x + 5) \\ge 0 \\implies (x - 5)^3 (x + 5) \\ge 0$.",
            "2) Tengsizlik nollari: $x = 5$ va $x = -5$.",
            "3) Tengsizlik NOQAT'IY ($\\ge 0$), ya'ni ifoda **nolga teng bo'lishi ham mumkin**!",
            "Agar $x = 5$ qo'ysak: $(5 - 5)^2 \\cdot (25 - 25) = 0 \\cdot 0 = 0 \\ge 0$ — to'g'ri!",
            "4) Natural sonlar to'plami: $1, 2, 3, 4, 5, 6, ...$",
            "$x \\in \\{1, 2, 3, 4\\}$ da: $(x^2 - 25) < 0$ bo'lgani uchun ifoda manfiy bo'ladi.",
            "Shuning uchun eng kichik natural yechim bu **5** sonining o'zi."
        ],
        stepsRu: [
            "1) Разложим вторую скобку по формуле разности квадратов: $(x - 5)^2 \\cdot (x - 5)(x + 5) \\ge 0 \\implies (x - 5)^3(x + 5) \\ge 0$.",
            "2) Обратите внимание на знак: неравенство **нестрогое** ($\\ge 0$), поэтому значения, обращающие выражение в ноль, **являются решениями**!",
            "3) Натуральные числа — это $1, 2, 3, 4, 5, \\dots$",
            "Проверим $x = 5$: $(5 - 5)^2 \\cdot (25 - 25) = 0 \\ge 0$ — неравенство выполняется!",
            "При $x = 1, 2, 3, 4$ множитель $(x^2 - 25) < 0$, поэтому они не подходят.",
            "Следовательно, наименьшее натуральное решение — это число **5**."
        ],
        formulas: [
            { title: "Разность квадратов", math: "x^2 - 25 = (x - 5)(x + 5)" },
            { title: "Нестрогий знак $\\ge 0$", math: "f(x) \\ge 0 \\implies f(x) = 0 \\text{ входит в ответ}" },
            { title: "Множество натуральных чисел", math: "\\mathbb{N} = \\{1, 2, 3, 4, 5, \\dots\\}" }
        ],
        trapRu: "ЛОВУШКА: Ты ответил «нет натуральных решений». Ученики забывают, что при $x = 5$ получается $0 = 0$, а ноль удовлетворяет знаку $\\ge 0$! А число 5 — натуральное.",
        trapUz: "XATO: Siz «natural yechimga ega emas» dedingiz. $x = 5$ qo'yilganda $0 \\ge 0$ hosil bo'ladi, 5 esa natural son!"
    },
    {
        id: 10,
        topic: "Kasr-ratsional tengsizliklar • Метод интервалов",
        topicRu: "Дробно-рациональные неравенства • Метод интервалов",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "incorrect",
        statementUz: "Tengsizlikni yeching: $\\frac{x - 3}{x^2 + 3x - 10} < 0$",
        statementRu: "Решите неравенство: $\\frac{x - 3}{x^2 + 3x - 10} < 0$",
        options: ["$x < -5, \\; 2 < x < 3$", "$x < -5, \\; x > 3$", "$-5 < x < 2, \\; x > 3$", "$x < 3$"],
        correctIndex: 0, // "x < -5, 2 < x < 3"
        visualType: "intervalLineQ10",
        stepsUz: [
            "1) Maxrajdagi kvadrat uchhadni ko'paytuvchilarga ajratamiz: $x^2 + 3x - 10 = 0$.",
            "Viyet bo'yicha ildizlar: $-5$ va $2$. Demak: $x^2 + 3x - 10 = (x + 5)(x - 2)$.",
            "2) Tengsizlik ko'rinishi: $\\frac{x - 3}{(x + 5)(x - 2)} < 0$.",
            "3) Kritik nuqtalar: $-5$, $2$, $3$. Ular sonlar o'qini 4 ta oraliqqa bo'ladi:",
            "• $(3; +\\infty)$ da: $\\frac{+}{+ \\cdot +} = +$",
            "• $(2; 3)$ da: $\\frac{-}{+ \\cdot +} = -$ (manfiy, bizga kerak!)",
            "• $(-5; 2)$ da: $\\frac{-}{+ \\cdot -} = +$",
            "• $(-\\infty; -5)$ da: $\\frac{-}{- \\cdot -} = -$ (manfiy, bizga kerak!)",
            "4) Javob: $x < -5$ va $2 < x < 3$."
        ],
        stepsRu: [
            "1) Раскладываем знаменатель на множители: $x^2 + 3x - 10 = (x + 5)(x - 2)$ (корни $-5$ и $2$).",
            "2) Получаем неравенство: $\\frac{x - 3}{(x + 5)(x - 2)} < 0$.",
            "3) Наносим нули числителя и знаменателя на числовую прямую: точки $-5, 2, 3$ (выколотые, так как знак строгий).",
            "4) Определяем знаки на интервалах методом пробной точки:",
            "— При $x = 10$: знаки $\\frac{+}{+ \\cdot +} = +$",
            "— При $x = 2.5$: знаки $\\frac{-}{+ \\cdot +} = - \\quad (\\text{подходит!})$",
            "— При $x = 0$: знаки $\\frac{-}{+ \\cdot -} = +$",
            "— При $x = -6$: знаки $\\frac{-}{- \\cdot -} = - \\quad (\\text{подходит!})$",
            "Знак неравенства **$<$ 0** (меньше нуля), значит берем интервалы с **минусом**: $x < -5$ и $2 < x < 3$."
        ],
        formulas: [
            { title: "Разложение квадратного трехчлена", math: "ax^2 + bx + c = a(x - x_1)(x - x_2)" },
            { title: "Правило знаков", math: "\\frac{-}{+} = -, \\quad \\frac{-}{-} = +" },
            { title: "Метод интервалов", math: "\\text{При } < 0 \\text{ выбираем интервалы со знаком } «-»" }
        ],
        trapRu: "ЛОВУШКА: Ты выбрал $x < -5, x > 3$. При $x > 3$ выражение положительно ($+$), а в задании стоит знак МЕНЬШЕ нуля ($< 0$)!",
        trapUz: "XATO: Siz musbat oraliqni ($x > 3$) tanlab qo'ydingiz. Savolda esa $< 0$ (manfiy oraliqlar) so'ralgan!"
    },
    {
        id: 11,
        topic: "Amaliy masalalar • Формула равноускоренного движения",
        topicRu: "Прикладные задачи • Физическая формула пути",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "incorrect",
        statementUz: "Jism tinch holatdan tekis tezlanuvchan harakat qilmoqda. Bosib oʻtgan yoʻli $S = \\frac{at^2}{2}$ formula bilan hisoblanadi. Agar $t = 8$ sekundda $S = 96$ m yoʻl bosib oʻtgan boʻlsa, tezlanish $a$ ni toping.",
        statementRu: "Тело движется из состояния покоя прямолинейно равноускоренно. Путь вычисляется по формуле $S = \\frac{at^2}{2}$. Если за $t = 8$ с путь составил $S = 96$ м, найдите ускорение $a$.",
        options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
        correctIndex: 2, // "3 m/s²"
        visualType: "physicsMotion",
        stepsUz: [
            "1) Berilgan: $S = 96$ m, $t = 8$ s. Formula: $S = \\frac{a t^2}{2}$.",
            "2) Qiymatlarni qo'yamiz:",
            "$96 = \\frac{a \\cdot 8^2}{2}$",
            "$96 = \\frac{a \\cdot 64}{2}$",
            "$96 = 32a$",
            "3) $a$ ni topamiz: $a = \\frac{96}{32} = 3$ m/s²."
        ],
        stepsRu: [
            "1) Дано: путь $S = 96$ м, время $t = 8$ с. Формула: $S = \\frac{at^2}{2}$.",
            "2) Подставляем известные величины:",
            "$$96 = \\frac{a \\cdot 8^2}{2} = \\frac{a \\cdot 64}{2} = 32a$$",
            "3) Находим неизвестный множитель $a$:",
            "$$a = \\frac{96}{32} = \\mathbf{3 \\text{ м/с}^2}$$"
        ],
        formulas: [
            { title: "Путь при равноускоренном движении", math: "S = \\frac{a t^2}{2}" },
            { title: "Выражение ускорения", math: "a = \\frac{2S}{t^2}" }
        ],
        trapRu: "ЛОВУШКА: Ты ответил 1 м/с². Ошибка возникла из-за деления без умножения на 2: $\\frac{96}{64} = 1.5 \\approx 1$. Запомни: сначала умножаем обе части на 2: $2S = at^2 \\implies a = 2S / t^2$!",
        trapUz: "XATO: Siz 1 m/s² deb belgiladingiz. Maxrajdagi 2 ga ko'paytirishni unutmang: $a = \\frac{2S}{t^2} = \\frac{2 \\cdot 96}{64} = \\frac{192}{64} = 3$."
    },
    {
        id: 12,
        topic: "Parabola xossalari • Свойства квадратичной функции по 3 точкам",
        topicRu: "Свойства параболы по 3 точкам",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "correct",
        statementUz: "Kvadrat funksiya grafigi koordinata oʻqlarini $(-1;0)$, $(5;0)$ va $(0;-5)$ nuqtalarda kesib oʻtadi. Quyidagi tasdiqlardan nechtasi toʻgʻri?\n1. Funksiya eng kichik qiymatga ega;\n2. Funksiyaning oʻsish oraligʻi $[2; \\infty)$;\n3. Funksiya $x \\in (-1;5)$ boʻlganda musbat qiymatlar qabul qiladi;\n4. Funksiya grafigi koordinata tekisligining barcha choraklaridan oʻtadi.",
        statementRu: "График квадратичной функции пересекает оси в точках $(-1;0)$, $(5;0)$ и $(0;-5)$. Сколько из следующих утверждений верны?\n1. Функция имеет наименьшее значение;\n2. Промежуток возрастания функции $[2; \\infty)$;\n3. При $x \\in (-1;5)$ функция принимает положительные значения;\n4. График функции проходит через все четыре координатные четверти.",
        options: ["1", "2", "3", "4"],
        correctIndex: 2, // "3"
        visualType: "parabolaThrough3Points",
        parabolaData: { a: 1, roots: [-1, 5], yIntercept: -5 },
        stepsUz: [
            "1) Funksiya ko'rinishi: $y = a(x + 1)(x - 5)$. $x = 0$ da $y = a(1)(-5) = -5a = -5 \\implies a = 1 > 0$. Tarmoqlari yuqoriga qaragan.",
            "1-tasdiq: Tarmoqlari yuqoriga qaragani uchun eng kichik qiymatga ega — **TO'G'RI**.",
            "2-tasdiq: Uchi $x_0 = \\frac{-1 + 5}{2} = 2$. O'sish oralig'i $[2; \\infty)$ — **TO'G'RI**.",
            "3-tasdiq: Ildizlar oralig'ida ($(-1; 5)$) parabola $Ox$ o'qidan pastda (chunki $y(0) = -5 < 0$). Qiymatlari manfiy, musbat emas — **NOTO'G'RI**.",
            "4-tasdiq: Parabola I, II, III va IV choraklardan o'tadi — **TO'G'RI**.",
            "Jami 3 ta to'g'ri tasdiq (1, 2, 4)."
        ],
        stepsRu: [
            "Восстановим уравнение: $y = a(x - x_1)(x - x_2) = a(x + 1)(x - 5)$.",
            "Используем точку $(0; -5)$: $-5 = a(1)(-5) \\implies a = 1$. Функция: $y = x^2 - 4x - 5$.",
            "Проверяем каждое утверждение:",
            "1. Ветви вверх ($a = 1 > 0$), значит вершина — точка минимума, наименьшее значение есть. (**Верно**)",
            "2. Абсцисса вершины $x_0 = \\frac{-1 + 5}{2} = 2$. Функция убывает до 2 и возрастает на $[2; \\infty)$. (**Верно**)",
            "3. Между нулями $(-1; 5)$ график лежит под осью $Ox$ ($y(0) = -5 < 0$), то есть принимает отрицательные значения, а не положительные! (**Неверно**)",
            "4. График проходит через I, II, III и IV четверти. (**Верно**)",
            "Итого верны **3 утверждения** (1, 2 и 4)."
        ],
        formulas: [
            { title: "Уравнение по корням", math: "y = a(x - x_1)(x - x_2)" },
            { title: "Абсцисса вершины", math: "x_0 = \\frac{x_1 + x_2}{2}" },
            { title: "Промежуток возрастания при $a > 0$", math: "[x_0; +\\infty)" }
        ],
        trapRu: "Отлично, задача решена верно! Главное — помнить, что между корнями при ветвях вверх парабола всегда отрицательна.",
        trapUz: "Barakalla, bu to'g'ri topilgan!"
    },
    {
        id: 13,
        topic: "Tengsizliklar • Дробные неравенства",
        topicRu: "Неравенства • Дробные неравенства",
        type: "Bilish",
        points: 2.0,
        userPrevStatus: "incorrect",
        statementUz: "$\\frac{x - 4}{x + 4} < 0$ tengsizlikni yeching.",
        statementRu: "Решите неравенство: $\\frac{x - 4}{x + 4} < 0$",
        options: ["$-4 < x < 4$", "$x > 4$", "$x < -4$", "$x < -4, \\; x > 4$"],
        correctIndex: 0, // "-4 < x < 4"
        visualType: "intervalLineQ13",
        stepsUz: [
            "1) Surat va maxrajning nollarini topamiz: $x - 4 = 0 \\implies x = 4$ va $x + 4 = 0 \\implies x = -4$.",
            "2) Sonlar o'qida oraliqlarni belgilaymiz:",
            "• $x > 4$ bo'lganda: masalan $x = 5 \\implies \\frac{5-4}{5+4} = \\frac{1}{9} > 0$ ($+$)",
            "• $-4 < x < 4$ bo'lganda: masalan $x = 0 \\implies \\frac{0-4}{0+4} = \\frac{-4}{4} = -1 < 0$ ($-$ bizga kerak!)",
            "• $x < -4$ bo'lganda: masalan $x = -5 \\implies \\frac{-5-4}{-5+4} = \\frac{-9}{-1} = +9 > 0$ ($+$)",
            "3) Tengsizlik belgisi $< 0$ bo'lgani uchun manfiy oraliqni olamiz: $-4 < x < 4$."
        ],
        stepsRu: [
            "1) Находим нули числителя и знаменателя: $x = 4$ и $x = -4$.",
            "2) Наносим точки на числовую прямую. Они делят прямую на 3 интервала:",
            "— При $x > 4$: числитель $> 0$, знаменатель $> 0$, частное $> 0$ ($+$)",
            "— При $-4 < x < 4$ (например, $x = 0$): $\\frac{-4}{4} = -1 < 0$ ($-$) $\\leftarrow$ **подходит!**",
            "— При $x < -4$ (например, $x = -5$): $\\frac{-9}{-1} = +9 > 0$ ($+$)",
            "3) Поскольку требуется $< 0$ (строго меньше нуля), решением является внутренний интервал со знаком «минус»:",
            "$$\\mathbf{-4 < x < 4}$$"
        ],
        formulas: [
            { title: "Дробное неравенство", math: "\\frac{A}{B} < 0 \\iff A \\cdot B < 0 \\; (B \\neq 0)" },
            { title: "Интервал знака минус", math: "x \\in (-4; 4)" }
        ],
        trapRu: "ЛОВУШКА: Ты выбрал $x > 4$. Но при $x > 4$ (например, при $x = 10$) дробь равна $\\frac{6}{14} > 0$ — она положительна! Всегда проверяй знак подстановкой нуля: $\\frac{0-4}{0+4} = -1 < 0$!",
        trapUz: "XATO: Siz $x > 4$ deb belgilagansiz. $x = 0$ ni qo'yib tekshirib ko'ring: $\\frac{-4}{4} = -1 < 0$ bo'ladi, demak 0 yechimlar oralig'iga kiradi!"
    },
    {
        id: 14,
        topic: "Parabola koeffitsiyentlari • Сравнение коэффициентов парабол",
        topicRu: "Коэффициенты параболы • Сжатие и растяжение",
        type: "Qo'llash",
        points: 2.6,
        userPrevStatus: "incorrect",
        statementUz: "Rasmda $y = ax^2$, $y = bx^2$ va $y = cx^2$ funksiyalarning grafiklari tasvirlangan ($y = cx^2$ eng tor va eng yuqorida, $y = ax^2$ eng keng). $a, b$ va $c$ koeffitsiyentlari orasidagi toʻgʻri munosabatni aniqlang.",
        statementRu: "Изображены графики функций $y = ax^2$, $y = bx^2$ и $y = cx^2$ ($y = cx^2$ самая узкая и крутая, $y = ax^2$ самая широкая). Определите верное соотношение между коэффициентами $a, b$ и $c$.",
        options: ["$c > b > a$", "$a > b > c$", "$b > a > c$", "$a = b = c$"],
        correctIndex: 0, // "c > b > a"
        visualType: "threeParabolas",
        stepsUz: [
            "1) Qoida: $y = kx^2$ funksiyada koeffitsiyent $k$ qancha **katta** bo'lsa, parabola shoxlari $Oy$ o'qiga shuncha **yaqin** (torroq va tikroq) bo'ladi.",
            "2) Buni tekshirish oson: $x = 1$ nuqtada qiymatlarni taqqoslaymiz: $y_c(1) = c$, $y_b(1) = b$, $y_a(1) = a$.",
            "Grafikda $x = 1$ da eng baland nuqta $c$ grafigiga to'g'ri keladi, keyin $b$, eng pasti esa $a$.",
            "Shuning uchun: $c > b > a$."
        ],
        stepsRu: [
            "1) Фундаментальное правило: чем больше коэффициент $k > 0$ в функции $y = kx^2$, тем быстрее растёт функция и тем «уже» (круче) ветви параболы прижаты к оси $Oy$.",
            "2) Простейший геометрический способ: проведём вертикальную прямую $x = 1$.",
            "Точки пересечения с графиками будут иметь ординаты: $y_1 = a$, $y_2 = b$, $y_3 = c$.",
            "По рисунку точка графика $y = cx^2$ лежит выше всех, ниже идёт $b$, а ниже всех — $a$.",
            "Следовательно: $\\mathbf{c > b > a}$."
        ],
        formulas: [
            { title: "Влияние коэффициента $a$", math: "a_1 > a_2 > 0 \\implies y = a_1 x^2 \\text{ уже, чем } y = a_2 x^2" },
            { title: "Сечение при $x = 1$", math: "y(1) = a \\cdot 1^2 = a" }
        ],
        trapRu: "ЛОВУШКА: Ты ответил $a > b > c$ (с точностью до наоборот). Запомни: чем парабола уже и круче, тем её коэффициент БОЛЬШЕ!",
        trapUz: "XATO: Siz teskari tartibda ($a > b > c$) belgilab qo'ydingiz. Parabola qanchalik tor bo'lsa, uning koeffitsiyenti shunchalik KATTA bo'ladi!"
    },
    {
        id: 15,
        topic: "Amaliy masala • Сюжетная задача о струях воды",
        topicRu: "Прикладная задача • Параболы струй воды",
        type: "Mulohaza",
        points: 3.0,
        userPrevStatus: "correct",
        statementUz: "Silindrsimon idishning A, B va C teshiklaridan chiqqan suv oqimlari parabolalardan iborat. B nuqta idish tubidan 8 birlik balandlikda, AB = 1 birlik, A nuqtadan chiqqan suvning tushish masofasi 3 birlik. B va C nuqtalardan chiqqan suv oqimlarining yerga tushish nuqtalari orasidagi masofani toping.",
        statementRu: "Струи воды из отверстий A, B и C цилиндрического бака образуют параболы. Точка B находится на высоте 8 единиц от дна, AB = 1 единица, дальность струи из A равна 3 единицам. Найдите расстояние между точками падения струй из B и C.",
        options: ["1 birlik", "2 birlik", "1.5 birlik", "0.5 birlik"],
        correctIndex: 0, // "1 birlik"
        visualType: "waterJets",
        stepsUz: [
            "Shartga ko'ra balandlik 1 birlikka kamayganda, yerga tushish masofasi 1 birlikka ortadi.",
            "A nuqta balandligi: $8 + 1 = 9$ birlik, tushish masofasi: $3$ birlik.",
            "B nuqta balandligi: $8$ birlik (1 birlikka kam), tushish masofasi: $3 + 1 = 4$ birlik.",
            "C nuqta balandligi: $7$ birlik (yana 1 birlikka kam), tushish masofasi: $4 + 1 = 5$ birlik.",
            "B va C oqimlarining tushish nuqtalari orasidagi masofa: $5 - 4 = 1$ birlik."
        ],
        stepsRu: [
            "По условию задачи: при уменьшении высоты отверстия на 1 единицу, дальность падения струи увеличивается ровно на 1 единицу.",
            "1) Высота отверстия A: $8 + 1 = 9$ единиц, дальность: $3$ единицы.",
            "2) Высота отверстия B: $8$ единиц (на 1 меньше), дальность струи B: $3 + 1 = 4$ единицы.",
            "3) Высота отверстия C: $7$ единиц (еще на 1 меньше), дальность струи C: $4 + 1 = 5$ единиц.",
            "4) Искомое расстояние между точками падения струй B и C: $5 - 4 = \\mathbf{1}$ единица."
        ],
        formulas: [
            { title: "Зависимость дальности", math: "\\Delta L = -\\Delta h" },
            { title: "Разность расстояний", math: "d = L_C - L_B = 5 - 4 = 1" }
        ],
        trapRu: "Отличная интуиция и логика! Эта сложная задача уровня Mulohaza (Рассуждение) решена абсолютно верно.",
        trapUz: "Ajoyib natija! Eng yuqori balli Mulohaza masalasini to'g'ri yechgansiz."
    },
    {
        id: 16,
        topic: "Parametrik tengsizlik • Неравенство с параметрами",
        topicRu: "Параметрические неравенства",
        type: "Mulohaza",
        points: 3.0,
        userPrevStatus: "correct",
        statementUz: "$a < b < 0 < c$ boʻlgan hol uchun tengsizlikni yeching: $(x + a) \\cdot (x + c) \\cdot (x^2 + 2bx + b^2) > 0$",
        statementRu: "Для условия $a < b < 0 < c$ решите неравенство: $(x + a) \\cdot (x + c) \\cdot (x^2 + 2bx + b^2) > 0$",
        options: ["$x < -c, \\; x > -a$", "$-c < x < -a$", "$x < a, \\; x > c$", "$x > 0$"],
        correctIndex: 0, // "x < -c, x > -a"
        visualType: "intervalParamQ16",
        stepsUz: [
            "1) Oxirgi qavsni to'la kvadratga keltiramiz: $x^2 + 2bx + b^2 = (x + b)^2$.",
            "Tengsizlik: $(x + a)(x + c)(x + b)^2 > 0$.",
            "2) Har qanday haqiqiy sonning kvadrati nomanfiy: $(x + b)^2 \\ge 0$. Qat'iy musbat bo'lishi uchun $x \\neq -b$ bo'lishi shart.",
            "3) Qolgan ifoda: $(x + a)(x + c) > 0$.",
            "Nollari: $x = -a$ va $x = -c$.",
            "Shartga ko'ra $a < 0 < c$, demak $-c < 0 < -a$. Ya'ni $-c < -a$.",
            "4) Ko'paytma $> 0$ bo'lishi uchun $x < -c$ yoki $x > -a$ bo'lishi kerak."
        ],
        stepsRu: [
            "1) Свернем квадратный трехчлен в третьей скобке: $x^2 + 2bx + b^2 = (x + b)^2$.",
            "Неравенство принимает вид: $(x + a)(x + c)(x + b)^2 > 0$.",
            "2) Выражение $(x + b)^2 > 0$ строго положительно при всех $x \\neq -b$ и не влияет на знак!",
            "3) Остается решить: $(x + a)(x + c) > 0$.",
            "Корни скобок: $x = -a$ и $x = -c$.",
            "По условию $a < 0 < c$. Умножим на $-1$: $-c < 0 < -a$, то есть точка $-c$ лежит левее точки $-a$.",
            "4) По методу интервалов для $(x - (-a))(x - (-c)) > 0$ решением являются внешние промежутки:",
            "$$\\mathbf{x < -c} \\quad \\text{и} \\quad \\mathbf{x > -a}$$"
        ],
        formulas: [
            { title: "Полный квадрат", math: "x^2 + 2bx + b^2 = (x + b)^2 \\ge 0" },
            { title: "Смена знака при умножении на -1", math: "a < c \\implies -a > -c" }
        ],
        trapRu: "Супер! Задача со звездочкой решена абсолютно правильно. Ты сразу заметил полный квадрат $(x+b)^2$!",
        trapUz: "Qoyil! Murakkab parametrli masalani to'g'ri bajargansiz."
    }
];

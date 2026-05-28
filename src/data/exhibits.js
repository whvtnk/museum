export const langLabels = { kz: "Қаз", ru: "Рус", en: "Eng" };

export const navItems = {
  kz: { home: "Басты бет", heroes: "Батыр ұшқыштар", friendship: "Достық", statistics: "Статистика", rear: "Тыл", jarmenov: "Жарменов К.И.", divisions: "Әскери құрамалар" },
  ru: { home: "Главная", heroes: "Герои-лётчики", friendship: "Дружба", statistics: "Статистика", rear: "Тыл", jarmenov: "Жарменов К.И.", divisions: "Воинские соединения" },
  en: { home: "Home", heroes: "Hero pilots", friendship: "Friendship", statistics: "Statistics", rear: "Home front", jarmenov: "K.I. Jarmenov", divisions: "Military units" }
};

export const homeContent = {
  kz: { title: "Қазақстанның Ұлы Отан соғысындағы үлесі", subtitle: "Музей экспонаттарына арналған ақпараттық жүйе", welcome: "Музейге қош келдіңіз! Экспонат алдындағы QR кодты сканерлеп, толық ақпарат алыңыз.", cta: "Экспонаттарды қараңыз" },
  ru: { title: "Вклад Казахстана в Великую Отечественную войну", subtitle: "Информационная система экспонатов музея", welcome: "Добро пожаловать в музей! Сканируйте QR-код перед экспонатом, чтобы узнать подробнее.", cta: "Смотреть экспонаты" },
  en: { title: "Kazakhstan's contribution to the Great Patriotic War", subtitle: "Museum exhibit information system", welcome: "Welcome to the museum! Scan the QR code in front of any exhibit to learn more.", cta: "View exhibits" }
};

export const exhibits = {
  heroes: {
    id: "heroes",
    kz: {
      title: "Батыр ұшқыштар",
      subtitle: "Кеңес Одағының Батырлары — қазақстандық ұшқыштар",
      items: [
        { name: "Бегельдинов Талғат Жақыпбекұлы", years: "1922–2014", rank: "Кеңес Одағының екі мәрте Батыры, генерал-майор", desc: "Ақмола облысында туылған. 1943 жылдан майданда, Ил-2 штурмовигінде ұшқыш. Орёл, Курск шайқастарына қатысқаны үшін 1944 ж. Кеңес Одағының Батыры атағы берілді. Шығыс Еуропа қалаларын азат еткені және Берлинді алғаны үшін екінші «Алтын Жұлдыз» медалімен марапатталды. Жеңіс парадына қатысушы. Соғыс жылдарында 305 жауынгерлік ұшу жасап, 7 ұшақ құлатты." },
        { name: "Луганский Сергей Данилович", years: "1918–1977", rank: "Кеңес Одағының екі мәрте Батыры, генерал-майор", desc: "Верный (Алматы) қаласында туылған. Совет-фин соғысына қатысқан. 1943 жылы 221 жауынгерлік ұшу және 18 жеке құлатқан ұшағы үшін Батыр атағы берілді. 1944 жылы екі мәрте Батыр атанды. Соғыс жылдарында 390 жауынгерлік ұшу жасап, 37 жеке жеңіске жетті." },
        { name: "Беда Леонид Игнатьевич", years: "1920–1976", rank: "Кеңес Одағының екі мәрте Батыры, генерал-лейтенант", desc: "Қостанай облысында туылған. 1942 жылдан майданда. Сталинград шайқасына, Донбассты, Оңтүстік Украинаны, Қырымды, Белоруссия мен Литваны азат етуге қатысты. Соғыс жылдарында Ил-2 штурмовигінде 214 жауынгерлік ұшу жасады." },
        { name: "Павлов Иван Фомич", years: "1922–1950", rank: "Кеңес Одағының екі мәрте Батыры", desc: "Қостанай губерниясында туылған. 1942 жылдан майданда. Ржев-Сычёв, Великолук, Смоленск операцияларына, Белоруссия мен Прибалтиканы азат етуге қатысты. Соғыс жылдарында Ил-2 штурмовигінде 237 жауынгерлік ұшу жасады." },
        { name: "Әбдіров Нүркен", years: "1919–1942", rank: "Кеңес Одағының Батыры (қайтыс болғаннан кейін)", desc: "Семей облысында туылған. 1942 жылдың қазанынан майданда. 16 жауынгерлік ұшуда бірнеше танк пен 20-дан астам автокөлікті жойды. 1942 жылы 19 желтоқсанда оның ұшағы тікелей оққа ұшырап, жанып кетті. Әбдіров жанған ұшақты жау танктар колоннасына бағыттап, қаза тапты." },
        { name: "Хиуаз Доспанова", years: "1922–2008", rank: "Халық Қаhарманы (2004)", desc: "Гурьев облысында туылған. 588-ші түнгі бомбалаушы авиаполкта штурман-атқыш. Оңтүстік майданда, Солтүстік Кавказда, Украина мен Белоруссияда жауынгерлік тапсырмалар орындады. Екі рет ауыр жараланды, бірақ қатарға қайта оралды. Жеңісті Берлин түбінде қарсы алды." }
      ]
    },
    ru: {
      title: "Герои-лётчики",
      subtitle: "Герои Советского Союза — лётчики из Казахстана",
      items: [
        { name: "Бегельдинов Талгат Якубекович", years: "1922–2014", rank: "Дважды Герой Советского Союза, генерал-майор", desc: "Родился в Акмолинской области. На фронте с 1943 года, лётчик-штурмовик на Ил-2. За участие в боях под Орлом, Курском и в Корсунь-Шевченковской операции в 1944 году присвоено звание Героя. За освобождение городов Восточной Европы и взятие Берлина награждён второй медалью «Золотая Звезда». Участник Парада Победы. За два года войны совершил 305 боевых вылетов, сбил 7 самолётов." },
        { name: "Луганский Сергей Данилович", years: "1918–1977", rank: "Дважды Герой Советского Союза, генерал-майор", desc: "Родился в г. Верный (Алма-Ата). Участвовал в советско-финской войне. 2 сентября 1943 года за 221 боевой вылет и 18 лично сбитых самолётов присвоено звание Героя. 1 июля 1944 года стал дважды Героем. Всего за войну совершил 390 боевых вылетов, одержал 37 личных побед." },
        { name: "Беда Леонид Игнатьевич", years: "1920–1976", rank: "Дважды Герой Советского Союза, генерал-лейтенант", desc: "Родился в Кустанайской области. На фронте с августа 1942 года. Участвовал в Сталинградской битве, освобождении Донбасса, Южной Украины, Крыма, Белоруссии, Литвы, в Восточно-Прусской операции. За время войны совершил 214 боевых вылетов на штурмовике Ил-2." },
        { name: "Павлов Иван Фомич", years: "1922–1950", rank: "Дважды Герой Советского Союза", desc: "Родился в Кустанайской губернии. На фронте с июня 1942 года. Участвовал в Ржевско-Сычёвской, Великолукской и Смоленской операциях, освобождении Белоруссии и Прибалтики. За время войны совершил 237 боевых вылетов на штурмовике Ил-2." },
        { name: "Абдиров Нуркен", years: "1919–1942", rank: "Герой Советского Союза (посмертно)", desc: "Родился в Семипалатинской области. На фронте с октября 1942 года. За 16 боевых вылетов уничтожил несколько танков и более 20 автомашин. 19 декабря 1942 года его самолёт получил прямое попадание. Абдиров направил горящую машину в колонну вражеских танков и погиб." },
        { name: "Хиуаз Доспанова", years: "1922–2008", rank: "Халық Қаһарманы (2004)", desc: "Родилась в Гурьевской области. Штурман-стрелок 588-го ночного бомбардировочного авиаполка. Выполняла боевые задания на Южном фронте, Северном Кавказе, в Украине и Белоруссии. Дважды была тяжело ранена, но возвращалась в строй. Встретила Победу под Берлином." }
      ]
    },
    en: {
      title: "Hero pilots",
      subtitle: "Heroes of the Soviet Union — pilots from Kazakhstan",
      items: [
        { name: "Talgat Begeldinov", years: "1922–2014", rank: "Twice Hero of the Soviet Union, Major General", desc: "Born in the Akmola region. On the front from 1943, attack pilot on Il-2. Awarded the Hero title in 1944 for battles near Orel, Kursk and the Korsun-Shevchenko operation. Received a second Gold Star medal for liberating Eastern European cities and the capture of Berlin. Victory Parade participant. Made 305 combat sorties in two years, shot down 7 aircraft." },
        { name: "Sergei Lugansky", years: "1918–1977", rank: "Twice Hero of the Soviet Union, Major General", desc: "Born in Verny (Alma-Ata). Participated in the Soviet-Finnish War. On September 2, 1943, awarded the Hero title for 221 combat sorties and 18 personally downed aircraft. Became a twice Hero on July 1, 1944. Made 390 combat sorties total, achieved 37 personal victories." },
        { name: "Leonid Beda", years: "1920–1976", rank: "Twice Hero of the Soviet Union, Lieutenant General", desc: "Born in Kustanai region. On the front from August 1942. Participated in the Battle of Stalingrad, liberation of Donbass, Southern Ukraine, Crimea, Belarus, Lithuania, and the East Prussian operation. Made 214 combat sorties on the Il-2 attack aircraft." },
        { name: "Ivan Pavlov", years: "1922–1950", rank: "Twice Hero of the Soviet Union", desc: "Born in Kustanai province. On the front from June 1942. Participated in the Rzhev-Sychyovka, Velikiye Luki, and Smolensk operations, liberation of Belarus and the Baltics. Made 237 combat sorties on Il-2." },
        { name: "Nurken Abdirov", years: "1919–1942", rank: "Hero of the Soviet Union (posthumous)", desc: "Born in Semipalatinsk region. On the front from October 1942. In 16 combat sorties destroyed several tanks and over 20 vehicles. On December 19, 1942, his aircraft was hit directly. Abdirov directed the burning aircraft into a column of enemy tanks and perished." },
        { name: "Khiuaz Dospanova", years: "1922–2008", rank: "People's Hero of Kazakhstan (2004)", desc: "Born in Guryev region. Navigator-gunner of the 588th Night Bomber Aviation Regiment. Performed combat missions on the Southern Front, North Caucasus, Ukraine and Belarus. Was seriously wounded twice but returned to duty. Met Victory near Berlin." }
      ]
    }
  },

  friendship: {
    id: "friendship",
    kz: {
      title: "Отты Курск доғасында туған достық",
      paragraphs: [
        "Курск шайқасы (1943 ж. шілде-тамыз) — Ұлы Отан соғысының шешуші шайқастарының бірі. Осы шайқаста қазақстандық ұшқыштар — екі мәрте Батырлар Талғат Бегельдинов пен Сергей Луганский ерекше көзге түсті.",
        "Бір әуе шайқасында С. Луганский Т. Бегельдиновтың өмірін құтқарды. Бегельдиновтың естелігінен: «Кезекті тапсырмаға ұшып барамын. Кенеттен радиодан: «Артыңда мессер!» деген айқай. Бір секунд кешіксем, ұшағымды ұсақ-түйек қылар еді. Бірнеше секундтан кейін неміс истребителі түтінге оранып құлады. Ал менің қасымда 47-ші бортты нөмірлі біздің истребитель пайда болды.»",
        "Олардың екеуі де Орынбор ұшу училищесін бітірген екен. Сол күннен бастап олардың майдандық достығы берік болды, соғыстан кейінгі бейбіт өмірде де жалғасты."
      ]
    },
    ru: {
      title: "Дружба, рождённая на огненной Курской дуге",
      paragraphs: [
        "Курская битва (июль-август 1943 года) — одно из ключевых сражений Великой Отечественной войны. В ней отличились казахстанские лётчики — дважды Герои Советского Союза Талгат Бегельдинов и Сергей Луганский.",
        "В одном из воздушных боёв С. Луганский спас жизнь Т. Бегельдинову. Из воспоминаний Бегельдинова: «Лечу на очередное задание. Вдруг по радио крик: \"Сзади мессер!\" Я успел увернуться. Через несколько секунд немецкий истребитель весь в дыму падает вниз. А рядом со мной показался наш истребитель с бортовым номером 47. Это он сбил фрица.»",
        "Оказалось, что оба окончили Оренбургское лётное училище. С тех пор их фронтовая дружба крепла, помогала в бою и в мирной жизни после войны."
      ]
    },
    en: {
      title: "A friendship born on the fiery Kursk Salient",
      paragraphs: [
        "The Battle of Kursk (July-August 1943) was one of the key battles of the Great Patriotic War. Kazakh pilots — twice Heroes Talgat Begeldinov and Sergei Lugansky — distinguished themselves there.",
        "In one aerial battle, S. Lugansky saved T. Begeldinov's life. From Begeldinov's memoirs: 'I'm flying on another mission. Suddenly a cry on the radio: \"Messer behind you!\" I managed to dodge. Seconds later the German fighter falls down in smoke. Our fighter with tail number 47 appeared beside me. He was the one who shot the enemy down.'",
        "It turned out both had graduated from the Orenburg Flight School. From then on their frontline friendship only grew stronger, sustaining them in battle and in peaceful life after the war."
      ]
    }
  },

  statistics: {
    id: "statistics",
    kz: {
      title: "Қазақстанның Жеңіске қосқан үлесінің статистикасы",
      groups: [
        { heading: "Жалпы статистика", stats: [
          { label: "Соғысқа қатысқан қазақстандықтар", value: "1 378 000" },
          { label: "Соғыстан оралмағандар", value: "601 000+" },
          { label: "Кеңес Одағының Батырлары", value: "~500" },
          { label: "Құрылған дивизиялар", value: "19" }
        ]},
        { heading: "Өнеркәсіп", stats: [
          { label: "Салынған кәсіпорындар", value: "460" },
          { label: "Эвакуацияланған зауыттар", value: "220" },
          { label: "Қорғасын үлесі", value: "85%" },
          { label: "Мыс үлесі", value: "35%" }
        ]},
        { heading: "Ауыл шаруашылығы", stats: [
          { label: "Майданға жіберілген астық", value: "6 млн т" },
          { label: "Ет", value: "733,9 мың т" },
          { label: "Сүт", value: "1 142,3 мың т" },
          { label: "Қорғаныс қорына жиналған", value: "4,7 млрд ₽" }
        ]}
      ]
    },
    ru: {
      title: "Статистика вклада Казахстана в Победу",
      groups: [
        { heading: "Общая статистика", stats: [
          { label: "Казахстанцев участвовало", value: "1 378 000" },
          { label: "Не вернулись с войны", value: "601 000+" },
          { label: "Героев Советского Союза", value: "~500" },
          { label: "Сформировано дивизий", value: "19" }
        ]},
        { heading: "Промышленность", stats: [
          { label: "Построено предприятий", value: "460" },
          { label: "Эвакуировано заводов", value: "220" },
          { label: "Доля свинца", value: "85%" },
          { label: "Доля меди", value: "35%" }
        ]},
        { heading: "Сельское хозяйство", stats: [
          { label: "Зерна на фронт", value: "6 млн т" },
          { label: "Мяса", value: "733,9 тыс. т" },
          { label: "Молока", value: "1 142,3 тыс. т" },
          { label: "Собрано в Фонд обороны", value: "4,7 млрд ₽" }
        ]}
      ]
    },
    en: {
      title: "Kazakhstan's contribution to Victory in numbers",
      groups: [
        { heading: "General statistics", stats: [
          { label: "Kazakhstanis who fought", value: "1,378,000" },
          { label: "Did not return", value: "601,000+" },
          { label: "Heroes of the Soviet Union", value: "~500" },
          { label: "Divisions formed", value: "19" }
        ]},
        { heading: "Industry", stats: [
          { label: "Enterprises built", value: "460" },
          { label: "Factories evacuated", value: "220" },
          { label: "Share of lead supply", value: "85%" },
          { label: "Share of copper supply", value: "35%" }
        ]},
        { heading: "Agriculture", stats: [
          { label: "Grain to the front", value: "6 mln t" },
          { label: "Meat", value: "733,900 t" },
          { label: "Milk", value: "1,142,300 t" },
          { label: "Defense Fund collected", value: "4.7 bln ₽" }
        ]}
      ]
    }
  },

  rear: {
    id: "rear",
    kz: {
      title: "Тыл — Жеңіс мүмкін болмас еді",
      sections: [
        { heading: "Өнеркәсіп", text: "Соғыс жылдарында Қазақстан өнеркәсібіне 3,6 млрд рубль салынды — соғысқа дейінгі деңгейден 2 есе артық. 460 кәсіпорын салынды, оның ішінде 220 эвакуацияланған зауыт пен фабрика. Қазақстан қорғаныс өнеркәсібін стратегиялық шикізатпен қамтамасыз етті: 85% қорғасын, 35% мыс, 60% марганец. Әр 10 оқтың 9-ы қазақстандық қорғасыннан құйылды." },
        { heading: "Ауыл шаруашылығы", text: "1942 жылы мал басы 2 млн-ға, егіс алаңдары 1 млн гектарға ұлғайды. Майданға 6 млн тонна астық, 733,9 мың тонна ет, 1 142,3 мың тонна сүт жіберілді. Қазақстан 110 мың жылқыны майданға берді." },
        { heading: "Халық", text: "Қазақстанға 532,5 мың адам эвакуацияланды, 50 мың кадрлық жұмысшы мен инженер. Еңбек армияларының жалпы саны 700 мың адам. Өнеркәсіптегі әйелдер үлесі 50%-ды, жеңіл және тамақ өнеркәсібінде 90%-ды құрады." },
        { heading: "Ғылым", text: "22 ғылыми-зерттеу институты мен 30 ЖОО эвакуацияланды. Академик К.И. Сәтбаев басқарған геологтар танк бронь болаты үшін қажетті Жезді марганец кен орнын ашты. Тек 38 күнде рудник салынды." },
        { heading: "Мәдениет", text: "Қазақстандық артистер армияда 1 216 концерт берді. Соғыс жылдарында 5 фильмнің 4-і Алматыда түсірілді. 23 толықметражды фильм шығарылды. Алматыда атақты жазушылар мен режиссерлер жұмыс істеді." },
        { heading: "Қорғаныс қоры", text: "Қазақстан еңбекшілері жеке қаражаттарынан 4,7 млрд рубль жинады. Бұл қаражатқа 5 танк колоннасы, 2 авиаэскадрилья, 1 сүңгуір қайық және 1 ұшақ жасалып, майданға жіберілді." }
      ]
    },
    ru: {
      title: "Тыл — без него Победа была бы невозможна",
      sections: [
        { heading: "Промышленность", text: "За годы войны в промышленность Казахстана вложено 3,6 млрд рублей — вдвое больше довоенного уровня. Построено 460 предприятий, в том числе 220 эвакуированных заводов и фабрик. Казахстан обеспечивал военную промышленность: 85% свинца, 35% меди, 60% марганца. Девять из десяти пуль отливались из казахстанского свинца." },
        { heading: "Сельское хозяйство", text: "В 1942 году поголовье скота выросло на 2 млн, посевные площади увеличились на 1 млн га. На фронт отправлено около 6 млн тонн зерна, 733,9 тыс. тонн мяса, 1 142,3 тыс. тонн молока. Казахстан передал фронту 110 тысяч лошадей." },
        { heading: "Население", text: "В Казахстан эвакуировано около 532,5 тысяч человек, 50 тысяч кадровых рабочих и инженеров. Общая численность трудовых армий — 700 тысяч. Доля женщин в промышленности составляла 50%, в лёгкой и пищевой — до 90%." },
        { heading: "Наука", text: "Эвакуированы 22 НИИ и 30 вузов. Геологи во главе с академиком К.И. Сатпаевым открыли Джездинское марганцевое месторождение для производства броневой стали. Рудник построен всего за 38 дней." },
        { heading: "Культура", text: "Казахстанские артисты дали 1 216 концертов в действующей армии. Четыре из пяти советских фильмов снимались в Алма-Ате. Выпущены 23 полнометражные картины. В Алма-Ате работали известные писатели и режиссёры." },
        { heading: "Фонд обороны", text: "Трудящиеся Казахстана добровольно внесли из личных сбережений 4,7 млрд рублей. На эти средства созданы и отправлены на фронт 5 танковых колонн, 2 авиаэскадрильи, 1 подводная лодка и 1 самолёт." }
      ]
    },
    en: {
      title: "The Home Front — Victory would have been impossible without it",
      sections: [
        { heading: "Industry", text: "During the war, 3.6 billion rubles were invested in Kazakhstan's industry — twice the pre-war level. 460 enterprises were built, including 220 evacuated factories. Kazakhstan supplied 85% of lead, 35% of copper, 60% of manganese. Nine out of ten bullets were cast from Kazakh lead." },
        { heading: "Agriculture", text: "In 1942, livestock increased by 2 million, cultivated area expanded by 1 million hectares. About 6 million tons of grain, 733,900 tons of meat, 1,142,300 tons of milk were sent to the front. Kazakhstan sent 110,000 horses." },
        { heading: "Population", text: "About 532,500 people were evacuated to Kazakhstan, including 50,000 skilled workers and engineers. Total labor army numbered 700,000. Women made up 50% of the industrial workforce, up to 90% in light and food industries." },
        { heading: "Science", text: "22 research institutes and 30 universities were evacuated. Geologists led by academician K.I. Satpayev discovered the Dzhezdy manganese deposit for armored steel production. The mine was built in just 38 days." },
        { heading: "Culture", text: "Kazakh artists gave 1,216 concerts for the active army. Four out of five Soviet films were shot in Alma-Ata. 23 feature films were produced. Famous writers and directors worked in Alma-Ata during the war." },
        { heading: "Defense Fund", text: "Workers of Kazakhstan voluntarily contributed 4.7 billion rubles from personal savings. These funds were used to build and send to the front 5 tank columns, 2 air squadrons, 1 submarine, and 1 aircraft." }
      ]
    }
  },

  jarmenov: {
    id: "jarmenov",
    kz: {
      title: "Жарменов Қасым Ілиясұлы",
      years: "1919–1979",
      paragraphs: [
        "Оңтүстік Қазақстан облысы Арыс ауданы Тамерлановка ауылында туылған. Алматы дене шынықтыру техникумының 2 курсын бітірген. Соғыс басталған кезде 6-шы Орлов атқыштар дивизиясының 75-ші жеке барлау батальонының Т-38 командирі болған. Брест қамалында қызмет еткен.",
        "Соғыс басталғанда батальон казармасында болды. Цитадельде шайқасты, тұтқынға түсті. Польша, Германия территориясындағы лагерлерде (1943 ж. Бухенвальд), Бельгияда ұсталды.",
        "1944 жылы Бельгиядағы Берг лагерінен қашып шықты, Чехословакия шекарасына дейін жетті, партизан қозғалысына қатысты. 1945 жылы 13-армияға қызметке жіберілді."
      ]
    },
    ru: {
      title: "Жарменов Касым Ильясович",
      years: "1919–1979",
      paragraphs: [
        "Уроженец с. Тамерлановка Арысского района Южно-Казахстанской области. Окончил 2 курса Алма-Атинского физкультурного техникума. На начало войны — командир Т-38 75-го отдельного разведывательного батальона 6-й Орловской стрелковой дивизии. Служил в Брестской крепости.",
        "Война застала в расположении казармы батальона. Сражался в Цитадели, был пленён. Содержался в лагерях на территории Польши, Германии (в 1943 г. оказался в Бухенвальде), Бельгии.",
        "В 1944 г. совершил побег из лагеря Берг (Бельгия), дошёл до границы с Чехословакией, участвовал в партизанском движении. В 1945 г. был направлен на службу в 13-ю армию."
      ]
    },
    en: {
      title: "Kasym Jarmenov",
      years: "1919–1979",
      paragraphs: [
        "Born in Tamerlanovka village, Arys district, South Kazakhstan region. Completed 2 years at the Alma-Ata Physical Culture College. At the start of the war — commander of the T-38 of the 75th Separate Reconnaissance Battalion, 6th Orel Rifle Division. Served at the Brest Fortress.",
        "The war caught him in the battalion barracks. Fought in the Citadel, was captured. Held in camps in Poland, Germany (in 1943 ended up in Buchenwald), Belgium.",
        "In 1944, escaped from Camp Berg (Belgium), reached the border with Czechoslovakia, and joined the partisan movement. In 1945, was assigned to serve in the 13th Army."
      ]
    }
  },

  divisions: {
    id: "divisions",
    kz: {
      title: "Қазақстанда құрылған әскери құрамалар",
      subtitle: "Днепрді форсирлеуге қатысқан дивизиялар",
      items: [
        { name: "405/120/69-шы гвардиялық атқыштар дивизиясы", formed: "Алматы, 1942 ж. ақпан", battles: "Сталинград шайқасы, Орлов-Курск шайқасы, Днепр үшін ұрыс, Кишинёв, Будапешт, Вена", awards: "«Звенигородтық» атауы, Қызыл Ту ордені" },
        { name: "458/8-ші атқыштар дивизиясы", formed: "Семей, Аягөз, 1941 ж. желтоқсан", battles: "Воронеж-Касторненск операциясы, Курск шайқасы, Днепр үшін ұрыс, Прага", awards: "«Ямпольдық» атауы, Қызыл Ту ордені, Суворов ордені" },
        { name: "459/29/72-ші гвардиялық атқыштар дивизиясы", formed: "Ақмола, 1941 ж. 15 желтоқсан", battles: "Сталинград, Курск, Днепр, Молдавия, Румыния, Австрия, Прага", awards: "«Красноград» атауы, Қызыл Ту ордені" },
        { name: "460/38/73-ші гвардиялық атқыштар дивизиясы", formed: "Алматы, 1941-1942 ж. қысы", battles: "Харьков, Сталинград, Курск, Днепр, Белград, Дунай", awards: "«Дунайлық» атауы, Қызыл Ту ордені" }
      ]
    },
    ru: {
      title: "Воинские соединения, сформированные в Казахстане",
      subtitle: "Дивизии, принимавшие участие в форсировании Днепра",
      items: [
        { name: "405-я / 120-я / 69-я гв. стрелковая дивизия", formed: "Алма-Ата, февраль 1942 г.", battles: "Сталинградская битва, Орловско-Курская битва, форсирование Днепра, Кишинёв, Будапешт, Вена", awards: "«Звенигородская», орден Красного Знамени" },
        { name: "458-я / 8-я стрелковая дивизия", formed: "Семипалатинск, Аягоз, декабрь 1941 г.", battles: "Воронежско-Касторненская операция, Курская битва, битва за Днепр, Прага", awards: "«Ямпольская», орден Красного Знамени, орден Суворова" },
        { name: "459-я / 29-я / 72-я гв. стрелковая дивизия", formed: "Акмолинск, 15 декабря 1941 г.", battles: "Сталинград, Курск, Днепр, Молдавия, Румыния, Австрия, Прага", awards: "«Красноградская», орден Красного Знамени" },
        { name: "460-я / 38-я / 73-я гв. стрелковая дивизия", formed: "Алма-Ата, зима 1941—1942 г.", battles: "Харьков, Сталинград, Курск, Днепр, Белград, Дунай", awards: "«Дунайская», орден Красного Знамени" }
      ]
    },
    en: {
      title: "Military units formed in Kazakhstan",
      subtitle: "Divisions that participated in the crossing of the Dnieper",
      items: [
        { name: "405th / 120th / 69th Guards Rifle Division", formed: "Alma-Ata, February 1942", battles: "Stalingrad, Kursk, Crossing of the Dnieper, Chisinau, Budapest, Vienna", awards: "'Zvenigorodskaya', Order of the Red Banner" },
        { name: "458th / 8th Rifle Division", formed: "Semipalatinsk, Ayagoz, December 1941", battles: "Voronezh-Kastornoye, Kursk, Battle for the Dnieper, Prague", awards: "'Yampolskaya', Order of the Red Banner, Order of Suvorov" },
        { name: "459th / 29th / 72nd Guards Rifle Division", formed: "Akmolinsk, December 15, 1941", battles: "Stalingrad, Kursk, Dnieper, Moldova, Romania, Austria, Prague", awards: "'Krasnogradskaya', Order of the Red Banner" },
        { name: "460th / 38th / 73rd Guards Rifle Division", formed: "Alma-Ata, winter 1941—1942", battles: "Kharkov, Stalingrad, Kursk, Dnieper, Belgrade, Danube", awards: "'Danube', Order of the Red Banner" }
      ]
    }
  }
};

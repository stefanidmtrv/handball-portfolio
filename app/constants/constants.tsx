const bulgarian = false;

export const teamLogo = '/logo.png';
export const appName = "ХК \"Спортист Кремиковци 2018\"";

export const welcomeText = {
    // title: bulgarian ? "Начало" : "Welcome to",
    title: bulgarian ? "" : "",
    clubName: bulgarian ? "Начало" : "HC Sportist Kremikovtsi - 2018",
    text: bulgarian ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}

export const navLinks = [
    {
        id: "welcome",
        title: bulgarian ? "Начало" : "Welcome",
    },
    {
        id: "about",
        title: bulgarian ? "За Нас" : "About",
    },
    {
        id: "coaches",
        title: bulgarian ? "Треньори" : "Coaches",
    },
    {
        id: "services",
        title: bulgarian ? "Услуги" : "Services",
    },
    {
        id: "partners",
        title: bulgarian ? "Партньори" : "Partners",
    },
    {
        id: "achievements",
        title: bulgarian ? "Постижения" : "Achievements",
    },
    {
        id: "gallery",
        title: bulgarian ? "Галерия" : "Gallery",
    },
    // {
    //     id: "legal",
    //     title: bulgarian ? "Legal" : "Legal",
    // },
    {
        id: "goals",
        title: bulgarian ? "Цели" : "Goals",
    },
    // {
    //     id: "contacts",
    //     title: bulgarian ? "Контакти" : "Contacts",
    // },
]

export const aboutUs = [
    {
        title: bulgarian ? "КОИ СМЕ НИЕ" : "Who We Are",
        text: bulgarian ? `ХК “Спортист Кремиковци-2018“ е основан през 2018 година.
        Първото теоритично и практическо занимание бе проведено
        на 02.10.2018г. в спортната зала в квартал Челопечене. На
        него присъстваха повече от 40 деца момичета и момчета. С
        това започна съзнателен и целенасочен тренировъчен
        процес. Бяха сформирани два отбора момчета и момичета до
        11 години`
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: 'Images/image1.jpg',
    },
    {
        title: bulgarian ? "НАШАТА МИСИЯ" : "Our Mission",
        text: bulgarian ? `Мисията на клуба е да привлече колкото се може повече
        деца към активен начин на живот, да изберат спорта
        пред опасните изкушения на съвремието.`
        : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        image: 'Images/image2.jpg',
    }
]

export const coaches = [
    {
        name: bulgarian ? "Галин Лазаров" : "Galin Lazarov",
        title: bulgarian ? "председател" : "Chairman",
        img: "https://randomuser.me/api/portraits/lego/6.jpg",
        email: "galinlazarov1961@abv.bg",
        phone: "0879486960"
    },
    {
        name: bulgarian ? "Димитър Джепков" : "Dimitar Dzhepkov",
        title: bulgarian ? "старши треньор" : "Head Coach",
        img: "https://randomuser.me/api/portraits/lego/1.jpg",
        email: "-",
        phone: "0898575754"
    },
    {
        name: bulgarian ? "Румяна Георгиева" : "Rumyana Georgieva",
        title: bulgarian ? "консултант" : "Consultant",
        img: "https://randomuser.me/api/portraits/lego/2.jpg",
        email: "-",
        phone: "-"
    },
    {
        name: bulgarian ? "Емилия Самуилова" : "Emiliya Samuilova",
        title: bulgarian ? "младши треньор" : "Junior Coach",
        img: "https://randomuser.me/api/portraits/lego/4.jpg",
        email: "-",
        phone: "-"
    }

]

export const services = [
    {
        title: bulgarian ? "НАЧАЛНО ОБУЧЕНИЕ ПО ХАНДБАЛ" : "INITIAL TRAINING IN HANDBALL",
        text: bulgarian ? "Организирани групи - момичета и момчета за начално обучение в спорта хандбал." : "Organized groups - girls and boys for elementary training in the sport of handball."
    },
    {
        title: bulgarian ? "ДЕТСКО-ЮНОШЕСКО НАПРАВЛЕНИЕ" : "CHILDREN'S AND ADOLESCENT DIRECTION",
        text: bulgarian ? "КАРТОТЕКИРАНИ СЪСТЕЗАТЕЛИ" : "CARDED COMPETITORS"
    },
    {
        title: bulgarian ? "БЕЗОПАСНОСТ" : "SAFETY",
        text: bulgarian ? "Осигуряване на безопасни условия за практикуване на спорта." : "Ensuring safe conditions for practicing the sport."
    }
] 

export const partners = [
    {
        name: bulgarian ? "" : "",
        img: '/handballFederation.png'
    },
    {
        name: bulgarian ? "" : "",
        img: '/Ministry.png'
    },
    {
        name: bulgarian ? "" : "",
        img: '/sofiaMunicipality.png'
    },
    // {
    //     name: bulgarian ? "" : "",
    //     img: municipality
    // }
]

export const partnersNoImage = [
    {
        name: "159 ОУ \"Васил Левски\""
    },
    {
        name: "162 ОбУ \"Отец Паисий\""
    },
    {
        name: "115 ОУ \"Св. Св. Кирил и Методий\""
    },
    {
        name: "85 СУ \"Отец Паисий\""
    },
    {
        name: "117 СУ \"Св. Св. Кирил и Методий\""
    },
    {
        name: "ОБЩИНА КРЕМИКОВЦИ"
    }
]

export const achievementsText = [
    {
        text: "ЗА КРАТКАТА СИ ИСТОРИЯ НА СЪЩЕСТВУВАНЕ КЛУБЪТ УСПЯ ДА ПОСТИГНЕ ЗАВИДНИ УСПЕХИ С КОИТО МАЛЦИНА ДРУГИ СЕ ГОРДЕЯТ."
    }
]

interface AchievementText {
    achievement: string;
}

interface Achievement {
    date: string;
    achievements: AchievementText[];
}

interface AchievementList {
    title: string;
    dates: Achievement[];
}

export const achievementsList: AchievementList[] = [
    {
        title: bulgarian ? "КЛАСИРАНЕ НА ЗОНАЛЕН ФИНАЛ В ЗХС ВИТОША" : "CLASSIFICATION OF THE ZONAL FINAL IN VITOSHA ZHS",
        dates: [
            {
                date: bulgarian ? "2018/2019Г." : "2018/2019",
                achievements: [
                    {
                        achievement: bulgarian ? "МЪЖЕ(М)-3ТО МЯСТО" : "МЪЖЕ(М)-3ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "ЖЕНИ(Ж)-3ТО МЯСТО" : "ЖЕНИ(Ж)-3ТО МЯСТО"
                    },
                ]
            },
            {
                date: bulgarian ? "2019/2020Г." : "2019/2020",
                achievements: [
                    {
                        achievement: bulgarian ? "М12-1ВО МЯСТО" : "М12-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж11-1ВО МЯСТО" : "Ж11-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж12-2РО МЯСТО" : "Ж12-2РО МЯСТО"
                    },
                ]
            },
            {
                date: bulgarian ? "2020/2021Г." : "2020/2021",
                achievements: [
                    {
                        achievement: bulgarian ? "Ж12-1ВО МЯСТО" : "Ж12-1ВО МЯСТО"
                    }
                ]
            },
            {
                date: bulgarian ? "2021/2022Г." : "2021/2022",
                achievements: [
                    {
                        achievement: bulgarian ? "М11-1ВО МЯСТО" : "М11-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "М14-1ВО МЯСТО" : "М14-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж12-1ВО МЯСТО" : "Ж12-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж14-2РО МЯСТО" : "Ж14-2РО МЯСТО"
                    },
                ]
            },
        ]
    },
    {
        title: bulgarian ? "КЛАСИРАНЕ НА ДЪРЖАВЕН ФИНАЛ" : "STATE FINAL CLASSIFICATION",
        dates: [
            {
                date: bulgarian ? "2018/2019Г." : "2018/2019Г.",
                achievements: [
                    {
                        achievement: bulgarian ? "М11-6ТО МЯСТО" : "М11-6ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж11-5ТО МЯСТО" : "Ж11-5ТО МЯСТО"
                    },
                ]
            },
            {
                date: bulgarian ? "2020/2021Г." : "2020/2021Г.",
                achievements: [
                    {
                        achievement: bulgarian ? "Ж12-1ВО МЯСТО" : "Ж12-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "ГАБРИЕЛА ГЕОРГИЕВА – НАЙ-ДОБЪР ВРАТАР" : "ГАБРИЕЛА ГЕОРГИЕВА – НАЙ-ДОБЪР ВРАТАР"
                    },
                    {
                        achievement: bulgarian ? "НИКОЛ ДИМИТРОВА- НАЙ-ДОБЪР ЗАЩИТНИК" : "НИКОЛ ДИМИТРОВА- НАЙ-ДОБЪР ЗАЩИТНИК"
                    },
                ]
            },
            {
                date: bulgarian ? "2021/2022Г." : "2021/2022Г.",
                achievements: [
                    {
                        achievement: bulgarian ? "М11-3ТО МЯСТО" : "М11-3ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "АЛЕКС ДАНАИЛОВ- НАЙ-ДОБЪР ВРАТАР" : "АЛЕКС ДАНАИЛОВ- НАЙ-ДОБЪР ВРАТАР"
                    },
                    {
                        achievement: bulgarian ? "М14-6ТО МЯСТО" : "М14-6ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж12-2РО МЯСТО" : "Ж12-2РО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "ЕДЖЕ ЮМЕР- ГОЛМАЙСТОР НА ПЪРВЕНСТВОТО" : "ЕДЖЕ ЮМЕР- ГОЛМАЙСТОР НА ПЪРВЕНСТВОТО"
                    },
                    {
                        achievement: bulgarian ? "ЕДЖЕ ЮМЕР- НАЙ-ПОЛЕЗЕН СЪСТЕЗАТЕЛ" : "ЕДЖЕ ЮМЕР- НАЙ-ПОЛЕЗЕН СЪСТЕЗАТЕЛ"
                    },
                    {
                        achievement: bulgarian ? "Ж14-3ТО МЯСТО" : "Ж14-3ТО МЯСТО"
                    },
                ]
            },
        ]
    },
]

export const gallaryPhotos = [
    {
        img: 'Images/image4.jpg'
    },
    {
        img: 'Images/image6.jpg'
    },
    {
        img: 'Images/image3.jpg'
    },
    
    {
        img: 'Images/image5.jpg'
    },
    {
        img: 'Images/image2.jpg'
    },
    
    
    {
        img: 'Images/image1.jpg'
    },
    
]

export const goals = [
    {
        text: bulgarian ? "ПОДОБРЯВАНЕ НА ФИЗИЧЕСКИТЕ И ПСИХИЧЕСКИТЕ СПОСОБНОСТИ, РАЗВИВАНЕ НА ЕМОЦИОНАЛНИ И СОЦИАЛНИ ОТНОШЕНИЯ. ПОСТИГАНЕ НА ВИСОКИ СПОРТНИ РЕЗУЛТАТИ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "УВЕЛИЧАВАНЕ БРОЯ НА СПОРТИСТИТЕ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "СЪЗДАВАНЕ НА НАЦИОНАЛНИ СЪСТЕЗАТЕЛИ И В ДВАТА ПОЛА." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "ПОВИШАВАНЕТО НА НИВОТО НА ВСИЧКИ СПОРТИСТИ В КЛУБА, КОЕТО ДА ДОВЕДЕ ДО УЧАСТИЕ В „А“ РЕПУБЛИКАНСКА ХАНДБАЛНА ГРУПА ЗА ЖЕНИ И МЪЖЕ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
]

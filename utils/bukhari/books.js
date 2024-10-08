const bukhariBooks = [
  {
    "bookNumber": "1",
    "book": [
      {"lang": "en", "name": "Revelation"},
      {"lang": "ar", "name": "كتاب بدء الوحى "}
    ],
    "hadithStartNumber": 1,
    "hadithEndNumber": 7,
    "numberOfHadith": 7
  },
  {
    "bookNumber": "2",
    "book": [
      {"lang": "en", "name": "Belief"},
      {"lang": "ar", "name": "كتاب الإيمان "}
    ],
    "hadithStartNumber": 8,
    "hadithEndNumber": 58,
    "numberOfHadith": 51
  },
  {
    "bookNumber": "3",
    "book": [
      {"lang": "en", "name": "Knowledge"},
      {"lang": "ar", "name": "كتاب العلم "}
    ],
    "hadithStartNumber": 59,
    "hadithEndNumber": 134,
    "numberOfHadith": 76
  },
  {
    "bookNumber": "4",
    "book": [
      {"lang": "en", "name": "Ablutions (Wudu')"},
      {"lang": "ar", "name": "كتاب الوضوء"}
    ],
    "hadithStartNumber": 135,
    "hadithEndNumber": 247,
    "numberOfHadith": 113
  },
  {
    "bookNumber": "5",
    "book": [
      {"lang": "en", "name": "Bathing (Ghusl)"},
      {"lang": "ar", "name": "كتاب الغسل "}
    ],
    "hadithStartNumber": 248,
    "hadithEndNumber": 293,
    "numberOfHadith": 45
  },
  {
    "bookNumber": "6",
    "book": [
      {"lang": "en", "name": "Menstrual Periods"},
      {"lang": "ar", "name": "كتاب الحيض "}
    ],
    "hadithStartNumber": 294,
    "hadithEndNumber": 333,
    "numberOfHadith": 37
  },
  {
    "bookNumber": "7",
    "book": [
      {"lang": "en", "name": "Rubbing hands and feet with dust (Tayammum)"},
      {"lang": "ar", "name": "كتاب التيمم "}
    ],
    "hadithStartNumber": 334,
    "hadithEndNumber": 348,
    "numberOfHadith": 15
  },
  {
    "bookNumber": "8",
    "book": [
      {"lang": "en", "name": "Prayers (Salat)"},
      {"lang": "ar", "name": "كتاب الصلاة "}
    ],
    "hadithStartNumber": 349,
    "hadithEndNumber": 520,
    "numberOfHadith": 167
  },
  {
    "bookNumber": "9",
    "book": [
      {"lang": "en", "name": "Times of the Prayers"},
      {"lang": "ar", "name": "كتاب مواقيت الصلاة "}
    ],
    "hadithStartNumber": 521,
    "hadithEndNumber": 602,
    "numberOfHadith": 77
  },
  {
    "bookNumber": "10",
    "book": [
      {"lang": "en", "name": "Call to Prayers (Adhaan)"},
      {"lang": "ar", "name": "كتاب الأذان "}
    ],
    "hadithStartNumber": 603,
    "hadithEndNumber": 875,
    "numberOfHadith": 266
  },
  {
    "bookNumber": "11",
    "book": [
      {"lang": "en", "name": "Friday Prayer"},
      {"lang": "ar", "name": "كتاب الجمعة "}
    ],
    "hadithStartNumber": 876,
    "hadithEndNumber": 941,
    "numberOfHadith": 65
  },
  {
    "bookNumber": "12",
    "book": [
      {"lang": "en", "name": "Fear Prayer"},
      {"lang": "ar", "name": "كتاب صلاة الخوف "}
    ],
    "hadithStartNumber": 942,
    "hadithEndNumber": 947,
    "numberOfHadith": 6
  },
  {
    "bookNumber": "13",
    "book": [
      {"lang": "en", "name": "The Two Festivals (Eids)"},
      {"lang": "ar", "name": "كتاب العيدين "}
    ],
    "hadithStartNumber": 948,
    "hadithEndNumber": 989,
    "numberOfHadith": 37
  },
  {
    "bookNumber": "14",
    "book": [
      {"lang": "en", "name": "Witr Prayer"},
      {"lang": "ar", "name": "كتاب الوتر "}
    ],
    "hadithStartNumber": 990,
    "hadithEndNumber": 1004,
    "numberOfHadith": 15
  },
  {
    "bookNumber": "15",
    "book": [
      {"lang": "en", "name": "Invoking Allah for Rain (Istisqaa)"},
      {"lang": "ar", "name": "كتاب الاستسقاء "}
    ],
    "hadithStartNumber": 1005,
    "hadithEndNumber": 1039,
    "numberOfHadith": 34
  },
  {
    "bookNumber": "16",
    "book": [
      {"lang": "en", "name": "Eclipses"},
      {"lang": "ar", "name": "كتاب الكسوف "}
    ],
    "hadithStartNumber": 1040,
    "hadithEndNumber": 1065,
    "numberOfHadith": 24
  },
  {
    "bookNumber": "17",
    "book": [
      {"lang": "en", "name": "Prostration During Recital of Qur'an"},
      {"lang": "ar", "name": "كتاب سجود القرآن "}
    ],
    "hadithStartNumber": 1067,
    "hadithEndNumber": 1079,
    "numberOfHadith": 13
  },
  {
    "bookNumber": "18",
    "book": [
      {"lang": "en", "name": "Shortening the Prayers (At-Taqseer)"},
      {"lang": "ar", "name": "كتاب التقصير "}
    ],
    "hadithStartNumber": 1080,
    "hadithEndNumber": 1119,
    "numberOfHadith": 39
  },
  {
    "bookNumber": "19",
    "book": [
      {"lang": "en", "name": "Prayer at Night (Tahajjud)"},
      {"lang": "ar", "name": "كتاب التهجد "}
    ],
    "hadithStartNumber": 1120,
    "hadithEndNumber": 1187,
    "numberOfHadith": 63
  },
  {
    "bookNumber": "20",
    "book": [
      {"lang": "en", "name": "Virtues of Prayer at Masjid Makkah and Madinah"},
      {"lang": "ar", "name": "كتاب فضل الصلاة فى مسجد مكة والمدينة "}
    ],
    "hadithStartNumber": 1188,
    "hadithEndNumber": 1197,
    "numberOfHadith": 9
  },
  {
    "bookNumber": "21",
    "book": [
      {"lang": "en", "name": "Actions while Praying"},
      {"lang": "ar", "name": "كتاب العمل فى الصلاة "}
    ],
    "hadithStartNumber": 1198,
    "hadithEndNumber": 1223,
    "numberOfHadith": 27
  },
  {
    "bookNumber": "22",
    "book": [
      {"lang": "en", "name": "Forgetfulness in Prayer"},
      {"lang": "ar", "name": "كتاب السهو "}
    ],
    "hadithStartNumber": 1224,
    "hadithEndNumber": 1236,
    "numberOfHadith": 14
  },
  {
    "bookNumber": "23",
    "book": [
      {"lang": "en", "name": "Funerals (Al-Janaa'iz)"},
      {"lang": "ar", "name": "كتاب الجنائز"}
    ],
    "hadithStartNumber": 1237,
    "hadithEndNumber": 1394,
    "numberOfHadith": 148
  },
  {
    "bookNumber": "24",
    "book": [
      {"lang": "en", "name": "Obligatory Charity Tax (Zakat)"},
      {"lang": "ar", "name": "كتاب الزكاة "}
    ],
    "hadithStartNumber": 1395,
    "hadithEndNumber": 1512,
    "numberOfHadith": 112
  },
  {
    "bookNumber": "25",
    "book": [
      {"lang": "en", "name": "Hajj (Pilgrimage)"},
      {"lang": "ar", "name": "كتاب الحج "}
    ],
    "hadithStartNumber": 1513,
    "hadithEndNumber": 1771,
    "numberOfHadith": 247
  },
  {
    "bookNumber": "26",
    "book": [
      {"lang": "en", "name": "`Umrah (Minor pilgrimage)"},
      {"lang": "ar", "name": "كتاب العمرة "}
    ],
    "hadithStartNumber": 1773,
    "hadithEndNumber": 1805,
    "numberOfHadith": 30
  },
  {
    "bookNumber": "27",
    "book": [
      {
        "lang": "en",
        "name": "Pilgrims Prevented from Completing the Pilgrimage"
      },
      {"lang": "ar", "name": "كتاب المحصر "}
    ],
    "hadithStartNumber": 1806,
    "hadithEndNumber": 1820,
    "numberOfHadith": 15
  },
  {
    "bookNumber": "28",
    "book": [
      {"lang": "en", "name": "Penalty of Hunting while on Pilgrimage"},
      {"lang": "ar", "name": "كتاب جزاء الصيد "}
    ],
    "hadithStartNumber": 1821,
    "hadithEndNumber": 1866,
    "numberOfHadith": 46
  },
  {
    "bookNumber": "29",
    "book": [
      {"lang": "en", "name": "Virtues of Madinah"},
      {"lang": "ar", "name": "كتاب فضائل المدينة "}
    ],
    "hadithStartNumber": 1867,
    "hadithEndNumber": 1890,
    "numberOfHadith": 24
  },
  {
    "bookNumber": "30",
    "book": [
      {"lang": "en", "name": "Fasting"},
      {"lang": "ar", "name": "كتاب الصوم "}
    ],
    "hadithStartNumber": 1891,
    "hadithEndNumber": 2007,
    "numberOfHadith": 112
  },
  {
    "bookNumber": "31",
    "book": [
      {"lang": "en", "name": "Praying at Night in Ramadaan (Taraweeh)"},
      {"lang": "ar", "name": "كتاب صلاة التراويح "}
    ],
    "hadithStartNumber": 2008,
    "hadithEndNumber": 2013,
    "numberOfHadith": 6
  },
  {
    "bookNumber": "32",
    "book": [
      {"lang": "en", "name": "Virtues of the Night of Qadr"},
      {"lang": "ar", "name": "كتاب فضل ليلة القدر "}
    ],
    "hadithStartNumber": 2014,
    "hadithEndNumber": 2024,
    "numberOfHadith": 11
  },
  {
    "bookNumber": "33",
    "book": [
      {
        "lang": "en",
        "name": "Retiring to a Mosque for Remembrance of Allah (I'tikaf)"
      },
      {"lang": "ar", "name": "كتاب الاعتكاف "}
    ],
    "hadithStartNumber": 2025,
    "hadithEndNumber": 2046,
    "numberOfHadith": 21
  },
  {
    "bookNumber": "34",
    "book": [
      {"lang": "en", "name": "Sales and Trade"},
      {"lang": "ar", "name": "كتاب البيوع"}
    ],
    "hadithStartNumber": 2047,
    "hadithEndNumber": 2238,
    "numberOfHadith": 184
  },
  {
    "bookNumber": "35",
    "book": [
      {
        "lang": "en",
        "name":
            "Sales in which a Price is paid for Goods to be Delivered Later (As-Salam)"
      },
      {"lang": "ar", "name": "كتاب السلم "}
    ],
    "hadithStartNumber": 2239,
    "hadithEndNumber": 2256,
    "numberOfHadith": 16
  },
  {
    "bookNumber": "36",
    "book": [
      {"lang": "en", "name": "Shuf'a"},
      {"lang": "ar", "name": "كتاب الشفعة "}
    ],
    "hadithStartNumber": 2257,
    "hadithEndNumber": 2259,
    "numberOfHadith": 3
  },
  {
    "bookNumber": "37",
    "book": [
      {"lang": "en", "name": "Hiring"},
      {"lang": "ar", "name": "كتاب الإجارة "}
    ],
    "hadithStartNumber": 2260,
    "hadithEndNumber": 2285,
    "numberOfHadith": 25
  },
  {
    "bookNumber": "38",
    "book": [
      {
        "lang": "en",
        "name": "Transferance of a Debt from One Person to Another (Al-Hawaala)"
      },
      {"lang": "ar", "name": "كتاب الحوالات "}
    ],
    "hadithStartNumber": 2287,
    "hadithEndNumber": 2289,
    "numberOfHadith": 3
  },
  {
    "bookNumber": "39",
    "book": [
      {"lang": "en", "name": "Kafalah"},
      {"lang": "ar", "name": "كتاب الكفالة "}
    ],
    "hadithStartNumber": 2290,
    "hadithEndNumber": 2298,
    "numberOfHadith": 9
  },
  {
    "bookNumber": "40",
    "book": [
      {
        "lang": "en",
        "name": "Representation, Authorization, Business by Proxy"
      },
      {"lang": "ar", "name": "كتاب الوكالة "}
    ],
    "hadithStartNumber": 2299,
    "hadithEndNumber": 2319,
    "numberOfHadith": 18
  },
  {
    "bookNumber": "41",
    "book": [
      {"lang": "en", "name": "Agriculture"},
      {"lang": "ar", "name": "كتاب المزارعة "}
    ],
    "hadithStartNumber": 2320,
    "hadithEndNumber": 2350,
    "numberOfHadith": 28
  },
  {
    "bookNumber": "42",
    "book": [
      {"lang": "en", "name": "Distribution of Water"},
      {"lang": "ar", "name": "كتاب المساقاة "}
    ],
    "hadithStartNumber": 2351,
    "hadithEndNumber": 2383,
    "numberOfHadith": 31
  },
  {
    "bookNumber": "43",
    "book": [
      {
        "lang": "en",
        "name": "Loans, Payment of Loans, Freezing of Property, Bankruptcy"
      },
      {"lang": "ar", "name": "كتاب فى الاستقراض "}
    ],
    "hadithStartNumber": 2385,
    "hadithEndNumber": 2409,
    "numberOfHadith": 24
  },
  {
    "bookNumber": "44",
    "book": [
      {"lang": "en", "name": "Khusoomaat"},
      {"lang": "ar", "name": "كتاب الخصومات "}
    ],
    "hadithStartNumber": 2410,
    "hadithEndNumber": 2425,
    "numberOfHadith": 15
  },
  {
    "bookNumber": "45",
    "book": [
      {"lang": "en", "name": "Lost Things Picked up by Someone (Luqatah)"},
      {"lang": "ar", "name": "كتاب فى اللقطة "}
    ],
    "hadithStartNumber": 2426,
    "hadithEndNumber": 2439,
    "numberOfHadith": 15
  },
  {
    "bookNumber": "46",
    "book": [
      {"lang": "en", "name": "Oppressions"},
      {"lang": "ar", "name": "كتاب المظالم"}
    ],
    "hadithStartNumber": 2440,
    "hadithEndNumber": 2482,
    "numberOfHadith": 43
  },
  {
    "bookNumber": "47",
    "book": [
      {"lang": "en", "name": "Partnership"},
      {"lang": "ar", "name": "كتاب الشركة "}
    ],
    "hadithStartNumber": 2483,
    "hadithEndNumber": 2507,
    "numberOfHadith": 22
  },
  {
    "bookNumber": "48",
    "book": [
      {"lang": "en", "name": "Mortgaging"},
      {"lang": "ar", "name": "كتاب الرهن "}
    ],
    "hadithStartNumber": 2508,
    "hadithEndNumber": 2515,
    "numberOfHadith": 8
  },
  {
    "bookNumber": "49",
    "book": [
      {"lang": "en", "name": "Manumission of Slaves"},
      {"lang": "ar", "name": "كتاب العتق "}
    ],
    "hadithStartNumber": 2517,
    "hadithEndNumber": 2559,
    "numberOfHadith": 41
  },
  {
    "bookNumber": "50",
    "book": [
      {"lang": "en", "name": "Makaatib"},
      {"lang": "ar", "name": "كتاب المكاتب "}
    ],
    "hadithStartNumber": 2560,
    "hadithEndNumber": 2565,
    "numberOfHadith": 6
  },
  {
    "bookNumber": "51",
    "book": [
      {"lang": "en", "name": "Gifts"},
      {"lang": "ar", "name": "كتاب الهبة وفضلها والتحريض عليها "}
    ],
    "hadithStartNumber": 2566,
    "hadithEndNumber": 2636,
    "numberOfHadith": 68
  },
  {
    "bookNumber": "52",
    "book": [
      {"lang": "en", "name": "Witnesses"},
      {"lang": "ar", "name": "كتاب الشهادات "}
    ],
    "hadithStartNumber": 2637,
    "hadithEndNumber": 2689,
    "numberOfHadith": 50
  },
  {
    "bookNumber": "53",
    "book": [
      {"lang": "en", "name": "Peacemaking"},
      {"lang": "ar", "name": "كتاب الصلح"}
    ],
    "hadithStartNumber": 2690,
    "hadithEndNumber": 2710,
    "numberOfHadith": 20
  },
  {
    "bookNumber": "54",
    "book": [
      {"lang": "en", "name": "Conditions"},
      {"lang": "ar", "name": "كتاب الشروط "}
    ],
    "hadithStartNumber": 2711,
    "hadithEndNumber": 2737,
    "numberOfHadith": 24
  },
  {
    "bookNumber": "55",
    "book": [
      {"lang": "en", "name": "Wills and Testaments (Wasaayaa)"},
      {"lang": "ar", "name": "كتاب الوصايا "}
    ],
    "hadithStartNumber": 2738,
    "hadithEndNumber": 2781,
    "numberOfHadith": 44
  },
  {
    "bookNumber": "56",
    "book": [
      {"lang": "en", "name": "Fighting for the Cause of Allah (Jihaad)"},
      {"lang": "ar", "name": "كتاب الجهاد والسير "}
    ],
    "hadithStartNumber": 2782,
    "hadithEndNumber": 3090,
    "numberOfHadith": 294
  },
  {
    "bookNumber": "57",
    "book": [
      {
        "lang": "en",
        "name": "One-fifth of Booty to the Cause of Allah (Khumus)"
      },
      {"lang": "ar", "name": "كتاب فرض الخمس "}
    ],
    "hadithStartNumber": 3091,
    "hadithEndNumber": 3155,
    "numberOfHadith": 63
  },
  {
    "bookNumber": "58",
    "book": [
      {"lang": "en", "name": "Jizyah and Mawaada'ah"},
      {"lang": "ar", "name": "كتاب الجزية والموادعة "}
    ],
    "hadithStartNumber": 3156,
    "hadithEndNumber": 3189,
    "numberOfHadith": 30
  },
  {
    "bookNumber": "59",
    "book": [
      {"lang": "en", "name": "Beginning of Creation"},
      {"lang": "ar", "name": "كتاب بدء الخلق "}
    ],
    "hadithStartNumber": 3190,
    "hadithEndNumber": 3325,
    "numberOfHadith": 131
  },
  {
    "bookNumber": "60",
    "book": [
      {"lang": "en", "name": "Prophets"},
      {"lang": "ar", "name": "كتاب أحاديث الأنبياء "}
    ],
    "hadithStartNumber": 3326,
    "hadithEndNumber": 3488,
    "numberOfHadith": 154
  },
  {
    "bookNumber": "61",
    "book": [
      {
        "lang": "en",
        "name": "Virtues and Merits of the Prophet (pbuh) and his Companions"
      },
      {"lang": "ar", "name": "كتاب المناقب "}
    ],
    "hadithStartNumber": 3489,
    "hadithEndNumber": 3648,
    "numberOfHadith": 151
  },
  {
    "bookNumber": "62",
    "book": [
      {"lang": "en", "name": "Companions of the Prophet"},
      {"lang": "ar", "name": "كتاب فضائل أصحاب النبى صلى الله عليه وسلم "}
    ],
    "hadithStartNumber": 3649,
    "hadithEndNumber": 3775,
    "numberOfHadith": 120
  },
  {
    "bookNumber": "63",
    "book": [
      {"lang": "en", "name": "Merits of the Helpers in Madinah (Ansaar)"},
      {"lang": "ar", "name": "كتاب مناقب الأنصار "}
    ],
    "hadithStartNumber": 3776,
    "hadithEndNumber": 3948,
    "numberOfHadith": 172
  },
  {
    "bookNumber": "64",
    "book": [
      {
        "lang": "en",
        "name": "Military Expeditions led by the Prophet (pbuh) (Al-Maghaazi)"
      },
      {"lang": "ar", "name": "كتاب المغازى "}
    ],
    "hadithStartNumber": 3949,
    "hadithEndNumber": 4473,
    "numberOfHadith": 488
  },
  {
    "bookNumber": "65",
    "book": [
      {
        "lang": "en",
        "name":
            "Prophetic Commentary on the Qur'an (Tafseer of the Prophet (pbuh))"
      },
      {"lang": "ar", "name": "كتاب التفسير "}
    ],
    "hadithStartNumber": 4474,
    "hadithEndNumber": 4977,
    "numberOfHadith": 499
  },
  {
    "bookNumber": "66",
    "book": [
      {"lang": "en", "name": "Virtues of the Qur'an"},
      {"lang": "ar", "name": "كتاب فضائل القرآن "}
    ],
    "hadithStartNumber": 4978,
    "hadithEndNumber": 5062,
    "numberOfHadith": 87
  },
  {
    "bookNumber": "67",
    "book": [
      {"lang": "en", "name": "Wedlock, Marriage (Nikaah)"},
      {"lang": "ar", "name": "كتاب النكاح "}
    ],
    "hadithStartNumber": 5063,
    "hadithEndNumber": 5250,
    "numberOfHadith": 183
  },
  {
    "bookNumber": "68",
    "book": [
      {"lang": "en", "name": "Divorce"},
      {"lang": "ar", "name": "كتاب الطلاق "}
    ],
    "hadithStartNumber": 5251,
    "hadithEndNumber": 5350,
    "numberOfHadith": 95
  },
  {
    "bookNumber": "69",
    "book": [
      {"lang": "en", "name": "Supporting the Family"},
      {"lang": "ar", "name": "كتاب النفقات "}
    ],
    "hadithStartNumber": 5351,
    "hadithEndNumber": 5372,
    "numberOfHadith": 22
  },
  {
    "bookNumber": "70",
    "book": [
      {"lang": "en", "name": "Food, Meals"},
      {"lang": "ar", "name": "كتاب الأطعمة "}
    ],
    "hadithStartNumber": 5373,
    "hadithEndNumber": 5466,
    "numberOfHadith": 95
  },
  {
    "bookNumber": "71",
    "book": [
      {"lang": "en", "name": "Sacrifice on Occasion of Birth (`Aqiqa)"},
      {"lang": "ar", "name": "كتاب العقيقة "}
    ],
    "hadithStartNumber": 5467,
    "hadithEndNumber": 5474,
    "numberOfHadith": 9
  },
  {
    "bookNumber": "72",
    "book": [
      {"lang": "en", "name": "Hunting, Slaughtering"},
      {"lang": "ar", "name": "كتاب الذبائح والصيد "}
    ],
    "hadithStartNumber": 5475,
    "hadithEndNumber": 5544,
    "numberOfHadith": 69
  },
  {
    "bookNumber": "73",
    "book": [
      {"lang": "en", "name": "Al-Adha Festival Sacrifice (Adaahi)"},
      {"lang": "ar", "name": "كتاب الأضاحي "}
    ],
    "hadithStartNumber": 5545,
    "hadithEndNumber": 5574,
    "numberOfHadith": 30
  },
  {
    "bookNumber": "74",
    "book": [
      {"lang": "en", "name": "Drinks"},
      {"lang": "ar", "name": "كتاب الأشربة "}
    ],
    "hadithStartNumber": 5575,
    "hadithEndNumber": 5639,
    "numberOfHadith": 65
  },
  {
    "bookNumber": "75",
    "book": [
      {"lang": "en", "name": "Patients"},
      {"lang": "ar", "name": "كتاب المرضى "}
    ],
    "hadithStartNumber": 5640,
    "hadithEndNumber": 5677,
    "numberOfHadith": 37
  },
  {
    "bookNumber": "76",
    "book": [
      {"lang": "en", "name": "Medicine"},
      {"lang": "ar", "name": "كتاب الطب "}
    ],
    "hadithStartNumber": 5678,
    "hadithEndNumber": 5782,
    "numberOfHadith": 93
  },
  {
    "bookNumber": "77",
    "book": [
      {"lang": "en", "name": "Dress"},
      {"lang": "ar", "name": "كتاب اللباس "}
    ],
    "hadithStartNumber": 5783,
    "hadithEndNumber": 5969,
    "numberOfHadith": 185
  },
  {
    "bookNumber": "78",
    "book": [
      {"lang": "en", "name": "Good Manners and Form (Al-Adab)"},
      {"lang": "ar", "name": "كتاب الأدب "}
    ],
    "hadithStartNumber": 5970,
    "hadithEndNumber": 6226,
    "numberOfHadith": 250
  },
  {
    "bookNumber": "79",
    "book": [
      {"lang": "en", "name": "Asking Permission"},
      {"lang": "ar", "name": "كتاب الاستئذان "}
    ],
    "hadithStartNumber": 6227,
    "hadithEndNumber": 6303,
    "numberOfHadith": 75
  },
  {
    "bookNumber": "80",
    "book": [
      {"lang": "en", "name": "Invocations"},
      {"lang": "ar", "name": "كتاب الدعوات"}
    ],
    "hadithStartNumber": 6304,
    "hadithEndNumber": 6411,
    "numberOfHadith": 106
  },
  {
    "bookNumber": "81",
    "book": [
      {"lang": "en", "name": "To make the Heart Tender (Ar-Riqaq)"},
      {"lang": "ar", "name": "كتاب الرقاق"}
    ],
    "hadithStartNumber": 6412,
    "hadithEndNumber": 6593,
    "numberOfHadith": 181
  },
  {
    "bookNumber": "82",
    "book": [
      {"lang": "en", "name": "Divine Will (Al-Qadar)"},
      {"lang": "ar", "name": "كتاب القدر "}
    ],
    "hadithStartNumber": 6594,
    "hadithEndNumber": 6620,
    "numberOfHadith": 26
  },
  {
    "bookNumber": "83",
    "book": [
      {"lang": "en", "name": "Oaths and Vows"},
      {"lang": "ar", "name": "كتاب الأيمان والنذور "}
    ],
    "hadithStartNumber": 6621,
    "hadithEndNumber": 6707,
    "numberOfHadith": 84
  },
  {
    "bookNumber": "84",
    "book": [
      {"lang": "en", "name": "Expiation for Unfulfilled Oaths"},
      {"lang": "ar", "name": "كتاب كفارات الأيمان "}
    ],
    "hadithStartNumber": 6708,
    "hadithEndNumber": 6722,
    "numberOfHadith": 15
  },
  {
    "bookNumber": "85",
    "book": [
      {"lang": "en", "name": "Laws of Inheritance (Al-Faraa'id)"},
      {"lang": "ar", "name": "كتاب الفرائض "}
    ],
    "hadithStartNumber": 6723,
    "hadithEndNumber": 6771,
    "numberOfHadith": 47
  },
  {
    "bookNumber": "86",
    "book": [
      {"lang": "en", "name": "Limits and Punishments set by Allah (Hudood)"},
      {"lang": "ar", "name": "كتاب الحدود "}
    ],
    "hadithStartNumber": 6772,
    "hadithEndNumber": 6859,
    "numberOfHadith": 81
  },
  {
    "bookNumber": "87",
    "book": [
      {"lang": "en", "name": "Blood Money (Ad-Diyat)"},
      {"lang": "ar", "name": "كتاب الديات "}
    ],
    "hadithStartNumber": 6861,
    "hadithEndNumber": 6917,
    "numberOfHadith": 55
  },
  {
    "bookNumber": "88",
    "book": [
      {"lang": "en", "name": "Apostates"},
      {"lang": "ar", "name": "كتاب استتابة المرتدين والمعاندين وقتالهم "}
    ],
    "hadithStartNumber": 6918,
    "hadithEndNumber": 6939,
    "numberOfHadith": 21
  },
  {
    "bookNumber": "89",
    "book": [
      {"lang": "en", "name": "(Statements made under) Coercion"},
      {"lang": "ar", "name": "كتاب الإكراه"}
    ],
    "hadithStartNumber": 6940,
    "hadithEndNumber": 6952,
    "numberOfHadith": 13
  },
  {
    "bookNumber": "90",
    "book": [
      {"lang": "en", "name": "Tricks"},
      {"lang": "ar", "name": "كتاب الحيل "}
    ],
    "hadithStartNumber": 6953,
    "hadithEndNumber": 6981,
    "numberOfHadith": 28
  },
  {
    "bookNumber": "91",
    "book": [
      {"lang": "en", "name": "Interpretation of Dreams"},
      {"lang": "ar", "name": "كتاب التعبير "}
    ],
    "hadithStartNumber": 6982,
    "hadithEndNumber": 7047,
    "numberOfHadith": 61
  },
  {
    "bookNumber": "92",
    "book": [
      {"lang": "en", "name": "Afflictions and the End of the World"},
      {"lang": "ar", "name": "كتاب الفتن "}
    ],
    "hadithStartNumber": 7048,
    "hadithEndNumber": 7136,
    "numberOfHadith": 83
  },
  {
    "bookNumber": "93",
    "book": [
      {"lang": "en", "name": "Judgments (Ahkaam)"},
      {"lang": "ar", "name": "كتاب الأحكام "}
    ],
    "hadithStartNumber": 7137,
    "hadithEndNumber": 7225,
    "numberOfHadith": 84
  },
  {
    "bookNumber": "94",
    "book": [
      {"lang": "en", "name": "Wishes"},
      {"lang": "ar", "name": "كتاب التمنى "}
    ],
    "hadithStartNumber": 7226,
    "hadithEndNumber": 7245,
    "numberOfHadith": 20
  },
  {
    "bookNumber": "95",
    "book": [
      {
        "lang": "en",
        "name": "Accepting Information Given by a Truthful Person"
      },
      {"lang": "ar", "name": "كتاب أخبار الآحاد "}
    ],
    "hadithStartNumber": 7246,
    "hadithEndNumber": 7267,
    "numberOfHadith": 21
  },
  {
    "bookNumber": "96",
    "book": [
      {"lang": "en", "name": "Holding Fast to the Qur'an and Sunnah"},
      {"lang": "ar", "name": "كتاب الاعتصام بالكتاب والسنة "}
    ],
    "hadithStartNumber": 7268,
    "hadithEndNumber": 7370,
    "numberOfHadith": 97
  },
  {
    "bookNumber": "97",
    "book": [
      {"lang": "en", "name": "Oneness, Uniqueness of Allah (Tawheed)"},
      {"lang": "ar", "name": "كتاب التوحيد "}
    ],
    "hadithStartNumber": 7371,
    "hadithEndNumber": 7563,
    "numberOfHadith": 188
  }
];

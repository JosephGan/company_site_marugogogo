// Regenerative-medicine reference prices published by partner clinics.
// Sources: REBORN CLINIC 价格表 (PDF) and ReM CLINIC Ginza 診療メニュー (PDF, regenerative items only).
// All prices are tax-inclusive clinic prices; Marugo's coordination fee is charged separately.
//
// Section types:
//   table — tabular price grid. `groups` share a first-column label (rendered with rowspan).
//   menu  — treatment list; each item has its own price lines.
//   list  — plain bullet list (no prices).

const rebornZh = {
  id: "reborn",
  name: "东京九州再生医疗中心",
  nameEn: "REBORN CLINIC",
  location: "东京",
  currencyNote: "以下金额单位为「万日元」（康复训练除外），均为含税价格。",
  sections: [
    {
      type: "table",
      title: "自体脂肪来源的间充质干细胞点滴 / 全身治疗",
      unit: "单位：万日元",
      columns: ["细胞数量", "次数", "定价（含税）", "折扣", "折扣后价格"],
      groups: [
        { label: { lines: ["1亿 / 回"] }, rows: [["1", "352.0", "0%", "352.0"]] },
        { label: { pre: "升级至", lines: ["1.5亿 / 回"] }, rows: [["3", "1,056.0", "10%", "950.4"], ["5", "1,760.0", "15%", "1,496.0"]] },
        { label: { pre: "升级至", lines: ["2亿 / 回"] }, rows: [["8", "2,816.0", "20%", "2,252.8"], ["10", "3,520.0", "25%", "2,640.0"], ["20", "7,040.0", "30%", "4,928.0"]] },
      ],
      notes: ["追加5000万细胞 +110万日元。注：每次最大回输量为2亿细胞。"],
    },
    {
      type: "table",
      title: "超级干细胞 AGP-1 / 适用于老化、糖尿病、肝脏疾病",
      unit: "单位：万日元",
      columns: ["细胞数量", "次数", "定价（含税）", "折扣", "折扣后价格"],
      groups: [
        { label: { lines: ["1亿 / 回"] }, rows: [["1", "550.0", "0%", "550.0"]] },
        { label: { pre: "升级至", lines: ["1.5亿 / 回"] }, rows: [["3", "1,650.0", "10%", "1,485.0"], ["5", "2,750.0", "15%", "2,337.5"]] },
        { label: { pre: "升级至", lines: ["2亿 / 回"] }, rows: [["8", "4,400.0", "20%", "3,520.0"], ["10", "5,500.0", "25%", "4,125.0"], ["20", "11,000.0", "30%", "7,700.0"]] },
      ],
      notes: ["AGP-1：追加5000万细胞 +165万日元。注：每次最大回输量为2亿细胞。"],
    },
    {
      type: "table",
      title: "骨芽分化诱导干细胞 / 局部治疗（关节）",
      unit: "单位：万日元",
      columns: ["项目", "细胞数量", "次数", "定价（含税）"],
      groups: [
        { label: { lines: ["普通套餐"] }, rows: [["5000万 / 回", "3", "752.4"]] },
        { label: { lines: ["高浓度套餐"] }, rows: [["1亿 / 回", "3", "1,128.6"]] },
      ],
    },
    {
      type: "table",
      title: "自体脂肪来源的间充质干细胞 / 局部治疗",
      unit: "单位：万日元",
      columns: ["适用部位（细胞数量）", "次数", "定价（含税）", "折扣", "折扣后价格"],
      groups: [
        {
          label: { lines: ["关节、面部·颈部、头皮、脊椎：5000万 / 回", "ED：3000万 / 回"] },
          rows: [["3", "660.0", "10%", "594.0"], ["5", "1,100.0", "15%", "935.0"], ["8", "1,760.0", "20%", "1,408.0"]],
        },
      ],
      notes: ["如果与干细胞静脉点滴同时购买，局部注射可享受半价优惠（骨芽细胞、AGP-1 不适用）。"],
    },
    {
      type: "table",
      title: "高活性 NK 免疫细胞 / 全身治疗",
      unit: "单位：万日元",
      columns: ["项目", "次数", "定价（含税）", "折扣", "折扣后价格"],
      groups: [
        { label: { lines: ["高活性免疫细胞"] }, rows: [["1", "55.0", "0%", "55.00"], ["3", "165.0", "5%", "156.75"], ["6", "330.0", "10%", "297.00"]] },
      ],
    },
    {
      type: "table",
      title: "血液净化疗法 / 旭化成加温式 DFPP 双重血浆交换疗法",
      unit: "单位：万日元",
      columns: ["适用人群", "次数", "定价（含税）", "折扣", "折扣后价格"],
      groups: [{ label: { lines: ["高血脂"] }, rows: [["1", "96.8", "0%", "96.80"], ["3", "290.4", "10%", "261.36"]] }],
      notes: ["血液检查费用：3万日元 / 次。"],
    },
    {
      type: "table",
      title: "康复训练",
      unit: "单位：日元",
      columns: ["适用人群", "次数", "定价（含税）"],
      groups: [{ label: { lines: ["理疗康复"] }, rows: [["1", "26,400"]] }],
    },
  ],
  notes: [
    "以上干细胞费用包含脂肪采集、干细胞培养及干细胞回输的费用。",
    "病毒感染症检查为阳性时，另外收取干细胞培养感染症处理费用（¥110,000 / 次）。",
    "初期的干细胞分离需要 2～3 周，之后每次干细胞培养需要 4 周。由于预约后才开始培养，请提前预约。",
  ],
};

const rebornJa = {
  id: "reborn",
  name: "東京九州再生医療センター",
  nameEn: "REBORN CLINIC",
  location: "東京",
  currencyNote: "金額の単位は「万円」です（リハビリテーションを除く）。すべて税込価格です。",
  sections: [
    {
      type: "table",
      title: "自己脂肪由来間葉系幹細胞点滴／全身治療",
      unit: "単位：万円",
      columns: ["細胞数", "回数", "定価（税込）", "割引率", "割引後価格"],
      groups: [
        { label: { lines: ["1億個／回"] }, rows: [["1", "352.0", "0%", "352.0"]] },
        { label: { pre: "アップグレード", lines: ["1.5億個／回"] }, rows: [["3", "1,056.0", "10%", "950.4"], ["5", "1,760.0", "15%", "1,496.0"]] },
        { label: { pre: "アップグレード", lines: ["2億個／回"] }, rows: [["8", "2,816.0", "20%", "2,252.8"], ["10", "3,520.0", "25%", "2,640.0"], ["20", "7,040.0", "30%", "4,928.0"]] },
      ],
      notes: ["5,000万個追加ごとに＋110万円。※1回あたりの最大投与量は2億個です。"],
    },
    {
      type: "table",
      title: "スーパー幹細胞 AGP-1／老化・糖尿病・肝疾患",
      unit: "単位：万円",
      columns: ["細胞数", "回数", "定価（税込）", "割引率", "割引後価格"],
      groups: [
        { label: { lines: ["1億個／回"] }, rows: [["1", "550.0", "0%", "550.0"]] },
        { label: { pre: "アップグレード", lines: ["1.5億個／回"] }, rows: [["3", "1,650.0", "10%", "1,485.0"], ["5", "2,750.0", "15%", "2,337.5"]] },
        { label: { pre: "アップグレード", lines: ["2億個／回"] }, rows: [["8", "4,400.0", "20%", "3,520.0"], ["10", "5,500.0", "25%", "4,125.0"], ["20", "11,000.0", "30%", "7,700.0"]] },
      ],
      notes: ["AGP-1：5,000万個追加ごとに＋165万円。※1回あたりの最大投与量は2億個です。"],
    },
    {
      type: "table",
      title: "骨芽分化誘導幹細胞／局所治療（関節）",
      unit: "単位：万円",
      columns: ["プラン", "細胞数", "回数", "定価（税込）"],
      groups: [
        { label: { lines: ["通常プラン"] }, rows: [["5,000万個／回", "3", "752.4"]] },
        { label: { lines: ["高濃度プラン"] }, rows: [["1億個／回", "3", "1,128.6"]] },
      ],
    },
    {
      type: "table",
      title: "自己脂肪由来間葉系幹細胞／局所治療",
      unit: "単位：万円",
      columns: ["対象部位（細胞数）", "回数", "定価（税込）", "割引率", "割引後価格"],
      groups: [
        {
          label: { lines: ["関節・顔・首・頭皮・脊椎：5,000万個／回", "ED：3,000万個／回"] },
          rows: [["3", "660.0", "10%", "594.0"], ["5", "1,100.0", "15%", "935.0"], ["8", "1,760.0", "20%", "1,408.0"]],
        },
      ],
      notes: ["幹細胞点滴と同時にご購入の場合、局所注射は半額となります（骨芽細胞・AGP-1は対象外）。"],
    },
    {
      type: "table",
      title: "高活性NK免疫細胞／全身治療",
      unit: "単位：万円",
      columns: ["項目", "回数", "定価（税込）", "割引率", "割引後価格"],
      groups: [
        { label: { lines: ["高活性免疫細胞"] }, rows: [["1", "55.0", "0%", "55.00"], ["3", "165.0", "5%", "156.75"], ["6", "330.0", "10%", "297.00"]] },
      ],
    },
    {
      type: "table",
      title: "血液浄化療法／旭化成 加温式DFPP（二重濾過血漿交換療法）",
      unit: "単位：万円",
      columns: ["対象", "回数", "定価（税込）", "割引率", "割引後価格"],
      groups: [{ label: { lines: ["高脂血症"] }, rows: [["1", "96.8", "0%", "96.80"], ["3", "290.4", "10%", "261.36"]] }],
      notes: ["血液検査費用：3万円／回。"],
    },
    {
      type: "table",
      title: "リハビリテーション",
      unit: "単位：円",
      columns: ["対象", "回数", "定価（税込）"],
      groups: [{ label: { lines: ["理学療法リハビリ"] }, rows: [["1", "26,400"]] }],
    },
  ],
  notes: [
    "上記の幹細胞治療費用には、脂肪採取・幹細胞培養・幹細胞投与の費用が含まれます。",
    "ウイルス感染症検査が陽性の場合、別途、感染症対応の培養処理費用（¥110,000／回）がかかります。",
    "初回の幹細胞分離には2〜3週間、以降の培養には毎回4週間を要します。ご予約後に培養を開始するため、お早めにご予約ください。",
  ],
};

const remZh = {
  id: "rem",
  name: "ReM CLINIC 银座",
  nameEn: "ReM CLINIC Ginza",
  location: "东京·银座",
  currencyNote: "以下为该诊所诊疗菜单中的再生医疗项目，金额单位为日元，均为含税价格。",
  sections: [
    {
      type: "menu",
      title: "EXO 高级干细胞外泌体治疗",
      titleEn: "Mesenchymal Stem Cell Exosome Therapy",
      intro: "使用高浓度外泌体的治疗。",
      items: [
        {
          name: "EXO 高级干细胞外泌体点滴",
          nameEn: "Mesenchymal Stem Cell Exosome I.V. Drip",
          desc: "将高浓度外泌体通过静脉点滴输注。",
          prices: [{ label: "单次", price: "¥1,732,500" }, { label: "年3次疗程", price: "¥4,678,000" }, { label: "年6次疗程", price: "¥7,800,000" }],
        },
        {
          name: "毛发再生",
          nameEn: "Hair Regeneration",
          desc: "通过水光注射将高浓度外泌体注入头皮。用量依医生判断而定。",
          prices: [{ label: "每 1cc", price: "¥497,500" }],
        },
        {
          name: "皮肤细胞再生",
          nameEn: "Skin Regeneration",
          desc: "将高浓度外泌体＋生长因子＋多种氨基酸＋多种维生素直接导入面部。可选择微针（Dermapen）或水光注射，治疗后以电穿孔导入进行术后护理。",
          prices: [{ label: "单次", price: "¥705,705" }, { label: "年4次疗程", price: "¥2,217,930" }],
        },
        {
          name: "局部注射",
          nameEn: "Local Injection",
          desc: "将高浓度外泌体直接注入膝关节及治疗部位。用量依医生诊断而定。",
          prices: [{ label: "每 1cc", price: "¥531,300" }],
        },
        {
          name: "吸入治疗（雾化）",
          nameEn: "Inhalation Treatment (Nebulizer)",
          desc: "通过超声波雾化器将高浓度外泌体雾化，送达支气管、肺部及鼻腔黏膜等部位。",
          prices: [{ label: "单次", price: "¥408,375" }, { label: "3次疗程", price: "¥1,040,000" }],
        },
        {
          name: "滴鼻治疗",
          nameEn: "Nasal Therapy",
          desc: "向鼻腔内喷入高浓度外泌体，经鼻腔送达脑部及全身。",
          prices: [{ label: "3个月用量", price: "¥1,435,000" }],
        },
        {
          name: "维纳斯护理（阴道凝胶）",
          nameEn: "Venus Care (Intravaginal Gel)",
          desc: "含脐带来源间充质干细胞外泌体的私密部位专用凝胶。",
          prices: [{ label: "1次", price: "¥254,100" }],
        },
        {
          name: "维纳斯护理 Plus（宫腔内给药）",
          nameEn: "Venus Care Plus (Intrauterine Administration)",
          desc: "由妇科专科医生进行脐带来源间充质干细胞外泌体的宫腔内给药。",
          prices: [{ label: "1次", price: "¥531,300" }],
        },
        {
          name: "P-Care（男性护理）",
          nameEn: "P-Care (Penis Care)",
          desc: "将高浓度外泌体直接注入局部。使用超细针头，几乎无痛感。用量依医生诊断而定。",
          prices: [{ label: "4次疗程", price: "¥924,000" }],
        },
        {
          name: "CO₂ 喷射治疗",
          nameEn: "CO₂ Jet Therapy",
          desc: "将脐带来源间充质干细胞外泌体渗透导入面部或头皮。",
          prices: [{ label: "面部或头皮", price: "¥246,000" }],
        },
      ],
    },
    {
      type: "menu",
      title: "自体干细胞治疗",
      titleEn: "Autologous Stem Cell Therapy",
      items: [
        {
          name: "治疗前感染症检查",
          nameEn: "Pre-procedure Infection Screening",
          desc: "为判断能否进行细胞培养，需进行血液检查。本检查为必须项目（每3个月1次）。",
          prices: [{ label: "", price: "¥22,000" }],
        },
        {
          name: "自体脂肪组织来源干细胞",
          nameEn: "Autologous Adipose-derived Stem Cells",
          tags: ["静脉点滴", "局部注射", "皮下注射"],
          desc: "从腹部采集脂肪并培养干细胞后回输。给药间隔依医生判断而定，不产生保管费。",
          prices: [{ label: "1次给药疗程", price: "¥4,620,000" }, { label: "2次给药疗程", price: "¥7,700,000" }, { label: "4次给药疗程", price: "¥13,860,000" }],
        },
      ],
    },
    {
      type: "list",
      title: "再生医疗等提供计划",
      titleEn: "Provision Plan for Regenerative Medicine",
      intro: "该诊所依据日本《再生医疗等安全性确保法》提供以下治疗：",
      items: [
        "使用自体脂肪来源干细胞治疗慢性疼痛",
        "用于预防恶性肿瘤的自体 NK 细胞疗法",
        "针对恶性肿瘤的免疫细胞（含 NK 细胞、γδT 细胞、CD8 阳性细胞、CD4 阳性细胞）治疗（生物应答修饰剂活化细胞毒性淋巴细胞疗法：BAK 疗法）",
      ],
    },
    {
      type: "menu",
      title: "免疫细胞疗法",
      titleEn: "Multi-Immunocell Regenerative Therapy",
      items: [
        {
          name: "NK-iST 疗法",
          nameEn: "NK Immune Surveillance Therapy",
          subtitle: "NK 细胞免疫监视强化疗法",
          desc: "将培养的免疫细胞（含 NK 细胞、NKT 细胞在内的 CD56 阳性细胞）静脉点滴输注，用于癌症治疗及预防。",
          prices: [{ label: "标准", price: "¥847,000" }, { label: "冻结培养", price: "¥877,800" }],
        },
        {
          name: "DC-iPT 疗法",
          nameEn: "Dendritic Cell Individualized Precision Targeting Therapy",
          subtitle: "树突状细胞疫苗个体化精准靶向疗法",
          desc: "让患者自身的树突状细胞识别癌抗原（肽），通过培养生成可构建癌细胞特异性攻击系统的树突状细胞疫苗。",
          prices: [
            { label: "1次（全血采集）", price: "¥1,093,400" },
            { label: "3次治疗（全血采集）", price: "¥3,187,800" },
            { label: "6次治疗（成分采血）", price: "¥4,158,000" },
            { label: "8次治疗（成分采血）", price: "¥5,174,400" },
            { label: "12次治疗（成分采血）", price: "¥7,392,000" },
          ],
        },
        {
          name: "αβT 细胞疗法",
          nameEn: "αβT Cell Therapy",
          desc: "将培养的免疫细胞（αβT 细胞）静脉点滴输注，用于癌症治疗及预防。",
          prices: [{ label: "标准", price: "¥693,000" }, { label: "冻结培养", price: "¥723,800" }],
        },
        {
          name: "治疗前感染症检查（免疫疗法通用）",
          nameEn: "Pre-procedure Infection Screening",
          desc: "为判断能否进行细胞培养，需进行血液检查。本检查为必须项目（每3个月1次）。",
          prices: [{ label: "", price: "¥22,000" }],
        },
        {
          name: "冻结保管费",
          nameEn: "Cryopreservation Storage Fee",
          desc: "细胞冻结保管达6个月以上时收取，此后每6个月收取一次。不进行冻结保管则不产生此费用。",
          prices: [{ label: "每6个月", price: "¥55,000" }],
        },
      ],
    },
  ],
  notes: [],
};

const remJa = {
  id: "rem",
  name: "ReM CLINIC 銀座",
  nameEn: "ReM CLINIC Ginza",
  location: "東京・銀座",
  currencyNote: "診療メニューのうち再生医療関連の項目を掲載しています。金額はすべて税込（円）です。",
  sections: [
    {
      type: "menu",
      title: "EXOプレミアム幹細胞エキス治療",
      titleEn: "Mesenchymal Stem Cell Exosome Therapy",
      intro: "高濃度エクソソームを用いた治療。",
      items: [
        {
          name: "EXOプレミアム幹細胞エキス点滴",
          nameEn: "Mesenchymal Stem Cell Exosome I.V. Drip",
          desc: "高濃度エクソソームを静脈点滴で投与。",
          prices: [{ label: "1回", price: "¥1,732,500" }, { label: "年3回コース", price: "¥4,678,000" }, { label: "年6回コース", price: "¥7,800,000" }],
        },
        {
          name: "毛髪再生",
          nameEn: "Hair Regeneration",
          desc: "高濃度エクソソームを水光注射で頭皮へ投与。投与用量は医師の判断により異なります。",
          prices: [{ label: "1ccあたり", price: "¥497,500" }],
        },
        {
          name: "皮膚細胞再生",
          nameEn: "Skin Regeneration",
          desc: "高濃度エクソソーム＋成長因子＋各種アミノ酸＋各種ビタミンをお顔へダイレクト導入。施術方法は、ダーマペンもしくは水光注射を選択できます。施術後はエレクトロポレーションでアフターケアをします。",
          prices: [{ label: "1回", price: "¥705,705" }, { label: "年4回コース", price: "¥2,217,930" }],
        },
        {
          name: "局所注射",
          nameEn: "Local Injection",
          desc: "高濃度エクソソームを膝関節及び治療部位に直接投与します。※投与用量は医師の診断により異なります。",
          prices: [{ label: "1ccあたり", price: "¥531,300" }],
        },
        {
          name: "吸入治療／ネブライザー",
          nameEn: "Inhalation Treatment (Nebulizer)",
          desc: "超音波式ネブライザーで、高濃度エクソソームをミスト状にして気管支や肺、鼻腔粘膜等へ送達させます。",
          prices: [{ label: "1回", price: "¥408,375" }, { label: "3回コース", price: "¥1,040,000" }],
        },
        {
          name: "点鼻治療",
          nameEn: "Nasal Therapy",
          desc: "鼻腔内に高濃度エクソソームを噴霧し、鼻腔、脳、そして全身に送達させます。",
          prices: [{ label: "3カ月分", price: "¥1,435,000" }],
        },
        {
          name: "ヴィーナスケア（膣内ジェル）",
          nameEn: "Venus Care (Intravaginal Gel)",
          desc: "臍帯由来間葉系幹細胞エクソソーム配合のデリケートゾーン専用ジェルです。",
          prices: [{ label: "1回", price: "¥254,100" }],
        },
        {
          name: "ヴィーナスケア Plus（子宮腔内投与）",
          nameEn: "Venus Care Plus (Intrauterine Administration)",
          desc: "婦人科専門医による臍帯由来間葉系幹細胞エクソソームの子宮腔内投与です。",
          prices: [{ label: "1回", price: "¥531,300" }],
        },
        {
          name: "P-Care（Penis care）",
          nameEn: "P-Care (Penis Care)",
          desc: "高濃度エクソソームを局所に直接投与します。本治療では超極細の針を使用しますので、痛みはほとんどありません。※投与用量は医師の診断により異なります。",
          prices: [{ label: "4回コース", price: "¥924,000" }],
        },
        {
          name: "CO₂ジェット治療",
          nameEn: "CO₂ Jet Therapy",
          desc: "お顔や頭皮に臍帯由来間葉系幹細胞エクソソームを浸透させます。",
          prices: [{ label: "顔または頭皮", price: "¥246,000" }],
        },
      ],
    },
    {
      type: "menu",
      title: "自家細胞 幹細胞治療",
      titleEn: "Autologous Stem Cell Therapy",
      items: [
        {
          name: "事前感染症検査",
          nameEn: "Pre-procedure Infection Screening",
          desc: "培養可否の判定のため、血液検査を行います。※本検査は必須です。（3カ月に1回）",
          prices: [{ label: "", price: "¥22,000" }],
        },
        {
          name: "自家組織脂肪由来幹細胞",
          nameEn: "Autologous Adipose-derived Stem Cells",
          tags: ["静脈点滴", "局所注射", "皮下注射"],
          desc: "腹部から採取した脂肪から培養した幹細胞を投与します。投与間隔は医師の判断により異なります。保管料は発生しません。",
          prices: [{ label: "1回投与コース", price: "¥4,620,000" }, { label: "2回投与コース", price: "¥7,700,000" }, { label: "4回投与コース", price: "¥13,860,000" }],
        },
      ],
    },
    {
      type: "list",
      title: "再生医療等提供計画",
      titleEn: "Provision Plan for Regenerative Medicine",
      intro: "再生医療等安全性確保法に基づき、以下の治療を提供しています。",
      items: [
        "自己脂肪由来幹細胞を用いた慢性疼痛の治療",
        "悪性腫瘍の予防に対する自家NK細胞療法",
        "悪性腫瘍に対する免疫細胞（NK細胞、γδT細胞、CD8陽性細胞、CD4陽性細胞を含む）治療（生物応答修飾剤活性化細胞障害性リンパ球療法：BAK療法）",
      ],
    },
    {
      type: "menu",
      title: "免疫細胞療法",
      titleEn: "Multi-Immunocell Regenerative Therapy",
      items: [
        {
          name: "NK-iST療法",
          nameEn: "NK Immune Surveillance Therapy",
          subtitle: "NK細胞免疫監視強化療法",
          desc: "培養した免疫細胞（NK細胞、NKT細胞を含むCD56陽性細胞）を、静脈点滴にて投与。がん治療及びがんの予防として。",
          prices: [{ label: "通常", price: "¥847,000" }, { label: "凍結培養", price: "¥877,800" }],
        },
        {
          name: "DC-iPT療法",
          nameEn: "Dendritic Cell Individualized Precision Targeting Therapy",
          subtitle: "樹状細胞ワクチン個別化標的療法",
          desc: "ご自身の樹状細胞にがん抗原（ペプチド）を覚えさせ、がん細胞に特異的な攻撃システムを構築する樹状細胞ワクチンを、培養により生成します。",
          prices: [
            { label: "1回（全血採取）", price: "¥1,093,400" },
            { label: "3回治療（全血採取）", price: "¥3,187,800" },
            { label: "6回治療（アフェレーシス）", price: "¥4,158,000" },
            { label: "8回治療（アフェレーシス）", price: "¥5,174,400" },
            { label: "12回治療（アフェレーシス）", price: "¥7,392,000" },
          ],
        },
        {
          name: "αβT細胞療法",
          nameEn: "αβT Cell Therapy",
          desc: "培養した免疫細胞（αβT細胞）を静脈点滴にて投与。がん治療及びがんの予防として。",
          prices: [{ label: "通常", price: "¥693,000" }, { label: "凍結培養", price: "¥723,800" }],
        },
        {
          name: "事前感染症検査（全免疫療法共通）",
          nameEn: "Pre-procedure Infection Screening",
          desc: "培養可否の判定のため、血液検査を行います。※本検査は必須です。（3カ月に1回）",
          prices: [{ label: "", price: "¥22,000" }],
        },
        {
          name: "凍結保管料",
          nameEn: "Cryopreservation Storage Fee",
          desc: "細胞保管期間が6カ月以上の場合に発生し、以降6カ月ごとに保管料が発生いたします。凍結保管が無い場合は発生いたしません。",
          prices: [{ label: "6カ月ごと", price: "¥55,000" }],
        },
      ],
    },
  ],
  notes: [],
};

export const pricing = {
  zh: {
    title: "合作机构参考价格",
    titleEn: "Reference Prices",
    intro: "以下为合作医疗机构公布的再生医疗项目价格，供您在咨询前初步了解费用范围。",
    switchLabel: "选择医疗机构",
    notice: [
      "以上均为各医疗机构公布的含税参考价格，实际费用以日本医生面诊后的正式报价为准；如有调整，以机构最新公布为准。",
      "丸五的医疗协调服务费另行收取，不包含在上述价格中。",
    ],
    clinics: [rebornZh, remZh],
  },
  ja: {
    title: "提携医療機関の参考価格",
    titleEn: "Reference Prices",
    intro: "提携医療機関が公表している再生医療メニューの価格です。ご相談前の費用感の目安としてご覧ください。",
    switchLabel: "医療機関を選択",
    notice: [
      "掲載価格は各医療機関が公表している税込の参考価格です。実際の費用は日本の医師による診察後の正式なお見積もりをご確認ください。価格は改定される場合があります。",
      "丸五の医療コーディネート費用は別途申し受けます。上記価格には含まれていません。",
    ],
    clinics: [rebornJa, remJa],
  },
};

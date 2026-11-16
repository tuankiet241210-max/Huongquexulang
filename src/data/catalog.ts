export interface Product {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeVariant: 'primary' | 'secondary' | 'tertiary' | 'soft';
  price: number;
  priceDisplay: string;
  unitLabel?: string;
  description: string;
  image: string;
  alt: string;
  category: 'sachet' | 'ecosystem';
  weight: string;
  longevity: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  idealSpaces: string[];
  origin: string;
}

export interface HerbItem {
  id: string;
  name: string;
  dotColorClass: string;
  benefit: string;
}

export interface MixRecipe {
  id: string;
  code: string;
  title: string;
  icon: string;
  badgeClass: string;
  ingredients: { label: string; colorClass: string }[];
  herbIds: string[];
  characteristic: string;
  idealSpace: string;
  isFeaturedWide?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  detailDesc: string;
  icon: string;
}

export interface BenefitItem {
  icon: string;
  iconBgClass: string;
  title: string;
  description: string;
}

export const IMAGES = {
  heroSachet:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCsFifzvC75qxG6xhkXF_qFhy_jOigTNHI8DRh_Cpb_z7n0ABXtHs1u6vssw7nP7lVESRCOcC28VkmY3jaA9hvIE_U2zcLaE1XkBfT1BC7Bz2ObpwTg58JSeLlmQrbTRRKtxMIWZCyZ28U-T-i4DkeL_bE9EnGFWBD2j7tU5M5aXmNU1zqlPFa0QGwHlbfjlB_CGCuaMO3bhlpKmiZcuzQgfRlT8Eu46cPA09aQM6m_MVDSNocq5Csb',
  aboutForest:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqDr0SvH-EQ86Q2SGBFt6O0Ic1IgeXO7dZhhBkvPy3s2qHcQdKoxBGDbnRxmna3QaWNqyfbpXa_ZQhWJduVMsgh3LgOSRBP44rTdXAqu3Bh0N5P07VHlap8DxSaIylU-Lafq2My6Pt3Bt6JLK0Q7nLNZErKXhgOLhGakbhAwmNyBaIPrDBqlpNA7PvDd1ABFnVPb_T0W2ardNVEWyLyPBsTCeSNnz6DoXCaj2L4r0CM2sv9v6GhT8p',
  sachetTraditional:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDHXPJVnwaRVBQEWM9DNMkCEiAWXWk8XpHf_sAX0qNN1iiGH2qHzbrxZEPr9a2oKJwkd0FEwE07FmEWU3VxWCrb5PQmDzlpRlDu1P9I091LTfn3Ojc_k-D7iiq-LLI_wcQhqwc3Q46dNzUfKWoo_SavxHZUtat6Kb8qERrdD7tJ5pI9TwMa4wLd72wu9sRQCozENcq-n6ICdtsitbXlMsM6XixqwPpdPKHPJP5oDGdV7O_rT8MKi8GtXw',
  sachetStarAnise:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCfFsvDerN7-ns2uL0hK-BnCVu6ZQ3trYAJ1qgAR0je3yqV1m4z1L_0tWPf1PUjcQwbMvoIW35xDnqCwIPOWtvzLJbaWfgU4j4YFR0386scxUBEn3_2BQrvXmkolXRxhkKpyxRdKooNzC7sgibjYEclTt8m1iU8R8G1wNb2zUTNRS4xOD9eYv-4WE5loUw-BAcVkIBfUI0eKW6LTuKH4SA-_2bEhRxW6fOLje7ARvp0Zm9w5ON5oNYqSA',
  sachetCitrus:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DWvkMMcaEBRKcZZ8phEaJ_dWZrfZ5GKb4q-eS10kblcVE03Asw50TBGz9bJ03PJCM6F5SlqBpXk4TnMYHgo-iOh1zCny7ko2CEvc_Qcc-RW1pK1YOf6J7ibc6YAcUaJ7GkvKV1wjc68003FDHw8k29qnV77t-csZzIltO7uUzTGKGXM1zI-NNBpl3puTdLMJBmFKF1BwNb0eZhpA2-Ave1UPbJXxjwR6KmR-Z3uagvr9cJX04YhRbg',
  sachetHerbal:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC8jf6jnEsBlx1vWRDAJgBeVf2q_VIJZI636d5yvtzzeO4D1MnoV-nY675XkFFu8qmLxkyMWNyTCme5OL2SJGX3Ykj_2j3GHOtxI-P9SEFp7b-OxO5dIsfq4ahAU3eWjZ4jwYijB7INcabhFqPUQwGTOuae1oe2vF9rE4wS89kXK8u80mDjP7PYIQqZg42IBNmsax7a-bqCOe8fRabzON6w_qsk2hnb4MwHu2Qd7j8OGD9kvTw64M1Cgw',
  essentialOil:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDM29Gi9r_nEN9Hm72dcOFyXAnaz0XgSjhL8r-FvMWj4-7LHBpnSVN2F4BCNLQLGlOwHC0BFa8OMqLpltl6gzyuN4s9JEBrg4CTn7ROvwPiaJkaeBS8nqOsdJZbKGOODtbjyhsncOuSFqlIEGMMomMkh3oLhQdiy1WW2BilmJLwKNZl9xQyB--OdLwW_RcKBlNLeBwoslsC9NdAC1z4B9-cErF6bqaFRF5g8CiwN4J1t2Q2p3LqQn3n',
  cinnamonSticks:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFM5496Uvs_6FGpQEn-l0L_axLF2bQ_PFPodlT2TV9bO88jfq-5f_BqWBrai74DZJzsAlPvkXONh6cdX9K0LTXOQCeEuF8ssLxPQwByRNOvbgzcK2ApYGebjALQhCaY2fX-qLHuogUZIJPtlTa0rG40Pm9edpp6DBaJO1b4tv520o3y4237EzJ-OLPWc_2OyBLE0H_upzOhchscomjCEByg6E_LqrN1cj9h836mr_Pb_YfrPzRimIU',
  cinnamonPowder:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDiF43dKkCWDBk0N27V6yp_XYYF7519eM2NjRG497TOq7BG8fHDOq7u5BWULznP4FyRKpXCuAASUTQkx-5UiTTOH18poBU-P86urCGsX_yBbP7Xx1LL7dOsFt-r0LzpCDKdwlqx3ezcQCjFkHgqTzJFlwkl0k_jIv0g1IKLl64FVTgiMUC8xs2Z2jKJ0PBkIQN03LekLVXg2MjZZkM1KY6pnISoTY9hKwNeW5ZgttVmW9YjJqTVNZUw',
  cultureLandscape:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfm4dznZo9nluKSL7ozsnzJEW97txnD4TdIPyMTTwUUSyymHLwnX52GKJcsIg2OSgyyANuz1qfJLRrG0AkGBzxGp_VP2mn6MQKkDQm2OWvlO0m310zpkgXtE33RfgcStXZLVd5k3csNLD7AnVbpqNS_Q_R9FQKA5kybttz8vqMB6S_HjQj-O1uRsq7wFJ-8NrNlVidU8UqZfwPRwd21sAkME9PDo2K5Tsq4s2BdzRi_q5dUI7KERXQ9A',
  cultureTextile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBc6wWWmswygDEN93ul4VVfOZf1zMFfGH7HSEv10v0sfc_kum0L5QVlbzWAfIIcofejf4cTlLPrJIg88Ybr_XjOVbeDFKwjCrm7-5DIFjOBltkWur2IsG5tSE6XE0AIBNyzhue1jsT3bRLYpyKxtJrt4nY3deoqjhiRCG_fIp13BtPcQFF-R_zzdzhGIu6GNA5HRDOPoCMaMb34zouFWUIjapmUHpoxltXllGZ7ctmejLYQyk3nfWdA',
  logo: '/assets/aistudio/Screenshot_2026-11-16_205648-removebg-preview_a1bec53b.png',
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Trang Chủ' },
  { id: 'about', label: 'Giới Thiệu' },
  { id: 'products', label: 'Túi Thơm Quế' },
  { id: 'mix-recipes', label: 'Gợi Ý Mix Hương' },
  { id: 'more-products', label: 'Sản Phẩm Khác' },
  { id: 'process', label: 'Quy Trình' },
  { id: 'benefits', label: 'Công Dụng' },
  { id: 'culture', label: 'Văn Hóa Xứ Lạng' },
  { id: 'contact', label: 'Liên Hệ' },
];

export const SACHET_PRODUCTS: Product[] = [
  {
    id: 'tui-que-truyen-thong',
    name: 'Túi Thơm Quế Truyền Thống',
    subtitle: 'Vỏ quế 100%',
    badge: 'Nguyên Bản',
    badgeVariant: 'primary',
    price: 25000,
    priceDisplay: '25.000đ',
    description:
      'Hương thơm nồng ấm, ngọt cay đậm đà giúp làm thơm phòng, xe hơi, khử mùi hôi ẩm mốc và mang lại cảm giác bình an.',
    image: IMAGES.sachetTraditional,
    alt: 'Túi thơm vải lanh thủ công đựng dăm quế Lạng Sơn truyền thống bên thanh quế cuộn mộc mạc',
    category: 'sachet',
    weight: '50g / túi vải lanh',
    longevity: '25 – 30 ngày tỏa hương tự nhiên',
    notes: {
      top: 'Tinh dầu vỏ quế tươi ấm nồng',
      heart: 'Vỏ quế già Bình Gia sao mộc',
      base: 'Hậu ngọt gỗ rừng trầm lắng',
    },
    idealSpaces: ['Phòng khách', 'Xe hơi', 'Tủ quần áo', 'Phòng làm việc'],
    origin: 'Xã Bình Gia, Lạng Sơn',
  },
  {
    id: 'tui-que-hoi',
    name: 'Túi Thơm Quế Hồi',
    subtitle: 'Thanh Quế & Hoa hồi xứ Lạng',
    badge: 'Bán Chạy',
    badgeVariant: 'secondary',
    price: 25000,
    priceDisplay: '25.000đ',
    description:
      'Hương thơm trầm ấm, quyến rũ đặc trưng của quế và hoa hồi 8 cánh, khử mùi phòng và xe hơi xuất sắc.',
    image: IMAGES.sachetStarAnise,
    alt: 'Túi thơm quế và hoa hồi xứ Lạng bằng vải lanh thêu chỉ xanh trầm',
    category: 'sachet',
    weight: '50g / túi vải lanh',
    longevity: '25 – 30 ngày tỏa hương tự nhiên',
    notes: {
      top: 'Hoa hồi 8 cánh thanh cay nhẹ',
      heart: 'Thanh quế già Lạng Sơn đượm tinh dầu',
      base: 'Gỗ thảo mộc ấm áp, bền hương',
    },
    idealSpaces: ['Xe ô tô', 'Phòng khách', 'Không gian thờ cúng', 'Tủ giày'],
    origin: 'Bình Gia & Văn Quan, Lạng Sơn',
  },
  {
    id: 'tui-que-cam',
    name: 'Túi Thơm Quế Cam Sảng Khoái',
    subtitle: 'Quế, hồi, vỏ quýt sấy & vỏ bưởi',
    badge: 'Tươi Mát',
    badgeVariant: 'tertiary',
    price: 25000,
    priceDisplay: '25.000đ',
    description:
      'Mùi hương sảng khoái mát lành từ vỏ cam quýt, vỏ bưởi hòa quyện vị ngọt ấm của quế, xua tan uể oải.',
    image: IMAGES.sachetCitrus,
    alt: 'Túi thơm thủ công cùng lát cam sấy, sả và thanh quế trên nền gỗ mộc',
    category: 'sachet',
    weight: '50g / túi vải lanh',
    longevity: '25 – 30 ngày tỏa hương tự nhiên',
    notes: {
      top: 'Tinh dầu vỏ cam, vỏ bưởi the mát',
      heart: 'Vỏ quýt sấy mộc hòa cùng hoa hồi',
      base: 'Nền quế ấm ngọt dịu dàng',
    },
    idealSpaces: ['Bàn làm việc', 'Góc học tập', 'Xe hơi', 'Phòng bếp'],
    origin: 'Lạng Sơn & vườn cây ăn quả địa phương',
  },
  {
    id: 'tui-que-thao-duoc',
    name: 'Túi Quế Thảo Dược Thư Thái',
    subtitle: 'Quế, Hoa nhài & Tía tô',
    badge: 'Thư Giãn',
    badgeVariant: 'soft',
    price: 25000,
    priceDisplay: '25.000đ',
    description:
      'Hương thơm tao nhã, êm ái xua tan âu lo, hỗ trợ giấc ngủ ngon sâu và ướp hương thanh dịu cho tủ quần áo hay bàn trà.',
    image: IMAGES.sachetHerbal,
    alt: 'Túi thơm thảo dược hoa nhài trắng, lá tía tô và quế trong vải thô dây rút thổ cẩm',
    category: 'sachet',
    weight: '50g / túi vải lanh',
    longevity: '25 – 30 ngày tỏa hương tự nhiên',
    notes: {
      top: 'Hoa nhài rừng thanh khiết',
      heart: 'Lá tía tô sao khô dịu hô hấp',
      base: 'Quế rừng ấm áp vỗ về giấc ngủ',
    },
    idealSpaces: ['Phòng ngủ', 'Đầu giường', 'Bàn trà', 'Tủ đồ ngủ'],
    origin: 'Vườn thảo mộc bản địa Xứ Lạng',
  },
];

export const ECOSYSTEM_PRODUCTS: Product[] = [
  {
    id: 'tinh-dau-que',
    name: 'Tinh Dầu Quế Nguyên Chất',
    subtitle: 'Tinh dầu đậm đặc',
    badge: 'Tinh dầu quế',
    badgeVariant: 'soft',
    price: 55000,
    priceDisplay: '55.000đ',
    unitLabel: '/ 100ml',
    description:
      'Chưng cất từ vỏ quế đồi già, dung tích 100ml, độ đậm đặc cao dùng xông phòng thư giãn, massage trị liệu và xua đuổi côn trùng hiệu quả.',
    image: IMAGES.essentialOil,
    alt: 'Lọ thủy tinh hổ phách tinh dầu quế nguyên chất Lạng Sơn bên thanh quế',
    category: 'ecosystem',
    weight: '100ml chai thủy tinh nhỏ giọt',
    longevity: 'Dùng 3 – 5 tháng tùy tần suất xông',
    notes: {
      top: 'Tinh chất cinnamaldehyde nồng ấm',
      heart: 'Hương vỏ quế chưng cất hơi nước',
      base: 'Lưu hương đậm sâu trong không gian',
    },
    idealSpaces: ['Đèn xông tinh dầu', 'Spa tại gia', 'Lau sàn khử mùi'],
    origin: 'Chưng cất thủ công Bình Gia, Lạng Sơn',
  },
  {
    id: 'thanh-que-kho',
    name: 'Thanh Quế Khô',
    subtitle: 'Dược liệu bản địa',
    badge: 'Thanh quế khô',
    badgeVariant: 'soft',
    price: 35000,
    priceDisplay: '35.000đ',
    unitLabel: '/ 100g',
    description:
      'Những ống quế cuộn tròn tự nhiên dày dặn, hàm lượng tinh dầu cao, dùng decor nghệ thuật, pha trà quế mật ong hoặc ngâm rượu thảo mộc dưỡng sinh.',
    image: IMAGES.cinnamonSticks,
    alt: 'Bó thanh quế khô Lạng Sơn buộc dây đay mộc mạc trên vải lanh',
    category: 'ecosystem',
    weight: '100g / bó dây đay thủ công',
    longevity: 'Bảo quản khô thoáng lên đến 12 tháng',
    notes: {
      top: 'Hương gỗ vỏ quế thanh tao',
      heart: 'Vị cay ngọt tự nhiên giàu tinh dầu',
      base: 'Ấm áp bền lâu khi hãm trà hoặc đun xông',
    },
    idealSpaces: ['Pha trà quế mật ong', 'Nấu ăn', 'Decor bàn trà'],
    origin: 'Rừng quế lâu năm Lạng Sơn',
  },
  {
    id: 'bot-que-min',
    name: 'Bột Quế Mịn Nguyên Chất',
    subtitle: 'Xay mịn nguyên chất',
    badge: 'Bột quế',
    badgeVariant: 'soft',
    price: 30000,
    priceDisplay: '30.000đ',
    unitLabel: '/ 100g',
    description:
      'Xay mịn từ vỏ quế cạo sạch lớp biểu bì, thơm lừng ngọt cay, thích hợp làm gia vị ẩm thực, làm bánh, pha đồ uống.',
    image: IMAGES.cinnamonPowder,
    alt: 'Bột quế mịn nguyên chất trong bát gốm cùng thìa gỗ mộc',
    category: 'ecosystem',
    weight: '100g / hũ kín giữ hương',
    longevity: 'Bảo quản nơi khô ráo 12 tháng',
    notes: {
      top: 'Thơm lừng ngọt cay ngay khi mở nắp',
      heart: 'Bột vỏ quế nguyên chất không pha tạp',
      base: 'Hậu vị ấm nồng đặc trưng xứ Lạng',
    },
    idealSpaces: ['Làm bánh', 'Pha cà phê / cacao', 'Gia vị món hầm'],
    origin: 'Xưởng sơ chế Bình Gia, Lạng Sơn',
  },
];

export const HERBS: HerbItem[] = [
  { id: 'que', name: 'Thanh Quế', dotColorClass: 'bg-primary', benefit: 'Làm ấm không gian, khử ẩm mốc' },
  { id: 'hoi', name: 'Hoa Hồi', dotColorClass: 'bg-secondary', benefit: 'Trầm ấm, thanh lọc không khí' },
  { id: 'sa', name: 'Sả Tươi Sấy', dotColorClass: 'bg-secondary', benefit: 'Đuổi muỗi, sảng khoái tinh thần' },
  { id: 'buoi', name: 'Vỏ Bưởi Sao', dotColorClass: 'bg-tertiary-container', benefit: 'The mát, khử mùi hôi hiệu quả' },
  { id: 'cam', name: 'Vỏ Cam Sấy Lạnh', dotColorClass: 'bg-tertiary-fixed-dim', benefit: 'Tươi sáng, kích thích tập trung' },
  { id: 'quyt', name: 'Vỏ Quýt Mộc', dotColorClass: 'bg-tertiary-container', benefit: 'Ngọt dịu, xoa dịu căng thẳng' },
  { id: 'nhai', name: 'Hoa Nhài Rừng', dotColorClass: 'bg-outline-variant', benefit: 'Thanh khiết, hỗ trợ giấc ngủ sâu' },
  { id: 'kinhgioi', name: 'Kinh Giới', dotColorClass: 'bg-secondary', benefit: 'Thông thoáng khoang mũi, dễ chịu' },
  { id: 'tiato', name: 'Tía Tô', dotColorClass: 'bg-primary-container', benefit: 'Thư thái, làm dịu đường hô hấp' },
];

export const MIX_RECIPES: MixRecipe[] = [
  {
    id: 'ct-01',
    code: 'Công Thức 01',
    title: 'Quế Hồi Ấm Áp',
    icon: 'fireplace',
    badgeClass: 'bg-primary-container text-on-primary',
    ingredients: [
      { label: '[Quế]', colorClass: 'text-primary' },
      { label: '[Hoa Hồi]', colorClass: 'text-secondary' },
    ],
    herbIds: ['que', 'hoi'],
    characteristic:
      'Ấm áp sâu lắng, gợi hoài niệm bếp lửa vùng cao, xua tan gió buốt mùa đông và mang lại phúc khí cát tường cho gia chủ.',
    idealSpace: 'Lý tưởng: Phòng khách, bàn thờ gia tiên, ngày đông...',
  },
  {
    id: 'ct-02',
    code: 'Công Thức 02',
    title: 'Quế Cam Tươi Mát',
    icon: 'wb_sunny',
    badgeClass: 'bg-tertiary-container text-on-tertiary',
    ingredients: [
      { label: '[Quế]', colorClass: 'text-primary' },
      { label: '[Vỏ Cam]', colorClass: 'text-tertiary-container' },
      { label: '[Sả]', colorClass: 'text-secondary' },
    ],
    herbIds: ['que', 'cam', 'sa'],
    characteristic:
      'Tươi sáng bừng tỉnh, ngập tràn năng lượng tích cực, kích hoạt sự tập trung cao độ và khơi nguồn sáng tạo dạt dào.',
    idealSpace: 'Lý tưởng: Bàn làm việc, góc học tập, xe hơi...',
  },
  {
    id: 'ct-03',
    code: 'Công Thức 03',
    title: 'Quế Bưởi Thanh Khiết',
    icon: 'air',
    badgeClass: 'bg-secondary text-on-secondary',
    ingredients: [
      { label: '[Quế]', colorClass: 'text-primary' },
      { label: '[Vỏ Bưởi]', colorClass: 'text-secondary' },
    ],
    herbIds: ['que', 'buoi'],
    characteristic:
      'Thanh tao, the mát dịu êm, giúp giải tỏa uể oải nặng nề và khử triệt để mùi hôi khó chịu hay ẩm ướt trong nhà.',
    idealSpace: 'Lý tưởng: Không gian bếp, phòng tắm, tủ giày...',
  },
  {
    id: 'ct-04',
    code: 'Công Thức 04',
    title: 'Quế Quýt Dịu Ngọt',
    icon: 'favorite',
    badgeClass: 'bg-primary-fixed text-on-primary-fixed',
    ingredients: [
      { label: '[Quế]', colorClass: 'text-primary' },
      { label: '[Vỏ Quýt]', colorClass: 'text-tertiary' },
      { label: '[Hoa Nhài]', colorClass: 'text-secondary' },
    ],
    herbIds: ['que', 'quyt', 'nhai'],
    characteristic:
      'Ngọt ngào thanh nhã, đưa tâm hồn chìm vào sự an yên vỗ về, chữa lành những xao động sau ngày dài hối hả.',
    idealSpace: 'Lý tưởng: Góc đọc sách, phòng thiền, tủ đồ ngủ...',
  },
  {
    id: 'ct-05',
    code: 'Công Thức 05',
    title: 'Hương Thảo Mộc Xứ Lạng',
    icon: 'yard',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    ingredients: [
      { label: '[Quế]', colorClass: 'text-primary' },
      { label: '[Kinh Giới]', colorClass: 'text-secondary' },
      { label: '[Tía Tô]', colorClass: 'text-primary-container' },
    ],
    herbIds: ['que', 'kinhgioi', 'tiato'],
    characteristic:
      'Mang phong vị vườn nhà mộc mạc, hỗ trợ thông thoáng khoang mũi, làm dịu hô hấp, thơm ấm thân thương như vòng tay mẹ.',
    idealSpace: 'Lý tưởng: Phòng ngủ người lớn tuổi, chăm sóc sức khỏe...',
  },
  {
    id: 'ct-06',
    code: 'Công Thức 06',
    title: 'Hương Hoa Dịu Nhẹ',
    icon: 'filter_vintage',
    badgeClass: 'bg-surface-dim text-on-surface',
    ingredients: [
      { label: '[Quế]', colorClass: 'text-primary' },
      { label: '[Hoa Nhài]', colorClass: 'text-secondary' },
    ],
    herbIds: ['que', 'nhai'],
    characteristic:
      'Tinh khôi, quý phái, nâng niu giấc ngủ thanh tịnh và mang lại nét mềm mại duyên dáng cho bàn trang điểm hay góc trà.',
    idealSpace: 'Lý tưởng: Giường ngủ, gối nằm, góc thư giãn spa...',
  },
  {
    id: 'ct-07',
    code: 'Công Thức 07',
    title: 'Quế Sả Thiên Nhiên',
    icon: 'eco',
    badgeClass: 'bg-secondary text-on-secondary',
    ingredients: [
      { label: '[Quế]', colorClass: 'text-primary' },
      { label: '[Sả]', colorClass: 'text-secondary' },
      { label: '[Hoa Hồi]', colorClass: 'text-secondary' },
    ],
    herbIds: ['que', 'sa', 'hoi'],
    characteristic:
      'Khắc tinh tự nhiên của muỗi và côn trùng, thanh lọc không khí ẩm thấp trên ô tô, làm trong lành góc phòng làm việc suốt ngày dài.',
    idealSpace: 'Lý tưởng: Xe ô tô, góc làm việc, phòng khách mùa mưa...',
    isFeaturedWide: true,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Chuẩn Bị Quế & Thảo Mộc',
    shortDesc:
      'Thu hoạch vỏ cây quế đúng độ tuổi, lựa hoa hồi 8 cánh đều đặn tại các cánh rừng Lạng Sơn và các nguyên liệu khác.',
    detailDesc:
      'Vỏ quế được bà con vùng cao Bình Gia thu hái từ những cây quế đủ năm tuổi (trên 8 năm) vào đúng mùa tinh dầu dồi dào nhất, kết hợp cùng hoa hồi 8 cánh căng mẩy.',
    icon: 'forest',
  },
  {
    step: '02',
    title: 'Làm Sạch & Sơ Chế',
    shortDesc:
      'Làm sạch bằng nước, phơi sấy mộc tự nhiên để giữ nguyên tinh chất dầu thơm quý giá.',
    detailDesc:
      'Nguyên liệu được rửa sạch bụi rừng bằng nước suối đầu nguồn, sau đó phơi nắng nhẹ hoặc sấy lạnh ở nhiệt độ kiểm soát để không làm bay mất tinh dầu tự nhiên.',
    icon: 'water_drop',
  },
  {
    step: '03',
    title: 'Phối Trộn Thảo Mộc',
    shortDesc:
      'Phối trộn theo tỷ lệ cân bằng giữa vỏ quế ấm nồng và các thảo mộc địa phương.',
    detailDesc:
      'Thảo mộc khô được băm/vò kích thước đồng đều giúp luồng không khí lưu thông qua từng thớ vỏ, rồi phối trộn chuẩn xác theo 7 công thức độc bản.',
    icon: 'tune',
  },
  {
    step: '04',
    title: 'Đóng Túi',
    shortDesc:
      'Cho thảo mộc vào túi được dệt thoáng khí, đính kèm dây rút hoa văn thổ cẩm may tay công phu.',
    detailDesc:
      'Vải sợi lanh mộc tự nhiên giúp khuếch tán mùi hương êm dịu mà không rơi bụi thảo mộc, kết hợp dải viền thổ cẩm Tày - Nùng dệt tay tinh xảo.',
    icon: 'shopping_bag',
  },
  {
    step: '05',
    title: 'Hoàn Thiện',
    shortDesc:
      'Kiểm định chất lượng kỹ càng từng sản phẩm, đóng hộp và gửi trao đến khách hàng.',
    detailDesc:
      'Từng chiếc túi thơm được kiểm tra độ ẩm, trọng lượng 50g chuẩn, niêm phong giữ hương trong bao bì thân thiện môi trường trước khi gửi đi.',
    icon: 'local_shipping',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    icon: 'home',
    iconBgClass: 'bg-secondary-container text-on-secondary-container',
    title: 'Tạo Hương Không Gian',
    description:
      'Khử mùi hôi ẩm mốc, xua tan mùi thức ăn, giúp tinh thần thư thái và lan tỏa hương thơm ấm cúng khắp căn phòng.',
  },
  {
    icon: 'chair',
    iconBgClass: 'bg-primary-fixed text-on-primary-fixed',
    title: 'Trang Trí Phòng Khách',
    description:
      'Họa tiết thổ cẩm mộc mạc trở thành điểm nhấn thẩm mỹ tao nhã cho bàn trà và góc kệ.',
  },
  {
    icon: 'checkroom',
    iconBgClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    title: 'Thơm Tủ Áo',
    description:
      'Hương quế lưu hương trên từng thớ vải tơ lụa, chống nấm mốc và xua đuổi côn trùng tự nhiên.',
  },
  {
    icon: 'directions_car',
    iconBgClass: 'bg-secondary-container text-on-secondary-container',
    title: 'Khử Mùi Ô Tô',
    description:
      'Đánh bay hoàn toàn cảm giác say xe ngột ngạt, tạo luồng không khí trong lành, sảng khoái trong xe.',
  },
  {
    icon: 'card_giftcard',
    iconBgClass: 'bg-surface-container-high text-primary',
    title: 'Quà Tặng Ý Nghĩa',
    description:
      'Món quà tinh tế đậm chất văn hóa bản địa dành tặng bạn bè phương xa, đối tác và người thương yêu.',
  },
];

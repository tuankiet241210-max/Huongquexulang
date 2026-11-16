import { useState } from 'react';
import {
  BENEFITS,
  ECOSYSTEM_PRODUCTS,
  HERBS,
  IMAGES,
  MIX_RECIPES,
  PROCESS_STEPS,
  Product,
  SACHET_PRODUCTS,
} from './data/catalog';
import { ArtisanImage } from './components/ArtisanImage';
import { Navbar } from './components/Navbar';
import { CustomMixModal } from './components/CustomMixModal';

export default function App() {
  const [isMixModalOpen, setIsMixModalOpen] = useState(false);
  const [initialRecipeId, setInitialRecipeId] = useState<string | null>(null);
  const [activeHerbFilter, setActiveHerbFilter] = useState<string | null>(null);

  const openCustomMixWithRecipe = (recipeId: string | null) => {
    setInitialRecipeId(recipeId);
    setIsMixModalOpen(true);
  };

  const filteredRecipes = activeHerbFilter
    ? MIX_RECIPES.filter((r) => r.herbIds.includes(activeHerbFilter))
    : MIX_RECIPES;

  const getBadgeStyle = (variant: Product['badgeVariant']) => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-container text-on-primary';
      case 'secondary':
        return 'bg-secondary text-on-secondary';
      case 'tertiary':
        return 'bg-tertiary-container text-on-tertiary';
      default:
        return 'bg-secondary-container text-on-secondary-container';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />

      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* ==========================================
              SECTION 1: HERO / TRANG CHỦ (#home)
          =========================================== */}
          <section
            id="home"
            className="relative overflow-hidden bg-surface-container-low pt-10 pb-12 lg:py-12"
          >
            {/* Dải thổ cẩm mộc mạc phía trên */}
            <div className="w-full h-2 bg-gradient-to-r from-primary-container via-secondary to-primary-container opacity-70 mb-8" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Cột Nội Dung Hero */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      verified
                    </span>
                    <span className="text-[11.5px] uppercase tracking-wider font-semibold">
                      100% Nguyên Liệu Bản Địa Lạng Sơn • Tinh Hoa Thảo Mộc Rừng
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-widest text-secondary font-semibold">
                      Dự án
                    </p>
                    <h1
                      className="font-serif text-primary leading-[1.08] tracking-tight"
                      style={{ fontSize: 'clamp(3rem, 5.5vw, 4.5rem)' }}
                    >
                      Hương Quế
                      <br />
                      Xứ Lạng
                    </h1>
                  </div>

                  <p className="font-serif text-[22px] leading-[30px] font-semibold text-tertiary-container italic">
                    “Gửi hương núi rừng vào từng góc nhỏ.”
                  </p>

                  <p className="text-[17px] leading-[28px] text-on-surface-variant max-w-2xl">
                    Khởi nguồn từ hương quế nồng nàn và nét đẹp thiên nhiên Xứ Lạng, mỗi chiếc túi
                    thơm là sự kết hợp hài hòa giữa quế, hoa hồi cùng các loại thảo mộc. Được làm
                    thủ công từ túi vải, điểm xuyết họa tiết thổ cẩm mang đậm dấu ấn văn hóa vùng
                    cao, sản phẩm gửi gắm hương thơm quê hương đến từng không gian sống.
                  </p>

                  {/* Nút hành động CTA */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="#products"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all duration-200 shadow-md font-semibold text-[15px]"
                    >
                      <span>Khám Phá Sản Phẩm</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => openCustomMixWithRecipe(null)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 shadow-md font-semibold text-[15px] cursor-pointer"
                    >
                      <span>Gợi Ý Mix Hương Độc Bản</span>
                      <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
                    </button>
                  </div>

                  {/* Thống kê nhanh chân thực */}
                  <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                    <div className="bg-surface-container-highest p-3 rounded-lg text-center">
                      <span className="block font-serif text-[28px] leading-[36px] text-primary font-bold tabular-nums">
                        100%
                      </span>
                      <span className="text-xs font-semibold text-on-surface-variant">
                        Tự Nhiên Bản Địa
                      </span>
                    </div>
                    <div className="bg-surface-container-highest p-3 rounded-lg text-center">
                      <span className="block font-serif text-[28px] leading-[36px] text-secondary font-bold tabular-nums">
                        25-30
                      </span>
                      <span className="text-xs font-semibold text-on-surface-variant">
                        Ngày Lưu Hương
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cột Visual Hero */}
                <div className="lg:col-span-5 relative">
                  <div className="relative mx-auto rounded-xl overflow-hidden bg-surface-container p-2.5 shadow-xl max-w-md">
                    <div className="rounded-xl overflow-hidden relative aspect-[4/3]">
                      <ArtisanImage
                        src={IMAGES.heroSachet}
                        alt="Túi thơm quế thảo mộc thủ công từ vải lanh thêu họa tiết thổ cẩm Tày Nùng đặt bên thanh quế, hoa hồi và lát cam khô"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 bg-surface/92 backdrop-blur-xs p-3 rounded-lg text-on-surface">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="block text-[15px] font-semibold text-primary">
                              Túi Thơm Hương Quế
                            </span>
                            <span className="text-xs text-on-surface-variant">
                              May đo thủ công từ vải sợi lanh & thổ cẩm
                            </span>
                          </div>
                          <span className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[20px]">spa</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 2: GIỚI THIỆU THƯƠNG HIỆU (#about)
          =========================================== */}
          <section id="about" className="py-14 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-1.5">
                <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                  Câu Chuyện Hương Quế Xứ Lạng
                </h2>
                <p className="font-serif text-[21px] leading-[30px] italic text-on-surface-variant">
                  “Hành trình mang hương thơm di sản từ núi rừng vào không gian sống”
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Khung ảnh câu chuyện làng nghề */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl overflow-hidden shadow-md bg-surface-container flex flex-col">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <ArtisanImage
                        src={IMAGES.aboutForest}
                        alt="Nông dân vùng cao Tày Nùng thu hoạch vỏ quế rừng và phơi nắng hoa hồi Lạng Sơn"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3.5 bg-surface-container-high text-center">
                      <span className="text-[15px] font-semibold text-primary">
                        Rừng quế Lạng Sơn
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4 Trụ cột giá trị cốt lõi */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-xs space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[20px]">eco</span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-primary">
                      100% Nguyên Liệu Bản Địa
                    </h3>
                    <p className="text-[13.5px] leading-[21px] text-on-surface-variant">
                      Nguyên liệu được chọn lọc tỉ mỉ từ những cây quế già và rừng hoa hồi tự nhiên
                      tại Bình Gia, Lạng Sơn — vùng đất cho thảo mộc chất lượng, thơm nồng và đậm đà
                      hương vị núi rừng.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-xs space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        self_improvement
                      </span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-primary">
                      Hương Trị Liệu Thuần Khiết
                    </h3>
                    <p className="text-[13.5px] leading-[21px] text-on-surface-variant">
                      Mỗi công thức là sự hòa quyện giữa vỏ quế nồng ấm, hoa hồi thơm dịu và thảo
                      mộc núi rừng, mang đến hương thơm tự nhiên giúp tinh thần thư thái, nhẹ nhàng
                      xua đi những căng thẳng đời thường.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-xs space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                      <span className="material-symbols-outlined text-[20px]">local_florist</span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-primary">
                      Quảng Bá Nông Sản Quê Nhà
                    </h3>
                    <p className="text-[13.5px] leading-[21px] text-on-surface-variant">
                      Nâng niu sản vật Xứ Lạng thành sản phẩm thủ công tinh xảo, văn minh, mang hương
                      quê đi xa và tạo sinh kế bền vững cho đồng bào dân tộc thiểu số.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-xs space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[20px]">diversity_1</span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-primary">
                      Lan Tỏa Bản Sắc Quê Hương
                    </h3>
                    <p className="text-[13.5px] leading-[21px] text-on-surface-variant">
                      Mỗi đường chỉ thổ cẩm Tày - Nùng trên túi là câu chuyện về đôi bàn tay khéo
                      léo, tấm lòng mộc mạc và sự chân tình của con người nông thôn miền Bắc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 3: BỘ SƯU TẬP TÚI THƠM (#products)
          =========================================== */}
          <section id="products" className="py-14 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
                <div>
                  <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                    Bộ Sưu Tập Túi Thơm Hương Quế
                  </h2>
                </div>
                <p className="text-[15px] text-on-surface-variant max-w-md">
                  Từng chiếc túi thơm được khâu may tỉ mỉ từ vải, ruột túi chứa trọn vẹn thảo mộc
                  theo phương pháp giữ hương lâu bền.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SACHET_PRODUCTS.map((product) => (
                  <article
                    key={product.id}
                    className="group bg-surface rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                        <ArtisanImage
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span
                          className={`absolute top-3 left-3 px-2.5 py-0.5 rounded text-xs font-semibold ${getBadgeStyle(
                            product.badgeVariant
                          )}`}
                        >
                          {product.badge}
                        </span>
                      </div>

                      <div className="p-4 space-y-1.5">
                        <span className="text-[11.5px] text-secondary font-semibold uppercase tracking-wide block">
                          {product.subtitle}
                        </span>
                        <h3 className="text-[17px] font-semibold text-primary leading-snug group-hover:text-primary-container transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-[13px] leading-[20px] text-on-surface-variant">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-2 flex items-center justify-between mt-auto">
                      <span className="font-serif text-[21px] text-primary font-bold tabular-nums">
                        Giá thành : {product.priceDisplay}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 4: GỢI Ý MIX HƯƠNG (#mix-recipes)
          =========================================== */}
          <section id="mix-recipes" className="py-14 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[16px] text-primary">blender</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Hương Quế Xứ Lạng
                  </span>
                </div>
                <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                  Gợi Ý Mix Hương – Sáng Tạo Phong Cách Hương Bản Địa
                </h2>
                <p className="text-[15px] leading-[24px] text-on-surface-variant">
                  Sự kết hợp kỳ diệu giữa{' '}
                  <span className="font-semibold text-primary">Quế Xứ Lạng</span> cùng các nguyên
                  liệu thảo mộc địa phương:{' '}
                  <span className="italic">
                    Hoa hồi, Sả, Vỏ bưởi, Vỏ cam, Vỏ quýt, Hoa nhài, Kinh giới, Tía tô...
                  </span>{' '}
                  Khám phá 7 loại mùi hương thuần tự nhiên, không hóa chất:
                </p>
              </div>

              {/* 9 Nguyên liệu tương tác lọc công thức */}
              <div className="mb-10 p-5 rounded-xl bg-surface-container-high shadow-xs">
                <span className="block text-center text-xs sm:text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                  Các Loại Thảo Dược Thiên Nhiên Dùng Trong Công Thức
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveHerbFilter(null)}
                    className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium shadow-xs transition-colors cursor-pointer ${
                      activeHerbFilter === null
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    Tất cả (7)
                  </button>
                  {HERBS.map((herb) => {
                    const isSelected = activeHerbFilter === herb.id;
                    return (
                      <button
                        key={herb.id}
                        type="button"
                        onClick={() =>
                          setActiveHerbFilter((prev) => (prev === herb.id ? null : herb.id))
                        }
                        className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-secondary text-on-secondary'
                            : 'bg-surface text-on-surface hover:bg-surface-container'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isSelected ? 'bg-surface' : herb.dotColorClass
                          }`}
                        />
                        <span>{herb.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bảng 7 công thức phối hợp */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRecipes.map((recipe) => {
                  const isWide = recipe.isFeaturedWide && !activeHerbFilter;
                  return (
                    <div
                      key={recipe.id}
                      onClick={() => openCustomMixWithRecipe(recipe.id)}
                      className={`${
                        isWide
                          ? 'md:col-span-2 lg:col-span-3 bg-surface-container-highest flex flex-col sm:flex-row sm:items-center justify-between gap-4'
                          : 'bg-surface-container flex flex-col justify-between'
                      } p-5 rounded-xl shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-2.5 py-0.5 rounded text-xs font-semibold ${recipe.badgeClass}`}
                          >
                            {recipe.code}
                          </span>
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            {recipe.icon}
                          </span>
                        </div>

                        <h3 className="font-serif text-[22px] leading-[30px] font-semibold text-primary">
                          {recipe.title}
                        </h3>

                        <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                          {recipe.ingredients.map((ing, idx) => (
                            <span key={ing.label} className="inline-flex items-center gap-1.5">
                              {idx > 0 && <span className="text-outline">+</span>}
                              <span
                                className={`px-2 py-0.5 rounded bg-surface text-xs font-semibold ${ing.colorClass}`}
                              >
                                {ing.label}
                              </span>
                            </span>
                          ))}
                        </div>

                        <p className="text-[13.5px] leading-[21px] text-on-surface-variant pt-1">
                          <strong className="text-on-surface">Đặc Điểm: </strong>
                          {recipe.characteristic}
                        </p>
                      </div>

                      <div className={isWide ? 'sm:w-80 shrink-0' : 'mt-4 pt-2'}>
                        <div className="bg-surface-container-high/70 px-3 py-2 rounded-lg flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">
                            check_circle
                          </span>
                          <span className="text-xs text-on-surface-variant font-medium">
                            {recipe.idealSpace}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 5: HỆ SINH THÁI SẢN PHẨM (#more-products)
          =========================================== */}
          <section id="more-products" className="py-14 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                  Hệ Sinh Thái Sản Phẩm Hương Quế Xứ Lạng
                </h2>
                <p className="text-[15px] text-on-surface-variant">
                  Từ thân vỏ quế ngút ngàn, các nghệ nhân chưng cất và gia công tỉ mỉ để tạo nên
                  chuỗi sản phẩm mộc mạc, chuẩn mực thiên nhiên.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {ECOSYSTEM_PRODUCTS.map((product) => (
                  <article
                    key={product.id}
                    className="group bg-surface rounded-xl border border-outline-variant/30 hover:border-outline-variant shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-5"
                  >
                    <div className="space-y-4">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-surface-container">
                        <ArtisanImage
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-surface/90 backdrop-blur-xs text-secondary text-xs font-semibold shadow-xs">
                          {product.badge}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-xs text-secondary font-semibold uppercase tracking-wider block">
                          {product.subtitle}
                        </span>
                        <h3 className="font-serif text-[22px] leading-[30px] text-primary font-bold group-hover:text-primary-container transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-[13.5px] leading-[21px] text-on-surface-variant">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-outline-variant/40 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-on-surface-variant">Giá bán lẻ</span>
                        <span className="font-serif text-[22px] text-primary font-bold leading-tight tabular-nums">
                          {product.priceDisplay}{' '}
                          <span className="font-sans text-[13px] font-normal text-on-surface-variant">
                            {product.unitLabel}
                          </span>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 6: QUY TRÌNH THỦ CÔNG (#process)
          =========================================== */}
          <section id="process" className="py-14 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                  Quy Trình Tạo Nên Túi Thơm
                </h2>
                <p className="text-[15px] text-on-surface-variant">
                  5 bước khép kín từ nương rừng đến bàn tay khách hàng, gìn giữ trọn vẹn dược tính
                  tự nhiên và hương thơm Xứ Lạng.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {PROCESS_STEPS.map((item) => (
                  <div
                    key={item.step}
                    className="bg-surface-container p-5 rounded-xl space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="font-serif text-[36px] leading-none text-primary-container font-bold opacity-45 block tabular-nums">
                        {item.step}
                      </span>
                      <h3 className="text-[15.5px] font-semibold text-primary">{item.title}</h3>
                      <p className="text-[13px] leading-[20px] text-on-surface-variant">
                        {item.shortDesc}
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        {item.icon}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 7: CÔNG DỤNG ĐA NĂNG (#benefits)
          =========================================== */}
          <section id="benefits" className="py-14 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                  Công Dụng Tuyệt Vời Trong Không Gian Sống
                </h2>
                <p className="text-[15px] text-on-surface-variant">
                  Không chỉ là vật phẩm thơm hương, túi quế Lạng Sơn còn là giải pháp sống xanh, bảo
                  vệ không gian sống tự nhiên và an lành cho gia đình bạn.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-surface p-5 rounded-xl shadow-xs hover:shadow-md transition-shadow text-center space-y-2.5"
                  >
                    <div
                      className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${benefit.iconBgClass}`}
                    >
                      <span className="material-symbols-outlined text-[22px]">{benefit.icon}</span>
                    </div>
                    <h3 className="text-[15.5px] font-semibold text-primary">{benefit.title}</h3>
                    <p className="text-[13px] leading-[20px] text-on-surface-variant">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 8: GÓC VĂN HÓA XỨ LẠNG (#culture)
          =========================================== */}
          <section id="culture" className="py-14 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-sm uppercase tracking-wider text-secondary font-semibold block">
                    Góc Văn Hóa
                  </span>
                  <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                    Vẻ Đẹp Con Người & Văn Hóa Xứ Lạng
                  </h2>
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/40">
                    <p className="font-serif text-[21px] leading-[30px] italic text-primary">
                      “Mỗi thanh quế, bông hồi là giọt mồ hôi của đồng bào trên những sườn đồi xanh
                      thẳm, mang lại sinh kế bền vững và niềm tự hào xứ Lạng.”
                    </p>
                  </div>
                  <p className="text-[15px] leading-[24px] text-on-surface-variant">
                    Xứ Lạng không chỉ có mây phủ Mẫu Sơn hay ải Chi Lăng hào hùng, mà còn say đắm
                    lòng người bởi những nương đồi quế bạt ngàn và sắc chàm đằm thắm của người
                    Tày-Nùng. Mỗi chiếc túi thơm là một câu chuyện được kể bằng hương quế của vùng
                    đất Xứ Lạng.
                  </p>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-center">
                  <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-surface-container">
                    <ArtisanImage
                      src={IMAGES.cultureLandscape}
                      alt="Đồi núi quế Lạng Sơn mờ sương trong ánh bình minh vùng cao Đông Bắc"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-surface-container">
                    <ArtisanImage
                      src={IMAGES.cultureTextile}
                      alt="Hoa văn vải thổ cẩm nhuộm chàm truyền thống của đồng bào Tày Nùng Lạng Sơn"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              SECTION 9: DỰ ÁN & CAM KẾT (#contact)
          =========================================== */}
          <section id="contact" className="py-14 bg-surface-container">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-6 space-y-1.5">
                <h2 className="font-serif text-[34px] leading-[42px] font-medium text-primary">
                  Dự Án Hương Quế Xứ Lạng
                </h2>
                <p className="font-serif text-[26px] leading-[34px] italic text-tertiary-container">
                  “Hương quế lan tỏa - bản sắc vươn xa”
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="p-5 rounded-xl bg-secondary-container text-on-secondary-container flex flex-col sm:flex-row items-center justify-center gap-3 shadow-xs text-center sm:text-left">
                  <span className="material-symbols-outlined text-[28px] text-secondary shrink-0">
                    verified
                  </span>
                  <p className="text-[15.5px] font-semibold text-on-secondary-container leading-relaxed">
                    Cam kết 100% thảo mộc tự nhiên Lạng Sơn, không sử dụng chất tạo hương nhân tạo,
                    bảo tồn môi trường sinh thái vùng cao.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ==========================================
          FOOTER
      =========================================== */}
      <footer className="w-full bg-surface-container-low text-on-surface pt-12 pb-8 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Brand Column */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <ArtisanImage
                  src={IMAGES.logo}
                  alt="Hương Quế Xứ Lạng Logo"
                  className="h-14 w-14 rounded-full object-contain shrink-0"
                />
                <span className="font-serif text-[22px] font-semibold text-primary">
                  Hương Quế Xứ Lạng
                </span>
              </div>
              <p className="font-serif text-[18px] italic text-tertiary-container leading-relaxed">
                “Hương quế lan tỏa - bản sắc vươn xa”
              </p>
              <p className="text-[13px] leading-[20px] text-on-surface-variant">
                Dự án bảo tồn và lan tỏa giá trị thảo dược bản địa Lạng Sơn. Túi thơm quế tự nhiên
                chế tác thủ công từ quế rừng, hoa hồi, kết hợp thêu thổ cẩm truyền thống Tày - Nùng
                vùng biên.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-primary">
                Thông Tin Liên Hệ
              </h3>
              <div className="space-y-2.5 text-[13px] text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[17px] text-secondary shrink-0">
                    location_on
                  </span>
                  <span>Xã Bình Gia, Tỉnh Lạng Sơn</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[17px] text-secondary shrink-0">
                    call
                  </span>
                  <span className="tabular-nums">Hotline: 0968 614 056</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[17px] text-secondary shrink-0">
                    mail
                  </span>
                  <span className="break-all">tuankiet241210@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Startup Project */}
            <div className="space-y-3">
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-primary">
                Dự Án Khởi Nghiệp
              </h3>
              <div className="p-4 rounded-xl bg-surface-container space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-primary font-semibold text-[15px]">
                  <span className="material-symbols-outlined text-[20px] text-secondary">school</span>
                  <span>Dự án Khởi nghiệp Xanh</span>
                </div>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  Dự án tham gia Cuộc thi Học sinh, Sinh viên với Ý tưởng Khởi nghiệp.
                </p>
              </div>
              <div className="space-y-1.5 text-[13px] text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                    verified
                  </span>
                  <span>Cam kết 100% thảo mộc rừng xanh tự nhiên.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                    loyalty
                  </span>
                  <span>Bảo tồn hoa văn thổ cẩm và nét đẹp bản địa.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                    volunteer_activism
                  </span>
                  <span>Tạo sinh kế bền vững cho đồng bào vùng cao.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-on-surface-variant">
            <p>
              © 2026 Hương Quế Xứ Lạng. Toàn bộ bản quyền được bảo lưu. Dự án phát triển bền vững
              thảo mộc vùng cao.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CustomMixModal
        isOpen={isMixModalOpen}
        initialRecipeId={initialRecipeId}
        onClose={() => setIsMixModalOpen(false)}
      />
    </div>
  );
}

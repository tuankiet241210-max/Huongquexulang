import { useState, useEffect } from 'react';
import { HERBS, MIX_RECIPES } from '../data/catalog';

interface CustomMixModalProps {
  isOpen: boolean;
  initialRecipeId?: string | null;
  onClose: () => void;
}

const FABRIC_STYLES = [
  { id: 'lanh-moc', name: 'Vải Lanh Mộc Tự Nhiên', note: 'Thoáng khí, màu kem cát tự nhiên' },
  { id: 'tho-cam', name: 'Túi Thơm Họa Tiết Thổ Cẩm', note: 'Nổi bật họa tiết núi rừng vùng cao' },
];

export function CustomMixModal({
  isOpen,
  initialRecipeId,
  onClose,
}: CustomMixModalProps) {
  const [selectedHerbs, setSelectedHerbs] = useState<string[]>(['que', 'hoi']);
  const [fabricStyle, setFabricStyle] = useState(FABRIC_STYLES[0].id);

  useEffect(() => {
    if (initialRecipeId) {
      const recipe = MIX_RECIPES.find((r) => r.id === initialRecipeId);
      if (recipe) {
        setSelectedHerbs(recipe.herbIds);
      }
    }
  }, [initialRecipeId]);

  if (!isOpen) return null;

  const toggleHerb = (herbId: string) => {
    if (herbId === 'que') return;
    setSelectedHerbs((prev) => {
      if (prev.includes(herbId)) {
        return prev.filter((id) => id !== herbId);
      }
      if (prev.length >= 4) {
        return [...prev.slice(0, 3), herbId];
      }
      return [...prev, herbId];
    });
  };

  const chosenHerbObjects = HERBS.filter((h) => selectedHerbs.includes(h.id));
  const chosenFabric = FABRIC_STYLES.find((f) => f.id === fabricStyle) || FABRIC_STYLES[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/50 backdrop-blur-xs p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="custom-mix-title"
    >
      <div
        className="bg-surface rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_24px_48px_-12px_rgba(32,27,24,0.25)] border border-outline-variant/40 p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Xưởng Phối Hương Thủ Công
            </span>
            <h3 id="custom-mix-title" className="font-serif text-2xl font-semibold text-primary">
              Gợi Ý Phối Túi Thơm Thảo Mộc
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ phối hương"
            className="w-9 h-9 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Step 1: Select Herbs */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-primary">
              1. Chọn nguyên liệu thảo mộc (tối đa 4 vị, nền Thanh Quế mặc định)
            </span>
            <span className="text-xs text-secondary font-semibold tabular-nums">
              {selectedHerbs.length}/4 vị
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {HERBS.map((herb) => {
              const active = selectedHerbs.includes(herb.id);
              const isBase = herb.id === 'que';
              return (
                <button
                  key={herb.id}
                  type="button"
                  onClick={() => toggleHerb(herb.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer border ${
                    active
                      ? 'bg-primary-container text-on-primary border-primary-container'
                      : 'bg-surface-container-low text-on-surface border-outline-variant/60 hover:border-primary/50'
                  }`}
                >
                  <span>{herb.name}</span>
                  {isBase && <span className="opacity-80 text-[10px]">(Nền)</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Fabric Style */}
        <div className="space-y-2.5">
          <span className="block text-sm font-semibold text-primary">
            2. Chọn chất liệu túi vải & họa tiết thổ cẩm
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {FABRIC_STYLES.map((style) => {
              const selected = fabricStyle === style.id;
              return (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setFabricStyle(style.id)}
                  className={`p-3 rounded-lg text-left transition-all border cursor-pointer ${
                    selected
                      ? 'bg-secondary-container/60 border-secondary text-on-secondary-fixed'
                      : 'bg-surface-container-low border-outline-variant/50 text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span className="block text-xs font-semibold text-primary">{style.name}</span>
                  <span className="block text-[11px] text-on-surface-variant mt-0.5">{style.note}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Preview Summary */}
        <div className="p-4 rounded-xl bg-surface-container space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-secondary">
              Bản phối dự kiến
            </span>
            <span className="text-xs text-on-surface-variant">Trọng lượng 50g · Lưu hương 25–30 ngày</span>
          </div>
          <p className="font-serif text-lg font-semibold text-primary">
            Túi Thơm Phối Hương Độc Bản
          </p>
          <p className="text-xs text-on-surface-variant">
            <strong className="text-primary">Thành phần:</strong>{' '}
            {chosenHerbObjects.map((h) => h.name).join(' + ')}
          </p>
          <p className="text-xs text-on-surface-variant">
            <strong className="text-primary">Công dụng nổi bật:</strong>{' '}
            {chosenHerbObjects.map((h) => h.benefit).join(' · ')}
          </p>
          <p className="text-xs text-on-surface-variant">
            <strong className="text-primary">Túi vải:</strong> {chosenFabric.name}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between gap-4 border-t border-outline-variant/40">
          <span className="text-xs text-on-surface-variant">
            Liên hệ hotline <strong className="text-primary tabular-nums">0968 614 056</strong> để được tư vấn phối hương riêng.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-semibold text-sm hover:bg-primary transition-colors cursor-pointer shrink-0"
          >
            Hoàn Tất Xem Thử
          </button>
        </div>
      </div>
    </div>
  );
}

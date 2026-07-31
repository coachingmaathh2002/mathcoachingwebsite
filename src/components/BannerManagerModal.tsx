import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  RotateCcw, 
  Link as LinkIcon, 
  Image as ImageIcon,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import toast from 'react-hot-toast';
import { BannerItem, convertFileToDataUrl } from '../utils/bannerStorage';

interface BannerManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  banners: BannerItem[];
  onUpdateBanners: (newBanners: BannerItem[]) => void;
  onResetToDefault: () => void;
}

export const BannerManagerModal: React.FC<BannerManagerModalProps> = ({
  isOpen,
  onClose,
  banners,
  onUpdateBanners,
  onResetToDefault,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'manage'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [linkInput, setLinkInput] = useState('/assignments');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = async (files: FileList | File[]) => {
    const validFiles = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (validFiles.length === 0) {
      toast.error('Please select valid image files (WebP recommended).');
      return;
    }

    const newBanners: BannerItem[] = [];
    for (const file of validFiles) {
      try {
        const isWebp = file.type === 'image/webp' || file.name.endsWith('.webp');
        const dataUrl = await convertFileToDataUrl(file);
        newBanners.push({
          id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          src: dataUrl,
          title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
          link: linkInput || '/assignments',
          isCustom: true,
          format: isWebp ? 'WEBP' : file.type.split('/')[1]?.toUpperCase() || 'IMAGE',
          createdAt: Date.now(),
        });
      } catch (err) {
        toast.error(`Failed to load file ${file.name}`);
      }
    }

    if (newBanners.length > 0) {
      onUpdateBanners([...banners, ...newBanners]);
      toast.success(`Successfully added ${newBanners.length} custom banner(s)!`);
      setActiveTab('manage');
    }
  };

  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) {
      toast.error('Please enter a valid image URL or path.');
      return;
    }

    const isWebp = urlInput.toLowerCase().includes('.webp');
    const newBanner: BannerItem = {
      id: `url-${Date.now()}`,
      src: urlInput.trim(),
      title: titleInput.trim() || 'Custom Banner',
      link: linkInput || '/assignments',
      isCustom: true,
      format: isWebp ? 'WEBP' : 'URL Image',
      createdAt: Date.now(),
    };

    onUpdateBanners([...banners, newBanner]);
    toast.success('Custom banner added!');
    setUrlInput('');
    setTitleInput('');
    setActiveTab('manage');
  };

  const handleDelete = (id: string) => {
    const filtered = banners.filter(b => b.id !== id);
    if (filtered.length === 0) {
      toast.error('You must keep at least one banner.');
      return;
    }
    onUpdateBanners(filtered);
    toast.success('Banner removed');
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= banners.length) return;

    const updated = [...banners];
    const [moved] = updated.splice(index, 1);
    updated.splice(newIndex, 0, moved);
    onUpdateBanners(updated);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        id="banner-manager-modal"
        className="w-full max-w-2xl bg-dark-900 border border-dark-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700 bg-dark-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-pink/10 text-brand-pink border border-brand-pink/20">
              <ImageIcon size={20} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white">Custom Banner Manager</h3>
              <p className="text-xs text-slate-400">Upload WebP files, enter paths, or manage active carousel banners</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-dark-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-dark-700 bg-dark-950/30 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-xl transition-all border-b-2 ${
              activeTab === 'upload' 
                ? 'border-brand-pink text-brand-pink bg-dark-900/80' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Upload size={16} />
            Upload WebP File
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-xl transition-all border-b-2 ${
              activeTab === 'url' 
                ? 'border-brand-pink text-brand-pink bg-dark-900/80' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <LinkIcon size={16} />
            Add Image URL / Path
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-xl transition-all border-b-2 ${
              activeTab === 'manage' 
                ? 'border-brand-pink text-brand-pink bg-dark-900/80' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ImageIcon size={16} />
            Active Banners ({banners.length})
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          {activeTab === 'upload' && (
            <div className="space-y-4">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 ${
                  isDragging 
                    ? 'border-brand-pink bg-brand-pink/10 scale-[0.99]' 
                    : 'border-dark-700 hover:border-brand-pink/50 bg-dark-950/40 hover:bg-dark-950/80'
                }`}
              >
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/webp,.webp,image/png,image/jpeg,image/*" 
                  multiple
                  className="hidden" 
                  onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                />
                <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 text-brand-pink flex items-center justify-center border border-brand-pink/20 shadow-inner">
                  <Upload size={28} />
                </div>
                <div>
                  <p className="text-base font-medium text-white">
                    Drop your custom <span className="text-brand-pink font-semibold">.webp</span> banners here
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Or click to browse from your device. Optimized for <code className="bg-dark-800 px-1.5 py-0.5 rounded text-slate-300">.webp</code> images.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-dark-800/60 px-3 py-1.5 rounded-full border border-dark-700 mt-2">
                  <FileCheck size={14} className="text-emerald-400" />
                  Supports WebP, PNG, JPG files
                </div>
              </div>

              <div className="bg-dark-950/60 p-4 rounded-xl border border-dark-700/60 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-brand-pink" />
                  Tip for custom WebP banners:
                </p>
                <p className="text-slate-400">
                  You can also place WebP files directly inside the <code className="text-pink-400 bg-dark-800 px-1 py-0.5 rounded">public/</code> directory (e.g. <code className="text-pink-400 bg-dark-800 px-1 py-0.5 rounded">public/banners/my-banner.webp</code>) and add them via path!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'url' && (
            <form onSubmit={handleAddUrl} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Image URL or Path (e.g., <code className="text-brand-pink">/banners/hero-01.webp</code>)
                </label>
                <input 
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="/banners/custom-banner.webp or https://..."
                  className="w-full px-4 py-2.5 bg-dark-950 border border-dark-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Banner Title (Optional)
                  </label>
                  <input 
                    type="text"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    placeholder="e.g., WBJEE Special Mock Series"
                    className="w-full px-4 py-2.5 bg-dark-950 border border-dark-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-pink text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Click Action Route
                  </label>
                  <select
                    value={linkInput}
                    onChange={(e) => setLinkInput(e.target.value)}
                    className="w-full px-4 py-2.5 bg-dark-950 border border-dark-700 rounded-xl text-white focus:outline-none focus:border-brand-pink text-sm"
                  >
                    <option value="/assignments">Assignments (/assignments)</option>
                    <option value="/tests">Free Tests (/tests)</option>
                    <option value="/study-materials">Study Materials (/study-materials)</option>
                    <option value="/">Home (/)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand-pink hover:bg-pink-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-pink/20 text-sm"
              >
                <Plus size={18} />
                Add Banner Path / URL
              </button>
            </form>
          )}

          {activeTab === 'manage' && (
            <div className="space-y-3">
              {banners.map((banner, index) => (
                <div 
                  key={banner.id}
                  className="flex items-center gap-3 p-3 bg-dark-950 border border-dark-700 rounded-xl hover:border-dark-600 transition-colors group"
                >
                  <div className="w-16 h-12 rounded-lg bg-black/40 overflow-hidden flex-shrink-0 relative border border-dark-700">
                    <img 
                      src={banner.src} 
                      alt={banner.title} 
                      className="w-full h-full object-cover"
                    />
                    {banner.format && (
                      <span className="absolute bottom-0 right-0 bg-brand-pink text-white text-[9px] font-bold px-1 rounded-tl">
                        {banner.format}
                      </span>
                    )}
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-white truncate">
                        {banner.title || `Banner #${index + 1}`}
                      </p>
                      {banner.isCustom && (
                        <span className="text-[10px] bg-brand-pink/20 text-brand-pink border border-brand-pink/30 px-1.5 py-0.5 rounded-full font-medium">
                          Custom
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      Target: <span className="text-slate-300 font-mono">{banner.link || '/assignments'}</span>
                    </p>
                  </div>

                  {/* Move Up/Down & Remove controls */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      disabled={index === 0}
                      onClick={() => handleMove(index, 'up')}
                      className="p-1.5 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 rounded hover:bg-dark-800 transition-colors"
                      title="Move Up"
                    >
                      <ArrowUp size={16} />
                    </button>
                    <button
                      disabled={index === banners.length - 1}
                      onClick={() => handleMove(index, 'down')}
                      className="p-1.5 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 rounded hover:bg-dark-800 transition-colors"
                      title="Move Down"
                    >
                      <ArrowDown size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded transition-colors"
                      title="Delete Banner"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-dark-700 bg-dark-950/50">
          <button
            onClick={onResetToDefault}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
          >
            <RotateCcw size={14} />
            Reset to Default Banners
          </button>
          
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white bg-brand-pink hover:bg-pink-600 rounded-xl transition-colors shadow-lg shadow-brand-pink/20"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

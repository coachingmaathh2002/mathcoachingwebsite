export interface BannerItem {
  id: string;
  src: string;
  title: string;
  link?: string;
  isCustom?: boolean;
  format?: string;
  createdAt?: number;
}

const STORAGE_KEY = 'raj_sir_custom_banners';

export const saveBannersToStorage = (banners: BannerItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(banners));
  } catch (err) {
    console.error('Failed to save banners to localStorage:', err);
  }
};

export const loadBannersFromStorage = (): BannerItem[] | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('Failed to load banners from localStorage:', err);
  }
  return null;
};

export const clearCustomBannersStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear banner storage:', err);
  }
};

export const convertFileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read file as data URL'));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
};

import { Region } from '@/types';

// Morocco regions matching the SVG map paths
export const moroccoRegions: Region[] = [
  {
    id: 'MA-01',
    name: 'Tanger-Tétouan',
    nameAr: 'طنجة تطوان',
  },
  {
    id: 'MA-02',
    name: 'Gharb-Chrarda-Beni Hssen',
    nameAr: 'الغرب الشراردة بني حسن',
  },
  {
    id: 'MA-03',
    name: 'Taza-Al Hoceima-Taounate',
    nameAr: 'تازة الحسيمة تاونات',
  },
  {
    id: 'MA-04',
    name: "L'Oriental",
    nameAr: 'الشرق',
  },
  {
    id: 'MA-05',
    name: 'Fès-Boulemane',
    nameAr: 'فاس بولمان',
  },
  {
    id: 'MA-06',
    name: 'Meknès-Tafilalet',
    nameAr: 'مكناس تافيلالت',
  },
  {
    id: 'MA-07',
    name: 'Rabat-Salé-Zemmour-Zaer',
    nameAr: 'الرباط سلا زمور زعير',
  },
  {
    id: 'MA-08',
    name: 'Grand Casablanca',
    nameAr: 'الدار البيضاء الكبرى',
  },
  {
    id: 'MA-09',
    name: 'Chaouia-Ouardigha',
    nameAr: 'الشاوية ورديغة',
  },
  {
    id: 'MA-10',
    name: 'Doukhala-Abda',
    nameAr: 'دكالة عبدة',
  },
  {
    id: 'MA-11',
    name: 'Marrakech-Tensift-Al Haouz',
    nameAr: 'مراكش تانسيفت الحوز',
  },
  {
    id: 'MA-12',
    name: 'Tadla-Azilal',
    nameAr: 'تادلة أزيلال',
  },
  {
    id: 'MA-13',
    name: 'Souss-Massa-Drâa',
    nameAr: 'سوس ماسة درعة',
  },
  {
    id: 'MA-14',
    name: 'Guelmim-Es Smara',
    nameAr: 'كلميم السمارة',
  },
  {
    id: 'MA-15',
    name: 'Laâyoune-Boujdour-Sakia el Hamra',
    nameAr: 'العيون بوجدور الساقية الحمراء',
  },
  {
    id: 'MA-16',
    name: 'Oued ed Dahab-Lagouira',
    nameAr: 'وادي الذهب لكويرة',
  },
];

// Major cities for city selector
export const majorCities = [
  { id: 'casablanca', name: 'Casablanca', nameAr: 'الدار البيضاء', region: 'MA-08' },
  { id: 'rabat', name: 'Rabat', nameAr: 'الرباط', region: 'MA-07' },
  { id: 'marrakech', name: 'Marrakech', nameAr: 'مراكش', region: 'MA-11' },
  { id: 'fes', name: 'Fès', nameAr: 'فاس', region: 'MA-05' },
  { id: 'tangier', name: 'Tangier', nameAr: 'طنجة', region: 'MA-01' },
  { id: 'agadir', name: 'Agadir', nameAr: 'أكادير', region: 'MA-13' },
  { id: 'meknes', name: 'Meknès', nameAr: 'مكناس', region: 'MA-06' },
  { id: 'oujda', name: 'Oujda', nameAr: 'وجدة', region: 'MA-04' },
  { id: 'kenitra', name: 'Kenitra', nameAr: 'القنيطرة', region: 'MA-02' },
  { id: 'tetouan', name: 'Tétouan', nameAr: 'تطوان', region: 'MA-01' },
  { id: 'sale', name: 'Salé', nameAr: 'سلا', region: 'MA-07' },
  { id: 'temara', name: 'Témara', nameAr: 'تمارة', region: 'MA-07' },
  { id: 'safi', name: 'Safi', nameAr: 'آسفي', region: 'MA-10' },
  { id: 'mohammedia', name: 'Mohammedia', nameAr: 'المحمدية', region: 'MA-08' },
  { id: 'khouribga', name: 'Khouribga', nameAr: 'خريبكة', region: 'MA-09' },
  { id: 'beni-mellal', name: 'Beni Mellal', nameAr: 'بني ملال', region: 'MA-12' },
  { id: 'el-jadida', name: 'El Jadida', nameAr: 'الجديدة', region: 'MA-10' },
  { id: 'nador', name: 'Nador', nameAr: 'الناظور', region: 'MA-04' },
  { id: 'settat', name: 'Settat', nameAr: 'سطات', region: 'MA-09' },
  { id: 'taza', name: 'Taza', nameAr: 'تازة', region: 'MA-03' },
];

export const getRegionById = (id: string): Region | undefined => {
  return moroccoRegions.find((region) => region.id === id);
};

export const getRegionByName = (name: string): Region | undefined => {
  return moroccoRegions.find(
    (region) => region.name.toLowerCase() === name.toLowerCase()
  );
};

export const getCityByName = (name: string) => {
  return majorCities.find(
    (city) => city.name.toLowerCase() === name.toLowerCase()
  );
};


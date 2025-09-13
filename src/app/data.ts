export interface Item {
  code: string;
  replacements?: string[];
  threadSize?: 'M5' | 'M6' | 'M8' | 'M10' | 'M12';
  threadPitch?: number;
  length?: number;
  keySize?: number | null;
  screwdriver?: string;
  color?: string | null;
  shape?: string | null;
  standard?: string | null;
  photo?: string | null;
}

export const data: Item[] = [
  {
    code: '09125-08015',
    threadSize: 'M8',
    length: 20,
    color: 'silver',
    shape: 'mushroom',
    screwdriver: 'PH',
    standard: 'JIS-B 1111',
  },
  {
    code: '01550-10163',
    length: 16,
    color: 'black',
    shape: 'flange hex bolt',
    standard: 'JIS-B 1111',
  },
  {
    code: '09118-06106',
    threadSize: 'M6',
    length: 16,
    color: 'silver',
    shape: 'hex bolt with washer and lock washer',
    photo: '09118-06106.webp',
  },
  {
    code: '01550-0620A',
    threadSize: 'M6',
    length: 20,
    keySize: 10,
    color: 'silver',
    shape: 'flange hex bolt',
    photo: '01550-0620A.webp',
  },
  {
    code: '01550-08303',
    threadSize: 'M8',
    replacements: ['01550-0830A', '01550-0830B'],
    shape: 'hex bolt with washer',
    length: 30,
    keySize: 12,
  },
  {
    code: '01550-0830A',
    threadSize: 'M8',
    length: 30,
    keySize: 12,
    color: 'silver',
    shape: 'flange hex bolt',
  },
  {
    code: '01550-0830B',
    threadSize: 'M8',
    length: 30,
  },
  {
    code: '01550-06123',
    replacements: ['01550-0612A', '01550-0612B'],
    threadSize: 'M6',
    length: 12,
  },
  {
    code: '01550-0612A',
    replacements: ['01550-0612B'],
    threadSize: 'M6',
    length: 12,
    keySize: 10,
    color: 'silver',
    shape: 'flange hex bolt',
  },
  {
    code: '01550-0612B',
    replacements: ['01550-0612A'],
    threadSize: 'M6',
    length: 12,
    keySize: 10,
    color: 'black',
    shape: 'flange hex bolt',
    photo: '01550-0612B.webp',
  },
  {
    code: '09136-06086',
    replacements: ['09136-06133'],
    threadSize: 'M6',
    length: 16,
    screwdriver: 'PH',
    shape: 'screw with washer',
  },
  {
    code: '09136-06133',
    replacements: [],
    threadSize: 'M6',
    length: 16,
    keySize: 10,
    screwdriver: 'PH',
    color: 'silver',
    shape: 'hex bolt with washer',
    photo: '09136-06133.webp',
  },
  {
    code: '01550-08353',
    replacements: ['01550-0835A', '01550-0835B'],
    length: 35,
    threadSize: 'M8',
  },
  {
    code: '01550-0835A',
    threadSize: 'M8',
    keySize: 12,
    length: 35,
    color: 'silver',
    shape: 'flange hex bolt',
    photo: '01550-0835A.webp',
  },
  {
    code: '01550-0835B',
    threadSize: 'M8',
    length: 35,
  },
  {
    code: '09118-08107',
    threadSize: 'M8',
    length: 25,
  },
  {
    code: '09100-10035',
    length: 100,
    threadSize: 'M10',
    threadPitch: 1.25,
    color: 'silver',
  },
];

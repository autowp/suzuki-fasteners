export interface Item {
  code: string;
  replacements?: string[];
  threadSize?: 'M5' | 'M6' | 'M8' | 'M10' | 'M12';
  threadPitch?: number;
  length?: number;
  keySize?: number;
  screwdriver?: string;
  color?: string;
  shape?: string;
  standard?: string;
  photo?: string;
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
    code: '01550-06203',
    threadSize: 'M6',
    length: 20,
    replacements: ['01550-0620A', '01550-0620B'],
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
    code: '01550-0620B',
    threadSize: 'M6',
    length: 20,
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
  {
    code: '02112-36163',
    replacements: ['02112-3616A', '02112-3616B'],
  },
  {
    code: '02112-3616A',
  },
  {
    code: '02112-3616B',
  },
  {
    code: '09137-08011',
  },
  {
    code: '09100-06075',
  },
  {
    code: '02112-06123',
    replacements: ['02112-0612A', '02112-0612B'],
  },
  {
    code: '02112-0612A',
  },
  {
    code: '02112-0612B',
  },
  {
    code: '09115-06001',
  },
  {
    code: '03242-05163',
    replacements: ['03241-0516A'],
    shape: 'mushroom screw',
    threadSize: 'M5',
    screwdriver: 'PH',
    length: 16,
  },
  {
    code: '03241-0516A',
    shape: 'mushroom screw',
    threadSize: 'M5',
    screwdriver: 'PH',
    photo: '03241-0516A.webp',
    length: 16,
    color: 'silver',
  },
  {
    code: '01550-08163',
    replacements: ['01550-0816A', '01550-0816B', '01550-08167'],
  },
  {
    code: '01550-0816A',
  },
  {
    code: '01550-0816B',
  },
  {
    code: '01550-08167',
  },
  {
    code: '01550-06803',
    replacements: ['01550-0680B'],
  },
  {
    code: '01550-0680B',
  },
  {
    code: '02142-06103',
    replacements: ['02142-0610A', '02142-0610B'],
  },
  {
    code: '02142-0610A',
  },
  {
    code: '02142-0610B',
  },
  {
    code: '01550-06163',
    replacements: ['01550-0616A', '01550-0616B', '01500-06167'],
    shape: 'flange hex bolt',
    threadSize: 'M6',
    keySize: 10,
    length: 16,
    threadPitch: 1.0,
  },
  {
    code: '01550-0616A',
    shape: 'flange hex bolt',
    threadSize: 'M6',
    keySize: 10,
    length: 16,
    threadPitch: 1.0,
    color: 'silver',
  },
  {
    code: '01550-0616B',
    shape: 'flange hex bolt',
    threadSize: 'M6',
    keySize: 10,
    length: 16,
    threadPitch: 1.0,
    color: 'black',
    photo: '01550-0616B.webp',
  },
  {
    code: '01500-06167',
  },
  {
    code: '03121-05163',
    replacements: ['03121-0516A'],
  },
  {
    code: '03121-0516A',
  },
  {
    code: '03211-16163',
  },
  {
    code: '02142-06163',
    replacements: ['02142-0616A'],
    shape: 'mushroom',
    screwdriver: 'PH',
  },
  {
    code: '02142-0616A',
  },
  {
    code: '09139-06036',
    shape: 'mushroom',
    screwdriver: 'PH',
  },
  {
    code: '01550-08203',
    replacements: ['01550-0820A', '01550-0820B'],
    shape: 'flange hex bolt',
  },
  {
    code: '01550-0820A',
    color: 'silver',
    shape: 'flange hex bolt',
  },
  {
    code: '01550-0820B',
    color: 'black',
    shape: 'flange hex bolt',
  },
  {
    code: '01570-12353',
    replacements: ['01570-1235A'],
    shape: 'hex bolt with lock washer',
  },
  {
    code: '01570-1235A',
  },
  {
    code: '09100-08253',
    shape: 'hex bolt',
  },
  {
    code: '09116-06098',
    shape: 'hex bolt with washer',
    replacements: ['09116-06098-XC0'],
  },
  {
    code: '09116-06098-XC0',
    shape: 'hex bolt with washer',
  },
  {
    code: '02112-35123',
    replacements: ['02112-3512A'],
    shape: 'screw',
    screwdriver: 'PH',
  },
  {
    code: '02112-3512A',
  },
  {
    code: '01500-08203',
    replacements: ['01500-0820A'],
  },
  {
    code: '01500-0820A',
  },
  {
    code: '09125-06041',
    shape: 'screw',
    screwdriver: 'PH',
  },
  {
    code: '02112-76123',
    replacements: ['02112-7612B'],
  },
  {
    code: '09100-10168',
    shape: 'hex bolt',
    length: 37,
    threadSize: 'M10',
    keySize: 14,
    color: 'silver',
    photo: '09100-10168.webp',
    threadPitch: 1.25,
  },
  {
    code: '09125-06022',
    shape: 'mushroom',
    length: 16,
    threadSize: 'M6',
    screwdriver: 'PH',
    color: 'black',
    photo: '09125-06022.webp',
    threadPitch: 1.0,
  },
];

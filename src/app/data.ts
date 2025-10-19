export interface Item {
  code: string;
  replacements?: string[];
  threadSize?: 'M5' | 'M6' | 'M8' | 'M10' | 'M12';
  threadPitch?: number;
  length?: number;
  keySize?: number;
  screwdriver?: string;
  color?: string;
  type?: FastenerType;
  standard?: string;
  photo?: string;
}

export enum FastenerType {
  FLANGE_HEX_BOLT = 'flange hex bolt',
  HEX_BOLT = 'hex bolt',
  HEX_BOLT_WITH_WASHER = 'hex bolt with washer',
  HEX_BOLT_WITH_LOCK_WASHER = 'hex bolt with lock washer',
  HEX_BOLT_WITH_WASHER_AND_LOCK_WASHER = 'hex bolt with washer and lock washer',
  SCREW = 'screw',
  ROUND_SCREW = 'round screw',
  MUSHROOM_SCREW = 'mushroom screw',
  SCREW_WITH_WASHER = 'screw with washer',
  COUNTERSUNK_HEAD_SELF_TAPPING_SCREW = 'countersunk head self-tapping screw',
}

export const fastenerTypeName: Record<FastenerType, string> = {
  [FastenerType.FLANGE_HEX_BOLT]: $localize`flange hex bolt`,
  [FastenerType.HEX_BOLT]: $localize`hex bolt`,
  [FastenerType.HEX_BOLT_WITH_WASHER]: $localize`hex bolt with washer`,
  [FastenerType.HEX_BOLT_WITH_LOCK_WASHER]: $localize`hex bolt with lock washer`,
  [FastenerType.HEX_BOLT_WITH_WASHER_AND_LOCK_WASHER]: $localize`hex bolt with washer and lock washer`,
  [FastenerType.SCREW]: $localize`screw`,
  [FastenerType.ROUND_SCREW]: $localize`round screw`,
  [FastenerType.MUSHROOM_SCREW]: $localize`mushroom screw`,
  [FastenerType.SCREW_WITH_WASHER]: $localize`screw with washer`,
  [FastenerType.COUNTERSUNK_HEAD_SELF_TAPPING_SCREW]: $localize`countersunk head self-tapping screw`,
};

export const data: Item[] = [
  {
    code: '09125-08015',
    threadSize: 'M8',
    length: 20,
    color: $localize`silver`,
    type: FastenerType.MUSHROOM_SCREW,
    screwdriver: 'PH',
    standard: 'JIS-B 1111',
  },
  {
    code: '01550-10163',
    length: 16,
    color: $localize`black`,
    type: FastenerType.FLANGE_HEX_BOLT,
    standard: 'JIS-B 1111',
  },
  {
    code: '09118-06106',
    threadSize: 'M6',
    length: 16,
    color: $localize`silver`,
    type: FastenerType.HEX_BOLT_WITH_WASHER_AND_LOCK_WASHER,
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
    color: $localize`silver`,
    type: FastenerType.FLANGE_HEX_BOLT,
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
    type: FastenerType.HEX_BOLT_WITH_WASHER,
    length: 30,
    keySize: 12,
  },
  {
    code: '01550-0830A',
    threadSize: 'M8',
    threadPitch: 1.25,
    length: 30,
    keySize: 12,
    color: $localize`silver`,
    type: FastenerType.FLANGE_HEX_BOLT,
    photo: '01550-0830A.webp',
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
    color: $localize`silver`,
    type: FastenerType.FLANGE_HEX_BOLT,
  },
  {
    code: '01550-0612B',
    replacements: ['01550-0612A'],
    threadSize: 'M6',
    length: 12,
    keySize: 10,
    color: $localize`black`,
    type: FastenerType.FLANGE_HEX_BOLT,
    photo: '01550-0612B.webp',
  },
  {
    code: '09136-06086',
    replacements: ['09136-06133'],
    threadSize: 'M6',
    length: 16,
    screwdriver: 'PH',
    type: FastenerType.SCREW_WITH_WASHER,
  },
  {
    code: '09136-06133',
    replacements: [],
    threadSize: 'M6',
    length: 16,
    keySize: 10,
    screwdriver: 'PH',
    color: $localize`silver`,
    type: FastenerType.HEX_BOLT_WITH_WASHER,
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
    color: $localize`silver`,
    type: FastenerType.FLANGE_HEX_BOLT,
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
    color: $localize`silver`,
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
    type: FastenerType.MUSHROOM_SCREW,
    threadSize: 'M5',
    screwdriver: 'PH',
    length: 16,
  },
  {
    code: '03241-0516A',
    type: FastenerType.MUSHROOM_SCREW,
    threadSize: 'M5',
    screwdriver: 'PH',
    photo: '03241-0516A.webp',
    length: 16,
    color: $localize`silver`,
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
    type: FastenerType.FLANGE_HEX_BOLT,
    threadSize: 'M6',
    keySize: 10,
    length: 16,
    threadPitch: 1.0,
  },
  {
    code: '01550-0616A',
    type: FastenerType.FLANGE_HEX_BOLT,
    threadSize: 'M6',
    keySize: 10,
    length: 16,
    threadPitch: 1.0,
    color: $localize`silver`,
  },
  {
    code: '01550-0616B',
    type: FastenerType.FLANGE_HEX_BOLT,
    threadSize: 'M6',
    keySize: 10,
    length: 16,
    threadPitch: 1.0,
    color: $localize`black`,
    photo: '01550-0616B.webp',
  },
  {
    code: '01500-06167',
  },
  {
    code: '03211-16163',
  },
  {
    code: '02142-06163',
    replacements: ['02142-0616A'],
    type: FastenerType.MUSHROOM_SCREW,
    screwdriver: 'PH',
  },
  {
    code: '02142-0616A',
  },
  {
    code: '09139-06036',
    type: FastenerType.MUSHROOM_SCREW,
    screwdriver: 'PH',
  },
  {
    code: '01550-08203',
    replacements: ['01550-0820A', '01550-0820B'],
    type: FastenerType.FLANGE_HEX_BOLT,
  },
  {
    code: '01550-0820A',
    color: $localize`silver`,
    type: FastenerType.FLANGE_HEX_BOLT,
  },
  {
    code: '01550-0820B',
    color: $localize`black`,
    type: FastenerType.FLANGE_HEX_BOLT,
  },
  {
    code: '01570-12353',
    replacements: ['01570-1235A'],
    type: FastenerType.HEX_BOLT_WITH_LOCK_WASHER,
  },
  {
    code: '01570-1235A',
  },
  {
    code: '09100-08253',
    type: FastenerType.HEX_BOLT,
  },
  {
    code: '09116-06098',
    type: FastenerType.HEX_BOLT_WITH_WASHER,
    replacements: ['09116-06098-XC0'],
  },
  {
    code: '09116-06098-XC0',
    type: FastenerType.HEX_BOLT_WITH_WASHER,
  },
  {
    code: '02112-35123',
    replacements: ['02112-3512A'],
    type: FastenerType.SCREW,
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
    type: FastenerType.SCREW,
    screwdriver: 'PH',
  },
  {
    code: '02112-76123',
    replacements: ['02112-7612B'],
  },
  {
    code: '09100-10168',
    type: FastenerType.HEX_BOLT,
    length: 37,
    threadSize: 'M10',
    keySize: 14,
    color: $localize`silver`,
    photo: '09100-10168.webp',
    threadPitch: 1.25,
  },
  {
    code: '09125-06022',
    type: FastenerType.MUSHROOM_SCREW,
    length: 16,
    threadSize: 'M6',
    screwdriver: 'PH',
    color: $localize`black`,
    photo: '09125-06022.webp',
    threadPitch: 1.0,
  },
  {
    code: '02112-06163',
    replacements: ['02112-0616B'],
    type: FastenerType.ROUND_SCREW,
    length: 16,
    threadSize: 'M6',
    screwdriver: 'PH',
    threadPitch: 1.0,
  },
  {
    code: '02112-0616A',
    type: FastenerType.ROUND_SCREW,
    length: 16,
    threadSize: 'M6',
    screwdriver: 'PH',
    color: $localize`silver`,
    threadPitch: 1.0,
  },
  {
    code: '02112-0616B',
    type: FastenerType.ROUND_SCREW,
    length: 16,
    threadSize: 'M6',
    screwdriver: 'PH',
    color: $localize`black`,
    photo: '02112-0616B.webp',
    threadPitch: 1.0,
  },
  {
    code: '03121-05163',
    replacements: ['03121-0516A'],
    type: FastenerType.COUNTERSUNK_HEAD_SELF_TAPPING_SCREW,
    length: 12,
    threadSize: 'M5',
    screwdriver: 'PH',
  },
  {
    code: '03121-0516A',
    type: FastenerType.COUNTERSUNK_HEAD_SELF_TAPPING_SCREW,
    length: 12,
    threadSize: 'M5',
    screwdriver: 'PH',
    color: $localize`silver`,
    photo: '03121-0516A.webp',
  },
];

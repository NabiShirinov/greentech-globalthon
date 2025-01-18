export const DATA_fields = [
  {
    id: 1,
    deviceID:11,
    img: require('../src/assets/images/trial/m1.png'),
    name: 'Wheat',
    phase: 'Harvest',
    size: '11 ha',
    sow_date: 'Oct 23',
    day: 25,
    region: 'Bilasuvar',
    country: 'Azerbaijan',
    description: 'asdasdasd',
    detail_datas: {
      labels: ['Nitrogen', 'Phosphorus', 'Potassium'],
      color: ['#9dd854', '#88bbff', '#f15c6e'],
      status: {
        percent: 80,
        name: 'Good',
        npk:[80,70,80]
      },
      history: [
        {name:'Jan',n: 2, p: 7, k: 4},
        {name:'Feb',n: 3, p: 4, k: 5},
        {name:'Mar',n: 5, p: 1, k: 4.5},
        {name:'Apr',n: 4, p: 4, k: 4.7},
        {name:'May',n: 6, p: 5, k: 6},
      ],
    },
  },
  {
    id: 2,
    deviceID:22,
    img: require('../src/assets/images/trial/m2.jpg'),
    name: 'Wheat',
    phase: 'Harvest',
    size: '22 ha',
    sow_date: 'Jan 19',
    day: 20,
    region: 'Agdam',
    country: 'Azerbaijan',
    description: 'asdasdasd',
    detail_datas: {
      labels: ['Nitrogen', 'Phosphorus', 'Potassium'],
      color: ['#9dd854', '#88bbff', '#f15c6e'],
      status: {
        percent: '95',
        name: 'Good',
        npk:[80,70,80]
      },
      history: [
        {name:'Jan',n: 3, p: 6, k: 2},
        {name:'Feb',n: 4, p: 7, k: 6},
        {name:'Mar',n: 5, p: 6, k: 4},
        {name:'Apr',n: 4, p: 8, k: 5},
        {name:'May',n: 4, p: 7, k: 6},
      ],
    },
  },
  {
    id: 3,
    deviceID:33,
    img: require('../src/assets/images/trial/m3.jpeg'),
    name: 'Wheat',
    phase: 'Harvest',
    size: '33 ha',
    sow_date: 'Nov 9',
    day: 3,
    region: 'Kurdamir',
    country: 'Azerbaijan',
    description: 'asdasdasd',
    detail_datas: {
      labels: ['Nitrogen', 'Phosphorus', 'Potassium'],
      color: ['#9dd854', '#88bbff', '#f15c6e'],
      status: {
        percent: '55',
        name: 'Not bad',
        npk:[80,70,80]
      },
      history: [
        {name:'Jan',n: 3, p: 6, k: 6},
        {name:'Feb',n: 3, p: 5, k: 4},
        {name:'Mar',n: 5, p: 7, k: 5},
        {name:'Apr',n: 4, p: 6, k: 4},
        {name:'May',n: 4, p: 7, k: 6},
      ],
    },
  },
];

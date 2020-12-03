export default {
  'zh-cn': {
    data: [
      {
        name: '淘鲜达',
        value: 980,
      }, {
        name: '饿了吗',
        value: 800,
      }, {
        name: '美团',
        value: 780,
      }, {
        name: '京东到家',
        value: 740,
      }, {
        name: 'POS',
        value: 600,
      }, {
        name: '未知',
        value: 520,
      }],
    TabcontentList: [{
      title: '整体用户分布',
      color_1: '#30B30E ',
      color_2: 'argb(48,179,14,0.7)',
      memberPnum: 100,
      memberbfb: 0.64,
      NomemberPnum: 100,
      Nomemberbfb: 0.36,
    }, {
      title: '会员分布',
      color_1: '#30B30E',
      color_2: '#BCC3CD',
      memberPnum: 100,
      memberbfb: 0.64,
      NomemberPnum: 100,
      Nomemberbfb: 0.36,
    }, {
      title: '非会员分布',
      color_1: '#D0D5DC',
      color_2: '#30B30E',
      memberPnum: 100,
      memberbfb: 0.64,
      NomemberPnum: 100,
      Nomemberbfb: 0.36,
    }],
    add_item: (obj, arr) => { // 添加一项
      Object.keys(obj).forEach((key, ind) => {
        // eslint-disable-next-line no-param-reassign
        obj[key].color = arr[ind]
      })
    },
    formatNum: (str) => { // 转金钱格式
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (`${next},`)) + prev
      })
    },
  },
};

import React, { useEffect, useRef, useState } from 'react';
import { Tab } from '@alife/ascp-design';
import VennDiagram from '@ali/vmax-vennDiagram';
import {
  TabcontentList,
  add_item,
  formatNum,
} from './locale';
// import './utils/disbale';
import './index.less';
import mock from './locale/mock.json';
import Chart from './components/Chart'
import body_Chart from './components/tabPage'

const colorArr = ['#4ABCFC', '#C98C65', '#FF781E']
const cadata = [
  { sets: ['A'], size: 33, color: '#FF781E', label: '商家导入会员' },
  { sets: ['B'], size: 51, color: '#4ABCFC', label: '渠道用户' },
  { sets: ['A', 'B'], size: 8, color: '#C98C65', label: '交集重合用户' },
];
const headCulArr = [
  { title: '渠道用户透视',
    type: 'cul',
    arr: [
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
      }] },
  { title: '渠道用户&商家会员透视',
    type: 'cul',
    arr: [
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
      }] },
];

export default function Component() {
  // 数据源
  const vnn = useRef(null) // venn图
  const [totalUserAsset, settotalUserAsset] = useState(null) // 用户数字化总资产
  const [headCulData, setheadCulData] = useState(null) // 头部柱状图数据
  const [contentCulData, setcontentCulData] = useState(null) // tab柱状图数据
  new Promise((res) => {
    setTimeout(() => {
      res(mock)
    }, 100)
  }).then(res => {
    add_item(res.model.totalUserAsset.distribution, colorArr) // 头部柱状图数据
    settotalUserAsset(res.model.totalUserAsset) // 头部柱状图数据
    setheadCulData(headCulArr) // 头部柱状图数据
    setcontentCulData(TabcontentList) // tab柱状图数据
  })
  function randerEle(ele) {
    // eslint-disable-next-line no-new
    new VennDiagram(ele, cadata, {
      width: 263,
      height: 185,
      showLabel: false,
      colorScheme: cadata.map(val => val.color),
    });
  }
  useEffect(() => {
    randerEle(vnn.current);
  }, []);
  return (
    <div className="warp" >
      <div className="SourcesOfAssets">
        <h4> 用户资产来源分布 </h4>
        <div className="assets_tit" >
          {totalUserAsset ? totalUserAsset.title : ''}
          <b>{totalUserAsset ? formatNum(totalUserAsset.count) : ''}</b> <i> 人 </i>
        </div>
        <div className="assBody" >
          <div className="Left_vnn" >
            <div className="vnn_content">
              <div className="vnn" ref={vnn} > </div>
              <ul>
                {totalUserAsset ? Object.keys(totalUserAsset.distribution).map((_ass) => {
                  return (
                    <li>
                      <p>
                        <i style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          marginRight: '8px',
                          background: totalUserAsset.distribution[_ass].color,
                        }}
                        />
                        {totalUserAsset.distribution[_ass].title}
                      </p>
                      <content> {formatNum(totalUserAsset.distribution[_ass].count)} </content>
                      <p> 占比 {totalUserAsset.distribution[_ass].precent} </p>
                    </li>
                  )
                }) : ''}
              </ul>
            </div>
          </div>
          <div className="top_Chart" >
            {headCulData ? headCulData.map(culData => {
              return Chart(culData.type, culData.arr, culData.title)
            }) : ''}
          </div>
        </div>
        <div className="assfoot">
          <span className="firstText">足差啊部分为i的比较多吧哈就不叫阿服务</span><span className="colorText">挖大环境温度</span>
        </div>
      </div>
      <div className="operate" >
        <Tab navStyle={{ border: 0 }}>
          {contentCulData ? contentCulData.map((tab, ind) => {
            // eslint-disable-next-line react/no-array-index-key
            return (<Tab.Item title={tab.title} key={ind}>{body_Chart(tab)}</Tab.Item>)
          }) : ''}
        </Tab>
      </div>
    </div>
  );
}

/*
 * @Author: lpldplws
 * @Date: 2020-11-24 21:16:52
 * @Description: 禁止右键菜单，文字选择，复制及剪切
 * @LastEditors: lpldplws
 * @LastEditTime: 2020-11-24 22:16:47
 * @FilePath: /vendor-sass-jkb-crowd-portrait/src/utils/disable.js
 */

const DISABLE_EVENT = [{
  eventName: 'oncontextmenu',
  text: '禁止右键',
}, {
  eventName: 'onselectstart',
  text: '禁止选择文字',
}, {
  eventName: 'oncopy',
  text: '禁止复制',
}, {
  eventName: 'oncut',
  text: '禁止剪切',
}];

const error = (event, text) => {
  // eslint-disable-next-line no-console
  console.error(event, text);
  event.preventDefault();
};

DISABLE_EVENT.forEach((event) => {
  document.body[event.eventName] = e => {
    error(e, event.text);
  };
})

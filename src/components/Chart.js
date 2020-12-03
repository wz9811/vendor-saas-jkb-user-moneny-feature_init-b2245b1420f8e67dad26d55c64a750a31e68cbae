import { ColumnChart, PieChart } from 'bizcharts';

export default (col, data, title) => { // Chart
  // console.log(data);
  if (col === 'sector') {
    return (<PieChart
      data={data}
      radius={0.8}
      title={{
        visible: true,
        text: title,
        style: {
          fontFamily: 'PingFangSC-Regular',
          fill: '#666666',
        },
      }}
      legend={{
        visible: true,
        position: 'bottom-center',
      }}
      label={{
        visible: true,
        type: 'inner',
      }}
      meta={{
        name: {
          alias: '名称',
          range: [0, 0],
        },
        value: {
          alias: '人数',
          formatter: (v) => { return `${v}个` },
        },
      }}
      colorField="color"
      xField="name"
      yField="value"
      angleField="value"
    />)
  }
  return (
    <ColumnChart
      data={data}
      color="#46C800"
      title={{
        visible: true,
        text: title,
        style: {
          fontFamily: 'PingFangSC-Regular',
          fill: '#666666',
        },
      }}
      xAxis={{
        visible: true,
        label: {
          visible: true,
          autoRotate: false,
          autoHide: false,
          fontSize: '12px',
        },
        title: {
          visible: false,
        },
      }}
      yAxis={{
        title: {
          visible: false,
        },
      }}
      padding="auto"
      xField="name"
      yField="value"
    />
  );
}

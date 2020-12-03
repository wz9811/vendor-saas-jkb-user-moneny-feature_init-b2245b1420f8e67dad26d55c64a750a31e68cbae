import Chart from './Chart';
import { data } from '../locale';

export default function body_Chart(obj) {
  const {
    color_1,
    color_2,
    memberbfb,
    memberPnum,
    Nomemberbfb,
    NomemberPnum,
  } = obj
  return (
    <div className="body_Centent" >
      <h5> 整体用户分布 </h5>
      <div id="venn" />
      <div className="progressBar" style={{ width: '1210px', height: '52px', overflow: 'hiddle' }} >
        <div
          className="left"
          style={{
            width: `${memberbfb * 100}%`,
            height: '52px',
            background: color_1,
          }}
        >会员：{memberPnum}（{`${memberbfb * 100}%`}）
        </div>
        <div
          className="right"
          style={{
            width: `${Nomemberbfb * 100}%`,
            height: '52px',
            background: color_2,
          }}
        >非会员：{NomemberPnum}（{`${memberbfb * 100}%`}）
        </div>
      </div>
      <div className="body_Chart" >
        <div>
          <div> {Chart('', data, '可视化图标')} </div>
          <div>{Chart('', data, '可视化图标')}</div>
        </div>
        <div>
          <div>{Chart('', data, '可视化图标')}</div>
          <div>{Chart('sector', data, '可视化图123标')}</div>
        </div>
      </div>
    </div>
  )
}

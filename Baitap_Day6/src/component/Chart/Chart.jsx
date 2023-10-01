import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // tạo hàm totalMaximum để gán kết quả hàm Math.max trên mảng dataPointValues
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.labels}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

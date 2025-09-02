
import useChartComponent from "@/hooks/useChartComponent";

const ChartComponent = () => {

  const { chartContainerRef } = useChartComponent();

  return (
    <div
      ref={chartContainerRef}
      className="d-flex justify-content-between"
    ></div>
  );
};

export default ChartComponent;

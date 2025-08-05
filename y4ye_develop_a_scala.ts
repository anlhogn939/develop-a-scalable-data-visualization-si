TypeScript
interface IData {
  id: number;
  label: string;
  value: number;
}

interface IConfig {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  scales: {
    x: string;
    y: string;
  };
  data: IData[];
  simulationSpeed: number;
}

interface IVisualization {
  id: number;
  type: 'bar' | 'line' | 'scatter';
  data: IData[];
  xScale: string;
  yScale: string;
  color: string;
}

class DataVisualizationSimulator {
  private config: IConfig;
  private visualizations: IVisualization[];

  constructor(config: IConfig) {
    this.config = config;
    this.visualizations = [];
  }

  addVisualization(visualization: IVisualization) {
    this.visualizations.push(visualization);
  }

  startSimulation() {
    // TO DO: implement simulation logic
  }

  getVisualization(id: number) {
    return this.visualizations.find((v) => v.id === id);
  }
}

const config: IConfig = {
  width: 800,
  height: 600,
  margin: {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40,
  },
  scales: {
    x: 'linear',
    y: 'log',
  },
  data: [
    { id: 1, label: 'A', value: 10 },
    { id: 2, label: 'B', value: 20 },
    { id: 3, label: 'C', value: 30 },
  ],
  simulationSpeed: 1000,
};

const simulator = new DataVisualizationSimulator(config);

simulator.addVisualization({
  id: 1,
  type: 'bar',
  data: config.data,
  xScale: 'x',
  yScale: 'y',
  color: 'steelblue',
});

simulator.startSimulation();
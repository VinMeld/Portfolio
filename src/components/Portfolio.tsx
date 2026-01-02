import PortfolioItem from './PortfolioItem';
import { portfolio } from '../../public/index.ts';

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[400px]">
        {portfolio.map(project => (
          <PortfolioItem
            key={project.name}
            {...project}
          />
        ))}
      </div>
    </div>

  )
}

export default Portfolio
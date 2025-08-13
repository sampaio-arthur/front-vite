import Layout from '../components/layout/Layout';
import StatsCard from '../components/dashboard/StatsCard';

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard-grid">
        <StatsCard title="Users" value="0" />
        <StatsCard title="Sales" value="$0" />
        <StatsCard title="Performance" value="N/A" />
      </div>
    </Layout>
  );
}

import CommunityStat from './CommunityStat.jsx';

export default function CommunityBanner({ stats }) {
  return (
    <section className="community">
      <div>
        <h2>
          Now you're part of <span className="c-blue">India's</span>
          <br />
          <span className="c-green">Leading</span> seller community
        </h2>
        <p>A network built to help your business grow.</p>
      </div>
      <div className="community__stats">
        {stats.map((s) => (
          <CommunityStat key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}

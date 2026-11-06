import { Play } from 'lucide-react';

export default function VideoCard({ title, accent, highlight, onPlay }) {
  const parts = title.split(highlight);
  return (
    <div
      className="video"
      style={{ background: `linear-gradient(135deg, #0f6b4a 0%, ${accent} 120%)` }}
    >
      <div className="video__brand">Learning</div>
      <h4 className="video__title">
        {parts[0]}
        <em>{highlight}</em>
        {parts[1]}
      </h4>
      <button className="video__play" aria-label={`Play: ${title}`} onClick={onPlay}>
        <Play size={16} fill="currentColor" />
      </button>
    </div>
  );
}

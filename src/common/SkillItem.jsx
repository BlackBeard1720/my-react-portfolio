function SkillItem({ src, skill }) {
  return (
    <div className="pill">
      <img src={src} alt={`${skill} logo`} />
      <p>{skill}</p>
    </div>
  );
}

export default SkillItem;
